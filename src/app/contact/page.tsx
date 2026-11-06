import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon, PrinterIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reviews } from "@/components/sections/Reviews";
import { contactPage } from "@/content/contact";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us | Zenju Weddings",
  description:
    "Inquire about your Hawaii wedding with Zenju Weddings and Events of Hawaii. Share your date and vision, and founder Yanicke Lim Sang will be in touch.",
};

const { hero, heading, intro, perks } = contactPage;

const details = [
  { icon: MapPinIcon, label: "Visit", lines: contact.address, href: "https://maps.google.com/?q=1050+Bishop+Street+Suite+450+Honolulu+HI+96813" },
  { icon: EnvelopeSimpleIcon, label: "Email", lines: [contact.email], href: `mailto:${contact.email}` },
  { icon: PhoneIcon, label: "Call", lines: [contact.phone], href: contact.phoneHref },
  { icon: PrinterIcon, label: "Fax", lines: [contact.fax] },
];

export default function ContactPage() {
  return (
    <>
      <a
        href="#main"
        className="label sr-only z-50 bg-ink px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header overlay />
      <main id="main" className="scroll-mt-24">
        <PageHero title={hero.title} label={hero.label} image={hero.image} />

        {/* Why reach out, beside the form. */}
        <section className="px-6 pb-24 md:px-14 md:pb-32">
          <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-8">
              <SectionHeading title={heading.title} label={heading.label} align="left" />
              <p className="max-w-copy text-lg leading-prose text-pretty text-ink/75">{intro}</p>
              <ul className="flex flex-col">
                {perks.map((perk, i) => (
                  <li key={perk.title} className="flex gap-5 border-t border-fog py-5 last:border-b">
                    <span className="self-start text-2xl leading-none font-extralight text-gold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-lg font-normal">{perk.title}</span>
                      <span className="text-meta leading-prose text-pretty text-ink/75">{perk.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="inquire" className="scroll-mt-28 self-start border border-fog p-7 md:p-10">
              <h2 className="mb-8 text-2xl leading-heading font-light md:text-h3-lg">Send us a note</h2>
              <InquiryForm />
            </div>
          </div>
        </section>

        <Reviews />

        {/* Every way to reach the office. */}
        <section className="section-band">
          <div className="mx-auto flex max-w-content flex-col gap-12">
            <SectionHeading title="Get in touch" label="Zenju Weddings & Events of Hawaii" />
            <ul className="grid gap-px border border-fog bg-fog sm:grid-cols-2 lg:grid-cols-4">
              {details.map(({ icon: Icon, label, lines, href }) => {
                const body = (
                  <>
                    <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-ink/60">
                      <Icon size={22} weight="light" />
                    </span>
                    <span className="label text-xs font-semibold">{label}</span>
                    <span className="text-meta leading-prose text-ink/75">
                      {lines.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </span>
                  </>
                );
                return (
                  <li key={label} className="bg-white">
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex h-full flex-col items-center gap-3 px-6 py-10 text-center transition-colors hover:bg-cream"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex h-full flex-col items-center gap-3 px-6 py-10 text-center">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="label flex justify-center gap-6 text-xs font-medium">
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="link-draw py-1 text-ink">Facebook</a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="link-draw py-1 text-ink">Instagram</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
