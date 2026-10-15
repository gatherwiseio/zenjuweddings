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
    <section className="pb-20 md:pb-28">
      <div className="relative mx-4 h-[min(720px,82vh)] min-h-[480px] overflow-hidden bg-ink md:mx-8">
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
          className={`slow-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${playing ? "opacity-100" : "opacity-0"}`}
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
        {/* Soft fade along the bottom edge only, so the small white text stays legible over white linens. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-6 pb-8 text-center text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.55),0_2px_20px_rgb(0_0_0/0.45)] md:pb-12">
          <h1 className="hero-rise text-balance text-[30px] leading-[1.15] font-light tracking-[0.01em] md:text-[44px]">
            Celebrations rooted in <Script>aloha</Script>.
          </h1>
          <p className="hero-rise hero-rise-delay label text-[11px] font-medium md:text-xs">
            Wedding planning &amp; design · Honolulu, Hawaii · Since 2010
          </p>
        </div>
      </div>
    </section>
  );
}
