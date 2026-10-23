import { Magnet, ScanLine, Stethoscope, Waves } from "lucide-react";
import { Reveal } from "@/components/common";
import { mammogramSteps, screeningMethods } from "@/data/screening";

const ICONS = { ScanLine, Waves, Magnet, Stethoscope };

export function ScreeningMethods() {
  return (
    <div className="grid-4">
      {screeningMethods.map((m, i) => {
        const Icon = ICONS[m.icon];
        return (
          <Reveal key={m.title} i={i} className="card">
            <div className="icon-box"><Icon /></div>
            <span className="pill">{m.tag}</span>
            <h3 className="card-title-gap">{m.title}</h3>
            <p>{m.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

/** Numbered "what to expect" steps — styled like Tailwatch's 3-step flow. */
export function MammogramSteps() {
  return (
    <ol className="steps-row">
      {mammogramSteps.map((s, i) => (
        <Reveal as="li" key={s.title} i={i} className="step-item">
          <span className="step-num">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
