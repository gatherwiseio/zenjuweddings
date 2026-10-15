import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/content/site";

// Full-bleed closing moment: the garden ceremony photo edge to edge, darkened just enough for the text.
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
      <div className="relative flex min-h-[640px] flex-col items-center justify-center gap-8 px-6 py-28 text-center md:min-h-[760px] md:py-40">
        <SectionHeading title="Let’s Start Planning" label="Tell us about your day" tone="dark" />
        <p className="reveal-up max-w-[560px] text-lg leading-[1.7]">
          We&rsquo;d love to hear from you. Share your date, your vision and your island, and Yanicke will be in touch.
        </p>
        <div className="reveal-up stagger-1 flex flex-col items-center gap-5 pt-2 md:flex-row md:gap-8">
          <ButtonLink href={`mailto:${contact.email}?subject=Inquiry`} tone="dark">
            Email us
          </ButtonLink>
          <ButtonLink href={`mailto:${contact.email}`} variant="link" tone="dark">
            <span className="normal-case tracking-[0.04em]">{contact.email}</span>
          </ButtonLink>
          <ButtonLink href={contact.phoneHref} variant="link" tone="dark">
            {contact.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
