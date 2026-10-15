// The one script-accent word per heading (Pinyon Script), slightly larger than its line.
export function Script({ children }: { children: React.ReactNode }) {
  return <span className="font-script text-[1.18em] leading-none tracking-normal">{children}</span>;
}
