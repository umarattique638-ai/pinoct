import { cn } from "@/utils/cn";
import Reveal from "./Reveal";

/**
 * Numbered (or labelled) 4-column step row for dark sections.
 * items: [{ title, text, label? }] — `label` replaces the number badge (e.g. a year).
 */
export default function StepsRow({ items, variant = "number" }) {
  return (
    <ol className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
      {items.map((s, i) => (
        <Reveal as="li" key={s.title} i={i} className="relative rounded-card border border-white/12 bg-white/5 p-7">
          {variant === "number" ? (
            <span className="grid size-[46px] place-items-center rounded-[14px] bg-pink font-display text-xl font-extrabold text-white shadow-pink">
              {i + 1}
            </span>
          ) : (
            <span className="bg-linear-110 from-pink-2 to-white bg-clip-text font-display text-[40px] leading-none font-extrabold tracking-[-0.04em] text-transparent">
              {s.label}
            </span>
          )}
          <h3 className={cn("text-[22px] text-white", variant === "number" ? "mt-5" : "mt-3.5")}>{s.title}</h3>
          <p className="mt-2.5 text-[15px] text-mauve-light">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
