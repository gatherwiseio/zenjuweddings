import Image from "next/image";

// Header lockup: Yanicke's green lotus beside her wordmark, traced to vector from her original
// logo ("Zenju Weddings" over the script "and events of Hawaii, LLC"). The two lines are SVG
// masks filled with color tokens, so the same files serve light and dark backgrounds.
// The real text is kept for screen readers and search engines.
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span translate="no" className="flex items-center gap-3 md:gap-4">
      <Image
        src="/images/brand/favicon-green.svg"
        alt=""
        width={48}
        height={48}
        unoptimized
        className="h-10 w-10 md:h-12 md:w-12"
      />
      <span className="flex flex-col gap-1.5 md:gap-2">
        <span className="sr-only">Zenju Weddings and events of Hawaii, LLC</span>
        <span
          aria-hidden="true"
          className={`mask-wordmark block aspect-(--aspect-wordmark) w-(--wordmark-w) md:w-(--wordmark-w-lg) ${
            tone === "dark" ? "bg-cream" : "bg-lagoon"
          }`}
        />
        <span aria-hidden="true" className="mask-subline block aspect-(--aspect-subline) w-(--subline-w) bg-leaf md:w-(--subline-w-lg)" />
      </span>
    </span>
  );
}
