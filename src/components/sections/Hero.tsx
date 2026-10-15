"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Script } from "@/components/Script";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Respect reduced-motion: stay paused on the poster frame.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    // Full screen, edge to edge; the header floats over it until you scroll past (see Header `overlay`).
    <section id="hero" className="pb-20 md:pb-28">
      <div className="relative h-(--hero-h) min-h-120 overflow-hidden bg-ink">
        {/* Focal motion: the still paints first, the film fades in over it once playing, and the
            headline settles in once. Reduced-motion visitors get the still and static text. */}
        {/* The optimized still paints first (it's the LCP element); the video plays over it once ready. */}
        <Image
          src="/images/current-site/hero-video-still.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="slow-zoom object-cover"
        />
        <video
          ref={videoRef}
          className={`slow-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out-expo ${playing ? "opacity-100" : "opacity-0"}`}
          onPlaying={() => setPlaying(true)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          {/* Phones get the 720p file (5 MB instead of 11 MB). */}
          <source src="/video/hero-720.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        {/* Soft fade at the top so the see-through header stays legible over bright florals. */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/50 to-transparent" />
        {/* Soft fade along the bottom edge only, so the small white text stays legible over white linens. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-6 pb-8 text-center text-white text-shadow-hero md:pb-16">
          <h1 className="hero-rise text-balance text-3xl leading-heading font-light tracking-hero md:text-hero">
            Celebrations rooted in <Script>aloha</Script>.
          </h1>
          <p className="hero-rise hero-rise-delay label text-tiny font-medium md:text-xs">
            Wedding planning &amp; design · Honolulu, Hawaii · Since 2010
          </p>
        </div>
      </div>
    </section>
  );
}
