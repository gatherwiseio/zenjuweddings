"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

let instance: Lenis | null = null;

/** Jump the page by `dy` pixels with no animation (e.g. to cancel a layout shift). */
export function jumpBy(dy: number) {
  if (instance) {
    instance.resize();
    instance.scrollTo(window.scrollY + dy, { immediate: true, force: true });
  } else {
    window.scrollTo({ top: window.scrollY + dy, behavior: "instant" });
  }
}

/** Scroll so the element's top sits at its CSS scroll-margin (e.g. just under the pinned header). */
export function scrollToElement(el: HTMLElement, { immediate = false } = {}) {
  if (instance) {
    instance.resize(); // the page may have just changed height (a row opened or closed)
    instance.scrollTo(el, { immediate, force: true }); // Lenis applies the element's scroll-margin itself
  } else {
    const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - margin;
    window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
  }
}

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
  const pathname = usePathname();
  const firstPath = useRef(true);

  // Moving to another page (e.g. one gallery album to the next) always starts at the top. Lenis
  // keeps its own scroll position across client-side navigations, so reset it as well as the
  // window. Links to a section (/services#kuulei) are left to land on that section.
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    if (window.location.hash) return;
    if (instance) instance.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Anchor links land just below the pinned header.
    const lenis = new Lenis({ duration: 1.15, anchors: { offset: -96 } });
    instance = lenis;
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
      instance = null;
    };
  }, []);

  return null;
}
