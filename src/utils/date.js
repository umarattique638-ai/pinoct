/** "2026-10" style key for a date's month. */
export const monthKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

/** Number of consecutive months (ending this month or last month) present in `keys`. */
export function monthStreak(keys, today = new Date()) {
  const set = new Set(keys);
  const cursor = new Date(today.getFullYear(), today.getMonth(), 1);
  if (!set.has(monthKey(cursor))) cursor.setMonth(cursor.getMonth() - 1);
  let streak = 0;
  while (set.has(monthKey(cursor))) {
    streak += 1;
    cursor.setMonth(cursor.getMonth() - 1);
  }
  return streak;
}

/** Calendar cells (null = leading blank) for the month containing `date`. */
export function monthGrid(date = new Date()) {
  const firstWeekday = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  return [...Array(firstWeekday).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
}

/** Suggested self-check day: ~7 days after the period starts, capped to 28 so it exists every month. */
export function suggestedCheckDay(periodStartIso) {
  if (!periodStartIso) return null;
  const d = new Date(periodStartIso);
  if (Number.isNaN(d.getTime())) return null;
  d.setDate(d.getDate() + 7);
  return Math.min(d.getDate(), 28);
}
