import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCta } from "@/components/sections/ContactCta";
import { albums, galleryPage } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Wedding Gallery | Zenju Weddings",
  description:
    "Real weddings planned by Zenju Weddings across Oʻahu: Arvind + Victoria, Maksim + Albert at Kualoa Ranch, Onesis + Pavel at Loulu Palms Estate and more.",
};

// Gallery: the albums as a zig-zag list (after brookekeegan.com/portfolio-weddings): a tall cover
// on one side and the couple's names, place and a View button on the other, alternating sides.
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
          <div className="mx-auto flex max-w-content flex-col gap-14 md:gap-20">
            <div className="flex flex-col items-center gap-6 text-center">
              <SectionHeading title="Our Albums" label="Real weddings" />
              <p className="max-w-copy-legal text-lg leading-prose text-pretty text-ink/75">{intro}</p>
            </div>
            <ul className="flex flex-col gap-16 lg:gap-0">
              {albums.map((album, i) => {
                const flip = i % 2 === 1;
                return (
                  <li
                    key={album.slug}
                    className={`grid items-center gap-6 md:grid-cols-12 md:gap-10 ${i > 0 ? "lg:-mt-16" : ""}`}
                  >
                    <Link
                      href={`/gallery/${album.slug}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className={`group relative block aspect-(--aspect-album) overflow-hidden bg-mist md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}
                    >
                      <Image
                        src={album.photos[0].src}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        priority={i < 2}
                        className="object-cover transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-105"
                      />
                    </Link>
                    <div
                      className={`flex flex-col gap-3 md:col-span-5 ${flip ? "md:order-1 md:col-start-2 md:items-end md:text-right" : "md:col-start-7"}`}
                    >
                      <p className="label text-xs font-medium text-gold">{album.place}</p>
                      <h2 className="text-4xl leading-heading font-extralight tracking-display text-balance md:text-5xl">
                        {album.title}
                      </h2>
                      <p className="text-meta text-ink/60">
                        {album.date ? `${album.date} · ` : ""}
                        {album.photos.length} photos
                      </p>
                      <Link href={`/gallery/${album.slug}`} className={`${buttonClass("secondary")} mt-3 w-fit`}>
                        View album
                        <span className="sr-only">: {album.title}</span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
