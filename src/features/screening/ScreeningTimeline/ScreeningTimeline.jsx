import { Check, Microscope, ScanLine, Sprout, UserRoundCheck } from "lucide-react";
import { Reveal } from "@/components/common";
import { screening } from "@/data/screening";
import "./ScreeningTimeline.css";

const ICONS = [Sprout, UserRoundCheck, ScanLine, Microscope];

/** Decade-by-decade screening guide for average-risk women. */
export default function ScreeningTimeline() {
  return (
    <div className="timeline">
      {screening.map((s, i) => {
        const Icon = ICONS[i];
        return (
          <Reveal key={s.age} i={i} className={`tl ${s.tone}`}>
            <div className="tl-dot"><Icon /></div>
            <div className="card">
              <div className="age">{s.age}</div>
              <h3>{s.title}</h3>
              <ul>{s.points.map((p) => <li key={p}><Check />{p}</li>)}</ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
