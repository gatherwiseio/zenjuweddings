import type { Metadata } from "next";
import { pageMetadata, seo } from "@/content/seo";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { MarriageLicense } from "@/components/sections/MarriageLicense";
import { marriageLicensePage } from "@/content/services";

export const metadata: Metadata = pageMetadata(seo.license);

// Marriage License: its own page in the menu (Yanicke, 2026-11-19: couples couldn't find it at the
// bottom of Services). Same address as on her old site, so old links and Google keep working.
export default function MarriageLicensePage() {
  const { hero } = marriageLicensePage;
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
        <MarriageLicense />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
