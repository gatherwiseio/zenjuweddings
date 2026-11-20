"use client";

import Image, { type ImageLoaderProps, type ImageProps } from "next/image";
import { galleryWidths } from "@/content/gallery-widths.mjs";

// Gallery photos come from ready-made WebP files (scripts/gallery-images.mjs), not on-the-fly
// resizing: for the width the browser asks for, use the smallest file that is at least that wide.
// `src` is the photo's path without size or extension, e.g. /images/gallery/lila-chuck/IMG_7567.
const galleryLoader = ({ src, width }: ImageLoaderProps) => {
  const w = galleryWidths.find((size) => size >= width) ?? galleryWidths.at(-1);
  return `${src}-${w}.webp`;
};

export function GalleryImage(props: ImageProps) {
  return <Image {...props} loader={galleryLoader} />;
}

/** A small ready-made file for the photo (e.g. a backdrop while the full one loads). */
export const gallerySrc = (src: string, width = 640) => galleryLoader({ src, width });
