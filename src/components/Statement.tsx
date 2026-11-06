// Large centered statement with her ink lotus above it. Words fill in from faint to full as it
// scrolls through (see .word-fill). Pass `nbsp` text where two words must stay together.
export function Statement({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <div className="mx-auto flex max-w-statement flex-col items-center gap-8 text-center md:gap-10">
      {/* Her lotus on its own, in ink, as a small mark above the statement. */}
      <span aria-hidden="true" className="mask-lotus reveal-scale block aspect-(--aspect-lotus) w-12 bg-ink md:w-16" />
      <p className="word-fill text-3xl leading-statement-sm font-extralight md:text-statement md:leading-statement">
        {words.map((word, i) => (
          // Per-word index drives each word's slot in the scroll range.
          <span key={i} style={{ "--i": i } as React.CSSProperties}>
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}
