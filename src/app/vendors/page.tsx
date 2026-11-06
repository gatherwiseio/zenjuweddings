import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { VendorDirectory } from "@/components/VendorDirectory";
import { ContactCta } from "@/components/sections/ContactCta";
import { vendorCategories, vendorsPage } from "@/content/vendors";

export const metadata: Metadata = {
  title: "Preferred Wedding Vendors in Hawaii | Zenju Weddings",
  description:
    "Zenju Weddings' preferred Oʻahu wedding vendors: hair and makeup, officiants, photographers, videographers, florists, rentals, DJs and emcees.",
};

export default function VendorsPage() {
  const { hero, intro } = vendorsPage;
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
        <PageHero title={hero.title} label={hero.label} image={hero.image} shade="light" />

        <section className="px-6 pb-24 md:px-14 md:pb-32">
          <div className="mx-auto flex max-w-content flex-col items-center gap-6 text-center">
            <SectionHeading title="Preferred Vendors" label="Who we work with" />
            <p className="max-w-copy-legal text-lg leading-prose text-pretty text-ink/75">{intro}</p>
          </div>
          <VendorDirectory categories={vendorCategories} />
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
