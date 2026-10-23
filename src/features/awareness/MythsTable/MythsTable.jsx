import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/common";
import { myths } from "@/data/awareness";
import "./MythsTable.css";

/** Two-column myth → fact comparison table. `limit` shows only the first N rows. */
export default function MythsTable({ limit }) {
  const rows = limit ? myths.slice(0, limit) : myths;
  return (
    <Reveal className="table-wrap">
      <div className="mf-head">
        <div className="m"><X size={20} /> Myth</div>
        <div className="f"><Check size={20} /> Fact</div>
      </div>
      {rows.map(([myth, fact], k) => (
        <motion.div key={myth} className="mf-row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: k * 0.05 }}>
          <div className="m"><X />{myth}</div>
          <div className="f"><Check />{fact}</div>
        </motion.div>
      ))}
    </Reveal>
  );
}
