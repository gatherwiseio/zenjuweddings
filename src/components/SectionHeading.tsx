// Every section opens with this, after brookekeegan.com: a large, light,
// centered title with one short line of tracked uppercase beneath it.
// The label line is gold, the page's quiet accent; `tone="dark"` for charcoal panels.
export function SectionHeading({
  title,
  label,
  tone = "light",
  className = "",
}: {
  title: string;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`reveal-up flex flex-col items-center gap-5 text-center ${className}`}>
      <h2 className="text-balance text-[44px] leading-[1.05] font-extralight tracking-[-0.01em] md:text-[68px]">
        {title}
      </h2>
      {label && (
        <p className={`label text-xs font-medium md:text-[13px] ${tone === "dark" ? "text-gold-light" : "text-gold"}`}>
          {label}
        </p>
      )}
    </div>
  );
}
