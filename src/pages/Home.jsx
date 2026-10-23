import { ArrowRight } from "lucide-react";
import { Accordion, Button, CtaBanner, Section, SectionHeader, Seo } from "@/components/common";
import Hero from "@/features/home/Hero/Hero";
import StatsStrip from "@/features/home/StatsStrip/StatsStrip";
import Marquee from "@/features/home/Marquee/Marquee";
import FeatureCards from "@/features/home/FeatureCards";
import SelfCheckStepper from "@/features/self-check/SelfCheckStepper/SelfCheckStepper";
import SignsGrid from "@/features/awareness/SignsGrid/SignsGrid";
import ScreeningTimeline from "@/features/screening/ScreeningTimeline/ScreeningTimeline";
import { explore, pillars } from "@/data/home";
import { featuredFaqs } from "@/data/faqs";
import { PATHS } from "@/routes/paths";

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <StatsStrip />

      <Section>
        <SectionHeader
          eyebrow="Why it matters"
          title="Awareness that acts."
          subtitle="Not just a pink ribbon."
          lead="Pinoct exists to spread breast cancer awareness, educate visitors, promote early detection and share trusted information and resources — because awareness only matters if it changes what we do."
        />
        <FeatureCards items={pillars} />
      </Section>

      <Section tone="tint" id="self-check">
        <SectionHeader
          eyebrow="5-step self-check"
          title="The monthly self-check."
          subtitle="Five minutes. Once a month."
          lead="A self-exam won't replace screening, but it helps you know your normal so you can spot changes early. Click through each step."
        />
        <SelfCheckStepper />
        <div className="section-cta">
          <Button to={`${PATHS.SELF_CHECK}#tracker`} icon={ArrowRight}>Set a monthly reminder</Button>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Warning signs"
          title="8 signs to never ignore."
          subtitle="Changes worth a doctor's visit."
          lead="Some people have no symptoms at all, which is why screening matters. But if you notice any of these, don't wait — most changes are not cancer, yet every change deserves a check."
        />
        <SignsGrid />
      </Section>

      <Marquee />

      <Section>
        <SectionHeader
          eyebrow="Screening by age"
          title="When should you get screened?"
          subtitle="A simple guide, decade by decade."
          align="center"
        />
        <ScreeningTimeline />
        <div className="section-cta center">
          <Button to={PATHS.SCREENING} variant="ghost" icon={ArrowRight}>Full screening guide</Button>
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeader eyebrow="Explore Pinoct" title="Everything in one place." subtitle="Pick where to start." />
        <FeatureCards items={explore} columns={4} />
      </Section>

      <Section containerClassName="faq-grid">
        <SectionHeader
          eyebrow="FAQ"
          title="Quick answers."
          subtitle="To the questions people ask most."
          lead="Trusted answers to common questions. See all of them on the FAQ page, or reach the team on WhatsApp or email."
        />
        <div>
          <Accordion items={featuredFaqs} />
          <div className="section-cta">
            <Button to={PATHS.FAQ} variant="ghost" icon={ArrowRight}>All FAQs</Button>
            <Button to={PATHS.CONTACT} variant="dark" icon={ArrowRight}>Contact us</Button>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
