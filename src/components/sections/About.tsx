import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <>
      <section className="px-6 pt-8 pb-24 md:px-14 md:pt-12 md:pb-30">
        <div className="reveal-up mx-auto max-w-[1040px] text-center">
          <p className="text-[30px] leading-[1.35] font-extralight md:text-[46px] md:leading-[1.3]">
            Zenju was founded in 2010 to create unique, elegant and memorable celebrations, beautifully planned in
            paradise.
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-mist px-6 py-20 md:px-14 md:py-28">
        <SectionHeading title="Meet Yanicke" label="The story behind the vision" className="mb-14 md:mb-20" />
        <div className="mx-auto flex max-w-[980px] flex-col gap-14 md:flex-row md:items-center md:gap-20">
          {/* Same frame ratio and center crop as her current About page, with an offset gold frame behind it. */}
          <div className="reveal-left relative w-full max-w-[340px] shrink-0 self-center md:w-[320px]">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 border border-gold md:translate-x-5 md:translate-y-5" />
            <div className="relative aspect-[268/299] overflow-hidden">
              <Image
                src="/images/current-site/yanicke-headshot.jpg"
                alt="Yanicke Lim Sang, founder of Zenju Weddings"
                fill
                sizes="(min-width: 768px) 320px, 340px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="reveal-right flex flex-col gap-6 md:flex-1">
            {/* Pull-quote: Yanicke's own words from the "Our vision" section of her current site. */}
            <blockquote className="flex flex-col gap-3 border-l border-gold pl-6">
              <p className="text-[24px] leading-[1.4] font-light text-balance md:text-[28px]">
                It is our privilege and honor to assist our clients in bringing their wedding dreams to life in this
                paradise.
              </p>
            </blockquote>
            {/* Condensed from Yanicke's own story on her current site; the full text goes on the About page. */}
            <p className="text-[17px] leading-[1.75]">
              Yanicke Lim Sang hails from the island of Jamaica and has made Hawaii her home for the past 17 years.
              Growing up in a multicultural family, her keen eye for detail and vibrant colour palettes fuelled her
              passion for fashion and textile design.
            </p>
            <p className="text-[17px] leading-[1.75]">
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
