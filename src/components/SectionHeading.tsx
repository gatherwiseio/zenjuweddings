// Every section opens with this, after brookekeegan.com: a large, light,
// centered title with one short line of tracked uppercase beneath it.
// The label line is gold, the page's quiet accent; `tone="dark"` for charcoal panels.
export function SectionHeading({
  title,
  label,
  tone = "light",
  align = "center",
  className = "",
}: {
  title: string;
  label?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={`reveal-up flex flex-col gap-5 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
      <h2 className="text-balance text-hero leading-display font-extralight tracking-display md:text-display">
        {title}
      </h2>
      {label && (
        <p className={`label text-balance text-xs font-medium md:text-label ${tone === "dark" ? "text-gold-light" : "text-gold"}`}>
          {label}
        </p>
      )}
    </div>
  );
}
