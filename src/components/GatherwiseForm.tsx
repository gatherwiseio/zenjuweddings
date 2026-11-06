"use client";

import { useEffect, useRef } from "react";

// Zenju's inquiry form, built in Gatherwise and embedded here (Contact page and the pop-up). Its
// look comes from `gatherwise/inquiry-form.css`, pasted into the form's CSS in Gatherwise. The form
// tells the page its height (an "embed_resize" message), so the frame grows to fit and never
// scrolls inside itself; until then it holds a typical height so the page doesn't jump.
const FORM_URL = "https://app.gatherwise.io/version-live/form/1775284095553x262054864607984770?embed=yes";
const ORIGIN = new URL(FORM_URL).origin;

export function GatherwiseForm() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const frame = frameRef.current;
      // Only this frame's own messages, from Gatherwise.
      if (e.origin !== ORIGIN || !frame || e.source !== frame.contentWindow) return;
      if (e.data?.type === "embed_resize" && Number(e.data.height) > 0) {
        frame.style.height = `${e.data.height}px`;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={frameRef}
      src={FORM_URL}
      title="Inquiry form"
      scrolling="no"
      className="block h-(--inquiry-form-h) w-full border-0"
    />
  );
}
