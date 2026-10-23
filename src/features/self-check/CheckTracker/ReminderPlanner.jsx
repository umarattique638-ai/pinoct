import { motion } from "framer-motion";
import { CalendarPlus, Sparkles } from "lucide-react";
import { Button, Chip, FormField } from "@/components/common";
import { getScreeningAdvice } from "@/utils/screening";
import { buildMonthlyReminderIcs, downloadFile } from "@/utils/ics";
import { SITE } from "@/config/site";

const DAYS = Array.from({ length: 28 }, (_, i) => i + 1);

/** Left card: collects cycle / age info and produces a reminder + screening tip. */
export default function ReminderPlanner({ form, setField, reminderDay }) {
  const advice = getScreeningAdvice(form.age, form.familyHistory);

  const handleDownload = () =>
    downloadFile(buildMonthlyReminderIcs({ day: reminderDay, appName: SITE.name }), `${SITE.name.toLowerCase()}-self-check.ics`);

  return (
    <div className="card tool-card">
      <h3>1 · Plan your reminder</h3>

      <div className="field">
        <span className="field-label">Do you have a monthly period?</span>
        <div className="chips">
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

      <div className="age-row">
        <FormField label="Your age">
          <input type="number" min="15" max="100" inputMode="numeric" placeholder="e.g. 42" value={form.age} onChange={(e) => setField("age", e.target.value)} />
        </FormField>
        <Chip active={form.familyHistory} onClick={() => setField("familyHistory", !form.familyHistory)}>
          Family history {form.familyHistory ? "✓" : ""}
        </Chip>
      </div>

      {reminderDay && (
        <motion.div className="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <b><Sparkles size={18} className="result-icon" /> Check on day {reminderDay} of every month</b>
          <p>{form.hasCycle ? "About a week after your period starts, when breasts are least tender." : "Same day every month keeps it simple."}</p>
          <Button className="result-btn" iconLeft={CalendarPlus} onClick={handleDownload}>Add to calendar (.ics)</Button>
        </motion.div>
      )}

      {advice && (
        <motion.div className="result result-solid" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <b>{advice.title}</b>
          <p>{advice.text}</p>
        </motion.div>
      )}
    </div>
  );
}
