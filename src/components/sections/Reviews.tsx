import Image from "next/image";
import Script from "next/script";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { reviews, zolaBadge } from "@/content/site";

export function Reviews() {
  return (
    <section className="bg-mist px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto flex max-w-content flex-col items-center gap-14">
        <SectionHeading title="Testimonials" label="From our couples" />
        <Testimonials reviews={reviews} />
        {/* Zola's "Find us on Zola" badge, as Zola supplies it (their markup and class), shown
            smaller than their 200px default so it backs up the reviews without competing. */}
        <div className="zola-vendor-badge reveal-up">
          <a href={zolaBadge.href} target="_blank" rel="noopener" className="block transition-opacity hover:opacity-85">
            <Image src={zolaBadge.image} alt="Find us on Zola" width={200} height={200} unoptimized className="h-auto w-28 md:w-30" />
          </a>
        </div>
        {/* Zola's badge script (counts badge views). Loads after everything else so it can't slow the page. */}
        <Script id="zola-mvjs" src={zolaBadge.script} strategy="lazyOnload" />
      </div>
    </section>
  );
}
