import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/common";
import { monthGrid, monthKey, monthStreak } from "@/utils/date";
import { cn } from "@/utils/cn";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

/** Right card: current-month calendar, streak counter and "mark as done". */
export default function MonthTracker({ checks, onMarkDone, onReset, reminderDay }) {
  const [today] = useState(() => new Date());
  const cells = useMemo(() => monthGrid(today), [today]);
  const streak = useMemo(() => monthStreak(checks, today), [checks, today]);
  const doneThisMonth = checks.includes(monthKey(today));

  return (
    <div className="card tool-card">
      <h3>2 · Track your checks</h3>
      <p>
        {today.toLocaleString("en", { month: "long", year: "numeric" })}
        {reminderDay ? ` · reminder on the ${reminderDay}` : ""}
      </p>

      <div className="cal" aria-label="This month">
        {WEEKDAYS.map((d, i) => <div key={`h${i}`} className="h">{d}</div>)}
        {cells.map((d, i) => (
          <div key={i} className={cn(!d && "blank", d === reminderDay && "done", d === today.getDate() && "today")}>{d}</div>
        ))}
      </div>

      <div className="streak">
        <div><b>{streak}</b><span>month streak</span></div>
        <div><b>{checks.length}</b><span>checks logged</span></div>
      </div>

      <div className="tracker-actions">
        <Button variant={doneThisMonth ? "ghost" : "primary"} disabled={doneThisMonth} iconLeft={CheckCircle2} onClick={onMarkDone}>
          {doneThisMonth ? "This month's check is done" : "I did my check this month"}
        </Button>
        {checks.length > 0 && <Button variant="ghost" iconLeft={RotateCcw} onClick={onReset}>Reset</Button>}
      </div>
      <p className="privacy-note">Your data is stored only in this browser — nothing is sent anywhere.</p>
    </div>
  );
}
