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
    "Pinoct is a breast cancer awareness platform — learn the warning signs, the 5-step self-check and when to get screened.",
  email: "hello@pinoct.com", // TODO: create this mailbox once the domain is purchased
  emergency: "1122",
  location: "Lahore, Pakistan",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    x: "https://x.com/",
    youtube: "https://youtube.com/",
  },
});

export const NAV_LINKS = [
  { label: "Home", to: PATHS.HOME },
  { label: "About", to: PATHS.ABOUT },
  { label: "Awareness", to: PATHS.AWARENESS },
  { label: "Self-check", to: PATHS.SELF_CHECK },
  { label: "Screening", to: PATHS.SCREENING },
  { label: "FAQ", to: PATHS.FAQ },
  { label: "Contact", to: PATHS.CONTACT },
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
