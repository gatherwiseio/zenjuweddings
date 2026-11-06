"use client";

import { ArrowUpRightIcon, EnvelopeSimpleIcon, MagnifyingGlassIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { scrollToElement } from "@/components/motion/SmoothScroll";
import type { Vendor, VendorCategory } from "@/content/vendors";

const matches = (vendor: Vendor, category: VendorCategory, q: string) =>
  `${vendor.name} ${vendor.with ?? ""} ${vendor.text} ${category.label}`.toLowerCase().includes(q);

// Preferred Vendors directory: every vendor stays on the page, one section per category, as compact
// rows (logo, name, one line, links). A search box under the intro filters by name, company,
// description or category; centered underline tabs, pinned under the header, jump to each section
// and underline the one you're reading.
export function VendorDirectory({ categories }: { categories: VendorCategory[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(categories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      categories
        .map((c) => ({ ...c, vendors: q ? c.vendors.filter((v) => matches(v, c, q)) : c.vendors }))
        .filter((c) => c.vendors.length > 0),
    [categories, q],
  );
  const total = visible.reduce((n, c) => n + c.vendors.length, 0);

  // Underline the tab of the section currently under the bar.
  useEffect(() => {
    const onScroll = () => {
      let current = visible[0]?.id;
      for (const c of visible) {
        const el = document.getElementById(c.id);
        if (!el) continue;
        const offset = parseFloat(getComputedStyle(el).scrollMarginTop) + 8;
        if (el.getBoundingClientRect().top <= offset) current = c.id;
      }
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  // Searching shortens the page: if you were scrolled into the list, bring the results back up.
  useEffect(() => {
    const list = listRef.current;
    if (list && list.getBoundingClientRect().top < 0) scrollToElement(list, { immediate: true });
  }, [q]);

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
    <div className="flex flex-col">
      <label className="relative mx-auto mt-8 flex w-full max-w-sm items-center md:mt-10">
        <span className="sr-only">Search vendors</span>
        <MagnifyingGlassIcon aria-hidden="true" size={18} className="pointer-events-none absolute left-4 text-ink/50" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search vendors"
          className="h-11 w-full rounded-full border border-fog bg-white pr-11 pl-11 text-meta text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-1.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-ink/60 hover:bg-mist hover:text-ink"
          >
            <XIcon size={16} />
          </button>
        )}
      </label>

      <div ref={listRef} className="scroll-mt-(--header-h) md:scroll-mt-(--header-h-md)">
        <div className="sticky top-(--header-h) z-30 -mx-6 mt-6 bg-white px-6 md:top-(--header-h-md) md:-mx-14 md:px-14">
          <nav aria-label="Vendor categories" className="mx-auto max-w-content border-b border-fog">
            <div ref={tabsRef} className="scrollbar-none -mx-6 flex gap-6 overflow-x-auto px-6 md:mx-0 md:justify-center md:px-0 lg:gap-8">
              {categories.map((c) => {
                const count = visible.find((v) => v.id === c.id)?.vendors.length ?? 0;
                const isActive = active === c.id && count > 0;
                return (
                  <button
                    key={c.id}
                    type="button"
                    data-tab={c.id}
                    disabled={count === 0}
                    onClick={() => jump(c.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`label -mb-px flex h-12 shrink-0 cursor-pointer items-center border-b-2 text-xs font-medium whitespace-nowrap transition-colors disabled:cursor-default disabled:opacity-35 ${
                      isActive ? "border-ink text-ink" : "border-transparent text-ink/55 hover:text-ink"
                    }`}
                  >
                    {c.tab ?? c.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        <p aria-live="polite" className="sr-only">
          {q ? `${total} vendor${total === 1 ? "" : "s"} found` : ""}
        </p>

        {visible.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <p className="text-xl font-light">No vendors match “{query}”.</p>
            <button type="button" onClick={() => setQuery("")} className="label link-draw cursor-pointer text-xs font-semibold text-gold">
              Show all vendors
            </button>
          </div>
        ) : (
          <div className="mx-auto flex w-full max-w-content flex-col gap-14 pt-10 md:gap-16 md:pt-12">
            {visible.map((c) => (
              <section
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-title`}
                className="scroll-mt-(--vendor-scroll-mt) md:scroll-mt-(--vendor-scroll-mt-md)"
              >
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h2 id={`${c.id}-title`} className="text-3xl leading-heading font-extralight">
                    {c.label}
                  </h2>
                  <span className="label text-xs font-medium text-ink/50 tabular-nums">
                    {c.vendors.length} {c.vendors.length === 1 ? "vendor" : "vendors"}
                  </span>
                </div>
                <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
                  {c.vendors.map((v) => (
                    <VendorCard key={`${c.id}-${v.name}`} vendor={v} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function VendorCard({ vendor }: { vendor: Vendor }) {
  const site = vendor.url?.includes("instagram.com") ? "Instagram" : "Website";
  return (
    <li className="flex gap-5 border-t border-fog pt-6">
      <div className="relative size-(--vendor-logo) shrink-0 overflow-hidden border border-fog bg-white md:size-(--vendor-logo-md)">
        {vendor.logo ? (
          <Image src={vendor.logo} alt={`${vendor.name} logo`} fill sizes="104px" className="object-contain p-3" />
        ) : vendor.image ? (
          <Image src={vendor.image} alt="" fill sizes="104px" className="object-cover" />
        ) : (
          // No logo: the name, set small, as a quiet stand-in.
          <span aria-hidden="true" className="label flex h-full items-center justify-center p-2 text-center text-tiny leading-snug font-medium text-balance text-ink/55">
            {vendor.name}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="text-lg leading-heading font-normal">{vendor.name}</h3>
        {vendor.with && <p className="label text-tiny font-medium text-gold-deep">{vendor.with}</p>}
        <p className="text-meta leading-prose text-pretty text-ink/75">{vendor.text}</p>
        <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-meta">
          {vendor.url && (
            <a href={vendor.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-6 items-center gap-1 font-medium text-ink hover:text-gold-deep">
              {site}
              <ArrowUpRightIcon aria-hidden="true" size={14} />
              <span className="sr-only">for {vendor.name} (opens in a new tab)</span>
            </a>
          )}
          {vendor.phone && (
            <a href={`tel:+1${vendor.phone.replace(/\D/g, "")}`} className="inline-flex min-h-6 items-center gap-1.5 text-ink/75 hover:text-ink">
              <PhoneIcon aria-hidden="true" size={14} />
              {vendor.phone}
            </a>
          )}
          {vendor.email && (
            <a href={`mailto:${vendor.email}`} className="inline-flex min-h-6 items-center gap-1.5 text-ink/75 hover:text-ink">
              <EnvelopeSimpleIcon aria-hidden="true" size={14} />
              Email
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
