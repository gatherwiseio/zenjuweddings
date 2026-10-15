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

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (selected + step + packages.length) % packages.length;
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="flex w-full max-w-content flex-col gap-14 lg:flex-row lg:gap-20">
      <div className="flex flex-col gap-10 lg:w-96 lg:shrink-0">
        <SectionHeading title="Our Packages" label="Tailored to your budget" tone="dark" align="left" />
        <div role="tablist" aria-label="Packages" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col border-t border-rule">
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
                onClick={() => setSelected(i)}
                className={`group flex min-h-11 cursor-pointer items-center justify-between gap-4 border-b border-rule py-5 text-left transition-colors ${
                  active ? "text-gold-light" : "text-stone hover:text-cream"
                }`}
              >
                <span translate="no" className="text-3xl font-light">
                  {pkg.name}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-px bg-gold-light transition-all duration-500 ease-out-expo ${active ? "w-8" : "w-0 group-hover:w-4"}`}
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
        <div className="relative h-(--package-img-h) overflow-hidden bg-rule">
          <Image
            src={current.image.src}
            alt={current.image.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={`object-cover ${{ top: "object-top", center: "object-center", lower: "object-(--focus-lower)" }[current.image.focus]}`}
          />
        </div>
        <p className="label text-xs font-medium text-gold-light">
          {current.type}
          {current.meaning ? ` · ${current.meaning}` : ""}
        </p>
        <p className="text-lg leading-prose text-cream-muted">{current.summary}</p>
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
          <div className="sticky top-0 flex items-start justify-between gap-6 border-b border-fog bg-white px-8 pt-8 pb-6 md:px-10">
            <div className="flex flex-col gap-2">
              <p className="label text-xs font-medium text-gold">{current.type}</p>
              <h3 id="package-dialog-title" translate="no" className="text-h3-lg leading-tight font-light">
                {current.name}
              </h3>
            </div>
            <button type="button" onClick={() => dialogRef.current?.close()} className={buttonClass("secondary")} autoFocus>
              Close
            </button>
          </div>
          <div className="flex flex-col gap-5 px-8 py-8 md:px-10">
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
          <div className="flex flex-col gap-5 border-t border-fog bg-mist px-8 py-7 md:px-10">
            <p className="text-meta leading-relaxed">{current.note}</p>
            <div>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry: ${current.name}`)}`}
                className={buttonClass("primary")}
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
