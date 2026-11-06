import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCta } from "@/components/sections/ContactCta";
import { albums, galleryPage } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Wedding Gallery | Zenju Weddings",
  description:
    "Weddings planned by Zenju Weddings across Oʻahu: the North Shore, Kualoa Ranch, Loulu Palms Estate, garden receptions and more.",
};

// Gallery: one card per album (cover, title, a line, photo count); each opens its own page.
export default function GalleryPage() {
  const { hero, intro } = galleryPage;
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

        <section className="px-6 pb-24 md:px-14 md:pb-32">
          <div className="mx-auto flex max-w-content flex-col gap-12 md:gap-16">
            <div className="flex flex-col items-center gap-6 text-center">
              <SectionHeading title="Our Albums" label="Real weddings" />
              <p className="max-w-copy-legal text-lg leading-prose text-pretty text-ink/75">{intro}</p>
            </div>
            <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {albums.map((album, i) => (
                <li key={album.slug}>
                  <Link href={`/gallery/${album.slug}`} className="group flex flex-col gap-4">
                    <span className="relative block aspect-(--aspect-album) overflow-hidden bg-mist">
                      <Image
                        src={album.photos[0].src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                        priority={i < 3}
                        className="object-cover transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-105"
                      />
                    </span>
                    <span className="flex flex-col gap-1.5">
                      <span className="label text-xs font-medium text-gold">
                        {album.photos.length} photos
                      </span>
                      <span className="text-2xl leading-heading font-light transition-colors group-hover:text-gold-deep">
                        {album.couple ?? album.title}
                      </span>
                      <span className="text-meta leading-prose text-pretty text-ink/70">
                        {album.couple ? `${album.title} · ` : ""}
                        {album.description}
                      </span>
                    </span>
                  </Link>
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
