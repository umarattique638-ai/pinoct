import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PATHS } from "@/routes/paths";
import Reveal from "../Reveal";
import { Eyebrow } from "../SectionHeader";
import "./PageHeader.css";

/** Hero banner for inner pages, with breadcrumb. */
export default function PageHeader({ eyebrow, title, accent, lead, crumb, children }) {
  return (
    <header className="page-header">
      <div className="ph-grid-bg" aria-hidden="true" />
      <div className="container ph-inner">
        <Reveal as="nav" className="crumbs" aria-label="Breadcrumb">
          <Link to={PATHS.HOME}>Home</Link>
          <ChevronRight aria-hidden="true" />
          <span aria-current="page">{crumb}</span>
        </Reveal>
        {eyebrow && <Reveal i={1}><Eyebrow>{eyebrow}</Eyebrow></Reveal>}
        <Reveal i={2} as="h1">
          {title} {accent && <span className="serif">{accent}</span>}
        </Reveal>
        {lead && <Reveal i={3} as="p" className="lead">{lead}</Reveal>}
        {children && <Reveal i={4} className="ph-actions">{children}</Reveal>}
      </div>
    </header>
  );
}
