"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/Button";
import type { Review } from "@/content/site";

// Equal-height testimonial cards: 3 across on desktop, 2 on tablets, a swipeable row on phones
// (next card peeks in). Every card clamps its review to the same number of lines, so rows line
// up; "Read full review" opens the whole text in a dialog. All text stays in the HTML for SEO.
export function Testimonials({ reviews }: { reviews: Review[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [clamped, setClamped] = useState<boolean[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const textRefs = useRef<(HTMLQuoteElement | null)[]>([]);

  // Which reviews are cut short by the clamp (and so get "Read full review").
  useEffect(() => {
    const measure = () => setClamped(textRefs.current.map((el) => !!el && el.scrollHeight > el.clientHeight + 1));
    const observer = new ResizeObserver(measure);
    textRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const show = (i: number) => {
    setOpen(i);
    dialogRef.current?.showModal();
  };
  const current = open === null ? null : reviews[open];

  return (
    <>
      <ul className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-4 self-stretch overflow-x-auto scroll-px-6 px-6 pb-4 md:mx-0 md:grid md:auto-rows-fr md:grid-cols-2 md:gap-6 md:overflow-visible md:p-0 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <li
            key={review.name}
            className={`reveal-up ${["", "stagger-1", "stagger-2"][i % 3]} flex w-(--testimonial-w) shrink-0 snap-start flex-col gap-5 bg-white p-7 md:w-auto md:p-9`}
          >
            <Stars />
            <h3 className="line-clamp-2 text-xl leading-heading font-light">{review.title}</h3>
            <blockquote
              ref={(el) => {
                textRefs.current[i] = el;
              }}
              className="line-clamp-5 text-meta leading-prose text-ink/80"
            >
              {review.text}
            </blockquote>
            {clamped[i] && (
              <div>
                <button type="button" onClick={() => show(i)} className={buttonClass("link")}>
                  Read full review
                </button>
              </div>
            )}
            <p className="mt-auto flex items-center gap-3.5 border-t border-fog pt-5">
              <Avatar review={review} />
              <span className="label text-xs font-semibold">{review.name}</span>
            </p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        aria-labelledby="testimonial-dialog-title"
        className="m-auto max-h-(--dialog-max-h) w-(--dialog-w) overflow-y-auto overscroll-contain bg-white p-0 text-ink backdrop:bg-ink/70"
      >
        {current && (
          <div className="flex flex-col gap-6 p-8 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <Stars />
              <button type="button" onClick={() => dialogRef.current?.close()} className={buttonClass("secondary")} autoFocus>
                Close
              </button>
            </div>
            <h3 id="testimonial-dialog-title" className="text-h3 leading-heading font-extralight">
              {current.title}
            </h3>
            <blockquote className="text-body leading-prose-loose text-ink/85">{current.text}</blockquote>
            <p className="flex items-center gap-3.5 border-t border-fog pt-6">
              <Avatar review={current} />
              <span className="label text-xs font-semibold">{current.name}</span>
            </p>
          </div>
        )}
      </dialog>
    </>
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

function Avatar({ review }: { review: Review }) {
  return review.photo ? (
    <Image src={review.photo} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full object-cover" />
  ) : (
    <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-muted text-lg text-gold-deep">
      {review.name[0]}
    </span>
  );
}
