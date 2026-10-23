import { SITE } from "@/config/site";

/**
 * Sends a contact message.
 *
 * If VITE_CONTACT_ENDPOINT is set (e.g. a free Formspree / Web3Forms / Getform endpoint),
 * the message is POSTed there as JSON. Otherwise the user's email app is opened with the
 * message pre-filled, so the form still works with zero backend.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export async function sendContactMessage({ name, email, phone, topic, message }) {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, phone, topic, message, _subject: `[${SITE.name}] ${topic}` }),
    });
    if (!res.ok) throw new Error("We couldn't send your message right now. Please try again or email us directly.");
    return { method: "api" };
  }

  const subject = encodeURIComponent(`[${SITE.name}] ${topic} — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}${phone ? `\n${phone}` : ""}`);
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  return { method: "mailto" };
}
