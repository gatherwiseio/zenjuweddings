"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClass } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { pages } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

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
    <header className="flex items-center justify-between gap-6 px-6 py-6 md:px-14 md:py-7">
      <Link href="/" aria-label="Zenju Weddings, home">
        <Logo />
      </Link>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="site-menu"
        className={buttonClass("secondary")}
      >
        Menu
      </button>

      {open && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 text-cream md:px-14 md:py-7"
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
