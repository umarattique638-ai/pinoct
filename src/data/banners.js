import { PATHS } from "@/routes/paths";

/**
 * Awareness banners shown across the site.
 * theme:  "pink" | "dark" | "light"
 * visual: "ribbon" | "stat" | "steps" | "calendar"
 */
export const BANNERS = {
  awarenessMonth: {
    theme: "pink",
    visual: "ribbon",
    eyebrow: "October · Breast Cancer Awareness Month",
    title: "Wear pink.",
    accent: "Start a conversation.",
    text: "Every October the world turns pink to remind women everywhere that early detection saves lives. Share Pinoct with the women you love and encourage one monthly self-check.",
    primary: { label: "Set a monthly reminder", to: `${PATHS.SELF_CHECK}#tracker` },
    secondary: { label: "Learn the warning signs", to: `${PATHS.AWARENESS}#signs` },
    chips: ["#PinkOctober", "Early detection", "Know your normal"],
  },
  earlyDetection: {
    theme: "dark",
    visual: "stat",
    eyebrow: "Early detection saves lives",
    title: "Found early,",
    accent: "breast cancer is highly treatable.",
    text: "When breast cancer is found before it spreads beyond the breast, around 99% of women are alive five years later. Time matters — every check counts.",
    primary: { label: "Start the 5-step self-check", to: PATHS.SELF_CHECK },
    secondary: { label: "How screening works", to: PATHS.SCREENING },
    stat: { value: "~99%", label: "5-year relative survival when found early (localized)", source: "American Cancer Society / SEER" },
  },
  knowYourNormal: {
    theme: "light",
    visual: "steps",
    eyebrow: "Know your normal",
    title: "Look. Feel.",
    accent: "Act early.",
    text: "Breast awareness is simple: know how your breasts usually look and feel, check once a month, and see a doctor about any change — without delay.",
    primary: { label: "Open the self-check guide", to: PATHS.SELF_CHECK },
    secondary: { label: "Common myths", to: `${PATHS.AWARENESS}#myths` },
    steps: [
      { icon: "Eye", title: "Look", text: "Size, shape, skin & nipples in the mirror" },
      { icon: "Hand", title: "Feel", text: "Circular pressure from collarbone to armpit" },
      { icon: "Stethoscope", title: "Act", text: "Report any change to a doctor within 1–2 weeks" },
    ],
  },
  mammogram: {
    theme: "pink",
    visual: "calendar",
    eyebrow: "Screening saves lives",
    title: "40 or older?",
    accent: "Ask about a mammogram.",
    text: "A mammogram can find breast cancer years before it can be felt. Talk to your doctor about screening every 1–2 years — earlier if you have a family history.",
    primary: { label: "Screening guide by age", to: PATHS.SCREENING },
    secondary: { label: "Find trusted resources", to: `${PATHS.ABOUT}#resources` },
  },
};
