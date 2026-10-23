import { Check, Microscope, ScanLine, Sprout, UserRoundCheck } from "lucide-react";
import { Card, Reveal } from "@/components/common";
import { screening } from "@/data/screening";
import { cn } from "@/utils/cn";

const ICONS = [Sprout, UserRoundCheck, ScanLine, Microscope];

/** Decade-by-decade screening guide for average-risk women. */
export default function ScreeningTimeline() {
  return (
    <div className="relative grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
      {/* connecting line (desktop only) */}
      <div aria-hidden="true" className="absolute top-[31px] right-[4%] left-[4%] hidden h-0.5 bg-linear-to-r from-pink-3 via-pink to-pink-3 xl:block" />

      {screening.map((s, i) => {
        const Icon = ICONS[i];
        const strong = s.tone === "strong";
        return (
          <Reveal key={s.age} i={i} className="relative">
            <div
              className={cn(
                "relative z-1 mb-[22px] grid size-16 place-items-center rounded-full border-2 border-pink [&>svg]:w-[26px]",
                strong ? "bg-pink text-white shadow-pink" : "bg-white text-pink"
              )}
            >
              <Icon aria-hidden="true" />
            </div>
            <Card className="p-6">
              <div className="font-display text-[30px] font-extrabold tracking-[-0.03em] text-pink">{s.age}</div>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <ul className="mt-3.5 grid gap-[9px]">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-[9px] text-sm leading-[1.45] text-muted">
                    <Check className="mt-0.5 w-4 shrink-0 text-pink" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
