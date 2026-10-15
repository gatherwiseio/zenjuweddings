"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/Button";
import type { Review } from "@/content/site";

// One review at a time. Every review is stacked in the same grid cell, so the panel keeps one
// height and never jumps between reviews. Long reviews are clamped (6 lines desktop, 9 phone)
// with a "Read full review" button, so short reviews don't float in empty space. All text stays in
// the HTML for search engines; inactive reviews are just faded out and inert.
// Auto-advances at a reading pace (longer reviews stay longer), pauses on hover/focus or
// when off screen, and stops for good once someone picks a review. Off under reduced motion.
export function ReviewSpotlight({ reviews }: { reviews: Review[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [clamped, setClamped] = useState<boolean[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLQuoteElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const running = onScreen && !paused && !stopped && expanded === null;
  const duration = 4000 + reviews[active].text.length * 40;

  // Only counts as on screen (and so auto-advances) when reduced motion is off.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting && !reduced), { threshold: 0.4 });
    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % reviews.length), duration);
    return () => clearTimeout(id);
  }, [running, active, duration, reviews.length]);

  // Which reviews are cut short by the line clamp (and so need "Read full review").
  useEffect(() => {
    const measure = () => setClamped(textRefs.current.map((el) => !!el && el.scrollHeight > el.clientHeight + 1));
    const observer = new ResizeObserver(measure);
    textRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pick = (i: number) => {
    setStopped(true);
    setExpanded(null);
    setActive(i);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + reviews.length) % reviews.length;
    pick(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      ref={rootRef}
      className="flex w-full max-w-story flex-col items-center gap-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="reveal-scale grid w-full bg-white">
        {reviews.map((review, i) => {
          const isActive = i === active;
          const isExpanded = expanded === i;
          return (
            <div
              key={review.name}
              id={`review-${i}`}
              role="tabpanel"
              aria-labelledby={`review-tab-${i}`}
              inert={!isActive}
              className={`col-start-1 row-start-1 flex flex-col items-center gap-6 self-center px-6 py-12 text-center transition-[opacity,translate,visibility] duration-700 ease-out-expo md:px-20 md:py-16 ${
                isActive ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
              }`}
            >
              <span aria-hidden="true" className="-mb-14 font-script text-quote-mark leading-none text-gold-light">
                &ldquo;
              </span>
              <Stars />
              <h3 className="text-h3 leading-heading font-extralight md:text-h3-lg">{review.title}</h3>
              <blockquote
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className={`max-w-review text-body leading-prose text-ink/80 md:text-lg ${isExpanded ? "" : "line-clamp-9 md:line-clamp-6"}`}
              >
                {review.text}
              </blockquote>
              {clamped[i] && !isExpanded && (
                <button type="button" onClick={() => setExpanded(i)} className={`${buttonClass("link")} -mt-2`}>
                  Read full review
                </button>
              )}
              <p className="flex items-center gap-3.5 pt-2">
                <Avatar review={review} size="md" />
                <span className="label text-xs font-semibold">{review.name}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div role="tablist" aria-label="Reviews" onKeyDown={onKeyDown} className="reveal-up stagger-1 flex flex-wrap justify-center gap-3 md:gap-5">
        {reviews.map((review, i) => {
          const isActive = i === active;
          return (
            <button
              key={review.name}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`review-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`review-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => pick(i)}
              className="group flex min-h-11 cursor-pointer flex-col items-center gap-2"
            >
              <span
                className={`rounded-full p-0.5 ring-1 transition-[box-shadow,scale,opacity] duration-500 ease-out-expo ${
                  isActive ? "scale-110 opacity-100 ring-gold" : "opacity-55 ring-transparent group-hover:opacity-100"
                }`}
              >
                <Avatar review={review} size="sm" />
              </span>
              {/* Progress line under the active reviewer while the spotlight auto-advances. */}
              <span aria-hidden="true" className="h-px w-8 overflow-hidden bg-fog">
                {isActive && (
                  <span
                    key={`${active}-${running}`}
                    className="review-progress block h-full origin-left bg-gold"
                    // Runtime value (depends on the review length), so it is set inline.
                    style={{ animationDuration: `${duration}ms` }}
                  />
                )}
              </span>
              <span className="sr-only">Review from {review.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Stars() {
  return (
    <p role="img" className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </p>
  );
}

function Avatar({ review, size }: { review: Review; size: "sm" | "md" }) {
  const box = size === "md" ? "h-12 w-12 text-lg" : "h-10 w-10 text-base";
  return review.photo ? (
    <Image src={review.photo} alt="" width={48} height={48} className={`${box} shrink-0 rounded-full object-cover`} />
  ) : (
    <span aria-hidden="true" className={`${box} flex shrink-0 items-center justify-center rounded-full bg-cream-muted text-gold-deep`}>
      {review.name[0]}
    </span>
  );
}
