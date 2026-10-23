import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button, Logo } from "@/components/common";
import { NAV_LINKS } from "@/config/site";
import { PATHS } from "@/routes/paths";
import useScrolled from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";
import "./Navbar.css";

function AnnouncementBar() {
  return (
    <div className="announce">
      <b>October is Breast Cancer Awareness Month.</b> One self-check a month can change everything.
      <Link to={`${PATHS.SELF_CHECK}#tracker`}>Set your reminder →</Link>
    </div>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(40);
  const { pathname } = useLocation();
  // The menu is "open for a given path" — navigating anywhere closes it automatically.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const toggle = () => setOpenOn(open ? null : pathname);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkClass = ({ isActive }) => cn(isActive && "active");

  return (
    <>
      <AnnouncementBar />
      <header className={cn("nav", (scrolled || open) && "scrolled")}>
        <div className="container nav-inner">
          <Logo />
          <nav className="nav-links" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === PATHS.HOME} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cta">
            <Button to={PATHS.SELF_CHECK} size="sm" icon={ArrowRight} className="nav-cta-btn">Start self-check</Button>
            <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={toggle}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav className="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {NAV_LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === PATHS.HOME} className={linkClass} onClick={() => setOpenOn(null)}>{l.label}</NavLink>
              ))}
              <Button to={PATHS.SELF_CHECK} icon={ArrowRight} onClick={() => setOpenOn(null)}>Start self-check</Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
