import { motion } from "framer-motion";
import { CalendarPlus, Sparkles } from "lucide-react";
import { Button, Card, Chip, FormField } from "@/components/common";
import { getScreeningAdvice } from "@/utils/screening";
import { buildMonthlyReminderIcs, downloadFile } from "@/utils/ics";
import { SITE } from "@/config/site";
import { cn } from "@/utils/cn";

const DAYS = Array.from({ length: 28 }, (_, i) => i + 1);

function ResultBox({ solid = false, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("mt-[22px] rounded-[18px] border p-5", solid ? "border-[#f1b4cc] bg-white" : "border-dashed border-[#f1b4cc] bg-bg-2")}
    >
      {children}
    </motion.div>
  );
}

/** Left card: collects cycle / age info and produces a reminder + screening tip. */
export default function ReminderPlanner({ form, setField, reminderDay }) {
  const advice = getScreeningAdvice(form.age, form.familyHistory);

  const handleDownload = () =>
    downloadFile(buildMonthlyReminderIcs({ day: reminderDay, appName: SITE.name }), `${SITE.name.toLowerCase()}-self-check.ics`);

  return (
    <Card hover={false} className="h-full">
      <h3 className="text-[23px] font-bold">1 · Plan your reminder</h3>

      <div className="mt-[18px] grid gap-2">
        <span className="text-sm font-bold">Do you have a monthly period?</span>
        <div className="flex flex-wrap gap-2">
          <Chip active={form.hasCycle} onClick={() => setField("hasCycle", true)}>Yes, regular cycle</Chip>
          <Chip active={!form.hasCycle} onClick={() => setField("hasCycle", false)}>No / menopause / pregnant</Chip>
        </div>
      </div>

      {form.hasCycle ? (
        <FormField label="First day of your last period">
          <input type="date" value={form.periodStart} onChange={(e) => setField("periodStart", e.target.value)} />
        </FormField>
      ) : (
        <FormField label="Pick an easy-to-remember day of the month">
          <select value={form.fixedDay} onChange={(e) => setField("fixedDay", Number(e.target.value))}>
            {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </FormField>
      )}

      <div className="grid grid-cols-[1fr_auto] items-end gap-3">
        <FormField label="Your age">
          <input type="number" min="15" max="100" inputMode="numeric" placeholder="e.g. 42" value={form.age} onChange={(e) => setField("age", e.target.value)} />
        </FormField>
        <Chip className="h-12" active={form.familyHistory} onClick={() => setField("familyHistory", !form.familyHistory)}>
          Family history {form.familyHistory ? "✓" : ""}
        </Chip>
      </div>

      {reminderDay && (
        <ResultBox>
          <b className="font-display text-[19px]">
            <Sparkles size={18} className="inline align-[-3px] text-pink" aria-hidden="true" /> Check on day {reminderDay} of every month
          </b>
          <p className="mt-1.5 text-[14.5px] text-muted">
            {form.hasCycle ? "About a week after your period starts, when breasts are least tender." : "Same day every month keeps it simple."}
          </p>
          <Button className="mt-3.5" iconLeft={CalendarPlus} onClick={handleDownload}>Add to calendar (.ics)</Button>
        </ResultBox>
      )}

      {advice && (
        <ResultBox solid>
          <b className="font-display text-[19px]">{advice.title}</b>
          <p className="mt-1.5 text-[14.5px] text-muted">{advice.text}</p>
        </ResultBox>
      )}
    </Card>
  );
}
