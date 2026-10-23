const pad = (n) => String(n).padStart(2, "0");
const toIcsLocal = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

/** Next occurrence (today or later) of `day` of month at `hour`:00 local time. */
export function nextOccurrence(day, hour = 9, now = new Date()) {
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), day, hour, 0);
  return thisMonth >= now ? thisMonth : new Date(now.getFullYear(), now.getMonth() + 1, day, hour, 0);
}

/** Builds an RFC 5545 calendar file with a monthly recurring self-check reminder. */
export function buildMonthlyReminderIcs({ day, hour = 9, durationMinutes = 15, appName = "Pinoct" }) {
  const start = nextOccurrence(day, hour);
  const end = new Date(start.getTime() + durationMinutes * 60_000);
  const stamp = `${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${appName}//Self-check reminder//EN`,
    "BEGIN:VEVENT",
    `UID:${Date.now()}@${appName.toLowerCase()}`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${toIcsLocal(start)}`,
    `DTEND:${toIcsLocal(end)}`,
    `RRULE:FREQ=MONTHLY;BYMONTHDAY=${day}`,
    "SUMMARY:🎀 Monthly breast self-check",
    "DESCRIPTION:5 steps: mirror\\, arms raised\\, nipples\\, lying down\\, standing. Report any change to your doctor.",
    "BEGIN:VALARM",
    "TRIGGER:-PT0M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Time for your monthly self-check",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** Triggers a browser download of text content. */
export function downloadFile(content, filename, type = "text/calendar") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = Object.assign(document.createElement("a"), { href: url, download: filename });
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
