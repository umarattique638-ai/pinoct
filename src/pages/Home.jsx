import { AwarenessBanner, CtaBanner, Section, SectionHeader, Seo } from "@/components/common";
import Hero from "@/features/home/Hero/Hero";
import Initiative from "@/features/home/Initiative/Initiative";
import Marquee from "@/features/home/Marquee/Marquee";
import FeatureCards from "@/features/home/FeatureCards";
import { explore, pillars } from "@/data/home";
import { BANNERS } from "@/data/banners";

/**
 * Home is an overview only: hero, the school initiative, and entry points to
 * each topic page. Detailed content (self-check, signs, screening, FAQ) lives
 * on its own page and is not repeated here.
 */
export default function Home() {
  return (
    <>
      <Seo />
      <Hero />

      
      <Initiative />

<AwarenessBanner banner={BANNERS.awarenessMonth} className="pt-6 pb-0 md:pt-6 md:pb-0" />

      <Section tone="tint">
        <SectionHeader
          eyebrow="Why it matters"
          title="Awareness that acts."
          subtitle="Not just a pink ribbon."
          lead="Breast cancer is the most common cancer among women worldwide. Awareness only matters if it changes what we do — checking, noticing, and getting screened on time."
        />
        <FeatureCards items={pillars} />
      </Section>

      {/* <Section>
        <SectionHeader eyebrow="Explore Pinoct" title="Everything in one place." subtitle="Pick where to start." />
        <FeatureCards items={explore} columns={4} />
      </Section>

      <AwarenessBanner banner={BANNERS.earlyDetection} className="pt-0 md:pt-0" />

      <Marquee />

      <CtaBanner /> 
      
      */}
            <CtaBanner /> 

    </>
  );
}
