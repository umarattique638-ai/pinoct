import { PATHS } from "@/routes/paths";

export const missionVision = [
  {
    icon: "Target",
    title: "Our mission",
    text: "Make sure every woman knows the signs, does a monthly self-check and gets screened on time — in simple language, for free.",
  },
  {
    icon: "Eye",
    title: "Our vision",
    text: "A future where no breast cancer is found too late simply because someone didn't know what to look for.",
  },
];

// Types & approximate shares — American Cancer Society.
export const cancerTypes = [
  { title: "Ductal carcinoma in situ (DCIS)", text: "Abnormal cells inside the milk ducts that haven't spread. Stage 0 and highly treatable.", tag: "Non-invasive" },
  { title: "Invasive ductal carcinoma", text: "Starts in a milk duct and grows into nearby breast tissue. The most common type.", tag: "~70–80% of invasive" },
  { title: "Invasive lobular carcinoma", text: "Starts in the milk-producing lobules. Can be harder to feel as a distinct lump.", tag: "~10% of invasive" },
  { title: "Triple-negative", text: "Lacks oestrogen, progesterone and HER2 receptors. Tends to grow faster and is more common under 40.", tag: "~10–15%" },
  { title: "HER2-positive", text: "Makes too much of the HER2 protein. Targeted therapies have greatly improved outcomes.", tag: "~15–20%" },
  { title: "Inflammatory breast cancer", text: "Rare and fast-growing. Often causes redness and swelling rather than a lump.", tag: "~1–5%" },
];

export const ribbonHistory = [
  { year: "1985", title: "Awareness Month begins", text: "October is first marked as National Breast Cancer Awareness Month in the United States." },
  { year: "1992", title: "The pink ribbon", text: "The pink ribbon is adopted as the symbol of breast cancer awareness and handed out in the millions." },
  { year: "2000s", title: "A global movement", text: "October campaigns spread worldwide, with landmarks lit up in pink to start conversations." },
  { year: "Today", title: "Awareness to action", text: "The focus has shifted from symbols to action: self-checks, screening access and early diagnosis." },
];

export const values = [
  { icon: "BadgeCheck", title: "Evidence-based", text: "Every fact comes from trusted bodies like WHO, IARC, ACS and CDC — no myths, no scare tactics." },
  { icon: "Users", title: "For everyone", text: "Clear, simple language for every age and background — and a reminder that men can get it too." },
  { icon: "Lock", title: "Private by design", text: "Our tools run in your browser. Your health data is never collected or sold." },
  { icon: "Zap", title: "Action first", text: "Awareness only matters if it changes what we do. Everything we build ends in a next step." },
];


/** The project's purpose — mirrors the four goals of Pinoct. */
export const purpose = [
  { icon: "Megaphone", title: "Spread awareness", text: "Make breast cancer a topic people talk about openly — every month, not just in October.", to: PATHS.AWARENESS, linkText: "Awareness hub" },
  { icon: "GraduationCap", title: "Educate visitors", text: "Explain signs, risk factors, stages and myths in clear, simple language anyone can follow.", to: `${PATHS.AWARENESS}#signs`, linkText: "Learn the signs" },
  { icon: "HeartPulse", title: "Promote early detection", text: "Turn knowledge into action with a 5-step self-check, monthly reminders and a screening guide.", to: PATHS.SELF_CHECK, linkText: "Start the self-check" },
  { icon: "Library", title: "Share information & resources", text: "Point people to trusted medical organisations, answers to common questions, and a way to reach us.", to: `${PATHS.ABOUT}#resources`, linkText: "See resources" },
];

/** Trusted external organisations for further reading and support. */
export const resources = [
  { name: "World Health Organization (WHO)", text: "Global facts, statistics and the Global Breast Cancer Initiative.", href: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer" },
  { name: "American Cancer Society", text: "Detailed guides on screening, diagnosis, treatment and survivorship.", href: "https://www.cancer.org/cancer/types/breast-cancer.html" },
  { name: "CDC — Breast Cancer", text: "Symptoms, risk factors and screening recommendations explained simply.", href: "https://www.cdc.gov/breast-cancer/" },
  { name: "Shaukat Khanum Memorial Cancer Hospital", text: "Cancer care and screening services in Pakistan.", href: "https://shaukatkhanum.org.pk/" },
];
