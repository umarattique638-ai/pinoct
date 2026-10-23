import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import "./Tabs.css";

/** Segmented tab switcher with an animated pill. tabs: [{ value, label }] */
export default function Tabs({ tabs, value, onChange, label = "Tabs" }) {
  const layoutId = useId();
  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button key={t.value} role="tab" aria-selected={active} className={cn("tab", active && "on")} onClick={() => onChange(t.value)}>
            {active && <motion.span layoutId={layoutId} className="tab-bg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
