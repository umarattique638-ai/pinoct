import { PATHS } from "@/routes/paths";

/**
 * Global brand + site configuration.
 * Replace the placeholder contact details before going live.
 */
export const SITE = Object.freeze({
  name: "Pinoct",
  domain: "pinoct.com",
  url: "https://pinoct.com",
  tagline: "Early detection saves lives.",
  description:
    "A breast cancer awareness initiative by Pakistan International School, led by Ayesha Faraz — spreading awareness, educating visitors and promoting early detection.",
  email: "ayesha.aashikhokhar@gmail.com",
});

/** The school this awareness initiative belongs to. */
export const SCHOOL = Object.freeze({
  name: "Pakistan International School",
  logo: "/school-logo.webp",
});

/** Project lead / client. */
export const CLIENT = Object.freeze({
  name: "Ayesha Faraz",
  initials: "AF",
  role: "Project Lead",
  email: SITE.email,
});

export const NAV_LINKS = [
  { label: "Home", to: PATHS.HOME },
  { label: "About", to: PATHS.ABOUT },
  { label: "Awareness", to: PATHS.AWARENESS },
  { label: "Self-check", to: PATHS.SELF_CHECK },
  { label: "Screening", to: PATHS.SCREENING },
  { label: "FAQ", to: PATHS.FAQ },
  // { label: "Contact", to: PATHS.CONTACT },
];

export const FOOTER_GROUPS = [
  {
    title: "Learn",
    links: [
      { label: "Warning signs", to: `${PATHS.AWARENESS}#signs` },
      { label: "Risk factors", to: `${PATHS.AWARENESS}#risks` },
      { label: "Stages explained", to: `${PATHS.AWARENESS}#stages` },
      { label: "Myths vs facts", to: `${PATHS.AWARENESS}#myths` },
    ],
  },
  {
    title: "Act",
    links: [
      { label: "5-step self-check", to: PATHS.SELF_CHECK },
      { label: "Reminder tool", to: `${PATHS.SELF_CHECK}#tracker` },
      { label: "Screening by age", to: PATHS.SCREENING },
      { label: "FAQ", to: PATHS.FAQ },
    ],
  },
  {
    title: "Pinoct",
    links: [
      { label: "About us", to: PATHS.ABOUT },
      { label: "Contact", to: PATHS.CONTACT },
    ],
  },
];

export const TRUSTED_SOURCES = [
  { label: "World Health Organization", href: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer" },
  { label: "American Cancer Society", href: "https://www.cancer.org/cancer/types/breast-cancer.html" },
  { label: "CDC", href: "https://www.cdc.gov/breast-cancer/" },
  { label: "Shaukat Khanum (Pakistan)", href: "https://shaukatkhanum.org.pk/" },
];
