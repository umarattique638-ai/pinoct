import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/common";
import { FOOTER_GROUPS, SITE, TRUSTED_SOURCES } from "@/config/site";
import useScrolled from "@/hooks/useScrolled";
import "./Footer.css";

function BackToTop() {
  const visible = useScrolled(900);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div>
            <Logo />
            <p>{SITE.description}</p>
            <ul className="foot-contact">
              <li><Mail /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><MapPin />{SITE.location}</li>
            </ul>
          </div>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <h4>{g.title}</h4>
              <ul>
                {g.links.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div>
            <h4>Trusted sources</h4>
            <ul>
              {TRUSTED_SOURCES.map((s) => (
                <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="disclaimer">
          <b>Medical disclaimer:</b> {SITE.name} is for education and awareness only and is not a substitute for professional medical advice, diagnosis or treatment. If you notice any change in your breasts, please consult a qualified doctor.
        </div>
        <div className="copy">
          <span>© {YEAR} {SITE.name}. Made with 🎀 for every woman.</span>
          <span>{SITE.tagline}</span>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
