"use client";

import { useEffect } from "react";
import { jumpBy, scrollToElement } from "@/components/motion/SmoothScroll";

// Services page: opening a package always lands you at the top of that package. When another
// package is already open, the swap happens instantly (no animation) so the page doesn't shift
// while the new one scrolls into place. Also opens the package named in the URL (/services#kuulei,
// from the homepage "Learn more" buttons) on load and whenever the hash changes.
export function PackageScroll() {
  useEffect(() => {
    const open = (el: HTMLDetailsElement) => {
      const current = el.parentElement?.querySelector<HTMLDetailsElement>("details.package[open]");
      // Switching rows: close the old one and open the new one without animating, so the page
      // reaches its final height at once and the scroll below lands on the right spot.
      // The clicked row is held where it was on screen (closing a row above it would otherwise
      // pull the page up under you), then glides to the top.
      const instant = current && current !== el ? [current, el] : [];
      const before = el.getBoundingClientRect().top;
      instant.forEach((d) => (d.dataset.instant = ""));
      if (current && current !== el) current.open = false;
      el.open = true;
      jumpBy(el.getBoundingClientRect().top - before); // also applies the new layout right away
      requestAnimationFrame(() => {
        scrollToElement(el);
        instant.forEach((d) => delete d.dataset.instant);
      });
    };

    const onClick = (event: MouseEvent) => {
      const summary = (event.target as Element).closest("details.package > summary");
      const el = summary?.parentElement;
      if (!(el instanceof HTMLDetailsElement) || el.open) return; // closing: leave it to the browser
      event.preventDefault();
      open(el);
    };

    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (el instanceof HTMLDetailsElement && el.classList.contains("package")) open(el);
    };

    fromHash();
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", fromHash);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", fromHash);
    };
  }, []);
  return null;
}
