"use client";

import { useEffect, useRef } from "react";
import { Script } from "@/components/Script";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect reduced-motion: stay paused on the poster frame.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section className="pb-20 md:pb-28">
      <div className="relative mx-4 h-[min(720px,82vh)] min-h-[480px] overflow-hidden bg-ink md:mx-8">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/hero.mp4"
          poster="/images/current-site/hero-video-still.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        {/* Soft fade along the bottom edge only, so the small white text stays legible over white linens. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-6 pb-8 text-center text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.55),0_2px_20px_rgb(0_0_0/0.45)] md:pb-12">
          <h1 className="text-[30px] leading-[1.15] font-light tracking-[0.01em] md:text-[44px]">
            Celebrations rooted in <Script>aloha</Script>.
          </h1>
          <p className="label text-[11px] font-medium md:text-xs">
            Wedding planning &amp; design · Honolulu, Hawaii · Since 2010
          </p>
        </div>
      </div>
    </section>
  );
}
