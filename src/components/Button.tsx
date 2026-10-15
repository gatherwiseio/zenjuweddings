import Link from "next/link";
import { pages } from "@/content/site";

// Clickable hierarchy (see BRIEF.md › Chosen direction › Buttons / links):
//   link      → gold, semibold, underlined uppercase text. The default for "go see more":
//               Meet the team, View the gallery, phone/email. No arrows.
//   primary   → filled pill. Only the conversion action (Inquire, Email us). At most one per section.
//   secondary → outlined pill. Supporting actions: Learn more on cards, Menu, Close.
// `tone="dark"` swaps to the light-on-dark versions for charcoal panels.
type Variant = "primary" | "secondary" | "link";
type Tone = "light" | "dark";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary:
      "min-h-11 rounded-full bg-ink px-8 py-3 text-cream relative isolate overflow-hidden before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-500 before:ease-out-expo hover:before:scale-x-100",
    secondary: "min-h-11 rounded-full border border-ink px-6 py-3 text-ink hover:bg-ink hover:text-cream",
    link: "font-semibold text-gold underline decoration-1 underline-offset-6 hover:text-gold-deep",
  },
  dark: {
    primary:
      "min-h-11 rounded-full bg-cream px-8 py-3 text-ink relative isolate overflow-hidden before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-gold-light before:transition-transform before:duration-500 before:ease-out-expo hover:before:scale-x-100",
    secondary: "min-h-11 rounded-full border border-cream/80 px-6 py-3 text-cream hover:bg-cream hover:text-ink",
    link: "font-semibold text-gold-light underline decoration-1 underline-offset-6 hover:text-white",
  },
};

export function buttonClass(variant: Variant = "primary", tone: Tone = "light") {
  return `label inline-flex items-center justify-center transition-colors cursor-pointer ${styles[tone][variant]}`;
}

// Links to an internal page that isn't built yet keep their styling but aren't
// clickable; they become real links once the page is marked live in `pages`.
export function ButtonLink({
  href,
  variant = "primary",
  tone = "light",
  children,
}: {
  href: string;
  variant?: Variant;
  tone?: Tone;
  children: React.ReactNode;
}) {
  const className = buttonClass(variant, tone);
  const isInternal = href.startsWith("/");
  const page = pages.find((p) => p.href === href.split("#")[0]);

  if (isInternal && page && !page.live) {
    return (
      <span aria-disabled="true" title="Coming soon" className={`${className} cursor-default`}>
        {children}
      </span>
    );
  }
  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
