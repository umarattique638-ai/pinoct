import { ArrowDownToDot, ArrowRight, CircleDot, Droplet, Flame, Grip, Scaling, Stethoscope, Waves, Zap } from "lucide-react";
import { Button, Callout, Card, IconBox, Reveal } from "@/components/common";
import { signs } from "@/data/awareness";
import { PATHS } from "@/routes/paths";

const ICONS = { CircleDot, Waves, Grip, Flame, ArrowDownToDot, Droplet, Scaling, Zap };

/** The 8 warning-sign cards + "noticed a change?" call-out. */
export default function SignsGrid({ showCallout = true }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
        {signs.map((s, i) => (
          <Reveal key={s.title} i={i % 4}>
            <Card className="h-full p-[26px]">
              <span className="absolute top-[18px] right-[22px] font-display text-[34px] font-extrabold text-line">
                {String(i + 1).padStart(2, "0")}
              </span>
              <IconBox icon={ICONS[s.icon]} size="sm" />
              <h3 className="text-[19px] font-bold">{s.title}</h3>
              <p className="mt-2 text-[14.5px] text-muted">{s.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      {showCallout && (
        <Reveal>
          <Callout>
            <div className="flex items-center gap-4">
              <IconBox icon={Stethoscope} className="m-0 bg-white" hoverEffect={false} />
              <div>
                <b className="font-display text-xl">Noticed a change?</b>
                <p className="mt-1 text-muted">Book an appointment within 1–2 weeks. Early checks mean more options and peace of mind.</p>
              </div>
            </div>
            <Button to={PATHS.FAQ} variant="dark" icon={ArrowRight}>What happens next</Button>
          </Callout>
        </Reveal>
      )}
    </>
  );
}
