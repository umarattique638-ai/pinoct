import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/common";
import { selfExamSteps } from "@/data/selfCheck";
import { cn } from "@/utils/cn";
import StepIllustration from "./StepIllustration";

const ROUND_BTN =
  "grid size-[46px] place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10 disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent [&>svg]:w-5";

/** Interactive, click-through guide to the 5-step breast self-exam. */
export default function SelfCheckStepper() {
  const [step, setStep] = useState(0);
  const current = selfExamSteps[step];
  const last = selfExamSteps.length - 1;

  return (
    <div className="grid items-stretch gap-10 xl:grid-cols-[0.9fr_1.1fr]">
      {/* Step list */}
      <Reveal className="grid content-start gap-2.5" role="tablist" aria-label="Self-check steps">
        {selfExamSteps.map((s, i) => {
          const active = i === step;
          return (
            <button
              key={s.title}
              role="tab"
              aria-selected={active}
              onClick={() => setStep(i)}
              className={cn(
                "flex w-full items-center gap-4 rounded-[18px] border bg-white px-5 py-[18px] text-left transition duration-250",
                active ? "border-pink shadow-pink-sm" : "border-line hover:border-line-hover"
              )}
            >
              <span
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-xl font-display font-extrabold transition duration-250",
                  active ? "bg-pink text-white" : "bg-bg-2 text-pink"
                )}
              >
                {i + 1}
              </span>
              <div>
                <b className="block font-display text-[16.5px]">{s.title}</b>
                <span className="text-[13.5px] text-muted">{s.when}</span>
              </div>
            </button>
          );
        })}
      </Reveal>

      {/* Step detail panel */}
      <Reveal
        i={1}
        role="tabpanel"
        aria-live="polite"
        className="relative flex flex-col overflow-hidden rounded-[28px] bg-plum p-7 text-[#fbe7f0] md:p-10"
      >
        <div aria-hidden="true" className="absolute -top-[120px] -right-[120px] size-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,116,168,0.45),transparent_65%)]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="relative flex flex-1 flex-col"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <span className="font-display text-sm font-bold tracking-[0.1em] text-pink-2 uppercase">
              Step {step + 1} of {selfExamSteps.length} · {current.when}
            </span>
            <h3 className="mt-2.5 text-[clamp(30px,3.4vw,42px)] text-white">{current.title}</h3>
            <p className="mt-4 text-[17px] text-[#e5c9d6]">{current.text}</p>
            <div className="my-[26px] grid min-h-[190px] place-items-center">
              <StepIllustration step={step} />
            </div>
            <div className="mt-auto flex gap-3 rounded-2xl border border-white/12 bg-white/7 px-[18px] py-4 text-[14.5px]">
              <Lightbulb className="w-5 shrink-0 text-pink-2" aria-hidden="true" />
              <span>{current.tip}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative mt-5 flex items-center justify-between">
          <div className="flex gap-1.5">
            {selfExamSteps.map((_, i) => (
              <i key={i} className={cn("h-[5px] w-[26px] rounded-full transition-colors duration-300", i <= step ? "bg-pink-2" : "bg-white/18")} />
            ))}
          </div>
          <div className="flex gap-2">
            <button className={ROUND_BTN} aria-label="Previous step" disabled={step === 0} onClick={() => setStep(step - 1)}><ChevronLeft /></button>
            <button className={ROUND_BTN} aria-label="Next step" disabled={step === last} onClick={() => setStep(step + 1)}><ChevronRight /></button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
