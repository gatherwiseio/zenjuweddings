import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact } from "@/content/site";

// Same full width and side padding as the header. Both columns are two lines tall and
// vertically centered, so neither side sits higher than the other.
export function Footer() {
  return (
    <footer className="border-t border-fog px-6 md:px-14">
      <div className="reveal-up flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <Link href="/" aria-label="Zenju Weddings home" className="self-start md:self-auto">
          <Logo />
        </Link>
        <address className="flex flex-col gap-1 text-meta leading-relaxed not-italic md:items-end md:text-right">
          {/* Email and phone share a line from tablets up; on phones each gets its own. */}
          <span className="flex flex-col md:block">
            <a href={`mailto:${contact.email}`} className="inline-block py-0.5 break-all hover:underline">
              {contact.email}
            </a>
            <span aria-hidden="true" className="hidden px-2 text-rule md:inline">
              ·
            </span>
            <a href={contact.phoneHref} className="inline-block py-0.5 whitespace-nowrap hover:underline">
              {contact.phone}
            </a>
          </span>
          <span>{contact.address.join(", ")}</span>
        </address>
      </div>
      {/* Slim closing bar: copyright on the left; legal links and social icons on the right. */}
      <div className="flex flex-col gap-1 border-t border-fog py-2.5 text-xs text-ink/80 md:flex-row md:items-center md:justify-between">
        <p>© {contact.legalName}</p>
        <div className="flex flex-wrap items-center gap-x-5">
          <Link href="/privacy-policy" className="py-1 transition-colors hover:text-gold">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="py-1 transition-colors hover:text-gold">
            Terms &amp; Conditions
          </Link>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zenju Weddings on Facebook"
            className="-mx-2 flex h-8 w-8 items-center justify-center transition-colors hover:text-gold"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
              <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.55V4.63a20.6 20.6 0 0 0-2.26-.13c-2.24 0-3.78 1.37-3.78 3.89v2.17H7.94v2.94h2.53V21z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
