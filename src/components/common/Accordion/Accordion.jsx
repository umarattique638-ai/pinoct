import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";
import Reveal from "../Reveal";

/** Accessible single-open accordion. items: [{ q, a }] */
export default function Accordion({ items, defaultOpen = 0, className }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <Reveal key={item.q} i={i % 3} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-[19px] font-bold"
            >
              {item.q}
              <span
                className={cn(
                  "grid size-9 shrink-0 place-items-center rounded-full border transition duration-300 [&>svg]:w-[18px]",
                  isOpen ? "rotate-45 border-pink bg-pink text-white" : "border-line"
                )}
              >
                <Plus aria-hidden="true" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mb-6 max-w-[640px] text-base text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}
