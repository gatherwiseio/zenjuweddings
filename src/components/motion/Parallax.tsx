"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * "Moving pictures": every element inside marked `data-parallax="<percent>"` drifts that far
 * (percent of its own height, up and down) inside its overflow-hidden frame as the frame scrolls
 * through the screen, scaled up just enough that no edge shows. Works in every browser; off for
 * reduced motion, where the photos stay still.
 */
export function Parallax({ children, className = "" }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const drift = Number(el.dataset.parallax) || 6;
          const frame = el.parentElement ?? el;
          gsap.fromTo(
            el,
            { yPercent: -drift, scale: 1 + drift / 40 },
            {
              yPercent: drift,
              scale: 1 + drift / 40,
              ease: "none",
              scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
