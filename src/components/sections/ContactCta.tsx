import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/content/site";

// Compact full-bleed closing band: one primary action (Email us) over the garden ceremony photo.
export function ContactCta() {
  return (
    <section className="relative mt-10 overflow-hidden bg-ink text-cream md:mt-16">
      <Image
        src="/images/current-site/portfolio-13.jpg"
        alt=""
        fill
        sizes="100vw"
        className="slow-zoom object-cover opacity-45"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/55 to-ink/80" />
      <div className="relative flex flex-col items-center justify-center gap-7 px-6 py-20 text-center md:py-24">
        <SectionHeading title="Let’s Start Planning" label="Tell us about your day" tone="dark" />
        <p className="reveal-up max-w-copy text-lg leading-prose">
          We&rsquo;d love to hear from you. Share your date, your vision and your island, and Yanicke will be in touch.
        </p>
        <div className="reveal-up stagger-1 pt-1">
          <ButtonLink href={`mailto:${contact.email}?subject=Inquiry`} tone="dark">
            Email us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
