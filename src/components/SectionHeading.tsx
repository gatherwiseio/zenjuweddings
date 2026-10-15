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
    <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <h2 className="text-balance text-[36px] leading-[1.15] font-light md:text-[52px]">{title}</h2>
      {label && (
        <p className={`label text-xs font-medium md:text-[13px] ${tone === "dark" ? "text-gold-light" : "text-gold"}`}>
          {label}
        </p>
      )}
    </div>
  );
}
