import { ArrowRight, Check, Mail } from "lucide-react";
import { Button, Card, LogoMark, Reveal, Section, SectionHeader } from "@/components/common";
import { CLIENT, SCHOOL } from "@/config/site";
import { initiativePoints } from "@/data/home";
import { PATHS } from "@/routes/paths";

/** Home-page introduction to the school initiative and its project lead. */
export default function Initiative() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeader
            className="mb-0"
            eyebrow="About the initiative"
            title={`An initiative by ${SCHOOL.name}.`}
            subtitle={`Led by ${CLIENT.name}.`}
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
            <Button to={PATHS.ABOUT} icon={ArrowRight}>About the initiative</Button>
            <Button to={PATHS.CONTACT} variant="ghost" iconLeft={Mail}>Contact {CLIENT.name.split(" ")[0]}</Button>
          </Reveal>
        </div>

        <Reveal i={1}>
          <Card hover={false} className="relative overflow-hidden p-8 text-center md:p-10">
            <div aria-hidden="true" className="absolute -top-24 left-1/2 size-[340px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,116,168,0.28),transparent_65%)]" />
            <div className="relative mx-auto grid size-[150px] place-items-center rounded-[36px] bg-bg-2">
              <LogoMark size={128} />
            </div>
            <p className="relative mt-6 font-display text-[clamp(22px,2.4vw,28px)] leading-tight font-extrabold tracking-[-0.01em] uppercase">
              {SCHOOL.name}
            </p>
            <div className="relative mx-auto mt-6 h-px w-24 bg-line" />
            <span className="relative mt-6 block text-[12px] font-bold tracking-[0.14em] text-pink uppercase">{CLIENT.role}</span>
            <p className="relative mt-1 font-display text-[26px] font-extrabold">{CLIENT.name}</p>
            <a href={`mailto:${CLIENT.email}`} className="relative mt-2 inline-flex items-center gap-2 text-[15px] font-semibold break-all text-muted hover:text-pink">
              <Mail className="size-4 shrink-0 text-pink" aria-hidden="true" />
              {CLIENT.email}
            </a>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
