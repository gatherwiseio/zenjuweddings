"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { buttonClass } from "@/components/Button";
import { lockScroll } from "@/components/motion/SmoothScroll";
import type { Review } from "@/content/site";

// Equal-height testimonial cards: 3 across on desktop, 2 on tablets. On phones, one full-width
// card at a time (swipe, or the previous/next buttons with a "2 / 6" counter), so cards never get
// narrow. Every card clamps its review to the same number of lines, so rows line up; "Read full
// review" opens the whole text in a dialog. All text stays in the HTML for SEO.
export function Testimonials({ reviews, layout = "grid" }: { reviews: Review[]; layout?: "grid" | "marquee" }) {
  const [open, setOpen] = useState<number | null>(null);
  const [clamped, setClamped] = useState<boolean[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const textRefs = useRef<(HTMLQuoteElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const [slide, setSlide] = useState(0);

  // Which reviews are cut short by the clamp (and so get "Read full review").
  useEffect(() => {
    const measure = () => setClamped(textRefs.current.map((el) => !!el && el.scrollHeight > el.clientHeight + 1));
    const observer = new ResizeObserver(measure);
    textRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const show = (i: number) => {
    setOpen(i);
    lockScroll(true);
    dialogRef.current?.showModal();
  };
  const current = open === null ? null : reviews[open];

  // Phone carousel: which card is in view, and moving to the previous/next one.
  const onScroll = () => {
    const list = listRef.current;
    if (list) setSlide(Math.round(list.scrollLeft / list.clientWidth));
  };
  const go = (step: number) => {
    const list = listRef.current;
    const next = Math.min(reviews.length - 1, Math.max(0, slide + step));
    const card = list?.children[next] as HTMLElement | undefined;
    if (list && card) list.scrollTo({ left: card.offsetLeft - list.offsetLeft, behavior: "smooth" });
  };

  const dialog = (
    <dialog
      data-lenis-prevent
      ref={dialogRef}
      onClose={() => {
        setOpen(null);
        lockScroll(false);
      }}
      onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      aria-labelledby="testimonial-dialog-title"
      className="m-auto max-h-(--dialog-max-h) w-(--dialog-w) overflow-y-auto overscroll-contain bg-white p-0 text-ink backdrop:bg-ink/70"
    >
      {current && (
        <div className="flex flex-col gap-5 p-6 sm:gap-6 sm:p-8 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <Stars />
            <button type="button" onClick={() => dialogRef.current?.close()} className={buttonClass("secondary")} autoFocus>
              Close
            </button>
          </div>
          <h3 id="testimonial-dialog-title" className="text-2xl leading-heading font-extralight sm:text-h3">
            {current.title}
          </h3>
          <blockquote className="text-body leading-prose-loose text-ink/85">{current.text}</blockquote>
          <p className="flex items-center gap-3.5 border-t border-fog pt-6">
            <Avatar review={current} />
            <span className="label text-xs font-semibold">{current.name}</span>
          </p>
        </div>
      )}
    </dialog>
  );

  // One card's contents, shared by the grid and the marquee. `copy` marks the marquee's repeats,
  // which don't measure the clamp and aren't reachable by keyboard.
  const cardBody = (review: Review, i: number, copy = false) => (
    <>
      <Stars />
      <h3 className="text-xl leading-heading font-light md:line-clamp-2">{review.title}</h3>
      <blockquote
        ref={(el) => {
          if (!copy) textRefs.current[i] = el;
        }}
        className="line-clamp-5 text-meta leading-prose text-ink/80"
      >
        {review.text}
      </blockquote>
      {clamped[i] && (
        <div>
          <button type="button" onClick={() => show(i)} className={buttonClass("link")}>
            Read full review
          </button>
        </div>
      )}
      <p className="mt-auto flex items-center gap-3.5 border-t border-fog pt-5">
        <Avatar review={review} />
        <span className="label text-xs font-semibold">{review.name}</span>
      </p>
    </>
  );

  if (layout === "marquee") {
    return (
      <>
        <Marquee>
          {[0, 1, 2].flatMap((set) =>
            reviews.map((review, i) => (
              <li
                key={`${set}-${review.name}`}
                aria-hidden={set !== 1 ? "true" : undefined}
                inert={set !== 1}
                className="flex w-(--review-card-w) shrink-0 flex-col gap-5 bg-white p-6 sm:p-8"
              >
                {cardBody(review, i, set !== 1)}
              </li>
            )),
          )}
        </Marquee>
        {dialog}
      </>
    );
  }

  return (
    <>
      <ul
        ref={listRef}
        onScroll={onScroll}
        aria-label="Testimonials"
        className="scrollbar-none flex snap-x snap-mandatory gap-4 self-stretch overflow-x-auto md:grid md:auto-rows-fr md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-3"
      >
        {reviews.map((review, i) => (
          <li
            key={review.name}
            className={`reveal-up ${["", "stagger-1", "stagger-2"][i % 3]} flex w-full shrink-0 snap-start flex-col gap-5 bg-white p-6 sm:p-8 md:w-auto md:p-9`}
          >
            {cardBody(review, i)}
          </li>
        ))}
      </ul>

      {/* Phone carousel controls. */}
      <div className="-mt-6 flex items-center gap-5 md:hidden">
        <button type="button" onClick={() => go(-1)} disabled={slide === 0} aria-label="Previous testimonial" className={roundButton}>
          <Chevron flip />
        </button>
        <p className="label min-w-12 text-center text-xs tabular-nums" aria-live="polite">
          {slide + 1} / {reviews.length}
        </p>
        <button type="button" onClick={() => go(1)} disabled={slide === reviews.length - 1} aria-label="Next testimonial" className={roundButton}>
          <Chevron />
        </button>
      </div>

      {dialog}
    </>
  );
}

const roundButton =
  "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-cream disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink";

function Chevron({ flip = false }: { flip?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-4 w-4 fill-none stroke-current ${flip ? "rotate-180" : ""}`}>
      <path d="M6 3l5 5-5 5" strokeWidth="1.25" />
    </svg>
  );
}

function Stars() {
  return (
    <p role="img" className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </p>
  );
}

function Avatar({ review }: { review: Review }) {
  return review.photo ? (
    <Image src={review.photo} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full object-cover" />
  ) : (
    <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-muted text-lg text-gold-deep">
      {review.name[0]}
    </span>
  );
}

// Testimonials as an endless ribbon (Contact page): three copies of the cards side by side, edge to
// edge, drifting slowly left. It pauses while hovered or focused; you can drag, swipe or scroll it
// either way, or step with the arrows, and it wraps seamlessly. Still for reduced-motion visitors.
function Marquee({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const paused = useRef(false);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const glide = useRef<{ from: number; to: number; start: number } | null>(null); // arrow steps

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const setWidth = () => track.scrollWidth / 3;
    // Keep the middle copy in view: jump by one copy's width when you drift into either end.
    const wrap = () => {
      const w = setWidth();
      const shift = track.scrollLeft >= w * 2 ? -w : track.scrollLeft <= 0 ? w : 0;
      if (!shift) return;
      track.scrollLeft += shift;
      if (glide.current) {
        glide.current.from += shift;
        glide.current.to += shift;
      }
    };
    track.scrollLeft = setWidth();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const g = glide.current;
      if (g) {
        const t = Math.min((now - g.start) / 600, 1);
        track.scrollLeft = g.from + (g.to - g.from) * (1 - (1 - t) ** 3);
        if (t === 1) glide.current = null;
      } else if (!still && !paused.current && !drag.current) {
        track.scrollLeft += dt * 0.03;
      }
      wrap();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const step = (dir: number) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const from = glide.current?.to ?? track.scrollLeft;
    glide.current = { from: track.scrollLeft, to: from + dir * (card.offsetWidth + 16), start: performance.now() };
  };

  return (
    <div className="flex flex-col items-center gap-8 self-stretch">
      <ul
        ref={trackRef}
        aria-label="Testimonials"
        data-lenis-prevent-wheel
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onFocus={() => (paused.current = true)}
        onBlur={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        onTouchEnd={() => (paused.current = false)}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !trackRef.current) return;
          drag.current = { x: e.clientX, left: trackRef.current.scrollLeft };
        }}
        onPointerMove={(e) => {
          if (drag.current && trackRef.current) trackRef.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerLeave={() => (drag.current = null)}
        className="scrollbar-none flex w-screen max-w-none shrink-0 cursor-grab items-stretch gap-4 overflow-x-auto px-6 select-none active:cursor-grabbing md:px-14"
      >
        {children}
      </ul>
      <div className="flex gap-4">
        <button type="button" onClick={() => step(-1)} aria-label="Previous testimonials" className={roundButton}>
          <Chevron flip />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next testimonials" className={roundButton}>
          <Chevron />
        </button>
      </div>
    </div>
  );
}
