"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { XIcon } from "@phosphor-icons/react";
import { GatherwiseForm } from "@/components/GatherwiseForm";
import { lockScroll, scrollToElement } from "@/components/motion/SmoothScroll";
import { contactPage } from "@/content/contact";

// The inquiry form as a pop-up, site-wide. Any link to /contact (the header's Inquire, every
// "Contact us" button) opens it in place instead of leaving the page; on the Contact page itself it
// glides to the form. The menu's "Contact Us" item still goes to the page, and new-tab clicks
// (cmd/ctrl/shift) are left alone.
export function InquiryDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const [opens, setOpens] = useState(0); // a fresh form each time it opens

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest('a[href="/contact"]');
      if (!link || link.closest("#site-menu")) return;
      // Capture phase + stopPropagation: runs before Next's <Link> handler, which would navigate.
      e.preventDefault();
      e.stopPropagation();
      if (pathname === "/contact") {
        const form = document.getElementById("inquire");
        if (form) scrollToElement(form);
        return;
      }
      document.querySelectorAll<HTMLDialogElement>("dialog[open]").forEach((d) => d.close());
      setOpens((n) => n + 1);
      dialogRef.current?.showModal();
      lockScroll(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      data-lenis-prevent
      ref={dialogRef}
      onClose={() => lockScroll(false)}
      onClick={(e) => e.target === dialogRef.current && close()}
      aria-labelledby="inquiry-dialog-title"
      className="m-auto max-h-(--dialog-max-h) w-(--dialog-w) overflow-y-auto overscroll-contain bg-white p-0 text-ink backdrop:bg-ink/70"
    >
      <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-10 sm:py-10">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-mist hover:text-ink sm:top-4 sm:right-4"
        >
          <XIcon aria-hidden="true" size={22} weight="light" />
        </button>
        <div className="flex flex-col gap-2 pr-10">
          <p className="label text-xs font-medium text-gold">{contactPage.heading.label}</p>
          <h2 id="inquiry-dialog-title" className="text-2xl leading-heading font-light sm:text-h3-lg">
            {contactPage.heading.title}
          </h2>
        </div>
        <p className="text-meta leading-prose text-pretty text-ink/75">{contactPage.intro}</p>
        <GatherwiseForm key={opens} />
      </div>
    </dialog>
  );
}

