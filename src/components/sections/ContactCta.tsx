import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/content/site";

// Compact full-bleed closing band right under Testimonials (no gap): one primary action (Email us)
// over the garden ceremony photo.
export function ContactCta() {
  return (
    <section className="parallax-scope relative overflow-hidden bg-ink text-cream">
      <div className="parallax-y absolute inset-x-0 -inset-y-(--parallax-bleed)">
        <Image
          src="/images/current-site/portfolio-13.jpg"
          alt=""
          fill
          sizes="100vw"
          className="slow-zoom object-cover opacity-80"
        />
      </div>
      {/* A light overall wash so the garden photo reads, plus a soft darker glow centred behind the
          text (and its text shadow) so the copy stays legible over the white drapes. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
      <div aria-hidden="true" className="absolute inset-0 bg-radial from-ink/55 to-transparent to-70%" />
      <div className="relative flex flex-col items-center justify-center gap-7 px-6 py-20 text-center text-shadow-hero md:py-24">
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
