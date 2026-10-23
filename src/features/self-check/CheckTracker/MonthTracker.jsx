import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button, Card } from "@/components/common";
import { monthGrid, monthKey, monthStreak } from "@/utils/date";
import { cn } from "@/utils/cn";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function StatTile({ value, label }) {
  return (
    <div className="flex-1 rounded-2xl border border-line bg-white p-4">
      <b className="block font-display text-[30px] leading-none">{value}</b>
      <span className="text-[13px] text-muted">{label}</span>
    </div>
  );
}

/** Right card: current-month calendar, streak counter and "mark as done". */
export default function MonthTracker({ checks, onMarkDone, onReset, reminderDay }) {
  const [today] = useState(() => new Date());
  const cells = useMemo(() => monthGrid(today), [today]);
  const streak = useMemo(() => monthStreak(checks, today), [checks, today]);
  const doneThisMonth = checks.includes(monthKey(today));

  return (
    <Card hover={false} className="h-full">
      <h3 className="text-[23px] font-bold">2 · Track your checks</h3>
      <p className="mt-1.5 text-[15.5px] text-muted">
        {today.toLocaleString("en", { month: "long", year: "numeric" })}
        {reminderDay ? ` · reminder on the ${reminderDay}` : ""}
      </p>

      <div className="mt-4 grid grid-cols-7 gap-1.5" aria-label="This month">
        {WEEKDAYS.map((d, i) => (
          <div key={`h${i}`} className="grid h-6 place-items-center text-[11px] font-semibold text-muted uppercase">{d}</div>
        ))}
        {cells.map((d, i) => (
          <div
            key={i}
            className={cn(
              "grid h-10 place-items-center rounded-[10px] border text-[13px] font-semibold",
              !d && "invisible",
              d === reminderDay ? "border-pink bg-pink text-white" : "border-line bg-bg text-muted",
              d === today.getDate() && "outline-2 outline-offset-1 outline-ink"
            )}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="mt-[18px] flex gap-3.5">
        <StatTile value={streak} label="month streak" />
        <StatTile value={checks.length} label="checks logged" />
      </div>

      <div className="mt-[18px] flex flex-wrap gap-2.5">
        <Button variant={doneThisMonth ? "ghost" : "primary"} disabled={doneThisMonth} iconLeft={CheckCircle2} onClick={onMarkDone}>
          {doneThisMonth ? "This month's check is done" : "I did my check this month"}
        </Button>
        {checks.length > 0 && <Button variant="ghost" iconLeft={RotateCcw} onClick={onReset}>Reset</Button>}
      </div>
      <p className="mt-3 text-[13px] text-muted">Your data is stored only in this browser — nothing is sent anywhere.</p>
    </Card>
  );
}
