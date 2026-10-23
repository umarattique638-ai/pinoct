import { motion } from "framer-motion";
import { CalendarHeart, HeartPulse, ShieldCheck } from "lucide-react";
import CountUp from "../CountUp";

const RIBBON_PATH =
  "M32 6c-8 0-13 6-13 13 0 6 4 13 8 20L15 58l8 2 9-16 9 16 8-2-12-19c4-7 8-14 8-20 0-7-5-13-13-13zm0 8c3 0 5 2 5 5 0 3-2 8-5 13-3-5-5-10-5-13 0-3 2-5 5-5z";

const float = (delay = 0) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
});

/** Big ribbon with orbit rings and floating hashtag chips. */
function RibbonVisual({ chips = [] }) {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[260px] place-items-center sm:max-w-[340px]">
      <div className="absolute inset-0 animate-orbit rounded-full border-[1.5px] border-dashed border-white/35" />
      <div className="absolute inset-10 animate-orbit-reverse rounded-full border border-white/20" />
      <div className="absolute inset-20 rounded-full bg-white/10 blur-xl" />
      <motion.svg viewBox="0 0 64 64" className="relative w-[46%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]" {...float()}>
        <path d={RIBBON_PATH} fill="#fff" />
      </motion.svg>
      {chips.map((c, i) => (
        <motion.span
          key={c}
          className="absolute rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-[13px] font-bold whitespace-nowrap text-white backdrop-blur"
          style={[{ top: "8%", left: "-4%" }, { top: "46%", right: "-8%" }, { bottom: "6%", left: "8%" }][i % 3]}
          {...float(i * 0.6)}
        >
          {c}
        </motion.span>
      ))}
    </div>
  );
}

/** Large survival statistic with an animated progress arc. */
function StatVisual({ stat }) {
  const R = 88;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative mx-auto grid w-full max-w-[320px] place-items-center">
      <svg viewBox="0 0 200 200" className="w-full -rotate-90" aria-hidden="true">
        <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
        <motion.circle
          cx="100" cy="100" r={R} fill="none" stroke="url(#banner-stat)" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={C} initial={{ strokeDashoffset: C }} whileInView={{ strokeDashoffset: C * 0.01 }}
          viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="banner-stat" x1="0" x2="1">
            <stop offset="0" stopColor="#e6337a" />
            <stop offset="1" stopColor="#ff74a8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-content-center px-10 text-center">
        <span className="font-display text-[64px] leading-none font-extrabold tracking-[-0.04em] text-white">
          ~<CountUp to={99} suffix="%" />
        </span>
        <span className="mt-2 text-[13px] leading-snug font-semibold text-mauve-light">{stat.label}</span>
      </div>
      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-mauve">
        <ShieldCheck className="size-4 text-pink-2" aria-hidden="true" /> Source: {stat.source}
      </span>
    </div>
  );
}

/** Monthly calendar tile + age badge for the mammogram banner. */
function CalendarVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      <motion.div className="rounded-[26px] bg-white p-5 text-ink shadow-mock" {...float()}>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-display text-lg font-bold">
            <CalendarHeart className="size-5 text-pink" aria-hidden="true" /> Screening plan
          </span>
          <span className="rounded-full bg-bg-2 px-2.5 py-1 text-xs font-bold text-pink">Every 1–2 yrs</span>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }, (_, i) => (
            <span
              key={i}
              className={
                i === 17
                  ? "grid h-8 place-items-center rounded-lg bg-pink text-xs font-bold text-white shadow-pink-sm"
                  : "grid h-8 place-items-center rounded-lg border border-line bg-bg text-xs font-semibold text-muted"
              }
            >
              {i + 1}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-line bg-bg-2 p-3 pr-20">
          <span className="grid size-9 place-items-center rounded-xl bg-white text-pink"><HeartPulse className="size-5" aria-hidden="true" /></span>
          <span className="text-[13px] leading-snug">
            <b className="block font-display text-sm">Mammogram booked</b>
            <span className="text-muted">About 20 minutes · low-dose X-ray</span>
          </span>
        </div>
      </motion.div>
      <motion.div
        className="absolute -right-3 -bottom-8 grid size-24 place-content-center rounded-full bg-ink text-center text-white shadow-dark sm:-right-6"
        {...float(0.8)}
      >
        <b className="font-display text-3xl leading-none font-extrabold">40+</b>
        <span className="text-[11px] font-semibold text-pink-2">start talking</span>
      </motion.div>
    </div>
  );
}

/** Soft concentric rings with a ribbon for the light banner. */
function StepsVisual() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[300px] place-items-center lg:grid">
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink/25 animate-orbit" />
      <div className="absolute inset-8 rounded-full bg-white shadow-soft" />
      <div className="absolute inset-16 rounded-full bg-bg-2" />
      <motion.svg viewBox="0 0 64 64" className="relative w-[38%]" {...float()}>
        <path d={RIBBON_PATH} fill="#e6337a" />
      </motion.svg>
    </div>
  );
}

export default function BannerVisual({ banner }) {
  switch (banner.visual) {
    case "ribbon":
      return <RibbonVisual chips={banner.chips} />;
    case "stat":
      return <StatVisual stat={banner.stat} />;
    case "calendar":
      return <CalendarVisual />;
    case "steps":
      return <StepsVisual />;
    default:
      return null;
  }
}
