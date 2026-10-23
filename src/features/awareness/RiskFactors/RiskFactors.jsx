import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Tabs } from "@/components/common";
import { risks } from "@/data/awareness";
import { cn } from "@/utils/cn";

const TABS = [
  { value: "fixed", label: "Can't be changed" },
  { value: "changeable", label: "You can influence" },
];
const LEVEL_LABEL = { 1: "Lower impact", 2: "Moderate", 3: "Higher impact" };

function RiskMeter({ level }) {
  return (
    <div className="mt-[18px] flex items-center gap-1" aria-label={LEVEL_LABEL[level]}>
      {[1, 2, 3].map((n) => (
        <i key={n} className={cn("h-1.5 flex-1 rounded-full", n <= level ? "bg-pink" : "bg-bg-2")} />
      ))}
      <span className="ml-2 min-w-[76px] text-xs font-bold whitespace-nowrap text-muted">{LEVEL_LABEL[level]}</span>
    </div>
  );
}

export default function RiskFactors() {
  const [tab, setTab] = useState(TABS[0].value);
  return (
    <>
      <Tabs tabs={TABS} value={tab} onChange={setTab} label="Risk factor type" />
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.3 }}
        >
          {risks[tab].map((r) => (
            <Card key={r.title} className="p-6">
              <h3 className="text-[19px] font-bold">{r.title}</h3>
              <p className="mt-2 text-[14.5px] text-muted">{r.text}</p>
              <RiskMeter level={r.level} />
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
