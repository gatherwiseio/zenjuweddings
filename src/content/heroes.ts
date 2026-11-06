// The banner photos at the top of the inner pages (one per page, see each page's content file).
// scripts/hero-images.mjs turns each into ready-made WebP files in public/images/hero/ at these
// widths, so the banner is a plain file from the CDN: nothing is resized on the fly, and the
// first visitor gets it as fast as everyone else.
export const heroPhotos = ["portfolio-05", "portfolio-09", "portfolio-10", "portfolio-12", "portfolio-13"];
export const heroWidths = [640, 1080, 1600];

export const heroSrc = (name: string, width: number) => `/images/hero/${name}-${width}.webp`;
export const heroSrcSet = (name: string) => heroWidths.map((w) => `${heroSrc(name, w)} ${w}w`).join(", ");

/** The file name ("portfolio-05") of an imported photo, from its built path. */
export const photoName = (src: string) => src.split("/").pop()!.split(".")[0];
