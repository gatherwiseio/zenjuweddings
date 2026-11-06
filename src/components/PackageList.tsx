import { ButtonLink } from "@/components/Button";
import { TAX_RATE_LABEL, type ServicePackage } from "@/content/services";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

// Services page package list: one clean row per package (name, type, one-line summary, price).
// Opening a row reveals everything it includes, with the price and booking details beside it.
// Native <details> sharing one `name`, so opening one closes the others and all the text stays in
// the HTML for search engines. Each row's id is the anchor the homepage "Learn more" links use.
export function PackageList({ packages }: { packages: ServicePackage[] }) {
  return (
    <div className="border-t border-fog">
      {packages.map((pkg, i) => (
        <details
          key={pkg.id}
          id={pkg.id}
          name="packages"
          className="package group scroll-mt-28 border-b border-fog"
        >
          <summary className="flex cursor-pointer items-start gap-4 py-7 transition-colors md:items-center md:gap-8 md:py-9">
            <span className="label w-8 shrink-0 pt-1.5 text-xs font-medium text-gold tabular-nums md:w-12 md:pt-0">
              {String(i + 1).padStart(2, "0")}
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
                {pkg.meaning && <span className="ml-3 text-lg font-light text-ink/60">{pkg.meaning}</span>}
              </span>
              <span className="text-meta leading-prose text-ink/75">{pkg.summary}</span>
              {/* Phones: price sits under the summary so the text gets the full width. */}
              <span className="text-lg font-light tabular-nums md:hidden">
                {usd.format(pkg.price)} <span className="text-tiny tracking-meta text-ink/60 uppercase">+ tax</span>
              </span>
            </span>
            <span className="flex shrink-0 flex-col items-end gap-3 md:flex-row md:items-center md:gap-8">
              <span className="hidden flex-col items-end md:flex">
                <span className="text-xl font-light tabular-nums md:text-2xl">{usd.format(pkg.price)}</span>
                <span className="text-tiny tracking-meta text-ink/60 uppercase">+ tax</span>
              </span>
              {/* Plus turns into a minus when open. */}
              <span
                aria-hidden="true"
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 transition-colors group-hover:border-ink group-open:border-ink group-open:bg-ink group-open:text-cream"
              >
                <span className="absolute h-px w-3.5 bg-current" />
                <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </span>
          </summary>

          <div className="grid gap-12 pb-12 md:pl-20 lg:grid-cols-(--package-detail-cols) lg:gap-16 lg:pb-16">
            <div className="flex flex-col gap-10">
              <p className="max-w-copy-legal text-lg leading-prose">{pkg.overview}</p>
              {pkg.groups.map((group, g) => (
                <div key={group.title ?? g} className="flex flex-col gap-5">
                  {group.title && <h4 className="label text-xs font-semibold">{group.title}</h4>}
                  <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item.title} className="flex gap-3.5">
                        <span aria-hidden="true" className="mt-(--bullet-offset) h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span className="flex flex-col gap-0.5 text-meta leading-prose">
                          <span className="font-medium text-ink">{item.title}</span>
                          {item.text && <span className="text-ink/75">{item.text}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <aside className="flex flex-col gap-6 self-start bg-mist p-7 md:p-9 lg:sticky lg:top-28">
              <div className="flex flex-col gap-1">
                <p className="label text-xs font-medium text-gold">Investment</p>
                <p className="text-hero leading-heading font-extralight tabular-nums">{usd.format(pkg.price)}</p>
                <p className="text-meta text-ink/70">plus {TAX_RATE_LABEL}</p>
              </div>
              <dl className="flex flex-col gap-4 border-t border-fog pt-6">
                {pkg.details.map((d) => (
                  <div key={d.title} className="flex flex-col gap-1">
                    <dt className="label text-xs font-semibold">{d.title}</dt>
                    <dd className="text-meta leading-prose text-ink/80">{d.text}</dd>
                  </div>
                ))}
              </dl>
              <div className="pt-2">
                <ButtonLink href="/contact">Inquire about {pkg.name}</ButtonLink>
              </div>
            </aside>
          </div>
        </details>
      ))}
    </div>
  );
}
