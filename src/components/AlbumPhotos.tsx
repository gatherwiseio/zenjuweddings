"use client";

import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { lockScroll } from "@/components/motion/SmoothScroll";
import type { GalleryPhoto } from "@/content/gallery";

// An album's photos in justified rows (each row full width at one shared height, every photo at
// its own shape, grouped in `justify` below), and a lightbox: click a photo to see it large, then step left and right with the
// arrows, the keyboard or a swipe. Escape or the X closes it. The page's one authored motion: the
// photo grows out of its spot in the album into the viewer, and shrinks back into place on close
// (a plain fade under reduced motion).
export function AlbumPhotos({ photos }: { photos: GalleryPhoto[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const from = useRef<DOMRect | null>(null); // the clicked photo, for the opening zoom
  const closing = useRef(false);
  // The album's already-loaded copy of the opened photo, shown until the large one arrives.
  const [thumb, setThumb] = useState<{ i: number; src: string } | null>(null);

  const open = (i: number, el: HTMLElement) => {
    from.current = el.getBoundingClientRect();
    const src = el.querySelector("img")?.currentSrc;
    setThumb(src ? { i, src } : null);
    setIndex(i);
    lockScroll(true);
    dialogRef.current?.showModal();
  };

  // Where photo i actually sits inside the stage (it's contained, so letterboxed one way).
  const shown = useCallback(
    (i: number) => {
      const s = stageRef.current!.getBoundingClientRect();
      const ratio = photos[i].width / photos[i].height;
      const w = Math.min(s.width, s.height * ratio);
      const h = w / ratio;
      return new DOMRect(s.left + (s.width - w) / 2, s.top + (s.height - h) / 2, w, h);
    },
    [photos],
  );

  useLayoutEffect(() => {
    const rect = from.current;
    const dialog = dialogRef.current;
    from.current = null;
    if (!rect || index === null || !dialog || !stageRef.current) return;
    dialog.animate({ backgroundColor: ["transparent", getComputedStyle(dialog).backgroundColor] }, { duration: 300, easing: "ease-out" });
    dialog.querySelectorAll("[data-chrome]").forEach((el) => el.animate({ opacity: [0, 1] }, { duration: 250, delay: 200, fill: "backwards" }));
    if (reducedMotion()) return;
    stageRef.current.animate({ transform: [flip(rect, shown(index)), "none"] }, { duration: 550, easing: "cubic-bezier(0.16, 1, 0.3, 1)" });
  }, [index, shown]);

  // Shrinks the photo back into its tile (if that tile is on screen), then closes.
  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog || closing.current) return;
    const tile = index === null ? undefined : [...document.querySelectorAll<HTMLElement>(`[data-photo="${index}"]`)].find((el) => el.offsetParent);
    const to = tile?.getBoundingClientRect();
    const finish = () => {
      dialog.close();
      dialog.getAnimations({ subtree: true }).forEach((a) => a.cancel());
      closing.current = false;
    };
    closing.current = true;
    const fade = dialog.animate({ backgroundColor: [getComputedStyle(dialog).backgroundColor, "transparent"] }, { duration: 300, easing: "ease-in", fill: "forwards" });
    dialog.querySelectorAll("[data-chrome]").forEach((el) => el.animate({ opacity: [1, 0] }, { duration: 150, fill: "forwards" }));
    const onScreen = to && to.bottom > 0 && to.top < window.innerHeight;
    if (!onScreen || reducedMotion() || index === null || !stageRef.current) {
      stageRef.current?.animate({ opacity: [1, 0] }, { duration: 250, fill: "forwards" });
      fade.finished.then(finish);
      return;
    }
    stageRef.current.animate({ transform: ["none", flip(to, shown(index))] }, { duration: 350, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }).finished.then(finish);
  };
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index === null ? null : photos[index];
  const navButton =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25";

  return (
    <>
      {/* Two groupings: wider rows from 768px, about two photos per row on phones. */}
      <Rows photos={photos} rows={justify(photos, 3.6)} onOpen={open} className="hidden md:flex" />
      <Rows photos={photos} rows={justify(photos, 1.6)} onOpen={open} className="flex md:hidden" />

      <dialog
        ref={dialogRef}
        data-lenis-prevent
        aria-label="Photo viewer"
        onClose={() => {
          setIndex(null);
          lockScroll(false);
        }}
        onCancel={(e) => {
          e.preventDefault(); // Escape: close with the animation
          close();
        }}
        onClick={(e) => e.target === dialogRef.current && close()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none overscroll-contain bg-ink p-0 text-white backdrop:bg-transparent"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-5">
              <p data-chrome className="label text-xs font-medium text-white/70 tabular-nums" aria-live="polite">
                {index! + 1} / {photos.length}
              </p>
              <button
                type="button"
                data-chrome
                onClick={close}
                aria-label="Close"
                autoFocus
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <XIcon aria-hidden="true" size={24} weight="light" />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 px-4 pb-6 md:px-24 md:pb-10">
              <div
                ref={stageRef}
                className="relative h-full w-full bg-contain bg-center bg-no-repeat"
                style={thumb?.i === index ? { backgroundImage: `url(${thumb.src})` } : undefined}
              >
                <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              </div>
              <button type="button" onClick={() => step(-1)} data-chrome aria-label="Previous photo" className={`${navButton} left-2 md:left-6`}>
                <CaretLeftIcon aria-hidden="true" size={24} />
              </button>
              <button type="button" onClick={() => step(1)} data-chrome aria-label="Next photo" className={`${navButton} right-2 md:right-6`}>
                <CaretRightIcon aria-hidden="true" size={24} />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

// Splits the photos (kept in order) into balanced rows. `rowAspect` is a row's target width ÷
// height; the album gets round(total aspect ÷ rowAspect) rows, and the split keeps every row's
// summed aspect ratio as close to the average as possible (linear partition), so each row fills
// the width at a similar height and no photo is left stranded on a short last row.
function justify(photos: GalleryPhoto[], rowAspect: number) {
  const ar = photos.map((p) => p.width / p.height);
  const n = ar.length;
  const total = ar.reduce((a, b) => a + b, 0);
  const k = Math.max(1, Math.min(n, Math.round(total / rowAspect)));
  const target = total / k;
  const prefix = [0];
  ar.forEach((a, i) => prefix.push(prefix[i] + a));
  const cost = (i: number, j: number) => (prefix[j] - prefix[i] - target) ** 2;
  // best[r][j]: lowest cost of putting the first j photos into r rows; cut[r][j]: where the last row starts.
  const best = Array.from({ length: k + 1 }, () => Array<number>(n + 1).fill(Infinity));
  const cut = Array.from({ length: k + 1 }, () => Array<number>(n + 1).fill(0));
  best[0][0] = 0;
  for (let r = 1; r <= k; r++) {
    for (let j = r; j <= n; j++) {
      for (let i = r - 1; i < j; i++) {
        const c = best[r - 1][i] + cost(i, j);
        if (c < best[r][j]) {
          best[r][j] = c;
          cut[r][j] = i;
        }
      }
    }
  }
  const rows: { items: number[] }[] = [];
  for (let r = k, j = n; r > 0; r--) {
    const i = cut[r][j];
    rows.unshift({ items: Array.from({ length: j - i }, (_, x) => i + x) });
    j = i;
  }
  return rows;
}

function Rows({
  photos,
  rows,
  onOpen,
  className,
}: {
  photos: GalleryPhoto[];
  rows: ReturnType<typeof justify>;
  onOpen: (i: number, el: HTMLElement) => void;
  className: string;
}) {
  return (
    <div className={`flex-col gap-2 md:gap-3 ${className}`}>
      {rows.map((row) => (
        <ul key={row.items[0]} className="flex gap-2 md:gap-3">
          {row.items.map((i) => {
            const photo = photos[i];
            return (
              <li key={photo.src} className="min-w-0" style={{ flex: `${photo.width / photo.height} 1 0` }}>
                <button
                  type="button"
                  data-photo={i}
                  onClick={(e) => onOpen(i, e.currentTarget)}
                  aria-label={`Open photo ${i + 1} of ${photos.length}`}
                  className="group relative block w-full cursor-zoom-in overflow-hidden bg-mist"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 60vw"
                    priority={i < 4}
                    className="object-cover transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-103"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// The transform that puts a photo shown at `to` over the rectangle `from` (same shape, so one scale).
const flip = (from: DOMRect, to: DOMRect) =>
  `translate(${from.left + from.width / 2 - (to.left + to.width / 2)}px, ${from.top + from.height / 2 - (to.top + to.height / 2)}px) scale(${from.width / to.width})`;
