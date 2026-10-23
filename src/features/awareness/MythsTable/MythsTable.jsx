import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/common";
import { myths } from "@/data/awareness";

const CELL = "flex gap-3 p-4 text-sm leading-normal md:px-7 md:py-5 md:text-[15px] [&>svg]:mt-px [&>svg]:w-5 [&>svg]:shrink-0";

/** Two-column myth → fact comparison table. `limit` shows only the first N rows. */
export default function MythsTable({ limit }) {
  const rows = limit ? myths.slice(0, limit) : myths;
  return (
    <Reveal className="overflow-hidden rounded-[26px] border border-line bg-white shadow-soft">
      <div className="hidden grid-cols-2 sm:grid">
        <div className="flex items-center gap-2.5 bg-[#faf3f6] p-4 font-display text-lg font-bold text-muted md:px-7 md:py-5"><X size={20} /> Myth</div>
        <div className="flex items-center gap-2.5 bg-pink p-4 font-display text-lg font-bold text-white md:px-7 md:py-5"><Check size={20} /> Fact</div>
      </div>
      {rows.map(([myth, fact], k) => (
        <motion.div
          key={myth}
          className="grid grid-cols-1 border-t border-line sm:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: k * 0.05 }}
        >
          <div className={`${CELL} border-b border-dashed border-line bg-[#fffbfd] text-muted line-through decoration-pink/45 sm:border-b-0 [&>svg]:text-[#d4a7b9]`}>
            <X aria-hidden="true" />{myth}
          </div>
          <div className={`${CELL} bg-white font-medium text-ink [&>svg]:text-ok`}>
            <Check aria-hidden="true" />{fact}
          </div>
        </motion.div>
      ))}
    </Reveal>
  );
}
