import { motion } from "framer-motion";

const PINK = "#ff74a8";
const LINE = "rgba(255,255,255,.75)";

const FOCUS = {
  both: [{ x: 98, y: 122, r: 22 }, { x: 142, y: 122, r: 22 }],
  nipples: [{ x: 98, y: 128, r: 6 }, { x: 142, y: 128, r: 6 }],
  one: [{ x: 142, y: 122, r: 22 }],
};

/** Stylised, non-graphic figure for each self-check step (0–4). */
export default function StepIllustration({ step }) {
  const armsUp = step === 1;
  const lying = step === 3;
  const shower = step === 4;
  const focus = step === 2 ? FOCUS.nipples : step >= 3 ? FOCUS.one : FOCUS.both;

  return (
    <svg viewBox="0 0 240 210" width="100%" style={{ maxWidth: 300 }} aria-hidden="true">
      <g transform={lying ? "rotate(-90 120 110)" : undefined}>
        <circle cx="120" cy="44" r="22" fill="none" stroke={LINE} strokeWidth="3" />
        <path d="M78 92c8-14 24-20 42-20s34 6 42 20l6 90H72z" fill="rgba(255,255,255,.06)" stroke={LINE} strokeWidth="3" strokeLinejoin="round" />
        {armsUp ? (
          <>
            <motion.path d="M82 92 L60 40 L66 14" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
            <motion.path d="M158 92 L180 40 L174 14" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
          </>
        ) : (
          <>
            <path d="M80 94 L62 150 L70 186" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
            <path d="M160 94 L178 150 L170 186" fill="none" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
          </>
        )}
        <path d="M80 118c4 14 32 14 36 0M124 118c4 14 32 14 36 0" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        {focus.map((f, i) => (
          <g key={i}>
            <motion.circle
              cx={f.x} cy={f.y} r={f.r} fill="none" stroke={PINK} strokeWidth="2.5"
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.25, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              style={{ transformOrigin: `${f.x}px ${f.y}px` }}
            />
            <circle cx={f.x} cy={f.y} r="3" fill={PINK} />
          </g>
        ))}
        {(lying || shower) && (
          <motion.circle
            cx="142" cy="122" r="12" fill="none" stroke={PINK} strokeWidth="2.5" strokeDasharray="6 6"
            animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "142px 122px" }}
          />
        )}
      </g>
      {step === 0 && <rect x="20" y="10" width="200" height="190" rx="20" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" strokeDasharray="4 8" />}
      {shower && [30, 60, 190, 210].map((x, i) => (
        <motion.path
          key={x} d={`M${x} 10 v12`} stroke="#9ecbff" strokeWidth="3" strokeLinecap="round"
          animate={{ y: [0, 150], opacity: [0, 1, 0] }} transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}
    </svg>
  );
}
