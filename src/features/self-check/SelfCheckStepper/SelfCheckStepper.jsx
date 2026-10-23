import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/common";
import { selfExamSteps } from "@/data/selfCheck";
import { cn } from "@/utils/cn";
import StepIllustration from "./StepIllustration";
import "./SelfCheckStepper.css";

/** Interactive, click-through guide to the 5-step breast self-exam. */
export default function SelfCheckStepper() {
  const [step, setStep] = useState(0);
  const current = selfExamSteps[step];
  const last = selfExamSteps.length - 1;

  return (
    <div className="exam">
      <Reveal className="exam-steps" role="tablist" aria-label="Self-check steps">
        {selfExamSteps.map((s, i) => (
          <button key={s.title} role="tab" aria-selected={i === step} className={cn("exam-step", i === step && "active")} onClick={() => setStep(i)}>
            <span className="n">{i + 1}</span>
            <div><b>{s.title}</b><span>{s.when}</span></div>
          </button>
        ))}
      </Reveal>

      <Reveal i={1} className="exam-panel" role="tabpanel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="exam-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <span className="step-no">Step {step + 1} of {selfExamSteps.length} · {current.when}</span>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <div className="exam-illus"><StepIllustration step={step} /></div>
            <div className="tip"><Lightbulb /> <span>{current.tip}</span></div>
          </motion.div>
        </AnimatePresence>
        <div className="exam-nav">
          <div className="bars">{selfExamSteps.map((_, i) => <i key={i} className={i <= step ? "on" : ""} />)}</div>
          <div className="exam-arrows">
            <button className="round" aria-label="Previous step" disabled={step === 0} onClick={() => setStep(step - 1)}><ChevronLeft /></button>
            <button className="round" aria-label="Next step" disabled={step === last} onClick={() => setStep(step + 1)}><ChevronRight /></button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
