import { motion } from "framer-motion";
import { ArrowRight, Eye, Hand, Stethoscope } from "lucide-react";
import { cn } from "@/utils/cn";
import Button from "../Button/Button";
import Reveal from "../Reveal";
import { Container } from "../Section";
import BannerVisual from "./BannerVisual";

const THEMES = {
  pink: {
    shell: "text-white bg-[radial-gradient(circle_at_15%_0%,#ff74a8_0%,transparent_45%),radial-gradient(circle_at_100%_100%,#7a1c58_0%,transparent_55%),linear-gradient(135deg,#e6337a,#a8104f)]",
    eyebrow: "bg-white/15 text-white border-white/25",
    accent: "text-pink-soft",
    text: "text-pink-soft",
    primary: "light",
    secondary: "outline-light",
  },
  dark: {
    shell: "text-white bg-[radial-gradient(circle_at_85%_10%,rgba(255,116,168,0.35)_0%,transparent_45%),linear-gradient(140deg,#2a0a20,#4a1238)]",
    eyebrow: "bg-white/8 text-pink-2 border-white/15",
    accent: "text-pink-2",
    text: "text-mauve-light",
    primary: "primary",
    secondary: "outline-light",
  },
  light: {
    shell: "text-ink border border-[#f9c6d9] bg-[radial-gradient(circle_at_90%_0%,rgba(255,116,168,0.25)_0%,transparent_45%),linear-gradient(120deg,#ffe4ee,#fff8fb)]",
    eyebrow: "bg-white text-pink border-line",
    accent: "text-pink",
    text: "text-muted",
    primary: "primary",
    secondary: "ghost",
  },
};

const STEP_ICONS = { Eye, Hand, Stethoscope };

/**
 * Full-width awareness banner (campaign strip).
 * Pass a banner object from `@/data/banners`.
 */
export default function AwarenessBanner({ banner, className }) {
  const t = THEMES[banner.theme];

  return (
    <section className={cn("py-10 md:py-14", className)} aria-label={banner.eyebrow}>
      <Container>
        <Reveal className={cn("relative isolate overflow-hidden rounded-[26px] px-6 py-12 sm:rounded-[32px] sm:px-10 md:px-14 md:py-16", t.shell)}>
          {/* decorative dot grid */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-1 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[22px_22px] mask-[radial-gradient(ellipse_at_0%_0%,#000,transparent_60%)]" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className={cn("inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12.5px] font-bold tracking-[0.08em] uppercase", t.eyebrow)}>
                <span className="size-1.5 rounded-full bg-current" />
                {banner.eyebrow}
              </span>
              <h2 className="mt-5 text-[clamp(32px,4.4vw,54px)] font-extrabold">
                {banner.title}
                <span className={cn("block font-accent", t.accent)}>{banner.accent}</span>
              </h2>
              <p className={cn("mt-5 max-w-[560px] text-[17px]", t.text)}>{banner.text}</p>

              {banner.steps && (
                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {banner.steps.map((s, i) => {
                    const Icon = STEP_ICONS[s.icon];
                    return (
                      <motion.li
                        key={s.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.1 }}
                        className="rounded-2xl border border-line bg-white/80 p-4 backdrop-blur"
                      >
                        <span className="grid size-10 place-items-center rounded-xl bg-pink text-white shadow-pink-sm [&>svg]:size-5"><Icon aria-hidden="true" /></span>
                        <b className="mt-3 block font-display text-lg">{i + 1}. {s.title}</b>
                        <span className="text-[13.5px] leading-snug text-muted">{s.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {/* <Button to={banner.primary.to} variant={t.primary} icon={ArrowRight}>{banner.primary.label}</Button>
                {banner.secondary && <Button to={banner.secondary.to} variant={t.secondary}>{banner.secondary.label}</Button>}
              */}
             
              </div>
            </div>

            <BannerVisual banner={banner} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
