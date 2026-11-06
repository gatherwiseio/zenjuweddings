import type { Metadata } from "next";
import { buttonClass } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PackageList } from "@/components/PackageList";
import { PackageScroll } from "@/components/PackageScroll";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCta } from "@/components/sections/ContactCta";
import { marriageLicense, servicePackages, servicesPage } from "@/content/services";

export const metadata: Metadata = {
  title: "Wedding Packages & Pricing | Zenju Weddings",
  description:
    "Hawaii wedding planning packages from Zenju Weddings: barefoot and all-inclusive elopements, day-of, partial and full coordination, and the all-inclusive Platinum package.",
};

export default function ServicesPage() {
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
        <PageHero
          title={servicesPage.hero.title}
          label={servicesPage.hero.label}
          image={servicesPage.hero.image}
          shade="light"
        />

        <section className="px-6 pb-20 md:px-14 md:pb-28">
          <div className="mx-auto flex max-w-content flex-col gap-14 md:gap-16">
            <div className="flex flex-col items-center gap-6 text-center">
              <SectionHeading title="Our Packages" label="Six ways to celebrate" />
              <p className="max-w-copy-legal text-lg leading-prose text-pretty text-ink/75">{servicesPage.intro}</p>
            </div>
            <PackageList packages={servicePackages} />
          </div>
          <PackageScroll />
        </section>

        {/* Marriage license: the essentials from her current page, with the state's own link. */}
        <section id="marriage-license" className="scroll-mt-28 bg-mist section-band">
          <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6">
              <SectionHeading title={marriageLicense.title} label={marriageLicense.label} align="left" />
              <p className="max-w-copy text-lg leading-prose text-ink/80">{marriageLicense.intro}</p>
              <div className="flex flex-col gap-1 border-t border-fog pt-6">
                <p className="label text-xs font-semibold">Fees</p>
                <p className="text-meta leading-prose text-ink/80">{marriageLicense.fees}</p>
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <a
                  href={marriageLicense.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass("secondary")} w-fit`}
                >
                  Apply on the State of Hawaii site
                </a>
                <p className="text-tiny tracking-meta text-ink/60 uppercase">{marriageLicense.note}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-5 self-center">
              {marriageLicense.points.map((point) => (
                <li key={point} className="flex gap-4 text-body leading-prose">
                  <span aria-hidden="true" className="mt-(--bullet-offset) h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
