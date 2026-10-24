import { PATHS } from "@/routes/paths";

export const pillars = [
  {
    icon: "Search",
    title: "Early detection saves lives",
    text: "When breast cancer is found while still confined to the breast, the 5-year survival rate is around 99%. Most of the difference between outcomes comes down to when it is found.",
    to: PATHS.SELF_CHECK,
    linkText: "Learn the self-check",
  },
  {
    icon: "HandHeart",
    title: "Know your normal",
    text: "Breast awareness simply means knowing how your breasts usually look and feel, so you notice changes quickly and speak to a doctor without delay.",
    to: `${PATHS.AWARENESS}#signs`,
    linkText: "See the warning signs",
  },
  {
    icon: "CalendarCheck",
    title: "Screening on schedule",
    text: "Mammograms can spot cancers years before they can be felt. Knowing when to start, and how often, is one of the most powerful things you can do.",
    to: PATHS.SCREENING,
    linkText: "Screening by age",
  },
];

export const heroChecklist = [
  { label: "Look in the mirror", status: "Done", done: true },
  { label: "Arms raised check", status: "Done", done: true },
  { label: "Nipple check", status: "Done", done: true },
  { label: "Feel lying down", status: "Today", done: false },
  { label: "Feel standing", status: "Today", done: false },
];

export const heroRotatingWords = ["early.", "in time.", "first."];

export const heroSources = ["WHO", "IARC", "American Cancer Society", "CDC"];

export const explore = [
  { icon: "BookOpenText", title: "Awareness hub", text: "Signs, risk factors, stages and the myths that delay diagnosis.", to: PATHS.AWARENESS },
  { icon: "HeartPulse", title: "5-step self-check", text: "An interactive guide plus a private monthly reminder & tracker.", to: PATHS.SELF_CHECK },
  { icon: "ScanLine", title: "Screening guide", text: "What to do in your 20s, 40s, 50s and beyond — and what a mammogram is like.", to: PATHS.SCREENING },
  { icon: "MessagesSquare", title: "Questions & contact", text: "Answers to common questions, and how to reach the Pinoct team by email.", to: PATHS.FAQ },
];

export const marqueeWords = ["Know your normal", "Check every month", "Early detection saves lives", "Talk to your doctor", "Get screened on time", "Share the message"];

export const initiativePoints = [
  "Simple, trusted information for students, parents, teachers and the wider community",
  "A practical monthly self-check guide and a free reminder tool",
  "Clear screening guidance by age and links to trusted medical organisations",
];
