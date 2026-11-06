"use client";

import { useEffect, useRef, useState } from "react";

// Zenju's inquiry form, built in Gatherwise and embedded here (Contact page and the pop-up). Its
// look comes from `gatherwise/inquiry-form.css`, pasted into the form's CSS in Gatherwise. The form
// tells the page its height (an "embed_resize" message), so the frame grows to fit and never
// scrolls inside itself.
//
// Gatherwise builds the form up in steps (plain fields first, then its styles and questions), so
// it stays hidden behind a small loader until its height has stopped changing, then fades in.
// It re-sends the same height about once a second, so only a *change* restarts the wait. While
// loading, the box keeps one steady size (so the loader and the pop-up don't jump around); the
// form's real height is applied once, as it fades in, and live after that.
const FORM_URL = "https://app.gatherwise.io/version-live/form/1775284095553x262054864607984770?embed=yes";
const ORIGIN = new URL(FORM_URL).origin;
const SETTLE_MS = 1200; // no height change for this long: the form is finished
const GIVE_UP_MS = 10000; // show it anyway after this, whatever state it's in

export function GatherwiseForm() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);
  const readyRef = useRef(false);

  useEffect(() => {
    let height = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;
    const reveal = () => {
      readyRef.current = true;
      if (height && frameRef.current) frameRef.current.style.height = `${height}px`;
      setReady(true);
    };
    const giveUp = setTimeout(reveal, GIVE_UP_MS);
    const onMessage = (e: MessageEvent) => {
      const frame = frameRef.current;
      // Only this frame's own messages, from Gatherwise.
      if (e.origin !== ORIGIN || !frame || e.source !== frame.contentWindow) return;
      const next = Number(e.data?.type === "embed_resize" && e.data.height);
      if (!(next > 0) || next === height) return;
      height = next;
      if (readyRef.current) {
        frame.style.height = `${next}px`;
        return;
      }
      clearTimeout(settle);
      settle = setTimeout(reveal, SETTLE_MS);
    };
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      clearTimeout(settle);
      clearTimeout(giveUp);
    };
  }, []);

  return (
    <div className="relative bg-cream">
      <iframe
        ref={frameRef}
        src={FORM_URL}
        title="Inquiry form"
        scrolling="no"
        aria-hidden={!ready}
        tabIndex={ready ? undefined : -1}
        className={`block h-(--inquiry-form-h) w-full border-0 transition-[opacity,height] duration-500 ease-out-expo ${ready ? "opacity-100" : "opacity-0"}`}
      />
      {!ready && (
        <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span
            aria-hidden="true"
            className="h-7 w-7 rounded-full border border-gold/25 border-t-gold motion-safe:animate-spin"
          />
          <span className="label text-xs font-medium text-ink/70">Loading form…</span>
        </div>
      )}
    </div>
  );
}
