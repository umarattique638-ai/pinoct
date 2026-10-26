import { ArrowRight, CalendarPlus, Search } from "lucide-react";
import { Button, Callout, CtaBanner, IconBox, PageHeader, Section, SectionHeader, Seo } from "@/components/common";
import SelfCheckStepper from "@/features/self-check/SelfCheckStepper/SelfCheckStepper";
import CheckTracker from "@/features/self-check/CheckTracker/CheckTracker";
import { PATHS } from "@/routes/paths";

export default function SelfCheck() {
  return (
    <>
      <Seo title="5-step self-check" description="Promote early detection with the monthly 5-step breast self-check — an interactive guide plus a free, private reminder and tracker." />
      {/* <PageHeader
        crumb="Self-check"
        eyebrow="Monthly self-check"
        title="Five minutes."
        accent="Once a month."
        lead="Early detection starts at home. Learn the five steps, set a monthly reminder and track your checks — so you notice any change early. Everything stays on your device."
      >
    
      </PageHeader> */}

      <Section id="guide">
        <SectionHeader
          eyebrow="Step by step"
          title="The 5-step self-check."
          subtitle="Click through each step."
          lead="Best done a few days after your period ends. If you don't menstruate, pick the same day each month."
        />
        <SelfCheckStepper />
      </Section>

      
    </>
  );
}
