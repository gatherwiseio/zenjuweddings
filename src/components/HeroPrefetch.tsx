"use client";

import { useEffect } from "react";
import { heroPhotos, heroSrc, heroWidths } from "@/content/heroes";

// Once the page has loaded and gone quiet, fetches the other pages' banner photos (at the size this
// screen uses), so moving to About, Services or any inner page shows its banner at once. Skipped
// when the visitor has asked to save data or is on a slow connection.
export function HeroPrefetch() {
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")) return;
    const need = window.innerWidth * window.devicePixelRatio;
    const width = heroWidths.find((w) => w >= need) ?? heroWidths.at(-1)!;
    const fetchAll = () => heroPhotos.forEach((name) => (new Image().src = heroSrc(name, width)));
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    const start = () => idle(fetchAll);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
  }, []);
  return null;
}
