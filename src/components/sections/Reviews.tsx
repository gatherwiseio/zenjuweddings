import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/content/site";

export function Reviews() {
  return (
    <section className="bg-mist px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-14">
        <SectionHeading title="Kind Words" label="From our couples" />
        <ul className="grid w-full gap-12 md:grid-cols-3 md:gap-14">
          {reviews.map((review, i) => (
            <li key={i} className="flex flex-col gap-6 border-t border-ink/30 pt-8">
              <blockquote className="text-xl leading-[1.6] font-extralight md:text-[22px]">{review.quote}</blockquote>
              <p className="label text-xs">
                {review.name}
                <span className="block pt-1 text-[11px] tracking-[0.15em] text-rule">{review.detail}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
