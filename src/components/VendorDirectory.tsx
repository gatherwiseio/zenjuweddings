"use client";

import { EnvelopeSimpleIcon, GlobeIcon, InstagramLogoIcon, PhoneIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { scrollToElement } from "@/components/motion/SmoothScroll";
import type { Vendor, VendorCategory } from "@/content/vendors";

// Preferred Vendors directory: every vendor on one page, a section per category, as compact rows
// as cards in two columns (logo or face, name, one line, icon links). Centered underline tabs, pinned under the
// header, jump to each section and underline the one you're reading.
export function VendorDirectory({ categories }: { categories: VendorCategory[] }) {
  const [active, setActive] = useState(categories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Underline the tab of the section currently under the bar.
  useEffect(() => {
    const onScroll = () => {
      let current = categories[0].id;
      for (const c of categories) {
        const el = document.getElementById(c.id);
        if (!el) continue;
        const offset = parseFloat(getComputedStyle(el).scrollMarginTop) + 8;
        if (el.getBoundingClientRect().top <= offset) current = c.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [categories]);

  // Keep the underlined tab in view when the tabs scroll sideways (phones).
  useEffect(() => {
    const tab = tabsRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    const row = tabsRef.current;
    if (tab && row && row.scrollWidth > row.clientWidth) {
      row.scrollTo({ left: tab.offsetLeft - row.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollToElement(el);
  };

  return (
    <div>
      {/* The bar's rule runs edge to edge; the tabs sit centered on it. */}
      <div className="sticky top-(--header-h) z-30 -mx-6 mt-8 border-b border-fog bg-white md:top-(--header-h-md) md:-mx-14 md:mt-10">
        <nav aria-label="Vendor categories">
          <div ref={tabsRef} className="scrollbar-none flex gap-6 overflow-x-auto px-6 md:justify-center md:px-14 lg:gap-8">
            {categories.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  data-tab={c.id}
                  onClick={() => jump(c.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`label -mb-px flex h-12 shrink-0 cursor-pointer items-center border-y-2 border-t-transparent text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive ? "border-b-ink text-ink" : "border-b-transparent text-ink/55 hover:text-ink"
                  }`}
                >
                  {c.tab ?? c.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <div className="mx-auto flex max-w-content flex-col gap-14 pt-12 md:gap-16 md:pt-14">
        {categories.map((c) => (
          <section
            key={c.id}
            id={c.id}
            aria-labelledby={`${c.id}-title`}
            className="scroll-mt-(--vendor-scroll-mt) md:scroll-mt-(--vendor-scroll-mt-md)"
          >
            <h2 id={`${c.id}-title`} className="border-b border-fog pb-4 text-3xl leading-heading font-extralight">
              {c.label}
            </h2>
            <ul className="mt-6 grid gap-3 lg:grid-cols-2 lg:gap-4">
              {c.vendors.map((v) => (
                <VendorCard key={`${c.id}-${v.name}`} vendor={v} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function VendorCard({ vendor }: { vendor: Vendor }) {
  const instagram = vendor.url?.includes("instagram.com");
  const initials = vendor.name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  const icon =
    "flex size-9 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-white";
  return (
    <li className="flex items-center gap-5 border border-fog bg-white p-4 md:gap-6 md:p-5">
      {/* Logos sit on beige; portraits fill the box; with neither, gold initials on beige. */}
      <div className="relative aspect-(--aspect-vendor-logo) w-(--vendor-logo) shrink-0 overflow-hidden bg-cream md:w-(--vendor-logo-md)">
        {vendor.logo ? (
          <Image src={vendor.logo} alt={`${vendor.name} logo`} fill sizes="128px" className="object-contain p-3 mix-blend-multiply" />
        ) : vendor.face ? (
          <Image src={vendor.face} alt="" fill sizes="128px" className="object-cover" />
        ) : (
          <span aria-hidden="true" className="flex h-full items-center justify-center text-3xl font-extralight tracking-display text-gold">
            {initials}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="text-lg leading-heading font-normal">{vendor.name}</h3>
        {vendor.with && <p className="label text-tiny font-medium text-gold-deep">{vendor.with}</p>}
        <p className="text-meta leading-prose text-pretty text-ink/75">{vendor.text}</p>
        <div className="mt-2 flex gap-2">
          {vendor.url && (
            <a href={vendor.url} target="_blank" rel="noopener noreferrer" aria-label={`${vendor.name} ${instagram ? "on Instagram" : "website"}`} className={icon}>
              {instagram ? <InstagramLogoIcon aria-hidden="true" size={17} /> : <GlobeIcon aria-hidden="true" size={17} />}
            </a>
          )}
          {vendor.phone && (
            <a href={`tel:+1${vendor.phone.replace(/\D/g, "")}`} aria-label={`Call ${vendor.name}, ${vendor.phone}`} title={vendor.phone} className={icon}>
              <PhoneIcon aria-hidden="true" size={17} />
            </a>
          )}
          {vendor.email && (
            <a href={`mailto:${vendor.email}`} aria-label={`Email ${vendor.name}`} title={vendor.email} className={icon}>
              <EnvelopeSimpleIcon aria-hidden="true" size={17} />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
