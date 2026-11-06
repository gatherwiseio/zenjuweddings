import type { Metadata } from "next";
import Image from "next/image";
import { FramedPortrait } from "@/components/FramedPortrait";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Parallax } from "@/components/motion/Parallax";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Statement } from "@/components/Statement";
import { ContactCta } from "@/components/sections/ContactCta";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us | Zenju Weddings",
  description:
    "Meet Yanicke Lim Sang, who founded Zenju Weddings and Events of Hawaii in 2010, and the Zenju team of wedding and event designers in Honolulu.",
};

const { hero, statement, founder, vision } = aboutPage;

export default function AboutPage() {
  return (
    <>
      <a
        href="#main"
        className="label sr-only z-50 bg-ink px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header overlay />
      <main id="main" className="scroll-mt-24">
        <PageHero title={hero.title} label={hero.label} image={hero.image} />

        <section className="px-6 pt-8 pb-24 md:px-14 md:pt-12 md:pb-30">
          <Statement text={statement} />
        </section>

        {/* Yanicke's story, in full but streamlined, beside her portrait. */}
        <section className="overflow-hidden bg-mist section-band">
          <SectionHeading title={founder.title} label={founder.label} className="mb-14 md:mb-20" />
          {/* Her story is long, so photo and text stack until 1024px instead of squeezing on tablets. */}
          <div className="mx-auto flex max-w-story flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
            <FramedPortrait src={founder.portrait} alt={founder.portraitAlt} />
            <div className="reveal-right mx-auto flex max-w-copy-legal flex-col gap-6 lg:mx-0 lg:max-w-none lg:flex-1">
              {founder.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-body leading-prose-loose">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Our vision: the team photo and what the team does, three short pillars, a strip of her
            design details, and her own closing words. */}
        <section className="section-band">
          <SectionHeading title={vision.title} label={vision.label} className="mb-14 md:mb-20" />
          <div className="mx-auto flex max-w-content flex-col gap-24 md:gap-28">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className="reveal-clip relative aspect-(--aspect-team) overflow-hidden bg-fog">
                <Image
                  src={vision.photo}
                  alt={vision.photoAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="image-settle object-cover"
                />
              </div>
              <div className="reveal-up flex flex-col gap-6">
                {vision.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-body leading-prose-loose">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              {vision.pillars.map((pillar, i) => (
                <li
                  key={pillar.title}
                  className={`reveal-up ${["", "stagger-1", "stagger-2"][i]} flex flex-col gap-3 border-t border-fog pt-6`}
                >
                  <span className="label text-xs font-medium text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl leading-heading font-light">{pillar.title}</h3>
                  <p className="text-meta leading-prose text-ink/80">{pillar.text}</p>
                </li>
              ))}
            </ol>

            {/* Her design details: each photo drifts gently inside its frame as you scroll. */}
            <Parallax>
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                {vision.details.map((photo, i) => (
                  <li key={photo.src} className="relative aspect-square overflow-hidden bg-fog">
                    <div data-parallax={[6, 9, 5, 8][i]} className="absolute inset-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Parallax>

            <blockquote className="reveal-up mx-auto flex max-w-statement flex-col items-center gap-6 text-center">
              <span aria-hidden="true" className="draw-x block h-px w-16 bg-gold" />
              <p className="text-2xl leading-quote font-extralight text-balance md:text-quote">{vision.closing}</p>
            </blockquote>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
