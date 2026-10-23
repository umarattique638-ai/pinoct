import { CountUp, Reveal } from "@/components/common";
import { stats } from "@/data/stats";
import "./StatsStrip.css";

export default function StatsStrip() {
  return (
    <div className="strip">
      <div className="container strip-grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} i={i} className="stat">
            <div className="num"><CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} /></div>
            <p>{s.label}</p>
            <small>Source: {s.src}</small>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
