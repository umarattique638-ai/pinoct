import { CLIENT, SCHOOL } from "@/config/site";

const subject = encodeURIComponent("Pinoct — Breast cancer awareness enquiry");

/** Email is the only contact channel. */
export const contactEmail = {
  title: "Email us",
  text: `Questions, awareness sessions, partnerships or feedback — write to ${CLIENT.name}, ${CLIENT.role.toLowerCase()} of the ${SCHOOL.name} initiative.`,
  value: CLIENT.email,
  href: `mailto:${CLIENT.email}?subject=${subject}`,
  cta: "Send an email",
};
