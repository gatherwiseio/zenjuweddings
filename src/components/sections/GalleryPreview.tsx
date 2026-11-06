import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Parallax } from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryPreview } from "@/content/site";

// Editorial layout: one feature photo, a tall portrait, and wide/narrow tiles around them
// (desktop: 4 columns × 3 rows; phones: a simple 2-column grid with the feature full width).
const tiles = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "row-span-2 md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "col-span-2 md:col-span-2 md:row-span-1",
  "col-span-2 md:col-span-2 md:row-span-1",
];
const stagger = ["", "stagger-1", "stagger-2", "stagger-1", "stagger-2", "stagger-3"];
// How far each photo drifts inside its tile while scrolling (percent of its height), so the
// tiles move at slightly different speeds.
const drift = [5, 8, 6, 9, 6, 8];

export function GalleryPreview() {
  return (
    <section className="px-4 pb-20 md:px-8 md:pb-30">
      <SectionHeading title="Our Portfolio" label="Moments we’ve loved" className="mb-12 px-2 md:mb-16" />

      <Parallax>
        <ul className="grid auto-rows-(--gallery-row) grid-cols-2 gap-2 md:auto-rows-(--gallery-row-lg) md:grid-cols-4 md:gap-3">
          {galleryPreview.map((photo, i) => (
            <li
              key={photo.src}
              className={`reveal-clip group relative overflow-hidden bg-fog ${tiles[i]} ${stagger[i]}`}
            >
              {/* Photo layer that drifts inside the tile as the page scrolls (see Parallax). */}
              <div data-parallax={drift[i]} className="absolute inset-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="motion-safe-transform object-cover transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-106"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1/2 items-end bg-linear-to-t from-ink/70 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-5"
              >
                <span className="label text-tiny font-medium text-white">{photo.caption}</span>
              </div>
            </li>
          ))}
        </ul>
      </Parallax>

      <div className="mt-14 flex justify-center md:mt-20">
        <ButtonLink href="/gallery" variant="link">
          View the gallery
        </ButtonLink>
      </div>
    </section>
  );
}
