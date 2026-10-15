import { Logo } from "@/components/Logo";
import { contact } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-fog px-6 py-14 md:px-14">
      <div className="mx-auto flex max-w-content flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-meta text-rule">Exclusive wedding planner of Hawaii, since 2010</p>
        </div>
        <address className="flex flex-col gap-1 text-meta leading-relaxed not-italic">
          <a href={`mailto:${contact.email}`} className="hover:underline">
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="hover:underline">
            {contact.phone}
          </a>
          {contact.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
      </div>
      <p className="mx-auto mt-12 max-w-content text-xs tracking-brand text-rule">
        © {contact.legalName}
      </p>
    </footer>
  );
}
