import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow } from "@/components/common";
import { stages } from "@/data/awareness";
import { cn } from "@/utils/cn";

/** Pick a stage (0–IV) to see its description and 5-year relative survival. */
export default function StageExplorer() {
  const [index, setIndex] = useState(1);
  const s = stages[index];

  return (
    <>
      <div role="tablist" aria-label="Cancer stage" className="mb-[22px] grid grid-cols-5 gap-1.5 md:gap-2.5">
        {stages.map((x, k) => {
          const on = k === index;
          return (
            <button
              key={x.n}
              role="tab"
              aria-selected={on}
              onClick={() => setIndex(k)}
              className={cn(
                "rounded-[18px] border px-1 py-3 text-center transition duration-250 md:px-2.5 md:py-[18px]",
                on ? "border-pink bg-pink shadow-pink" : "border-white/12 bg-white/4 hover:bg-white/8"
              )}
            >
              <b className="block font-display text-[30px] leading-none text-white">{x.n}</b>
              <span className={cn("hidden text-[12.5px] font-semibold md:inline", on ? "text-pink-soft" : "text-mauve")}>{x.name}</span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="grid overflow-hidden rounded-[26px] border border-white/12 md:grid-cols-[1.3fr_0.7fr]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="bg-white/4 p-9"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3 }}
          >
            <Eyebrow>Stage {s.n}</Eyebrow>
            <h3 className="mt-4 text-[34px] text-white">{s.name}</h3>
            <p className="mt-3.5 text-[17px] text-[#e2c4d2]">{s.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col justify-center bg-linear-160 from-plum-2 to-[#1b0614] p-9">
          <small className="text-[13px] font-semibold tracking-[0.08em] text-mauve uppercase">5-year relative survival · {s.group}</small>
          <div className="mt-1.5 mb-3.5 font-display text-[58px] leading-[1.05] font-extrabold tracking-[-0.04em] text-white">{s.survival}</div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-linear-to-r from-pink to-pink-2" animate={{ width: `${s.pct}%` }} transition={{ duration: 0.8, ease: "easeOut" }} />
          </div>
          <p className="mt-3 text-[13px] text-[#b996a9]">Based on US SEER summary stages (ACS). Individual outcomes vary with tumour type, treatment and health.</p>
        </div>
      </div>
    </>
  );
}
