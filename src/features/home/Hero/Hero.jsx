import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Bell, CalendarHeart, Check, CheckCircle2, Mail, PlayCircle, ShieldCheck } from "lucide-react";
import { Button, Container, LogoMark, Pill, Reveal } from "@/components/common";
import { heroChecklist, heroRotatingWords, heroSources } from "@/data/home";
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

function ProgressRing({ value, total }) {
  const r = 46;
  const C = 2 * Math.PI * r;
  return (
    <div className="relative size-[108px] shrink-0">
      <svg width="108" height="108" viewBox="0 0 108 108" className="-rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="hero-ring" x1="0" x2="1">
            <stop offset="0" stopColor="#e6337a" />
            <stop offset="1" stopColor="#ff74a8" />
          </linearGradient>
        </defs>
        <circle cx="54" cy="54" r={r} fill="none" stroke="#fde3ed" strokeWidth="10" />
        <motion.circle
          cx="54" cy="54" r={r} fill="none" stroke="url(#hero-ring)" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={C} initial={{ strokeDashoffset: C }} animate={{ strokeDashoffset: C * (1 - value / total) }}
          transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute inset-0 grid place-content-center text-center">
        <b className="font-display text-[26px] leading-none font-extrabold">{value}/{total}</b>
        <small className="block text-[11px] font-semibold text-muted">steps</small>
      </span>
    </div>
  );
}

/** Interactive app-style preview card that tilts towards the cursor. */
function HeroMockup() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const done = heroChecklist.filter((c) => c.done).length;

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
              <b className="block font-display text-[14.5px]">Your October check-in</b>
              <span className="text-[12.5px] text-muted">Monthly self-check · 5 steps</span>
            </div>
          </div>
          <Pill tone="ok" className="hidden sm:inline-flex">
            <span className="size-[7px] animate-live rounded-full bg-ok" />
            On track
          </Pill>
        </div>

        <div className="flex flex-col items-center gap-5 rounded-[20px] border border-line bg-linear-135 from-[#fff1f6] to-white p-[18px] text-center sm:flex-row sm:text-left">
          <ProgressRing value={done} total={heroChecklist.length} />
          <div>
            <h4 className="text-xl">Almost there!</h4>
            <p className="mt-1.5 text-sm text-muted">Two more steps to finish this month's self-check. It takes about five minutes.</p>
          </div>
        </div>

        <ul className="mt-4 grid gap-2.5">
          {heroChecklist.map((c, i) => (
            <motion.li
              key={c.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-3 rounded-[14px] border border-line bg-white px-3.5 py-3 text-sm font-semibold"
            >
              <span className={cn("grid size-6 shrink-0 place-items-center rounded-lg text-xs [&>svg]:size-3.5", c.done ? "bg-pink text-white" : "bg-bg-2 text-muted")}>
                {c.done ? <Check aria-hidden="true" /> : i + 1}
              </span>
              {c.label}
              <em className={cn("ml-auto text-xs font-semibold not-italic", c.done ? "text-muted" : "text-pink")}>{c.status}</em>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <FloatingCard className="-top-[62px] -left-1.5 xl:-left-10" delay={1} icon={Bell} tone="pink" title="Reminder: self-check" meta="Every month · 7 days after period" />
      <FloatingCard className="-right-1.5 -bottom-11 xl:-right-7" delay={1.3} icon={ShieldCheck} tone="green" title="Found early: ~99%" meta="5-year survival · localized" />
      <FloatingCard className="-bottom-11 -left-7" delay={1.6} icon={CalendarHeart} tone="indigo" title="Mammogram at 40+" meta="Every 1–2 years · ask your doctor" />
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

          <Reveal i={3} className="mt-[34px] flex flex-wrap gap-3">
            <Button to={PATHS.SELF_CHECK} icon={ArrowRight}>Start the 5-min self-check</Button>
            <Button to={`${PATHS.AWARENESS}#signs`} variant="ghost" iconLeft={PlayCircle}>8 warning signs</Button>
          </Reveal>

          <Reveal i={4} className="mt-[34px]">
            <ClientCard />
          </Reveal>

          <Reveal i={5} className="mt-7 flex flex-wrap items-center gap-2 text-[13px]">
            <span className="mr-1 inline-flex items-center gap-1.5 font-semibold text-muted">
              <CheckCircle2 className="w-4 text-ok" aria-hidden="true" /> Facts based on
            </span>
            {heroSources.map((s) => (
              <em key={s} className="rounded-full border border-line bg-white/70 px-[11px] py-[5px] font-bold text-ink-2 not-italic">{s}</em>
            ))}
          </Reveal>
        </div>

        <HeroMockup />
      </Container>
    </section>
  );
}
