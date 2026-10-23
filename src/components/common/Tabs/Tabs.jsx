import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

/** Segmented tab switcher with an animated pill. tabs: [{ value, label }] */
export default function Tabs({ tabs, value, onChange, label = "Tabs", className }) {
  const layoutId = useId();
  return (
    <div role="tablist" aria-label={label} className={cn("relative mb-[30px] inline-flex gap-1 rounded-full border border-line bg-white p-[5px]", className)}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t.value)}
            className={cn("relative z-1 rounded-full px-[22px] py-[11px] text-[14.5px] font-bold transition-colors", active ? "text-white" : "text-muted hover:text-ink")}
          >
            {active && (
              <motion.span layoutId={layoutId} className="absolute inset-0 -z-1 rounded-full bg-pink" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
