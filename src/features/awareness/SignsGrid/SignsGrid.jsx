import { ArrowDownToDot, ArrowRight, CircleDot, Droplet, Flame, Grip, Scaling, Stethoscope, Waves, Zap } from "lucide-react";
import { Button, Reveal } from "@/components/common";
import { signs } from "@/data/awareness";
import { PATHS } from "@/routes/paths";
import "./SignsGrid.css";

const ICONS = { CircleDot, Waves, Grip, Flame, ArrowDownToDot, Droplet, Scaling, Zap };

/** The 8 warning-sign cards + "noticed a change?" call-out. */
export default function SignsGrid({ showCallout = true }) {
  return (
    <>
      <div className="grid-4">
        {signs.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} i={i % 4} className="card sign">
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <div className="icon-box"><Icon /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          );
        })}
      </div>
      {showCallout && (
        <Reveal className="callout">
          <div className="callout-main">
            <div className="icon-box"><Stethoscope /></div>
            <div>
              <b>Noticed a change?</b>
              <p>Book an appointment within 1–2 weeks. Early checks mean more options and peace of mind.</p>
            </div>
          </div>
          <Button to={PATHS.FAQ} variant="dark" icon={ArrowRight}>What happens next</Button>
        </Reveal>
      )}
    </>
  );
}
