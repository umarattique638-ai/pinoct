import { cn } from "@/utils/cn";
import Reveal from "./Reveal";

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="dot" />
      {children}
    </span>
  );
}

/** Eyebrow + two-tone headline + lead paragraph, used at the top of every section. */
export default function SectionHeader({ eyebrow, title, subtitle, lead, align = "left", className }) {
  return (
    <div className={cn("head", align === "center" && "center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal i={1} as="h2" className="title">
        {title}
        {subtitle && <span className="soft">{subtitle}</span>}
      </Reveal>
      {lead && (
        <Reveal i={2} as="p" className="lead">
          {lead}
        </Reveal>
      )}
    </div>
  );
}
