import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/common";
import { CLIENT, SCHOOL, SITE } from "@/config/site";
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

const YEAR = new Date().getFullYear();

/** Minimal one-line footer. */
export default function Footer() {
  return (
    <footer className="mt-[110px] py-8 pb-24 md:pb-8">
      <Container>
        <p className="text-center text-[14px] text-muted">
          © {YEAR} {SITE.name} — a breast cancer awareness initiative by {SCHOOL.name}, led by {CLIENT.name}.
        </p>
      </Container>
      <BackToTop />
    </footer>
  );
}
