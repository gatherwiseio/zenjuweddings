import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AlbumPhotos } from "@/components/AlbumPhotos";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactCta } from "@/components/sections/ContactCta";
import { albums } from "@/content/gallery";
import { vendorCategories } from "@/content/vendors";

const photographers = vendorCategories.find((c) => c.id === "photographers")?.vendors ?? [];

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: PageProps<"/gallery/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) return {};
  return {
    title: `${album.title} | Gallery | Zenju Weddings`,
    description: `${album.title} at ${album.place}. ${album.story}`,
  };
}

// One album: a Gallery / names breadcrumb, the couple's place, story and photographer, then
// every photo in justified rows with a lightbox, and links to the albums before and after it. The
// album reads `params` inside Suspense, so the page shell renders instantly on navigation.
export default function AlbumPage({ params }: PageProps<"/gallery/[slug]">) {
  return (
    <>
      <a
        href="#main"
        className="label sr-only z-50 bg-ink px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="scroll-mt-24">
        <div className="px-6 pt-10 pb-24 md:px-14 md:pt-14 md:pb-32">
          <div className="mx-auto flex max-w-content flex-col gap-8">
            <Suspense fallback={<div className="min-h-(--page-hero-min)" />}>
              <Album params={params} />
            </Suspense>
          </div>
        </div>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

async function Album({ params }: Pick<PageProps<"/gallery/[slug]">, "params">) {
  const { slug } = await params;
  const index = albums.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();
  const album = albums[index];
  const prev = albums[(index - 1 + albums.length) % albums.length];
  const next = albums[(index + 1) % albums.length];

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <div className="flex flex-col gap-6">
        <nav aria-label="Breadcrumb">
          <ol className="label flex flex-wrap items-center gap-2 text-xs font-medium text-ink/70">
            <li>
              <Link href="/gallery" className="inline-flex min-h-11 items-center transition-colors hover:text-ink">
                Gallery
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {album.title}
            </li>
          </ol>
        </nav>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-3">
            <p className="label text-xs font-medium text-gold">{album.place}</p>
            <h1 translate="no" className="text-4xl leading-heading font-extralight tracking-display text-balance md:text-6xl">{album.title}</h1>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg leading-prose text-pretty text-ink/75">{album.story}</p>
            <p className="text-meta text-ink/70">
              {album.credit && (
                <>
                  Photos by{" "}
                  {/* A photographer from her preferred vendors links to their card there. */}
                  {photographers.some((v) => v.name === album.credit) ? (
                    <Link href="/vendors#photographers" className="link-draw font-medium text-gold-deep">
                      {album.credit}
                    </Link>
                  ) : (
                    album.credit
                  )}
                  {" · "}
                </>
              )}
              {album.photos.length} photos
            </p>
          </div>
        </div>
      </div>

      <AlbumPhotos photos={album.photos} />

      <nav aria-label="More albums" className="flex items-center justify-between gap-6 border-t border-fog pt-8">
        <Link href={`/gallery/${prev.slug}`} className="group flex flex-col gap-1">
          <span className="label text-xs font-medium text-ink/70">Previous album</span>
          <span className="text-lg font-light group-hover:text-gold-deep">{prev.title}</span>
        </Link>
        <Link href={`/gallery/${next.slug}`} className="group flex flex-col items-end gap-1 text-right">
          <span className="label text-xs font-medium text-ink/70">Next album</span>
          <span className="text-lg font-light group-hover:text-gold-deep">{next.title}</span>
        </Link>
      </nav>
    </div>
  );
}
