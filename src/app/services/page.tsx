import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PackageList } from "@/components/PackageList";
import { PackageScroll } from "@/components/PackageScroll";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCta } from "@/components/sections/ContactCta";
import { MarriageLicense } from "@/components/sections/MarriageLicense";
import { servicePackages, servicesPage } from "@/content/services";

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
        <MarriageLicense />

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
