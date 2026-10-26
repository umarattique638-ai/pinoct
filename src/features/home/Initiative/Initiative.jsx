import { ArrowRight, BookOpenText, Check, HandHeart, Mail, Share2, Stethoscope } from "lucide-react";
import { Button, Card, Reveal, Section, SectionHeader } from "@/components/common";
import { CLIENT, SCHOOL } from "@/config/site";
import { helpSteps, initiativePoints } from "@/data/home";
import { PATHS } from "@/routes/paths";
import { motion } from "framer-motion";

const HELP_ICONS = { BookOpenText, HandHeart, Stethoscope, Share2 };

/** Animated "ways you can help" card — action-focused, no repeated school/lead details. */
function HelpCard() {
  return (
    <Card hover={false} className="relative overflow-hidden p-7 md:p-9">
      <div aria-hidden="true" className="absolute -top-28 -right-24 size-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,116,168,0.25),transparent_65%)]" />

      <span className="relative text-[12px] font-bold tracking-[0.14em] text-pink uppercase">Join the movement</span>
      <h3 className="relative mt-2 text-[clamp(24px,2.6vw,30px)] font-extrabold">
        Four ways <span className="font-accent text-pink">you can help.</span>
      </h3>

      <ol className="relative mt-7 grid gap-5">
        {/* connecting line with a travelling glow */}
        <span aria-hidden="true" className="absolute top-5 bottom-5 left-[21px] w-0.5 overflow-hidden rounded-full bg-line">
          <motion.span
            className="absolute inset-x-0 h-16 bg-linear-to-b from-transparent via-pink to-transparent"
            animate={{ y: ["-64px", "320px"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </span>

        {helpSteps.map((s, i) => {
          const Icon = HELP_ICONS[s.icon];
          return (
            <motion.li
              key={s.title}
              className="relative flex gap-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="relative z-1 grid size-11 shrink-0 place-items-center rounded-2xl bg-pink text-white shadow-pink-sm [&>svg]:size-5"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatDelay: 1.5 }}
              >
                <Icon aria-hidden="true" />
              </motion.span>
              <div>
                <b className="block font-display text-lg">{s.title}</b>
                <p className="mt-0.5 text-[14.5px] text-muted">{s.text}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Card>
  );
}

/** Home-page introduction to the initiative (school & lead are already shown in the hero). */
export default function Initiative() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeader
            className="mb-0"
            eyebrow="About the initiative"
            title="Awareness that starts at school."
            subtitle="And reaches every home."
            lead={`Pinoct is ${SCHOOL.name}'s breast cancer awareness platform. Its purpose is to spread awareness, educate visitors, promote early detection, and provide useful information and resources.`}
          />
          <Reveal as="ul" i={3} className="mt-7 grid gap-3">
            {initiativePoints.map((p) => (
              <li key={p} className="flex gap-3 text-[15.5px] text-ink-2">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-pink text-white"><Check className="size-3.5" aria-hidden="true" /></span>
                {p}
              </li>
            ))}
          </Reveal>
          <Reveal i={4} className="mt-8 flex flex-wrap gap-3">
            {/* <Button to={PATHS.CONTACT} variant="ghost" iconLeft={Mail}>Contact {CLIENT.name.split(" ")[0]}</Button> */}
          </Reveal>
        </div>

        <Reveal i={1}>
          <HelpCard />
        </Reveal>
      </div>
    </Section>
  );
}
