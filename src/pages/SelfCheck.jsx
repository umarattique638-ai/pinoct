import { ArrowRight, CalendarPlus } from "lucide-react";
import { Button, CtaBanner, PageHeader, Section, SectionHeader, Seo } from "@/components/common";
import SelfCheckStepper from "@/features/self-check/SelfCheckStepper/SelfCheckStepper";
import CheckTracker from "@/features/self-check/CheckTracker/CheckTracker";
import SignsGrid from "@/features/awareness/SignsGrid/SignsGrid";
import { PATHS } from "@/routes/paths";

export default function SelfCheck() {
  return (
    <>
      <Seo title="5-step self-check" description="Promote early detection with the monthly 5-step breast self-check — an interactive guide plus a free, private reminder and tracker." />
      <PageHeader
        crumb="Self-check"
        eyebrow="Monthly self-check"
        title="Five minutes."
        accent="Once a month."
        lead="Early detection starts at home. Learn the five steps, set a monthly reminder and track your checks — so you notice any change early. Everything stays on your device."
      >
        <Button href="#guide" icon={ArrowRight}>Start the guide</Button>
        <Button href="#tracker" variant="ghost" iconLeft={CalendarPlus}>Set a reminder</Button>
      </PageHeader>

      <Section id="guide">
        <SectionHeader
          eyebrow="Step by step"
          title="The 5-step self-check."
          subtitle="Click through each step."
          lead="Best done a few days after your period ends. If you don't menstruate, pick the same day each month."
        />
        <SelfCheckStepper />
      </Section>

      <Section tone="tint" id="tracker">
        <SectionHeader
          eyebrow="Your personal tool"
          title="Build the habit."
          subtitle="Plan it, track it, never forget."
          lead="Get a personalised check-in date and screening tip, add a recurring reminder to your calendar, and log your monthly self-checks."
        />
        <CheckTracker />
      </Section>

      <Section>
        <SectionHeader eyebrow="While you check" title="What are you looking for?" subtitle="Any of these 8 changes." />
        <SignsGrid />
        <div className="section-cta">
          <Button to={PATHS.SCREENING} variant="ghost" icon={ArrowRight}>Next: screening by age</Button>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
