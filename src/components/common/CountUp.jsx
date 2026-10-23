import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/** Animates a number from 0 → `to` the first time it becomes visible. */
export default function CountUp({ to, decimals = 0, prefix = "", suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, to, { duration, ease: "easeOut", onUpdate: setValue });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
