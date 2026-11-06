"use client";

import { ArrowUpRightIcon, EnvelopeSimpleIcon, MagnifyingGlassIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { scrollToElement } from "@/components/motion/SmoothScroll";
import type { Vendor, VendorCategory } from "@/content/vendors";

const matches = (vendor: Vendor, category: VendorCategory, q: string) =>
  `${vendor.name} ${vendor.with ?? ""} ${vendor.text} ${category.label}`.toLowerCase().includes(q);

// Preferred Vendors directory: every vendor stays on the page, one section per category. A bar
// pinned under the header holds a search box (filters by name, company, description or category)
// and underline tabs that jump to each section; the tab for the section you're reading is underlined.
export function VendorDirectory({ categories }: { categories: VendorCategory[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(categories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
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

  // Searching shortens the page: if you were scrolled into the list, bring the results back up
  // under the bar instead of leaving you below them.
  useEffect(() => {
    const root = rootRef.current;
    if (root && root.getBoundingClientRect().top < 0) scrollToElement(root, { immediate: true });
  }, [q]);

  // Keep the underlined tab in view when the tabs scroll sideways (phones).
  useEffect(() => {
    const tab = tabsRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    const row = tabsRef.current;
    if (tab && row) row.scrollTo({ left: tab.offsetLeft - row.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollToElement(el);
  };

  return (
    <div ref={rootRef} className="scroll-mt-(--header-h) md:scroll-mt-(--header-h-md)">
      <div className="sticky top-(--header-h) z-30 -mx-6 border-b border-fog bg-white px-6 md:top-(--header-h-md) md:-mx-14 md:px-14">
        <div className="mx-auto flex max-w-content flex-col gap-3 py-4 xl:flex-row xl:items-center xl:gap-10 xl:py-3">
          <label className="relative flex items-center xl:order-2 xl:w-64 xl:shrink-0">
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
          <nav aria-label="Vendor categories" className="min-w-0 flex-1 xl:order-1">
            <div ref={tabsRef} className="scrollbar-none -mx-6 flex gap-6 overflow-x-auto px-6 md:-mx-0 md:px-0">
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
                    className={`label flex h-11 shrink-0 cursor-pointer items-center border-b-2 text-xs font-medium whitespace-nowrap transition-colors disabled:cursor-default disabled:opacity-35 ${
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
        <div className="mx-auto flex max-w-content flex-col gap-16 pt-12 md:gap-20 md:pt-16">
          {visible.map((c) => (
            <section
              key={c.id}
              id={c.id}
              aria-labelledby={`${c.id}-title`}
              className="scroll-mt-(--vendor-scroll-mt) md:scroll-mt-(--vendor-scroll-mt-md) xl:scroll-mt-(--vendor-scroll-mt-xl)"
            >
              <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-fog pb-4">
                <h2 id={`${c.id}-title`} className="text-3xl leading-heading font-extralight md:text-4xl">
                  {c.label}
                </h2>
                <span className="label text-xs font-medium text-ink/50 tabular-nums">
                  {c.vendors.length} {c.vendors.length === 1 ? "vendor" : "vendors"}
                </span>
              </div>
              <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {c.vendors.map((v) => (
                  <VendorCard key={`${c.id}-${v.name}`} vendor={v} category={c.label} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function VendorCard({ vendor, category }: { vendor: Vendor; category: string }) {
  const initials = vendor.name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <li className="group flex flex-col gap-4">
      <div className="relative aspect-(--aspect-vendor) overflow-hidden bg-mist">
        {vendor.image ? (
          <Image
            src={vendor.image}
            alt={`${vendor.name}, ${category.toLowerCase()}`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-105"
          />
        ) : (
          // No usable photo: a quiet name tile instead of a blurry logo.
          <div aria-hidden="true" className="flex h-full items-center justify-center">
            <span className="text-6xl font-extralight tracking-display text-ink/25">{initials}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl leading-heading font-light">{vendor.name}</h3>
        {vendor.with && <p className="label text-tiny font-medium text-gold-deep">{vendor.with}</p>}
        <p className="text-meta leading-prose text-pretty text-ink/75">{vendor.text}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-meta">
        {vendor.url && (
          <a href={vendor.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-6 items-center gap-1 font-medium text-ink hover:text-gold-deep">
            Website
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
          <a href={`mailto:${vendor.email}`} className="inline-flex min-h-6 items-center gap-1.5 break-all text-ink/75 hover:text-ink">
            <EnvelopeSimpleIcon aria-hidden="true" size={14} />
            Email
          </a>
        )}
      </div>
    </li>
  );
}
