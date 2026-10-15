"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClass } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { contact, pages } from "@/content/site";

// `overlay`: the header floats see-through over a full-screen hero (white text), then turns
// solid white and stays pinned once the hero has scrolled away. Pages without a hero: solid from the start.
export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const hero = document.getElementById("hero")?.firstElementChild as HTMLElement | null;
    const onScroll = () => setPastHero(window.scrollY > (hero?.offsetHeight ?? 600) - 96);
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
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    // Pinned so Menu and the primary Inquire action stay reachable down the whole page.
    <header
      className={`header-in ${overlay ? "fixed inset-x-0" : "sticky"} top-0 z-40 flex items-center justify-between gap-6 border-b px-6 py-4 transition-colors duration-300 md:px-14 md:py-5 ${
        floating ? "border-transparent bg-transparent" : "border-fog/70 bg-white"
      }`}
    >
      <Link href="/">
        <Logo tone={tone} />
      </Link>
      <div className="flex items-center gap-3">
        {/* Wrapper does the hiding: the button's own inline-flex would override `hidden`. */}
        <span className="hidden sm:block">
          <a href={`mailto:${contact.email}?subject=Inquiry`} className={buttonClass("primary", tone)}>
            Inquire
          </a>
        </span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
          className={buttonClass("secondary", tone)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-ink px-6 py-6 text-cream md:px-14 md:py-7"
        >
          <div className="flex items-center justify-between gap-6">
            <Logo tone="dark" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              className={buttonClass("secondary", "dark")}
            >
              Close
            </button>
          </div>
          <nav aria-label="Main" className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
            {pages.map((page) =>
              page.live ? (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setOpen(false)}
                  aria-current="page"
                  className="text-4xl font-extralight md:text-5xl"
                >
                  {page.label}
                </Link>
              ) : (
                <span key={page.href} aria-disabled="true" className="cursor-default text-4xl font-extralight text-rule md:text-5xl">
                  {page.label}
                </span>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
