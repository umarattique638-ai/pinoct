import { ArrowRight, CalendarPlus, Search } from "lucide-react";
import { Button, Callout, CtaBanner, IconBox, PageHeader, Section, SectionHeader, Seo } from "@/components/common";
import SelfCheckStepper from "@/features/self-check/SelfCheckStepper/SelfCheckStepper";
import CheckTracker from "@/features/self-check/CheckTracker/CheckTracker";
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

      <Section className="py-16 md:py-20">
        <Callout className="mt-0">
          <div className="flex items-center gap-4">
            <IconBox icon={Search} className="m-0 bg-white" hoverEffect={false} />
            <div>
              <b className="font-display text-xl">What are you looking for?</b>
              <p className="mt-1 text-muted">See the 8 warning signs to watch for during your monthly check.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to={`${PATHS.AWARENESS}#signs`} variant="dark" icon={ArrowRight}>Warning signs</Button>
            <Button to={PATHS.SCREENING} variant="ghost">Screening by age</Button>
          </div>
        </Callout>
      </Section>

      <CtaBanner />
    </>
  );
}
