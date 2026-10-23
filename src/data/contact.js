import { SITE } from "@/config/site";

export const contactTopics = [
  "General question",
  "Awareness session / event",
  "Partnership or volunteering",
  "Feedback on the website",
  "Media enquiry",
];

export const contactChannels = [
  { icon: "Mail", title: "Email us", text: "We usually reply within 2 working days.", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "MapPin", title: "Based in", text: "Running awareness drives across Pakistan.", value: SITE.location },
  { icon: "Siren", title: "Medical emergency", text: "Pinoct can't give medical advice. In an emergency call:", value: `${SITE.emergency} (Pakistan)`, href: `tel:${SITE.emergency}`, urgent: true },
];
