import Image from "next/image";
import { buttonClass } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews, reviewsSource, type Review } from "@/content/site";

// Real WeddingWire reviews in a masonry layout (CSS columns), so long and short reviews
// sit together without ragged gaps. Reviewers without a profile photo get their initial.
export function Reviews() {
  return (
    <section className="bg-mist px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto flex max-w-content flex-col items-center gap-14">
        <SectionHeading title="Kind Words" label="From our couples" />
        <ul className="w-full columns-1 gap-6 md:columns-2 lg:columns-3">
          {reviews.map((review, i) => (
            <li
              key={review.name}
              className={`reveal-up ${["", "stagger-1", "stagger-2"][i % 3]} mb-6 flex break-inside-avoid flex-col gap-5 bg-white p-8`}
            >
              <Stars />
              <h3 className="text-xl leading-heading font-light">{review.title}</h3>
              <blockquote className="text-meta leading-prose text-ink/80">{review.text}</blockquote>
              <Reviewer review={review} />
            </li>
          ))}
        </ul>
        <a href={reviewsSource} target="_blank" rel="noopener noreferrer" className={`${buttonClass("link")} text-center`}>
          More reviews on WeddingWire
        </a>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <p className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </p>
  );
}

function Reviewer({ review }: { review: Review }) {
  return (
    <p className="flex items-center gap-3.5 border-t border-fog pt-5">
      {review.photo ? (
        <Image src={review.photo} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full object-cover" />
      ) : (
        <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-muted text-lg text-gold-deep">
          {review.name[0]}
        </span>
      )}
      <span className="flex flex-col gap-0.5">
        <span className="label text-xs font-semibold">{review.name}</span>
        <span className="text-tiny tracking-meta text-rule uppercase">via WeddingWire</span>
      </span>
    </p>
  );
}
