import { cn } from "@/utils/cn";
import { SectionToneContext } from "./sectionTone";

const TONES = {
  default: "",
  tint: "bg-bg-2",
  dark: "bg-plum text-[#fbeaf2]",
};

/** Page-width wrapper (1200px max). */
export function Container({ className, children }) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

/** Standard page section: vertical rhythm + centred container + colour tone. */
export default function Section({ id, tone = "default", className, containerClassName, children }) {
  return (
    <SectionToneContext.Provider value={tone}>
      <section id={id} className={cn("relative py-20 md:py-[110px]", TONES[tone], className)}>
        <Container className={containerClassName}>{children}</Container>
      </section>
    </SectionToneContext.Provider>
  );
}
