import { ArrowRight } from "lucide-react";
import { AwarenessBanner, Button, CtaBanner, PageHeader, Section, SectionHeader, Seo } from "@/components/common";
import { BANNERS } from "@/data/banners";
import SignsGrid from "@/features/awareness/SignsGrid/SignsGrid";
import RiskFactors from "@/features/awareness/RiskFactors/RiskFactors";
import StageExplorer from "@/features/awareness/StageExplorer/StageExplorer";
import MythsTable from "@/features/awareness/MythsTable/MythsTable";

export default function Awareness() {
  return (
    <>
      <Seo title="Awareness hub" description="Learn breast cancer warning signs, risk factors, stages and the truth behind common myths — awareness that leads to early detection." />
      <PageHeader
        crumb="Awareness"
        eyebrow="Awareness hub"
        title="Know the facts."
        accent="Spot it early."
        lead="Awareness starts with knowing what to look for. Learn the warning signs, what raises risk, how stages work and the myths that delay diagnosis — so breast cancer can be found early."
      >
        <Button href="#signs" icon={ArrowRight}>Warning signs</Button>
        <Button href="#myths" variant="ghost">Myths vs facts</Button>
      </PageHeader>

      <Section id="signs">
        <SectionHeader
          eyebrow="Warning signs"
          title="8 signs to never ignore."
          subtitle="Changes worth a doctor's visit."
          lead="Some people have no symptoms at all, which is why screening matters. But if you notice any of these, don't wait — most changes are not cancer, yet every change deserves a check."
        />
        <SignsGrid />
      </Section>

      <Section tone="tint" id="risks">
        <SectionHeader
          eyebrow="Risk factors"
          title="What raises the risk?"
          subtitle="Some you can change. Some you can't."
          lead="Having a risk factor does not mean you will get breast cancer, and many people who get it have no known risk factors other than being a woman and getting older."
        />
        <RiskFactors />
      </Section>

      <Section tone="dark" id="stages">
        <SectionHeader
          eyebrow="Stages explained"
          title="Why timing changes everything."
          subtitle="The earlier the stage, the better the odds."
          lead="Doctors describe breast cancer in stages from 0 to IV, based on tumour size and how far it has spread. Pick a stage to see what it means."
        />
        <StageExplorer />
      </Section>

      <Section id="myths">
        <SectionHeader
          eyebrow="Myth vs fact"
          title="Common myths, busted."
          subtitle="Don't let misinformation delay a check."
          lead="Misinformation delays early detection. Here's what trusted medical evidence actually says."
        />
        <MythsTable />
      </Section>

      <AwarenessBanner banner={BANNERS.knowYourNormal} className="pt-0 md:pt-0" />

      <CtaBanner />
    </>
  );
}
