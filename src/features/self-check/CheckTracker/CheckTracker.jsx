import { useMemo, useState } from "react";
import { Reveal } from "@/components/common";
import useLocalStorage from "@/hooks/useLocalStorage";
import { monthKey, suggestedCheckDay } from "@/utils/date";
import ReminderPlanner from "./ReminderPlanner";
import MonthTracker from "./MonthTracker";
import "./CheckTracker.css";

const STORAGE_KEY = "pinoct.checks";
const INITIAL_FORM = { hasCycle: true, periodStart: "", fixedDay: 1, age: "", familyHistory: false };

/** Personal reminder planner + monthly self-check tracker (data stays in localStorage). */
export default function CheckTracker() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [checks, setChecks, resetChecks] = useLocalStorage(STORAGE_KEY, []);

  const setField = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const reminderDay = useMemo(
    () => (form.hasCycle ? suggestedCheckDay(form.periodStart) : form.fixedDay),
    [form.hasCycle, form.periodStart, form.fixedDay]
  );

  const markDone = () => {
    const key = monthKey(new Date());
    setChecks((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  return (
    <div className="tool">
      <Reveal>
        <ReminderPlanner form={form} setField={setField} reminderDay={reminderDay} />
      </Reveal>
      <Reveal i={1}>
        <MonthTracker checks={checks} onMarkDone={markDone} onReset={resetChecks} reminderDay={reminderDay} />
      </Reveal>
    </div>
  );
}
