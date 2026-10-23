import { ArrowRight, Mail } from "lucide-react";
import { Button, CtaBanner, PageHeader, Reveal, Section, SectionHeader, Seo } from "@/components/common";
import { CancerTypes, MissionVision, RibbonHistory, Values } from "@/features/about/AboutSections";
import StatsStrip from "@/features/home/StatsStrip/StatsStrip";
import { PATHS } from "@/routes/paths";

export default function About() {
  return (
    <>
      <Seo title="About us" description="Pinoct is a breast cancer awareness initiative turning awareness into action: self-checks, screening and early detection." />
      <PageHeader
        crumb="About"
        eyebrow="About Pinoct"
        title="We turn awareness into"
        accent="action."
        lead="Pinoct — from pink + October — is a breast cancer awareness initiative. We make the facts simple, the self-check easy and the next step clear, all year round."
      >
        <Button to={PATHS.AWARENESS} icon={ArrowRight}>Start learning</Button>
        <Button to={PATHS.CONTACT} variant="ghost" iconLeft={Mail}>Get in touch</Button>
      </PageHeader>

      <Section>
        <div className="split">
          <div className="story">
            <SectionHeader eyebrow="Our story" title="Why Pinoct exists." subtitle="Late diagnosis is often an information gap." />
            <Reveal as="p">
              Every October the world turns pink. But a ribbon alone doesn't find a lump. Too many women still learn
              about breast cancer only after it has spread — not because care didn't exist, but because <b>no one told
              them what to look for, or when to get checked.</b>
            </Reveal>
            <Reveal as="p" i={1}>
              Pinoct brings together trusted medical guidance into one friendly place: the warning signs, a
              5-step self-check you can actually remember, a screening guide by age, and free private tools that
              remind you every month.
            </Reveal>
          </div>
          <MissionVision />
        </div>
      </Section>

      <StatsStrip />

      <Section tone="tint">
        <SectionHeader
          eyebrow="Understanding the disease"
          title="What is breast cancer?"
          subtitle="Not one disease, but several."
          lead="Breast cancer happens when cells in the breast grow out of control. Doctors classify it by where it starts and what drives its growth — which shapes treatment."
        />
        <CancerTypes />
        <p className="note">Shares are approximate (American Cancer Society). Types can overlap — e.g. an invasive ductal cancer may also be HER2-positive.</p>
      </Section>

      <Section tone="dark">
        <SectionHeader eyebrow="The pink ribbon" title="A short history." subtitle="From a symbol to a movement." />
        <RibbonHistory />
      </Section>

      <Section>
        <SectionHeader eyebrow="Our values" title="What we stand for." subtitle="The principles behind every page." align="center" />
        <Values />
      </Section>

      <CtaBanner />
    </>
  );
}
