import { ButtonLink } from "@/components/Button";
import { PackageCards } from "@/components/PackageCards";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, packages } from "@/content/site";

export function Services() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-30">
      <div className="flex flex-col items-center gap-14 bg-ink px-6 py-20 text-cream md:gap-18 md:px-16 md:py-28">
        <SectionHeading title="Our Packages" label="Customized to suit your budget and style" tone="dark" />

        <PackageCards packages={packages} />

        <div className="flex flex-col items-center gap-7 text-center">
          <p className="text-body text-cream-muted">Pricing is discussed during your consultation.</p>
          <ButtonLink href={`mailto:${contact.email}?subject=Inquiry`} tone="dark">
            Inquire
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
