import { motion } from "framer-motion";
import { ArrowUp, BedSingle, Hand, Search, ShowerHead, Sparkle } from "lucide-react";

/**
 * Friendly, non-anatomical animated scene for each self-check step (0–4).
 * Built from simple icons + motion so it is suitable for school presentations.
 */

const RIBBON_PATH =
  "M32 6c-8 0-13 6-13 13 0 6 4 13 8 20L15 58l8 2 9-16 9 16 8-2-12-19c4-7 8-14 8-20 0-7-5-13-13-13zm0 8c3 0 5 2 5 5 0 3-2 8-5 13-3-5-5-10-5-13 0-3 2-5 5-5z";

const loop = (duration, delay = 0) => ({ duration, delay, repeat: Infinity, ease: "easeInOut" });

/** Shared circular "stage": soft glow, slowly rotating dashed ring and a pulse. */
function Stage({ children }) {
  return (
    <div className="relative grid size-[210px] place-items-center" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,116,168,0.28),transparent_68%)]" />
      <motion.div
        className="absolute inset-3 rounded-full border-2 border-dashed border-pink-2/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-10 rounded-full border border-pink-2/40"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 0, 0.7] }}
        transition={loop(2.6)}
      />
      <div className="absolute inset-12 rounded-full bg-white/6" />
      {children}
    </div>
  );
}

/** Small twinkling sparkle at a given position. */
function Twinkle({ className, delay = 0 }) {
  return (
    <motion.span
      className={`absolute text-pink-2 ${className}`}
      animate={{ scale: [0.4, 1, 0.4], opacity: [0.2, 1, 0.2], rotate: [0, 90, 180] }}
      transition={loop(2.2, delay)}
    >
      <Sparkle className="size-4 fill-current" />
    </motion.span>
  );
}

/** Hand doing small circles — the "pads of three fingers" motion. */
function CirclingHand({ className = "" }) {
  return (
    <motion.div
      className={`relative z-1 ${className}`}
      animate={{ x: [0, 10, 0, -10, 0], y: [-10, 0, 10, 0, -10] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
    >
      <Hand className="size-16 text-white drop-shadow-[0_6px_14px_rgba(230,51,122,0.6)]" strokeWidth={1.6} />
    </motion.div>
  );
}

/* ---------------- step scenes ---------------- */

function MirrorScene() {
  return (
    <Stage>
      <div className="relative z-1 flex flex-col items-center">
        {/* mirror */}
        <div className="relative h-[104px] w-[78px] overflow-hidden rounded-[40px] border-[5px] border-white/85 bg-linear-160 from-white/25 to-pink-2/10">
          <motion.div
            className="absolute -top-6 h-[150px] w-6 rotate-25 bg-white/55 blur-[2px]"
            animate={{ x: [-60, 110] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
          />
          <svg viewBox="0 0 64 64" className="absolute inset-0 m-auto w-9 opacity-90">
            <path d={RIBBON_PATH} fill="#ff74a8" />
          </svg>
        </div>
        {/* stand */}
        <div className="h-4 w-1.5 rounded-full bg-white/80" />
        <div className="h-1.5 w-12 rounded-full bg-white/80" />
      </div>
      <Twinkle className="top-9 right-11" />
      <Twinkle className="bottom-12 left-10" delay={0.7} />
      <Twinkle className="top-16 left-12" delay={1.3} />
    </Stage>
  );
}

function RaiseArmsScene() {
  return (
    <Stage>
      <div className="relative z-1 flex items-end gap-5">
        {[0, 0.25].map((d, i) => (
          <motion.div key={i} animate={{ y: [22, -8, 22] }} transition={loop(2, d)}>
            <Hand className={`size-14 text-white ${i === 0 ? "-scale-x-100" : ""}`} strokeWidth={1.6} />
          </motion.div>
        ))}
      </div>
      {[-34, 0, 34].map((x, i) => (
        <motion.span
          key={x}
          className="absolute text-pink-2"
          style={{ left: `calc(50% + ${x}px - 10px)` }}
          animate={{ y: [40, -60], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity, ease: "easeOut" }}
        >
          <ArrowUp className="size-5" strokeWidth={2.5} />
        </motion.span>
      ))}
    </Stage>
  );
}

function CheckAreaScene() {
  // magnifier orbits the ribbon on a circle of radius 46px
  const steps = 24;
  const xs = Array.from({ length: steps + 1 }, (_, i) => Math.cos((i / steps) * 2 * Math.PI) * 46);
  const ys = Array.from({ length: steps + 1 }, (_, i) => Math.sin((i / steps) * 2 * Math.PI) * 46);
  return (
    <Stage>
      <motion.svg viewBox="0 0 64 64" className="relative z-1 w-14" animate={{ scale: [1, 1.08, 1] }} transition={loop(2)}>
        <path d={RIBBON_PATH} fill="#ff74a8" />
      </motion.svg>
      <motion.div
        className="absolute z-2"
        animate={{ x: xs, y: ys }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <div className="grid size-14 place-items-center rounded-full bg-white/12 backdrop-blur-[2px]">
          <Search className="size-10 text-white" strokeWidth={2} />
        </div>
      </motion.div>
    </Stage>
  );
}

function LyingDownScene() {
  return (
    <Stage>
      <div className="relative z-1 flex flex-col items-center">
        <div className="relative grid place-items-center">
          <motion.div
            className="absolute size-20 rounded-full border-2 border-dashed border-pink-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <CirclingHand />
        </div>
        <BedSingle className="mt-1 size-14 text-pink-2" strokeWidth={1.6} />
      </div>
    </Stage>
  );
}

function StandingShowerScene() {
  return (
    <Stage>
      <ShowerHead className="absolute top-6 left-[calc(50%-34px)] z-1 size-12 text-white/90" strokeWidth={1.6} />
      {[-30, -18, -6, 6].map((x, i) => (
        <motion.span
          key={x}
          className="absolute top-[66px] z-1 h-3 w-1.5 rounded-full bg-[#9ecbff]"
          style={{ left: `calc(50% + ${x}px)` }}
          animate={{ y: [0, 44], opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, delay: i * 0.25, repeat: Infinity, ease: "easeIn" }}
        />
      ))}
      <div className="relative top-10 grid place-items-center">
        <motion.div
          className="absolute size-20 rounded-full border-2 border-dashed border-pink-2"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <CirclingHand />
      </div>
    </Stage>
  );
}

const SCENES = [MirrorScene, RaiseArmsScene, CheckAreaScene, LyingDownScene, StandingShowerScene];

export default function StepIllustration({ step }) {
  const Scene = SCENES[step] ?? SCENES[0];
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <Scene />
    </motion.div>
  );
}
