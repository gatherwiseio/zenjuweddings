import Image from "next/image";

// Header lockup: Yanicke's green lotus beside her wordmark ("Zenju Weddings", traced to vector
// from her original logo and used as an SVG mask filled with a color token), over a small tracked
// "and events of Hawaii, LLC" line: white over the hero video, leaf green everywhere else.
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
      <span className="flex flex-col gap-0.5">
        <span className="sr-only">Zenju Weddings and events of Hawaii, LLC</span>
        <span
          aria-hidden="true"
          className={`mask-wordmark block aspect-(--aspect-wordmark) w-(--wordmark-w) md:w-(--wordmark-w-lg) ${
            tone === "dark" ? "bg-cream" : "bg-lagoon"
          }`}
        />
        <span
          aria-hidden="true"
          className={`text-micro leading-none font-medium tracking-logo-sub whitespace-nowrap uppercase md:text-caption ${
            tone === "dark" ? "text-white" : "text-leaf"
          }`}
        >
          and events of Hawaii, LLC
        </span>
      </span>
    </span>
  );
}
