import {
  CameraIcon,
  CertificateIcon,
  ChampagneIcon,
  ClipboardTextIcon,
  CrownSimpleIcon,
  FlowerTulipIcon,
  LeafIcon,
  MusicNotesIcon,
  PaintBrushIcon,
  BookOpenTextIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { TAX_RATE_LABEL, taxFor, type IconKey, type Inclusion, type ServicePackage } from "@/content/services";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const usdCents = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

// One quiet line icon per kind of inclusion (Phosphor, MIT).
const icons: Record<IconKey, typeof CameraIcon> = {
  coordination: ClipboardTextIcon,
  permit: CertificateIcon,
  officiant: BookOpenTextIcon,
  beauty: PaintBrushIcon,
  bouquet: FlowerTulipIcon,
  crown: CrownSimpleIcon,
  lei: LeafIcon,
  photo: CameraIcon,
  video: VideoCameraIcon,
  music: MusicNotesIcon,
  champagne: ChampagneIcon,
};

// Services page package list: one clean row per package (photo, name, type, one-line summary,
// price). Opening a row reveals its photos, everything it includes, and a price card with the tax
// and grand total. Native <details> sharing one `name`, so opening one closes the others and all
// the text stays in the HTML for search engines. Each row's id is the homepage "Learn more" anchor.
export function PackageList({ packages }: { packages: ServicePackage[] }) {
  return (
    <div className="border-t border-fog">
      {packages.map((pkg, i) => {
        const tax = taxFor(pkg.price);
        const iconList = pkg.groups.every((g) => g.items.every((item) => item.icon));
        return (
          <details key={pkg.id} id={pkg.id} name="packages" className="package group scroll-mt-28 border-b border-fog">
            <summary className="flex cursor-pointer items-start gap-4 py-7 md:items-center md:gap-8 md:py-8">
              <span className="label w-8 shrink-0 pt-1.5 text-xs font-medium text-gold tabular-nums md:w-10 md:pt-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Cover photo (tablet and up). */}
              <span className="relative hidden aspect-(--aspect-package-thumb) w-(--package-thumb-w) shrink-0 overflow-hidden bg-fog md:block">
                <Image src={pkg.photos[0].src} alt="" fill sizes="160px" className="object-cover transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-105" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-2">
                <span className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-gold">
                  {pkg.type}
                  {pkg.popular && (
                    <span className="rounded-full bg-cream-muted px-2.5 py-0.5 text-tiny tracking-meta text-gold-deep">
                      Most popular
                    </span>
                  )}
                </span>
                <span translate="no" className="text-h3 leading-heading font-extralight md:text-h3-lg">
                  {pkg.name}
                  {pkg.meaning && <span className="ml-3 text-lg font-normal text-ink/70">{pkg.meaning}</span>}
                </span>
                <span className="text-meta leading-prose font-normal text-ink/90">{pkg.summary}</span>
                <span className="text-meta font-normal text-ink">
                  <span className="text-lg tabular-nums">{usd.format(pkg.price)}</span>
                  <span className="text-ink/80"> + {TAX_RATE_LABEL}</span>
                </span>
              </span>
              {/* Plus turns into a minus when open. */}
              <span
                aria-hidden="true"
                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/30 transition-colors group-hover:border-ink group-open:border-ink group-open:bg-ink group-open:text-cream"
              >
                <span className="absolute h-px w-3.5 bg-current" />
                <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>

            <div className="flex flex-col gap-12 pb-12 md:pl-18 lg:pb-16">
              {pkg.photos.length > 1 && (
                <div className="grid grid-cols-2 gap-2 md:grid-cols-(--package-photo-cols) md:gap-3">
                  {pkg.photos.map((photo, p) => (
                    <div
                      key={photo.src}
                      className={`relative overflow-hidden bg-fog ${p === 0 ? "col-span-2 aspect-(--aspect-package) md:col-span-1 md:aspect-auto" : "aspect-square md:aspect-auto"} md:h-(--package-photo-h)`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes={p === 0 ? "(min-width: 768px) 45vw, 100vw" : "(min-width: 768px) 22vw, 50vw"}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="grid gap-12 lg:grid-cols-(--package-detail-cols) lg:gap-16">
                <div className="flex flex-col gap-10">
                  <p className="max-w-copy-legal text-lg leading-prose font-normal text-ink">{pkg.overview}</p>
                  {pkg.groups.map((group, g) => (
                    <div key={group.title ?? g} className="flex flex-col gap-5">
                      {group.title && <h4 className="label text-xs font-semibold">{group.title}</h4>}
                      {iconList ? <IconList items={group.items} /> : <BulletList items={group.items} />}
                    </div>
                  ))}
                  {pkg.closing && <p className="max-w-copy-legal text-body leading-prose font-normal text-ink">{pkg.closing}</p>}
                </div>

                <aside className="flex flex-col gap-6 self-start bg-cream p-7 md:p-9 lg:sticky lg:top-28">
                  <div className="flex flex-col gap-3">
                    <p className="label text-xs font-medium text-gold-deep">Investment</p>
                    <dl className="flex flex-col gap-2 text-meta font-normal text-ink">
                      <div className="flex justify-between gap-4">
                        <dt>Package price</dt>
                        <dd className="tabular-nums">{usdCents.format(pkg.price)}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Tax (4.712%)</dt>
                        <dd className="tabular-nums">{usdCents.format(tax)}</dd>
                      </div>
                      <div className="mt-2 flex items-baseline justify-between gap-4 border-t border-cream-muted pt-3">
                        <dt className="label text-xs font-semibold">Grand total</dt>
                        <dd className="text-2xl font-light tabular-nums">{usdCents.format(pkg.price + tax)}</dd>
                      </div>
                    </dl>
                  </div>
                  <dl className="flex flex-col gap-4 border-t border-cream-muted pt-6">
                    {pkg.details.map((d) => (
                      <div key={d.title} className="flex flex-col gap-1">
                        <dt className="label text-xs font-semibold">{d.title}</dt>
                        <dd className="text-meta leading-prose font-normal text-ink/90">{d.text}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="pt-2">
                    <ButtonLink href="/contact">Contact us</ButtonLink>
                  </div>
                </aside>
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}

// One column: icon, name, then her description underneath.
function IconList({ items }: { items: Inclusion[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item) => {
        const Icon = item.icon ? icons[item.icon] : null;
        return (
          <li key={item.title} className="flex gap-5">
            <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
              {Icon && <Icon size={22} weight="light" />}
            </span>
            <span className="flex flex-col gap-1 pt-1">
              <span className="text-body font-medium text-ink">{item.title}</span>
              {item.text && <span className="text-meta leading-prose font-normal text-ink/85">{item.text}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

// Packages not yet moved to the icon layout: two-column bullet list.
function BulletList({ items }: { items: Inclusion[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3.5">
          <span aria-hidden="true" className="mt-(--bullet-offset) h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span className="flex flex-col gap-0.5 text-meta leading-prose font-normal">
            <span className="font-medium text-ink">{item.title}</span>
            {item.text && <span className="text-ink/85">{item.text}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
