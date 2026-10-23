import { Magnet, ScanLine, Stethoscope, Waves } from "lucide-react";
import { Card, CardText, IconBox, Pill, Reveal, StepsRow } from "@/components/common";
import { mammogramSteps, screeningMethods } from "@/data/screening";

const ICONS = { ScanLine, Waves, Magnet, Stethoscope };

export function ScreeningMethods() {
  return (
    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
      {screeningMethods.map((m, i) => (
        <Reveal key={m.title} i={i}>
          <Card className="h-full">
            <IconBox icon={ICONS[m.icon]} />
            <Pill>{m.tag}</Pill>
            <h3 className="mt-3.5 text-[21px] font-bold">{m.title}</h3>
            <CardText>{m.text}</CardText>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

/** Numbered "what to expect" steps on a dark section. */
export function MammogramSteps() {
  return <StepsRow items={mammogramSteps} />;
}
