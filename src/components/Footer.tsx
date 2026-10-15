import { Logo } from "@/components/Logo";
import { contact } from "@/content/site";

// Same full width and side padding as the header. Both columns are two lines tall and
// vertically centered, so neither side sits higher than the other.
export function Footer() {
  return (
    <footer className="border-t border-fog px-6 py-12 md:px-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <address className="flex flex-col gap-1 text-meta leading-relaxed not-italic md:items-end md:text-right">
          <span>
            <a href={`mailto:${contact.email}`} className="hover:underline">
              {contact.email}
            </a>
            <span aria-hidden="true" className="px-2 text-rule">
              ·
            </span>
            <a href={contact.phoneHref} className="whitespace-nowrap hover:underline">
              {contact.phone}
            </a>
          </span>
          <span>{contact.address.join(", ")}</span>
        </address>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-fog pt-6 text-xs tracking-brand text-rule md:flex-row md:justify-between">
        <p>© {contact.legalName}</p>
        <p>Exclusive wedding planner of Hawaii, since 2010</p>
      </div>
    </footer>
  );
}
