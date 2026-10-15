import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/content/site";

export function ContactCta() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-30">
      <div className="relative overflow-hidden bg-ink text-cream">
        <Image
          src="/images/current-site/portfolio-13.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative flex flex-col items-center gap-7 px-6 py-24 text-center md:py-36">
          <SectionHeading title="Let’s Start Planning" label="Tell us about your day" tone="dark" />
          <p className="max-w-[560px] text-lg leading-[1.7]">
            We&rsquo;d love to hear from you. Share your date, your vision and your island, and Yanicke will be in
            touch.
          </p>
          <div className="flex flex-col items-center gap-5 pt-2 md:flex-row md:gap-8">
            <ButtonLink href={`mailto:${contact.email}?subject=Inquiry`} tone="dark">
              Email us
            </ButtonLink>
            <ButtonLink href={contact.phoneHref} variant="link" tone="dark">
              {contact.phone}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
