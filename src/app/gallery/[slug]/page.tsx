import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactCta } from "@/components/sections/ContactCta";
import { albums } from "@/content/gallery";

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: PageProps<"/gallery/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) return {};
  return {
    title: `${album.couple ?? album.title} | Gallery | Zenju Weddings`,
    description: `${album.description}. A wedding planned by Zenju Weddings.`,
  };
}

// One album: a back arrow to all albums, the title, then every photo in a masonry layout,
// with links to the albums before and after it. The shell (header, back arrow) renders without
// the URL; the album itself reads `params` inside Suspense, so navigation is instant.
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
      <main id="main" className="scroll-mt-24 px-6 pt-10 pb-24 md:px-14 md:pt-14 md:pb-32">
        <div className="mx-auto flex max-w-content flex-col gap-8">
          <Link href="/gallery" className="label inline-flex min-h-11 w-fit items-center gap-2 text-xs font-medium text-ink/70 transition-colors hover:text-ink">
            <ArrowLeftIcon aria-hidden="true" size={18} />
            All albums
          </Link>
          <Suspense fallback={<div className="min-h-(--page-hero-min)" />}>
            <Album params={params} />
          </Suspense>
        </div>
      </main>
      <ContactCta />
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
      <div className="flex flex-col gap-3">
        <p className="label text-xs font-medium text-gold">{album.photos.length} photos</p>
        <h1 className="text-4xl leading-heading font-extralight tracking-display text-balance md:text-5xl">
          {album.couple ?? album.title}
        </h1>
        <p className="max-w-copy-legal text-lg leading-prose text-pretty text-ink/75">
          {album.couple ? `${album.title} · ` : ""}
          {album.description}
        </p>
      </div>

      {/* Masonry: columns keep each photo's own shape. */}
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {album.photos.map((photo, i) => (
          <li key={photo.src} className="mb-4 break-inside-avoid">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
              priority={i < 3}
              className="h-auto w-full bg-mist"
            />
          </li>
        ))}
      </ul>

      <nav aria-label="More albums" className="flex items-center justify-between gap-6 border-t border-fog pt-8">
        <Link href={`/gallery/${prev.slug}`} className="group flex flex-col gap-1">
          <span className="label text-xs font-medium text-ink/55">Previous album</span>
          <span className="text-lg font-light group-hover:text-gold-deep">{prev.couple ?? prev.title}</span>
        </Link>
        <Link href={`/gallery/${next.slug}`} className="group flex flex-col items-end gap-1 text-right">
          <span className="label text-xs font-medium text-ink/55">Next album</span>
          <span className="text-lg font-light group-hover:text-gold-deep">{next.couple ?? next.title}</span>
        </Link>
      </nav>
    </div>
  );
}
