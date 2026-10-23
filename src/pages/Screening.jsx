import { ArrowRight, Info } from "lucide-react";
import { Button, CtaBanner, PageHeader, Section, SectionHeader, Seo } from "@/components/common";
import ScreeningTimeline from "@/features/screening/ScreeningTimeline/ScreeningTimeline";
import { MammogramSteps, ScreeningMethods } from "@/features/screening/ScreeningMethods";
import { PATHS } from "@/routes/paths";

export default function Screening() {
  return (
    <>
      <Seo title="Screening guide" description="When to start mammograms, how often, the different screening tests and what to expect at your appointment." />
      <PageHeader
        crumb="Screening"
        eyebrow="Screening guide"
        title="Find it before"
        accent="you can feel it."
        lead="A mammogram can find breast cancer years before it causes symptoms. Here's when to start, which tests exist, and what actually happens on the day."
      >
        <Button href="#by-age" icon={ArrowRight}>Screening by age</Button>
        <Button to={`${PATHS.SELF_CHECK}#tracker`} variant="ghost">Get my personal tip</Button>
      </PageHeader>

      <Section id="by-age">
        <SectionHeader eyebrow="Screening by age" title="When should you get screened?" subtitle="A simple guide, decade by decade." align="center"
          lead="A general guide for women at average risk." />
        <ScreeningTimeline />
        <p className="note"><Info />
          Guidelines differ between countries and organisations. If you have a strong family history, a known BRCA mutation, or had chest radiation when young, you may need to start earlier and add MRI — ask your doctor.
        </p>
      </Section>

      <Section tone="tint">
        <SectionHeader eyebrow="Screening tests" title="Which test does what?" subtitle="Four tools doctors use." />
        <ScreeningMethods />
      </Section>

      <Section tone="dark">
        <SectionHeader eyebrow="Your first mammogram" title="What to expect." subtitle="About 20 minutes, start to finish."
          lead="Knowing what happens takes away most of the worry. Here's the visit in four steps." />
        <MammogramSteps />
      </Section>

      <CtaBanner />
    </>
  );
}
