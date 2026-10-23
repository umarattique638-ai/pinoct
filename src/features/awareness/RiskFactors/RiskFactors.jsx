import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tabs } from "@/components/common";
import { risks } from "@/data/awareness";
import "./RiskFactors.css";

const TABS = [
  { value: "fixed", label: "Can't be changed" },
  { value: "changeable", label: "You can influence" },
];
const LEVEL_LABEL = { 1: "Lower impact", 2: "Moderate", 3: "Higher impact" };

function RiskMeter({ level }) {
  return (
    <div className="meter" aria-label={LEVEL_LABEL[level]}>
      {[1, 2, 3].map((n) => <i key={n} className={n <= level ? "on" : ""} />)}
      <span>{LEVEL_LABEL[level]}</span>
    </div>
  );
}

export default function RiskFactors() {
  const [tab, setTab] = useState(TABS[0].value);
  return (
    <>
      <Tabs tabs={TABS} value={tab} onChange={setTab} label="Risk factor type" />
      <AnimatePresence mode="wait">
        <motion.div key={tab} className="risk-grid" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
          {risks[tab].map((r) => (
            <div key={r.title} className="card risk">
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <RiskMeter level={r.level} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
