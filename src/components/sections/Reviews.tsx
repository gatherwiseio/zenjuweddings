import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { reviews } from "@/content/site";

export function Reviews() {
  return (
    <section className="bg-mist px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto flex max-w-content flex-col items-center gap-14">
        <SectionHeading title="Testimonials" label="From our couples" />
        <Testimonials reviews={reviews} />
      </div>
    </section>
  );
}
