import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { LegalBlock, LegalDoc, LegalItem } from "@/content/legal";

// Shared layout for the Privacy Policy and Terms & Conditions: a quiet title band, then the
// text in one readable column with an "On this page" list beside it (sticky on desktop).
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <a
        href="#main"
        className="label sr-only z-50 bg-ink px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="scroll-mt-24">
        <section className="bg-mist px-6 py-20 text-center md:px-14 md:py-28">
          <div className="mx-auto flex max-w-statement flex-col items-center gap-5">
            <p className="reveal-track label text-xs font-medium text-gold md:text-label">Legal</p>
            <h1 className="reveal-rise text-hero leading-display font-extralight tracking-display md:text-display">{doc.title}</h1>
            <p className="text-meta text-ink/70">Last updated {doc.updated}</p>
          </div>
        </section>

        <div className="mx-auto grid max-w-story grid-cols-1 gap-12 px-6 py-16 md:grid-cols-(--legal-cols) md:gap-16 md:px-14 md:py-24">
          <nav aria-label="On this page" className="md:sticky md:top-32 md:self-start">
            <p className="label mb-5 text-xs font-semibold">On this page</p>
            <ol className="flex flex-col border-l border-fog">
              {doc.sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px flex gap-3 border-l border-transparent py-2 pl-4 text-meta leading-snug text-ink/75 transition-colors hover:border-gold hover:text-ink"
                  >
                    <span className="text-gold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="flex max-w-copy-legal flex-col gap-12">
            <div className="flex flex-col gap-5">
              {doc.intro.map((block, i) => (
                <Block key={i} block={block} lead />
              ))}
            </div>
            {doc.sections.map((section, i) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-32 border-t border-fog pt-10">
                <p className="label mb-3 text-xs font-medium text-gold tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`${section.id}-title`} className="mb-6 text-h3 leading-heading font-light">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-5">
                  {section.blocks.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}
            <p className="border-t border-fog pt-10">
              <Link href="/" className="label font-semibold text-gold link-draw hover:text-gold-deep">
                Back to home
              </Link>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Block({ block, lead = false }: { block: LegalBlock; lead?: boolean }) {
  if ("list" in block) {
    return (
      <ul className="flex flex-col gap-3">
        {block.list.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </ul>
    );
  }
  return (
    <p className={lead ? "text-lg leading-prose text-ink" : "text-body leading-prose-loose text-ink/85"}>
      {block.lead && <strong className="font-medium text-ink">{block.lead} </strong>}
      {linkify(block.p)}
    </p>
  );
}

function Item({ item }: { item: LegalItem }) {
  const { lead, text, items } = typeof item === "string" ? { lead: undefined, text: item, items: undefined } : item;
  return (
    <li className="flex gap-4 text-body leading-prose text-ink/85">
      <span aria-hidden="true" className="mt-(--bullet-offset) h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
      <span className="flex flex-col gap-2.5">
        <span>
          {lead && <strong className="font-medium text-ink">{lead} </strong>}
          {text && linkify(text)}
        </span>
        {items && (
          <ul className="flex flex-col gap-2">
            {items.map((sub) => (
              <li key={sub} className="flex gap-3">
                <span aria-hidden="true" className="mt-(--bullet-offset) h-px w-3 shrink-0 bg-gold" />
                {linkify(sub)}
              </li>
            ))}
          </ul>
        )}
      </span>
    </li>
  );
}

// Turns email addresses, web addresses and "our Privacy Policy" in the legal text into links.
const linkPattern = /(https?:\/\/[^\s]+[^\s.,)]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+|our Privacy Policy)/g;
const linkClass = "text-gold underline decoration-1 underline-offset-4 hover:text-gold-deep wrap-anywhere";

function linkify(text: string): ReactNode {
  return text.split(linkPattern).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    if (part === "our Privacy Policy")
      return (
        <Fragment key={i}>
          our{" "}
          <Link href="/privacy-policy" className={linkClass}>
            Privacy Policy
          </Link>
        </Fragment>
      );
    const href = part.includes("@") && !part.startsWith("http") ? `mailto:${part}` : part;
    return (
      <a key={i} href={href} className={linkClass} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {part}
      </a>
    );
  });
}
