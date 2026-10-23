import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PATHS } from "@/routes/paths";
import { Eyebrow } from "../SectionHeader";

// Page headers are visible immediately on navigation, so they use a quick
// on-mount animation (not scroll-triggered) to avoid any perceived delay.
const enter = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
});

/** Centred hero banner for inner pages, with breadcrumb. */
export default function PageHeader({ eyebrow, title, accent, lead, crumb, children }) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-linear-to-b from-[#fff4f8] to-bg pt-[46px] pb-16 text-center md:pt-[70px] md:pb-[90px]">
      {/* glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-[360px] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,116,168,0.35),transparent_62%)]" />
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_50%_0%,#000_0%,transparent_70%)]" />

      <div className="container-page relative flex flex-col items-center">
        <motion.nav aria-label="Breadcrumb" className="mb-[22px] flex items-center justify-center gap-1.5 text-sm font-semibold text-muted" {...enter(0)}>
          <Link to={PATHS.HOME} className="hover:text-pink">Home</Link>
          <ChevronRight className="w-[15px]" aria-hidden="true" />
          <span aria-current="page" className="text-ink">{crumb}</span>
        </motion.nav>

        {eyebrow && <motion.div {...enter(1)}><Eyebrow>{eyebrow}</Eyebrow></motion.div>}

        <motion.h1 className="mx-auto mt-[18px] max-w-[900px] text-[clamp(40px,6vw,72px)] font-extrabold" {...enter(2)}>
          {title} {accent && <span className="font-accent text-pink">{accent}</span>}
        </motion.h1>

        {lead && <motion.p className="mx-auto mt-5 max-w-[680px] text-[19px] text-muted" {...enter(3)}>{lead}</motion.p>}

        {children && <motion.div className="mt-[30px] flex flex-wrap justify-center gap-3" {...enter(4)}>{children}</motion.div>}
      </div>
    </header>
  );
}
