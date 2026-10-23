import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Bell, CalendarHeart, Check, CheckCircle2, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button, LogoMark, Reveal } from "@/components/common";
import { heroChecklist, heroRotatingWords, heroSources } from "@/data/home";
import { PATHS } from "@/routes/paths";
import "./Hero.css";

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % heroRotatingWords.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="rotator" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroRotatingWords[i]}
          className="serif"
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

function FloatingCard({ className, delay, icon: Icon, tone, title, meta }) {
  return (
    <motion.div
      className={`float-card ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <span className={`ic ic-${tone}`}><Icon /></span>
      <div><b>{title}</b><span>{meta}</span></div>
    </motion.div>
  );
}

function ProgressRing({ value, total }) {
  const r = 46;
  const C = 2 * Math.PI * r;
  return (
    <div className="ring">
      <svg width="108" height="108" viewBox="0 0 108 108" aria-hidden="true">
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
      <span><b>{value}/{total}</b><small>steps</small></span>
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
      className="mock-wrap"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="orbit" aria-hidden="true"><i /><i /></div>
      <motion.div className="mock" style={{ rotateX, rotateY }}>
        <div className="mock-top">
          <div className="mock-user">
            <LogoMark size={34} />
            <div><b>Your October check-in</b><span>Monthly self-check · 5 steps</span></div>
          </div>
          <span className="pill ok"><span className="live-dot" />On track</span>
        </div>
        <div className="ring-row">
          <ProgressRing value={done} total={heroChecklist.length} />
          <div className="ring-txt">
            <h4>Almost there!</h4>
            <p>Two more steps to finish this month's self-check. It takes about five minutes.</p>
          </div>
        </div>
        <ul className="mock-list">
          {heroChecklist.map((c, i) => (
            <motion.li key={c.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.1 }}>
              <span className={`tick ${c.done ? "" : "off"}`}>{c.done ? <Check /> : i + 1}</span>
              {c.label}
              <em className={c.done ? "" : "today"}>{c.status}</em>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <FloatingCard className="fc-1" delay={1} icon={Bell} tone="pink" title="Reminder: self-check" meta="Every month · 7 days after period" />
      <FloatingCard className="fc-2" delay={1.3} icon={ShieldCheck} tone="green" title="Found early: ~99%" meta="5-year survival · localized" />
      <FloatingCard className="fc-3" delay={1.6} icon={CalendarHeart} tone="indigo" title="Mammogram at 40+" meta="Every 1–2 years · ask your doctor" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="dots" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="hero-badge">
              <span className="new"><Sparkles /> Oct 2026</span>
              Breast Cancer Awareness Month
            </span>
          </Reveal>
          <Reveal i={1} as="h1">
            Know your body.
            <span className="line2">Catch it <RotatingWord /></span>
          </Reveal>
          <Reveal i={2} as="p" className="lead">
            Breast cancer is the most common cancer in women worldwide — but when found early, the 5-year
            survival rate is around <b>99%</b>. Learn the signs, master the monthly self-check and know exactly
            when to get screened.
          </Reveal>
          <Reveal i={3} className="hero-actions">
            <Button to={PATHS.SELF_CHECK} icon={ArrowRight}>Start the 5-min self-check</Button>
            <Button to={`${PATHS.AWARENESS}#signs`} variant="ghost" iconLeft={PlayCircle}>8 warning signs</Button>
          </Reveal>

          <Reveal i={4} className="hero-proof">
            <div><b>5 min</b><span>once a month</span></div>
            <i />
            <div><b>~99%</b><span>survival when found early</span></div>
            <i />
            <div><b>100%</b><span>free &amp; private</span></div>
          </Reveal>

          <Reveal i={5} className="hero-sources">
            <span><CheckCircle2 /> Facts based on</span>
            {heroSources.map((s) => <em key={s}>{s}</em>)}
          </Reveal>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
