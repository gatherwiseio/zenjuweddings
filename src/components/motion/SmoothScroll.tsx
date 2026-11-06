"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/** Pause or resume page scrolling, e.g. while a pop-up or the menu is open. */
export function lockScroll(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  window.dispatchEvent(new CustomEvent("scroll-lock", { detail: locked }));
}

/**
 * Site-wide smooth scrolling (Lenis), driven by GSAP's ticker so scroll-linked animations stay
 * in sync. Same setup as the other Gatherwise sites. Skipped entirely for visitors who prefer
 * reduced motion, who keep the browser's own scrolling.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Anchor links land just below the pinned header.
    const lenis = new Lenis({ duration: 1.15, anchors: { offset: -96 } });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onLock = (event: Event) => ((event as CustomEvent<boolean>).detail ? lenis.stop() : lenis.start());
    window.addEventListener("scroll-lock", onLock);

    return () => {
      window.removeEventListener("scroll-lock", onLock);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
