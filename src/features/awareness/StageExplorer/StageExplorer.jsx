import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow } from "@/components/common";
import { stages } from "@/data/awareness";
import { cn } from "@/utils/cn";
import "./StageExplorer.css";

/** Pick a stage (0–IV) to see its description and 5-year relative survival. */
export default function StageExplorer() {
  const [index, setIndex] = useState(1);
  const s = stages[index];

  return (
    <>
      <div className="stage-pick" role="tablist" aria-label="Cancer stage">
        {stages.map((x, k) => (
          <button key={x.n} role="tab" aria-selected={k === index} className={cn("stage-btn", k === index && "on")} onClick={() => setIndex(k)}>
            <b>{x.n}</b>
            <span>{x.name}</span>
          </button>
        ))}
      </div>
      <div className="stage-card" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div key={index} className="l" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.3 }}>
            <Eyebrow>Stage {s.n}</Eyebrow>
            <h3>{s.name}</h3>
            <p>{s.text}</p>
          </motion.div>
        </AnimatePresence>
        <div className="r">
          <small>5-year relative survival · {s.group}</small>
          <div className="big">{s.survival}</div>
          <div className="bar"><motion.div animate={{ width: `${s.pct}%` }} transition={{ duration: 0.8, ease: "easeOut" }} /></div>
          <p>Based on US SEER summary stages (ACS). Individual outcomes vary with tumour type, treatment and health.</p>
        </div>
      </div>
    </>
  );
}
