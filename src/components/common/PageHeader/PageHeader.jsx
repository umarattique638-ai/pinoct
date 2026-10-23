import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PATHS } from "@/routes/paths";
import { Eyebrow } from "../SectionHeader";
import "./PageHeader.css";

// Page headers are visible immediately on navigation, so they use a quick
// on-mount animation (not scroll-triggered) to avoid any perceived delay.
const enter = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
});

/** Hero banner for inner pages, with breadcrumb. */
export default function PageHeader({ eyebrow, title, accent, lead, crumb, children }) {
  return (
    <header className="page-header">
      <div className="ph-grid-bg" aria-hidden="true" />
      <div className="container ph-inner">
        <motion.nav className="crumbs" aria-label="Breadcrumb" {...enter(0)}>
          <Link to={PATHS.HOME}>Home</Link>
          <ChevronRight aria-hidden="true" />
          <span aria-current="page">{crumb}</span>
        </motion.nav>
        {eyebrow && <motion.div {...enter(1)}><Eyebrow>{eyebrow}</Eyebrow></motion.div>}
        <motion.h1 {...enter(2)}>
          {title} {accent && <span className="serif">{accent}</span>}
        </motion.h1>
        {lead && <motion.p className="lead" {...enter(3)}>{lead}</motion.p>}
        {children && <motion.div className="ph-actions" {...enter(4)}>{children}</motion.div>}
      </div>
    </header>
  );
}
