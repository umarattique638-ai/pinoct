import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container, Logo } from "@/components/common";
import { FOOTER_GROUPS, SITE, TRUSTED_SOURCES } from "@/config/site";
import useScrolled from "@/hooks/useScrolled";

function BackToTop() {
  const visible = useScrolled(900);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Back to top"
          className="fixed right-[22px] bottom-[22px] z-60 grid size-[50px] place-items-center rounded-full bg-ink text-white shadow-soft"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

const linkClass = "text-[14.5px] text-muted transition-colors hover:text-pink";

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="mb-3.5 text-[15px]">{title}</h4>
      <ul className="grid gap-2.5">{children}</ul>
    </div>
  );
}

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-[110px] border-t border-line pt-[70px] pb-[34px]">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">
          <div className="col-span-full xl:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[320px] text-[14.5px] text-muted">{SITE.description}</p>
            <ul className="mt-[18px] grid gap-2.5">
              <li className="flex items-center gap-2 text-[14.5px] text-muted">
                <MessageCircle className="w-4 shrink-0 text-pink" aria-hidden="true" />
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className={linkClass}>{SITE.whatsappDisplay}</a>
              </li>
              <li className="flex items-center gap-2 text-[14.5px] text-muted">
                <Mail className="w-4 shrink-0 text-pink" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className={linkClass}>{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2 text-[14.5px] text-muted">
                <MapPin className="w-4 shrink-0 text-pink" aria-hidden="true" />
                {SITE.location}
              </li>
            </ul>
          </div>

          {FOOTER_GROUPS.map((g) => (
            <FooterColumn key={g.title} title={g.title}>
              {g.links.map((l) => <li key={l.to}><Link to={l.to} className={linkClass}>{l.label}</Link></li>)}
            </FooterColumn>
          ))}

          <FooterColumn title="Trusted sources">
            {TRUSTED_SOURCES.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{s.label}</a></li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-[50px] rounded-2xl bg-bg-2 px-[22px] py-[18px] text-[13px] text-muted">
          <b>Medical disclaimer:</b> {SITE.name} is for education and awareness only and is not a substitute for professional medical advice, diagnosis or treatment. If you notice any change in your breasts, please consult a qualified doctor.
        </div>
        <div className="mt-[26px] flex flex-wrap justify-between gap-3 text-[13.5px] text-muted">
          <span>© {YEAR} {SITE.name}. Made with 🎀 for every woman.</span>
          <span>{SITE.tagline}</span>
        </div>
      </Container>
      <BackToTop />
    </footer>
  );
}
