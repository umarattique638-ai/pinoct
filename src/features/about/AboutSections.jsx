import { BadgeCheck, Eye, Lock, Target, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/common";
import { cancerTypes, missionVision, ribbonHistory, values } from "@/data/about";
import "./About.css";

const ICONS = { Target, Eye, BadgeCheck, Users, Lock, Zap };

export function MissionVision() {
  return (
    <div className="mv-grid">
      {missionVision.map((m, i) => {
        const Icon = ICONS[m.icon];
        return (
          <Reveal key={m.title} i={i} className={`card mv-card ${i === 0 ? "mv-primary" : ""}`}>
            <div className="icon-box"><Icon /></div>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

export function CancerTypes() {
  return (
    <div className="grid-3">
      {cancerTypes.map((t, i) => (
        <Reveal key={t.title} i={i % 3} className="card type-card">
          <span className="pill">{t.tag}</span>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function RibbonHistory() {
  return (
    <ol className="steps-row history">
      {ribbonHistory.map((h, i) => (
        <Reveal as="li" key={h.year} i={i} className="step-item">
          <span className="year">{h.year}</span>
          <h3>{h.title}</h3>
          <p>{h.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function Values() {
  return (
    <div className="grid-4">
      {values.map((v, i) => {
        const Icon = ICONS[v.icon];
        return (
          <Reveal key={v.title} i={i} className="card">
            <div className="icon-box"><Icon /></div>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
