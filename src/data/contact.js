import { SITE } from "@/config/site";

const waText = encodeURIComponent("Hi Pinoct! I have a question about breast cancer awareness.");

export const contactChannels = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    text: "Chat with the Pinoct team — the fastest way to reach us.",
    value: SITE.whatsappDisplay,
    href: `https://wa.me/${SITE.whatsapp}?text=${waText}`,
    cta: "Chat on WhatsApp",
    external: true,
  },
  {
    id: "email",
    title: "Email",
    text: "For events, partnerships, media and detailed questions.",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    cta: "Send an email",
  },
];
