import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.css";

/** Thin reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}
