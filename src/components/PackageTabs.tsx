"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { buttonClass, ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, type Package } from "@/content/site";

// Split editorial packages (Claude Design variation B): package names as tabs on the left,
// the selected package's photo, description and highlights on the right.
export function PackageTabs({ packages }: { packages: Package[] }) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = packages[selected];

  const select = (i: number) => {
    setSelected(i);
  };

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (selected + step + packages.length) % packages.length;
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="flex w-full max-w-content flex-col gap-8 xl:flex-row xl:gap-20">
      <div className="flex flex-col gap-8 xl:w-96 xl:shrink-0 xl:gap-10">
        <SectionHeading title="Our Packages" label="Tailored to your budget" tone="dark" align="left" />
        {/* Underline tabs right above the package: two per row on phones (every name visible),
            one row on tablets and small laptops. Wide screens (1280+): the stacked list with a gold dash. */}
        <div
          role="tablist"
          aria-label="Packages"
          onKeyDown={onKeyDown}
          className="grid grid-cols-2 gap-x-6 sm:flex sm:gap-7 sm:border-b sm:border-rule xl:flex-col xl:gap-0 xl:border-t xl:border-b-0"
        >
          {packages.map((pkg, i) => {
            const active = i === selected;
            return (
              <button
                key={pkg.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${pkg.id}`}
                aria-selected={active}
                aria-controls="package-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => select(i)}
                className={`group relative flex min-h-11 shrink-0 cursor-pointer items-center justify-between gap-4 border-b border-rule py-3 text-left whitespace-nowrap transition-colors sm:border-b-0 xl:border-b xl:py-5 xl:whitespace-normal ${
                  active ? "text-gold-light" : "text-stone hover:text-cream"
                }`}
              >
                <span translate="no" className="text-lg font-light xl:text-3xl">
                  {pkg.name}
                </span>
                {/* Underline below 1280px, dash on wide screens. */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-0.5 bg-gold-light transition-opacity xl:hidden ${active ? "opacity-100" : "opacity-0"}`}
                />
                <span
                  aria-hidden="true"
                  className={`hidden h-px bg-gold-light transition-all duration-500 ease-out-expo xl:block ${active ? "w-8" : "w-0 group-hover:w-4"}`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={current.id}
        id="package-panel"
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="fade-in flex flex-1 flex-col gap-5"
      >
        <div className="wipe-in relative aspect-(--aspect-package) overflow-hidden bg-rule md:aspect-(--aspect-package-wide) xl:aspect-auto xl:h-(--package-img-h)">
          <Image
            src={current.image.src}
            alt={current.image.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={`zoom-settle object-cover ${{ top: "object-top", center: "object-center", lower: "object-(--focus-lower)" }[current.image.focus]}`}
          />
        </div>
        <p className="label text-xs font-medium text-gold-light">
          {current.type}
          {current.meaning ? ` · ${current.meaning}` : ""}
        </p>
        <p className="text-body leading-prose text-cream-muted md:text-lg">{current.summary}</p>
        <ul className="flex flex-col gap-2.5">
          {current.highlights.map((item) => (
            <li key={item} className="flex gap-3.5 text-base">
              <span aria-hidden="true" className="mt-(--bullet-offset) h-1.5 w-1.5 shrink-0 rounded-full bg-gold-light" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-2">
          <ButtonLink href={`/services#${current.id}`} variant="secondary" tone="dark">
            Learn more
          </ButtonLink>
          <button type="button" onClick={() => dialogRef.current?.showModal()} className={buttonClass("link", "dark")}>
            See all {current.includes.length} inclusions
          </button>
        </div>
        <p className="text-meta text-stone">Pricing is discussed during your consultation.</p>
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        aria-labelledby="package-dialog-title"
        className="m-auto max-h-(--dialog-max-h) w-(--dialog-w) overflow-y-auto overscroll-contain bg-white p-0 text-ink backdrop:bg-ink/70"
      >
        <div className="flex flex-col">
          <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-fog bg-white px-6 pt-6 pb-5 sm:gap-6 sm:px-8 sm:pt-8 sm:pb-6 md:px-10">
            <div className="flex flex-col gap-2">
              <p className="label text-xs font-medium text-gold">{current.type}</p>
              <h3 id="package-dialog-title" translate="no" className="text-2xl leading-heading font-light sm:text-h3-lg">
                {current.name}
              </h3>
            </div>
            <button type="button" onClick={() => dialogRef.current?.close()} className={buttonClass("secondary")} autoFocus>
              Close
            </button>
          </div>
          <div className="flex flex-col gap-5 px-6 py-6 sm:px-8 sm:py-8 md:px-10">
            <h4 className="label text-xs font-semibold">
              What&rsquo;s included <span className="text-gold">({current.includes.length})</span>
            </h4>
            <ul className="flex flex-col gap-3 text-body leading-snug">
              {current.includes.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="mt-(--bullet-offset-sm) h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 border-t border-fog bg-mist px-6 py-6 sm:px-8 sm:py-7 md:px-10">
            <p className="text-meta leading-relaxed">{current.note}</p>
            <div>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry: ${current.name}`)}`}
                className={`${buttonClass("primary")} w-full text-center sm:w-auto`}
              >
                Inquire about {current.name}
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
