import { motion, useScroll, useSpring } from "framer-motion";

/** Thin reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-100 h-[3px] origin-left bg-linear-to-r from-pink to-pink-2"
    />
  );
}
