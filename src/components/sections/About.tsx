import { ButtonLink } from "@/components/Button";
import { FramedPortrait, PullQuote } from "@/components/FramedPortrait";
import { SectionHeading } from "@/components/SectionHeading";
import { Statement } from "@/components/Statement";

export function About() {
  return (
    <>
      <section className="px-6 pt-8 pb-24 md:px-14 md:pt-12 md:pb-30">
        <Statement text={"Zenju was founded in 2010 to create unique, elegant and memorable celebrations, beautifully planned in\u00a0paradise."} />
      </section>

      <section className="overflow-hidden bg-mist section-band">
        <SectionHeading title="Meet Yanicke" label="The story behind the vision" className="mb-14 md:mb-20" />
        <div className="mx-auto flex max-w-story flex-col gap-14 md:flex-row md:items-center md:gap-20">
          {/* Same frame ratio and center crop as her current About page. */}
          <FramedPortrait src="/images/current-site/yanicke-headshot.jpg" alt="Yanicke Lim Sang, founder of Zenju Weddings" />
          <div className="reveal-right flex flex-col gap-6 md:flex-1">
            {/* Pull-quote: Yanicke's own words from the "Our vision" section of her current site. */}
            <PullQuote>
              It is our privilege and honor to assist our clients in bringing their wedding dreams to life in this
              paradise.
            </PullQuote>
            {/* Condensed from Yanicke's own story on her current site; the full text is on the About page. */}
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
              <ButtonLink href="/about" variant="link">
                Meet the team
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
