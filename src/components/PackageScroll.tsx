"use client";

import { useEffect } from "react";
import { scrollToElement } from "@/components/motion/SmoothScroll";

// Services page: opening a package always lands you at the top of that package. When another
// package is already open, it closes instantly (no animation) so the page doesn't shift while the
// new one scrolls into place. Also opens the package named in the URL (/services#kuulei, from the
// homepage "Learn more" buttons) on load and whenever the hash changes.
export function PackageScroll() {
  useEffect(() => {
    const open = (el: HTMLDetailsElement) => {
      const current = el.parentElement?.querySelector<HTMLDetailsElement>("details.package[open]");
      if (current && current !== el) {
        current.dataset.instant = "";
        current.open = false;
      }
      el.open = true;
      requestAnimationFrame(() => {
        scrollToElement(el);
        if (current) delete current.dataset.instant;
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
