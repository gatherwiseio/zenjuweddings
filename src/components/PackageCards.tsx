"use client";

import { useRef, useState } from "react";
import { buttonClass, ButtonLink } from "@/components/Button";
import { contact, type Package } from "@/content/site";

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function PackageCards({ packages }: { packages: Package[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Package | null>(null);

  const open = (pkg: Package) => {
    setActive(pkg);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      {/* Each card spans 6 rows of a shared subgrid, so names, descriptions,
          highlights and buttons line up across all four cards. */}
      <ul className="grid w-full max-w-[1280px] gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((pkg, i) => (
          <li key={pkg.id} className="row-span-6 grid grid-rows-subgrid gap-y-4 border-t border-rule pt-8">
            <div className="flex items-baseline gap-4">
              <span className="text-[13px] font-medium tracking-[0.2em] text-gold-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 translate="no" className="text-[32px] leading-tight font-light md:text-[34px]">{pkg.name}</h3>
            </div>
            <p className="label text-xs font-medium text-gold-light">{pkg.type}</p>
            <p className="text-[16px] leading-[1.7] text-cream/90">{pkg.summary}</p>

            <ul className="flex flex-col gap-2 border-t border-rule/60 pt-4 text-[15px]">
              {pkg.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-light" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => open(pkg)}
              className="group flex cursor-pointer items-center gap-3 self-start text-left text-gold-light hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current">
                <PlusIcon />
              </span>
              <span className="label text-xs font-semibold">See all {pkg.includes.length} inclusions</span>
            </button>

            <div className="self-end">
              <ButtonLink href={`/services#${pkg.id}`} variant="secondary" tone="dark">
                Learn more
              </ButtonLink>
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-labelledby="package-dialog-title"
        className="m-auto max-h-[88vh] w-[min(560px,calc(100vw-32px))] overflow-y-auto overscroll-contain bg-white p-0 text-ink backdrop:bg-ink/70"
      >
        {active && (
          <div className="flex flex-col">
            <div className="sticky top-0 flex items-start justify-between gap-6 border-b border-fog bg-white px-8 pt-8 pb-6 md:px-10">
              <div className="flex flex-col gap-2">
                <p className="label text-xs font-medium text-gold">{active.type}</p>
                <h3 id="package-dialog-title" translate="no" className="text-[34px] leading-tight font-light">
                  {active.name}
                </h3>
              </div>
              <button type="button" onClick={close} className={buttonClass("secondary")} autoFocus>
                Close
              </button>
            </div>

            <div className="flex flex-col gap-5 px-8 py-8 md:px-10">
              <h4 className="label text-xs font-semibold">
                What&rsquo;s included <span className="text-gold">({active.includes.length})</span>
              </h4>
              <ul className="flex flex-col gap-3 text-[17px] leading-snug">
                {active.includes.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 border-t border-fog bg-mist px-8 py-7 md:px-10">
              <p className="text-[15px] leading-relaxed">{active.note}</p>
              <div>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry: ${active.name}`)}`}
                  className={buttonClass("primary")}
                >
                  Inquire about {active.name}
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
