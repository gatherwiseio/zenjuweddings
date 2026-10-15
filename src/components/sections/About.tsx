import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

const statement =
  "Zenju was founded in 2010 to create unique, elegant and memorable celebrations, beautifully planned in\u00a0paradise.";
const statementWords = statement.split(" ");

export function About() {
  return (
    <>
      <section className="px-6 pt-8 pb-24 md:px-14 md:pt-12 md:pb-30">
        <div className="mx-auto flex max-w-statement flex-col items-center gap-8 text-center md:gap-10">
          {/* Her lotus on its own, in ink, as a small mark above the statement. */}
          <span aria-hidden="true" className="mask-lotus reveal-scale block aspect-(--aspect-lotus) w-12 bg-ink md:w-16" />
          {/* Words fill in from faint to full as the statement scrolls through (see .word-fill). */}
          <p className="word-fill text-3xl leading-statement-sm font-extralight md:text-statement md:leading-statement">
            {statementWords.map((word, i) => (
              // Per-word index drives each word's slot in the scroll range.
              <span key={i} style={{ "--i": i } as React.CSSProperties}>
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-mist px-6 py-20 md:px-14 md:py-28">
        <SectionHeading title="Meet Yanicke" label="The story behind the vision" className="mb-14 md:mb-20" />
        <div className="mx-auto flex max-w-story flex-col gap-14 md:flex-row md:items-center md:gap-20">
          {/* Same frame ratio and center crop as her current About page, with an offset gold frame behind it. */}
          <div className="reveal-left relative w-full max-w-portrait shrink-0 self-center md:w-(--portrait-w)">
            <div aria-hidden="true" className="frame-settle absolute inset-0 translate-x-4 translate-y-4 border border-gold md:translate-x-5 md:translate-y-5" />
            <div className="relative aspect-portrait overflow-hidden">
              <Image
                src="/images/current-site/yanicke-headshot.jpg"
                alt="Yanicke Lim Sang, founder of Zenju Weddings"
                fill
                sizes="(min-width: 768px) 320px, 340px"
                className="image-settle object-cover"
              />
            </div>
          </div>
          <div className="reveal-right flex flex-col gap-6 md:flex-1">
            {/* Pull-quote: Yanicke's own words from the "Our vision" section of her current site. */}
            <blockquote className="relative flex flex-col gap-3 pl-6">
              <span aria-hidden="true" className="draw-y absolute inset-y-0 left-0 w-px bg-gold" />
              <p className="text-2xl leading-quote font-light text-balance md:text-quote">
                It is our privilege and honor to assist our clients in bringing their wedding dreams to life in this
                paradise.
              </p>
            </blockquote>
            {/* Condensed from Yanicke's own story on her current site; the full text goes on the About page. */}
            <p className="text-body leading-prose-loose">
              Yanicke Lim Sang hails from the island of Jamaica and has made Hawaii her home for the past 17 years.
              Growing up in a multicultural family, her keen eye for detail and vibrant colour palettes fuelled her
              passion for fashion and textile design.
            </p>
            <p className="text-body leading-prose-loose">
              After years of event coordination and design, she founded Zenju Weddings and Events of Hawaii in 2010.
              The business, named after her two sons Zen and Jude, remains closely managed by Yanicke.
            </p>
            <div className="pt-2">
              <ButtonLink href="/about" variant="link">Meet the team</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
