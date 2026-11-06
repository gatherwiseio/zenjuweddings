import Image from "next/image";

// Portrait photo with an offset gold frame behind it that slides out as it scrolls into view.
export function FramedPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="reveal-left relative w-full max-w-portrait shrink-0 self-center md:w-(--portrait-w)">
      <div
        aria-hidden="true"
        className="frame-settle absolute inset-0 translate-x-4 translate-y-4 border border-gold md:translate-x-5 md:translate-y-5"
      />
      <div className="relative aspect-portrait overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 320px, 340px" className="image-settle object-cover" />
      </div>
    </div>
  );
}

// Pull-quote with a gold rule that draws down its left side.
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative flex flex-col gap-3 pl-6">
      <span aria-hidden="true" className="draw-y absolute inset-y-0 left-0 w-px bg-gold" />
      <p className="text-2xl leading-quote font-light text-balance md:text-quote">{children}</p>
    </blockquote>
  );
}
