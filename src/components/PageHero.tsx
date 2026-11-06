import type { StaticImageData } from "next/image";
import { preload } from "react-dom";
import { heroSrc, heroSrcSet, heroWidths, photoName } from "@/content/heroes";

// Banner at the top of inner pages: a full-width photo (shorter than the homepage film) with the
// page title low and centered, same type and fades as the homepage hero. The header floats over
// it until you scroll past (`id="hero"` is what the header measures).
//
// Built for an immediate photo: it comes from ready-made WebP files (scripts/hero-images.mjs), so
// the CDN serves it straight away instead of resizing it on the first visit; the page asks for it
// first thing (preload, high priority); and the imported photo's tiny blurred copy, inlined in the
// page, sits underneath until it arrives.
export function PageHero({
  title,
  label,
  image,
  alt = "",
  shade = "default",
}: {
  title: string;
  label: string;
  image: StaticImageData;
  alt?: string;
  /** "light": softer fades for bright photos that need less darkening. */
  shade?: "default" | "light";
}) {
  const light = shade === "light";
  const name = photoName(image.src);
  const srcSet = heroSrcSet(name);
  preload(heroSrc(name, heroWidths.at(-1)!), { as: "image", imageSrcSet: srcSet, imageSizes: "100vw", fetchPriority: "high" });
  return (
    <section id="hero" className="pb-20 md:pb-28">
      <div className="relative h-(--page-hero-h) min-h-(--page-hero-min) overflow-hidden bg-ink">
        <div className="hero-sink absolute inset-0">
          {/* Blurred stand-in, scaled up a touch so the blur has no soft edge. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
            style={{ backgroundImage: `url(${image.blurDataURL})` }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- ready-made files, see above */}
          <img
            src={heroSrc(name, heroWidths.at(-1)!)}
            srcSet={srcSet}
            sizes="100vw"
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className="slow-zoom absolute inset-0 h-full w-full object-cover"
          />
        </div>
        {/* Top fade keeps the see-through header legible; bottom fade carries the title. */}
        <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-40 bg-linear-to-b to-transparent ${light ? "from-ink/30" : "from-ink/50"}`} />
        <div aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t to-transparent ${light ? "from-ink/40" : "from-ink/65"}`} />
        <div className="hero-drift absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-6 pb-10 text-center text-white text-shadow-hero md:pb-14">
          <p className="label text-xs font-medium md:text-label">{label}</p>
          <h1 className="text-balance text-4xl leading-display font-extralight tracking-display xs:text-hero md:text-display">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
