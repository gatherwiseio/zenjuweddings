import { buttonClass } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { marriageLicense } from "@/content/services";

// Services page, bottom: the essentials of a Hawaii marriage license (from her current page), as
// three numbered steps, then a white "at a glance" panel (fees and validity as big figures, what
// to bring, good to know) and the State's own application link.
export function MarriageLicense() {
  const { title, label, intro, steps, facts, bring, goodToKnow, applyUrl, note } = marriageLicense;
  return (
    <section id="marriage-license" className="scroll-mt-28 bg-mist section-band">
      <div className="mx-auto flex max-w-content flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading title={title} label={label} />
          <p className="max-w-copy text-lg leading-prose text-pretty text-ink/75">{intro}</p>
        </div>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 border-t border-ink/15 pt-6">
              <span className="text-4xl leading-none font-extralight text-gold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-normal">{step.title}</h3>
              <p className="text-meta leading-prose text-pretty text-ink/75">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="grid gap-10 bg-white p-7 md:grid-cols-2 md:p-10 lg:grid-cols-4 lg:gap-12 lg:p-12">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-2">
              <p className="label text-xs font-semibold">{fact.label}</p>
              <p className="text-5xl leading-none font-extralight">{fact.value}</p>
              <p className="text-meta leading-prose text-pretty text-ink/75">{fact.text}</p>
            </div>
          ))}
          <div className="flex flex-col gap-3">
            <p className="label text-xs font-semibold">What to bring</p>
            <ul className="flex flex-col gap-3">
              {bring.map((item) => (
                <li key={item} className="flex gap-3 text-meta leading-prose text-pretty text-ink/75">
                  <span aria-hidden="true" className="mt-(--bullet-offset) h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="label text-xs font-semibold">Good to know</p>
            <ul className="flex flex-col gap-3">
              {goodToKnow.map((item) => (
                <li key={item} className="flex gap-3 text-meta leading-prose text-pretty text-ink/75">
                  <span aria-hidden="true" className="mt-(--bullet-offset) h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <a href={applyUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClass("secondary")} w-full sm:w-fit`}>
            Apply online
          </a>
          <p className="max-w-copy text-tiny tracking-meta text-pretty text-ink/60 uppercase">{note}</p>
        </div>
      </div>
    </section>
  );
}
