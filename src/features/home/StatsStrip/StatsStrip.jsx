import { Container, CountUp, Reveal } from "@/components/common";
import { stats } from "@/data/stats";

export default function StatsStrip() {
  return (
    <div className="border-y border-line bg-white">
      <Container className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            i={i}
            className="border-line px-[26px] py-[34px] not-last:border-r max-md:even:border-r-0 max-md:nth-[-n+2]:border-b"
          >
            <div className="text-gradient font-display text-[clamp(36px,4vw,50px)] leading-none font-extrabold tracking-[-0.04em]">
              <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <p className="mt-2.5 text-[14.5px] leading-[1.45] font-semibold text-ink-2">{s.label}</p>
            <small className="text-xs font-medium text-muted">Source: {s.src}</small>
          </Reveal>
        ))}
      </Container>
    </div>
  );
}
