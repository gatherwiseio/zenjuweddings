"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buttonClass } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { lockScroll } from "@/components/motion/SmoothScroll";
import { contact, pages } from "@/content/site";

// `overlay`: the header floats see-through over a full-screen hero (white text), then turns
// solid white and stays pinned once the hero has scrolled away. Pages without a hero: solid from the start.
export function Header({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const hero = document.getElementById("hero")
      ?.firstElementChild as HTMLElement | null;
    const onScroll = () =>
      setPastHero(window.scrollY > (hero?.offsetHeight ?? 600) - 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [overlay]);

  const floating = overlay && !pastHero;
  const tone = floating ? "dark" : "light";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    lockScroll(true);
    return () => {
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [open]);

  return (
    // Pinned so Menu and the primary Inquire action stay reachable down the whole page.
    // The menu overlay sits beside the header, not inside it: the header's entrance animation
    // would otherwise trap the full-screen overlay inside the header's box.
    <>
      <header
        className={`header-in ${overlay ? "fixed inset-x-0" : "sticky"} top-0 z-40 flex items-center justify-between gap-3 border-b px-4 py-4 xs:gap-6 xs:px-6 transition-colors duration-300 md:px-14 md:py-5 ${
          floating
            ? "border-transparent bg-transparent"
            : "border-fog/70 bg-white"
        }`}
      >
        <Link href="/">
          <Logo tone={tone} />
        </Link>
        <div className="flex items-center gap-3">
          {/* Wrapper does the hiding: the button's own inline-flex would override `hidden`. */}
          <span className="hidden sm:block">
            <a
              href={`mailto:${contact.email}?subject=Inquiry`}
              className={buttonClass("primary", tone)}
            >
              Inquire
            </a>
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            className={`${buttonClass("secondary", tone)} max-xs:h-11 max-xs:w-11 max-xs:px-0`}
          >
            {/* Under 380px the word gives way to an icon so the full logo still fits. */}
            <span className="max-xs:sr-only">Menu</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="hidden h-5 w-5 stroke-current max-xs:block"
            >
              <path d="M3 6.5h14M3 13.5h14" strokeWidth="1.25" />
            </svg>
          </button>
        </div>
      </header>
      {/* Full-screen menu (after brookekeegan.com): light gray panel, the wordmark centered over a
          fine rule with Close where Menu was, the pages in the middle (each grows a touch on hover),
          and contact, the lotus mark and socials along the bottom. The top bar matches the header's
          height and padding so nothing jumps when it opens. */}
      {open && (
        <div
          id="site-menu"
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fade-in fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-mist px-4 text-ink xs:px-6 md:px-14"
        >
          <div className="border-b border-ink/25 py-4 md:py-5">
            <div className="relative flex min-h-11 items-center justify-end md:min-h-12">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="absolute left-1/2 -translate-x-1/2 py-1.5"
              >
                <span className="sr-only">Zenju Weddings home</span>
                <span
                  aria-hidden="true"
                  className="mask-wordmark block aspect-(--aspect-wordmark) w-(--menu-wordmark-w) bg-ink md:w-(--menu-wordmark-w-lg)"
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                autoFocus
                className="label min-h-11 cursor-pointer text-xs font-medium transition-opacity hover:opacity-60"
              >
                Close
              </button>
            </div>
          </div>
          <nav
            aria-label="Main"
            className="flex flex-1 flex-col items-center justify-center gap-4 py-12 text-center md:gap-5"
          >
            {pages.map((page) =>
              page.live ? (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === page.href ? "page" : undefined}
                  className="inline-block text-3xl leading-heading font-light transition-transform duration-500 ease-out-expo hover:scale-110 focus-visible:scale-110 xs:text-4xl md:text-5xl"
                >
                  {page.label}
                </Link>
              ) : (
                <span
                  key={page.href}
                  aria-disabled="true"
                  className="cursor-default text-3xl leading-heading font-light text-ink/35 xs:text-4xl md:text-5xl"
                >
                  {page.label}
                </span>
              ),
            )}
          </nav>
          <div className="flex flex-col items-center gap-5 pb-6 text-center text-tiny font-medium tracking-meta uppercase lg:grid lg:grid-cols-3 lg:items-end lg:pb-8">
            <span
              aria-hidden="true"
              className="mask-lotus block aspect-(--aspect-lotus) w-10 bg-ink lg:order-2 lg:w-12 lg:justify-self-center"
            />
            <div className="flex flex-col items-center gap-1 lg:order-1 lg:items-start lg:text-left">
              <p className="text-ink/60">Contact</p>
              <a
                href={`mailto:${contact.email}`}
                className="py-1 transition-opacity hover:opacity-60"
              >
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 lg:order-3 lg:items-end lg:text-right">
              <p className="text-ink/60">Social</p>
              <p className="flex gap-2">
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 transition-opacity hover:opacity-60"
                >
                  Facebook
                </a>
                <span aria-hidden="true" className="py-1">
                  /
                </span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 transition-opacity hover:opacity-60"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
