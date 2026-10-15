import Image from "next/image";

// Header lockup: Yanicke's green lotus (vector redraw of her original mark) beside a
// tracked uppercase wordmark (Avenir Next Condensed Demi Bold, #416274; cream on dark panels), with a small gold location line. `tone="dark"` for charcoal panels.
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
      <span className="flex flex-col gap-1.5">
        <span
          className={`font-logo text-sm leading-none font-semibold tracking-logo-sm whitespace-nowrap uppercase md:text-lg md:tracking-logo ${
            tone === "dark" ? "text-cream" : "text-logo"
          }`}
        >
          Zenju Weddings
        </span>
        <span
          className={`text-micro leading-none font-medium tracking-logo-sub uppercase md:text-caption ${
            tone === "dark" ? "text-gold-light" : "text-gold"
          }`}
        >
          Honolulu · Hawaii
        </span>
      </span>
    </span>
  );
}
