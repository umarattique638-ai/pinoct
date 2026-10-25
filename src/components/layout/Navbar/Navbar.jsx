import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button, Logo } from "@/components/common";
import { NAV_LINKS } from "@/config/site";
import { PATHS } from "@/routes/paths";
import useScrolled from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";

function AnnouncementBar() {
  return (
    <div className="bg-plum px-4 py-2.5 text-center text-sm font-medium text-[#ffdbe9]">
      <b className="text-white">October is Breast Cancer Awareness Month.</b> Spread the word — early detection saves lives.
      <Link to={`${PATHS.SELF_CHECK}#tracker`} className="ml-2 font-bold text-pink-2 hover:underline">Set your reminder →</Link>
    </div>
  );
}

const desktopLink = ({ isActive }) =>
  cn(
    "rounded-full px-3.5 py-[9px] text-[14.5px] font-semibold text-ink-2 transition-colors hover:bg-white hover:text-pink",
    isActive && "bg-white text-pink shadow-[0_1px_0_var(--color-line),0_6px_18px_-10px_rgba(230,51,122,0.5)]"
  );

const mobileLink = ({ isActive }) =>
  cn("rounded-xl px-3.5 py-[13px] font-semibold hover:bg-bg-2", isActive && "bg-bg-2 text-pink");

export default function Navbar() {
  const scrolled = useScrolled(40);
  const { pathname } = useLocation();
  // The menu is "open for a given path" — navigating anywhere closes it automatically.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const toggle = () => setOpenOn(open ? null : pathname);
  const close = () => setOpenOn(null);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <AnnouncementBar />
      <header
        className={cn(
          "sticky top-0 z-50 transition duration-300",
          (scrolled || open) && "bg-[rgba(255,250,252,0.82)] shadow-[0_1px_0_var(--color-line)] backdrop-blur-[14px]"
        )}
      >
        <div className="container-page flex h-[76px] items-center justify-between">
          <Logo />
          <nav aria-label="Main" className="hidden gap-1 2xl:flex">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === PATHS.HOME} className={desktopLink}>{l.label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            {/* <Button to={PATHS.SELF_CHECK} size="sm" icon={ArrowRight} className="hidden md:inline-flex">Start self-check</Button> */}
            <button
              className="grid size-11 place-items-center rounded-xl border border-line bg-white 2xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={toggle}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              aria-label="Mobile"
              className="absolute top-[76px] right-4 left-4 grid max-h-[calc(100vh-140px)] gap-0.5 overflow-y-auto rounded-[20px] border border-line bg-white p-3 shadow-soft"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {NAV_LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === PATHS.HOME} className={mobileLink} onClick={close}>{l.label}</NavLink>
              ))}
              <Button to={PATHS.SELF_CHECK} icon={ArrowRight} className="mt-2" onClick={close}>Start self-check</Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
