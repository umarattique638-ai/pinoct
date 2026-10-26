import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight, CalendarHeart, Check, CheckCircle2, Eye, HandHeart, Mail, Megaphone, PlayCircle, Search, Share2, ShieldCheck, Stethoscope,
} from "lucide-react";
import { Button, Container, LogoMark, Pill, Reveal } from "@/components/common";
import { heroAwareness, heroRotatingWords, heroSources } from "@/data/home";
import { CLIENT, SCHOOL } from "@/config/site";
import { PATHS } from "@/routes/paths";
import { cn } from "@/utils/cn";

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % heroRotatingWords.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span aria-live="polite" className="relative inline-flex min-w-[3.6em] overflow-hidden pb-[0.1em] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroRotatingWords[i]}
          className="inline-block bg-[linear-gradient(110deg,#e6337a_10%,#ff74a8_60%,#b8125a_100%)] bg-clip-text font-accent tracking-[-0.02em] text-transparent"
          initial={{ y: "70%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-70%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroRotatingWords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const ICON_TONES = {
  pink: "bg-[#ffe3ec] text-pink",
  green: "bg-[#e3f7f0] text-ok",
  indigo: "bg-[#ebebfc] text-info",
};

function FloatingCard({ className, delay, icon: Icon, tone, title, meta }) {
  return (
    <motion.div
      className={cn(
        "absolute z-3 hidden min-w-[220px] items-center gap-3 rounded-2xl border border-line bg-white px-3.5 py-3 text-[13.5px] shadow-soft md:flex",
        className
      )}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <span className={cn("grid size-9 shrink-0 place-items-center rounded-[11px] [&>svg]:size-[18px]", ICON_TONES[tone])}>
        <Icon aria-hidden="true" />
      </span>
      <div>
        <b className="block text-sm">{title}</b>
        <span className="text-[12.5px] text-muted">{meta}</span>
      </div>
    </motion.div>
  );
}

const AWARENESS_ICONS = { Eye, Search, HandHeart, Stethoscope, Share2 };
const RIBBON_PATH =
  "M32 6c-8 0-13 6-13 13 0 6 4 13 8 20L15 58l8 2 9-16 9 16 8-2-12-19c4-7 8-14 8-20 0-7-5-13-13-13zm0 8c3 0 5 2 5 5 0 3-2 8-5 13-3-5-5-10-5-13 0-3 2-5 5-5z";

/** Animated pink ribbon inside a pulsing ring. */
function RibbonBadge() {
  return (
    <div className="relative grid size-[108px] shrink-0 place-items-center" aria-hidden="true">
      <motion.span
        className="absolute inset-0 rounded-full border-[3px] border-pink/30"
        animate={{ scale: [1, 1.15, 1], opacity: [0.9, 0, 0.9] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute inset-2 rounded-full border-2 border-dashed border-pink/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <span className="absolute inset-4 rounded-full bg-linear-135 from-pink to-[#b8125a] shadow-pink-sm" />
      <motion.svg
        viewBox="0 0 64 64"
        className="relative w-11"
        animate={{ y: [0, -3, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d={RIBBON_PATH} fill="#fff" />
      </motion.svg>
    </div>
  );
}

/** Interactive awareness card that tilts towards the cursor. */
function HeroMockup() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      className="relative perspective-[1200px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* orbit rings */}
      <div aria-hidden="true" className="absolute -inset-10 z-0 hidden md:block">
        <i className="absolute inset-0 animate-orbit rounded-full border-[1.5px] border-dashed border-pink/22" />
        <i className="absolute inset-[50px] animate-orbit-reverse rounded-full border-[1.5px] border-info/12" />
      </div>

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-2 rounded-[28px] border border-line bg-white/92 p-[22px] shadow-mock backdrop-blur-[10px] transform-3d"
      >
        <div className="mb-[18px] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <LogoMark size={34} />
            <div>
              <b className="block font-display text-[14.5px]">Breast Cancer Awareness</b>
              <span className="text-[12.5px] text-muted">Know · Check · Share</span>
            </div>
          </div>
          <Pill className="hidden sm:inline-flex">
            <span className="size-[7px] animate-live rounded-full bg-pink" />
            Spread awareness
          </Pill>
        </div>

        <div className="flex flex-col items-center gap-5 rounded-[20px] border border-line bg-linear-135 from-[#fff1f6] to-white p-[18px] text-center sm:flex-row sm:text-left">
          <RibbonBadge />
          <div>
            <h4 className="text-xl">Early detection saves lives.</h4>
            <p className="mt-1.5 text-sm text-muted">Found early, breast cancer is highly treatable. Awareness helps everyone act in time.</p>
          </div>
        </div>

        <ul className="mt-4 grid gap-2.5">
          {heroAwareness.map((item, i) => {
            const Icon = AWARENESS_ICONS[item.icon];
            return (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.12 }}
                className="flex items-center gap-3 rounded-[14px] border border-line bg-white px-3.5 py-3 text-sm font-semibold"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-bg-2 text-pink [&>svg]:size-4">
                  <Icon aria-hidden="true" />
                </span>
                {item.label}
                <span className="ml-auto flex items-center gap-2">
                  <em className="text-xs font-semibold text-muted not-italic">{item.tag}</em>
                  <motion.span
                    className="grid size-5 place-items-center rounded-full bg-pink text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3 + i * 0.25, type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Check className="size-3" aria-hidden="true" />
                  </motion.span>
                </span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      <FloatingCard className="-top-[62px] -left-1.5 xl:-left-10" delay={1} icon={Megaphone} tone="pink" title="Spread the word" meta="Share with family & friends" />
      <FloatingCard className="-right-1.5 -bottom-[72px] xl:-right-7" delay={1.3} icon={ShieldCheck} tone="green" title="Found early: ~99%" meta="5-year survival · localized" />
      <FloatingCard className="-bottom-[72px] -left-7" delay={1.6} icon={CalendarHeart} tone="indigo" title="Mammogram at 40+" meta="Every 1–2 years · ask your doctor" />
    </motion.div>
  );
}

/** Prominent "presented by" block: school logo + name. */
function SchoolBadge() {
  return (
    <div className="inline-flex items-center gap-4 rounded-[22px] border border-line bg-white/85 py-3 pr-6 pl-3 shadow-[0_10px_30px_-16px_rgba(230,51,122,0.55)] backdrop-blur">
      <span className="grid size-[64px] shrink-0 place-items-center rounded-2xl bg-bg-2">
        <LogoMark size={54} />
      </span>
      <span>
        <span className="block text-[11.5px] font-bold tracking-[0.14em] text-pink uppercase">Presented by</span>
        <span className="mt-0.5 block font-display text-[clamp(17px,2vw,22px)] leading-tight font-extrabold tracking-[-0.01em] text-ink uppercase">
          {SCHOOL.name}
        </span>
        <span className="mt-0.5 block text-[13px] font-semibold text-muted">Breast Cancer Awareness Initiative</span>
      </span>
    </div>
  );
}

/** Project-lead credit card. */
function ClientCard() {
  return (
    <div className="flex items-center gap-3 rounded-[20px] border border-line bg-white/80 p-3.5 backdrop-blur sm:inline-flex sm:gap-4 sm:p-4 sm:pr-5">
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-linear-135 sm:size-[52px] from-pink to-pink-deep font-display text-lg font-extrabold text-white shadow-pink-sm">
        {CLIENT.initials}
      </span>
      <div className="min-w-0 flex-1">
        <span className="block text-[11.5px] font-bold tracking-[0.12em] text-muted uppercase">Initiative led by</span>
        <b className="block font-display text-[20px] leading-tight font-extrabold text-ink sm:text-[22px]">{CLIENT.name}</b>
        <span className="block text-[12.5px] leading-snug font-semibold text-muted sm:text-[13px]">{CLIENT.role} · {SCHOOL.name}</span>
      </div>
      <a
        href={`mailto:${CLIENT.email}`}
        aria-label={`Email ${CLIENT.name}`}
        className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-pink transition hover:border-pink hover:bg-pink hover:text-white sm:ml-2"
      >
        <Mail className="size-[18px]" aria-hidden="true" />
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-10 pb-20 md:pt-16 md:pb-[110px]">
      {/* Background: drifting blobs + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-1">
        <div className="absolute -top-40 -right-[120px] size-[560px] animate-drift rounded-full bg-[#ffb3cf] opacity-70 blur-[70px]" />
        <div className="absolute -bottom-40 -left-40 size-[420px] animate-drift rounded-full bg-[#dcd7ff] opacity-70 blur-[70px] [animation-delay:-6s]" />
        <div className="absolute top-[30%] left-[38%] size-[300px] animate-drift rounded-full bg-[#ffe0ec] opacity-70 blur-[70px] [animation-delay:-11s]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(230,51,122,0.16)_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_at_30%_30%,#000_0%,transparent_70%)]" />
      </div>

      <Container className="relative grid items-center gap-20 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16">
        <div>
          <Reveal>
            <SchoolBadge />
          </Reveal>

          <Reveal i={1} as="h1" className="mt-6 text-[clamp(44px,5.2vw,72px)] leading-none font-extrabold tracking-[-0.045em]">
            Know your body.
            <span className="mt-1.5 block">Catch it <RotatingWord /></span>
          </Reveal>

          <Reveal i={2} as="p" className="mt-5 max-w-[560px] text-[19px] text-muted">
            Breast cancer is the most common cancer in women worldwide — but when found early, the 5-year
            survival rate is around <b className="text-ink">99%</b>. Learn the signs, master the monthly self-check and know exactly
            when to get screened.
          </Reveal>

          {/* <Reveal i={3} className="mt-[34px] flex flex-wrap gap-3">
            <Button to={PATHS.SELF_CHECK} icon={ArrowRight}>Start the 5-min self-check</Button>
            <Button to={`${PATHS.AWARENESS}#signs`} variant="ghost" iconLeft={PlayCircle}>8 warning signs</Button>
          </Reveal> */}

          <Reveal i={4} className="mt-[34px]">
            <ClientCard />
          </Reveal>

          {/* <Reveal i={5} className="mt-7 flex flex-wrap items-center gap-2 text-[13px]">
            <span className="mr-1 inline-flex items-center gap-1.5 font-semibold text-muted">
              <CheckCircle2 className="w-4 text-ok" aria-hidden="true" /> Facts based on
            </span>
            {heroSources.map((s) => (
              <em key={s} className="rounded-full border border-line bg-white/70 px-[11px] py-[5px] font-bold text-ink-2 not-italic">{s}</em>
            ))}
          </Reveal> */}
        </div>

        <HeroMockup />
      </Container>
    </section>
  );
}
