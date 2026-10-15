import Image from "next/image";

// Header lockup: Yanicke's green lotus (vector redraw of her original mark) beside a
// tracked uppercase wordmark, with a small gold location line. `tone="dark"` for charcoal panels.
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-3 md:gap-4">
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
          className={`text-[14px] leading-none font-normal tracking-[0.24em] whitespace-nowrap uppercase md:text-[18px] md:tracking-[0.32em] ${
            tone === "dark" ? "text-cream" : "text-ink"
          }`}
        >
          Zenju Weddings
        </span>
        <span
          className={`text-[9px] leading-none font-medium tracking-[0.34em] uppercase md:text-[10px] ${
            tone === "dark" ? "text-gold-light" : "text-gold"
          }`}
        >
          Honolulu · Hawaii
        </span>
      </span>
    </span>
  );
}
