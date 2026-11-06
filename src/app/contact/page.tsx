import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
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
  {
    icon: MapPinIcon,
    label: "Visit",
    lines: contact.address,
    href: "https://maps.google.com/?q=1050+Bishop+Street+Suite+450+Honolulu+HI+96813",
  },
  {
    icon: EnvelopeSimpleIcon,
    label: "Email",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Call",
    lines: [contact.phone],
    href: contact.phoneHref,
  },
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

        {/* Why reach out, beside the form; the left column is kept to about the form's height. */}
        <section className="px-6 pb-24 md:px-14 md:pb-32">
          <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2 lg:gap-20">
            {/* On desktop this column stretches to the form's height: heading at the top, table at the bottom. */}
            <div className="flex flex-col gap-6 lg:justify-between lg:gap-8">
              <div className="flex flex-col gap-6">
                <p className="label text-xs font-medium text-gold md:text-label">
                  {heading.label}
                </p>
                <h2 className="text-4xl leading-heading font-extralight tracking-display text-balance md:text-5xl">
                  {heading.title}
                </h2>
                <p className="max-w-copy text-lg leading-prose text-pretty text-ink/75">
                  {intro}
                </p>
              </div>
              {/* The four reasons as a 2×2 table: hairline cells on the fog border colour. */}
              <ul className="grid gap-px border border-fog bg-fog sm:grid-cols-2">
                {perks.map((perk) => (
                  <li
                    key={perk.title}
                    className="flex flex-col gap-1 bg-white px-5 py-5"
                  >
                    <span className="text-lg font-normal">{perk.title}</span>
                    <span className="text-meta leading-prose text-pretty text-ink/75">
                      {perk.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="inquire" className="scroll-mt-28 bg-cream p-7 md:p-10">
              <h2 className="mb-6 text-2xl leading-heading font-light md:text-h3-lg">
                Send us a note
              </h2>
              <InquiryForm />
            </div>
          </div>
        </section>

        <Reviews layout="marquee" />

        {/* Every way to reach the office, in one compact strip. */}
        <section className="px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto flex max-w-content flex-col items-center gap-10">
            <h2 className="text-3xl leading-heading font-extralight md:text-4xl">
              Get in touch
            </h2>
            <ul className="grid w-full gap-px border border-fog bg-fog sm:grid-cols-2 lg:grid-cols-4">
              {details.map(({ icon: Icon, label, lines, href }) => {
                const body = (
                  <>
                    <Icon
                      aria-hidden="true"
                      size={22}
                      weight="light"
                      className="shrink-0 text-gold"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="label text-xs font-semibold">
                        {label}
                      </span>
                      <span className="text-meta leading-prose text-ink/75">
                        {lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                  </>
                );
                const cell =
                  "flex h-full items-center gap-4 bg-white px-6 py-5";
                return (
                  <li key={label} className="bg-white">
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={cell}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className={cell}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
