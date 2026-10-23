import { cn } from "@/utils/cn";

/** Standard page section: vertical rhythm + centered container. tone: default | tint | dark */
export default function Section({ id, tone = "default", className, containerClassName, children }) {
  return (
    <section id={id} className={cn("section", tone !== "default" && tone, className)}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
