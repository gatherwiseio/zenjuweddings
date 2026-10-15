import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryPreview } from "@/content/site";

export function GalleryPreview() {
  return (
    <section className="px-4 pb-20 md:px-8 md:pb-30">
      <SectionHeading title="Our Portfolio" label="Moments we’ve loved" className="mb-12 px-2 md:mb-16" />

      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {galleryPreview.map((photo, i) => (
          <li key={photo.src} className={`relative overflow-hidden bg-fog ${i % 3 === 1 ? "aspect-[3/4] md:translate-y-10" : "aspect-[3/4]"}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </li>
        ))}
      </ul>

      <div className="mt-16 flex justify-center md:mt-24">
        <ButtonLink href="/gallery" variant="link">
          View the gallery
        </ButtonLink>
      </div>
    </section>
  );
}
