import { PackageTabs } from "@/components/PackageTabs";
import { packages } from "@/content/site";

export function Services() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-30">
      <div className="flex justify-center bg-ink px-6 py-20 text-cream md:px-16 md:py-26">
        <PackageTabs packages={packages} />
      </div>
    </section>
  );
}
