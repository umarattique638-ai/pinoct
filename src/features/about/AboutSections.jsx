import { ArrowUpRight, BadgeCheck, Eye, Lock, Target, Users, Zap } from "lucide-react";
import { Card, CardText, IconBox, Pill, Reveal, StepsRow } from "@/components/common";
import { cancerTypes, missionVision, resources, ribbonHistory, values } from "@/data/about";
import { cn } from "@/utils/cn";

const ICONS = { Target, Eye, BadgeCheck, Users, Lock, Zap };

export function MissionVision() {
  return (
    <div className="grid gap-[18px]">
      {missionVision.map((m, i) => {
        const primary = i === 0;
        return (
          <Reveal key={m.title} i={i}>
            <Card className={cn(primary && "border-0 bg-linear-140 from-pink to-[#a8104f] text-white")}>
              <IconBox
                icon={ICONS[m.icon]}
                className={cn(primary && "bg-white/16 text-white group-hover:bg-white group-hover:text-pink")}
              />
              <h3 className="text-[26px] font-bold">{m.title}</h3>
              <CardText className={cn(primary && "text-pink-soft")}>{m.text}</CardText>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}

export function CancerTypes() {
  return (
    <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
      {cancerTypes.map((t, i) => (
        <Reveal key={t.title} i={i % 3}>
          <Card className="h-full">
            <Pill>{t.tag}</Pill>
            <h3 className="mt-4 text-xl font-bold">{t.title}</h3>
            <CardText>{t.text}</CardText>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function RibbonHistory() {
  return <StepsRow variant="label" items={ribbonHistory.map((h) => ({ ...h, label: h.year }))} />;
}

export function Values() {
  return (
    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
      {values.map((v, i) => (
        <Reveal key={v.title} i={i}>
          <Card className="h-full">
            <IconBox icon={ICONS[v.icon]} />
            <h3 className="text-[23px] font-bold">{v.title}</h3>
            <CardText>{v.text}</CardText>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function Resources() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {resources.map((r, i) => (
        <Reveal key={r.href} i={i % 2}>
          <Card as="a" href={r.href} target="_blank" rel="noopener noreferrer" className="flex h-full items-start justify-between gap-[18px] p-[26px]">
            <div>
              <h3 className="text-[19px] font-bold">{r.name}</h3>
              <p className="mt-1.5 text-[14.5px] text-muted">{r.text}</p>
            </div>
            <ArrowUpRight className="w-[22px] shrink-0 text-pink transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" aria-hidden="true" />
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
