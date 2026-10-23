import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Fades + slides its children in once when they scroll into view. `i` staggers siblings. */
export default function Reveal({ as = "div", i = 0, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component variants={variants} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} {...rest}>
      {children}
    </Component>
  );
}
