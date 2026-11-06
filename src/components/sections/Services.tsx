import { PackageTabs } from "@/components/PackageTabs";
import { servicePackages } from "@/content/services";

export function Services() {
  return (
    <section className="py-20 md:px-8 md:py-30">
      <div className="reveal-panel flex justify-center bg-ink px-6 py-20 text-cream md:px-16 md:py-26">
        <PackageTabs packages={servicePackages} />
      </div>
    </section>
  );
}
