import { cn } from "@/utils/cn";
import Reveal from "./Reveal";
import { useSectionTone } from "./sectionTone";

/** Small uppercase pill label with a glowing dot. */
export function Eyebrow({ children, className }) {
  const dark = useSectionTone() === "dark";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border py-1.5 pr-3.5 pl-2.5 text-[13px] font-bold tracking-[0.08em] uppercase",
        dark ? "border-white/12 bg-white/6 text-pink-2" : "border-line bg-white text-pink",
        className
      )}
    >
      <span className="size-[7px] rounded-full bg-pink shadow-[0_0_0_4px_rgba(230,51,122,0.18)]" />
      {children}
    </span>
  );
}

/** Eyebrow + two-tone headline + lead paragraph used at the top of every section. */
export default function SectionHeader({ eyebrow, title, subtitle, lead, align = "left", className }) {
  const dark = useSectionTone() === "dark";
  const center = align === "center";

  return (
    <div className={cn("mb-14", center && "text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal i={1} as="h2" className="mt-[18px] text-[clamp(34px,5vw,58px)] font-extrabold">
        {title}
        {subtitle && <span className={cn("block font-medium", dark ? "text-mauve" : "text-muted")}>{subtitle}</span>}
      </Reveal>
      {lead && (
        <Reveal i={2} as="p" className={cn("mt-5 max-w-[640px] text-lg", dark ? "text-mauve-light" : "text-muted", center && "mx-auto")}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}
