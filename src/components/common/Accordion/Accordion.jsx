import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";
import Reveal from "../Reveal";
import "./Accordion.css";

/** Accessible single-open accordion. items: [{ q, a }] */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <Reveal key={item.q} i={i % 3} className={cn("faq", isOpen && "open")}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={panelId}>
              {item.q}
              <span className="pm"><Plus /></span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  className="ans"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}
