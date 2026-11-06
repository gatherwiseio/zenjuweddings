"use client";

import { useEffect } from "react";

// When the page is opened with a package anchor (e.g. /services#kuulei, from the homepage
// "Learn more" buttons) or the hash changes, open that package and bring it into view.
export function OpenFromHash() {
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);
  return null;
}
