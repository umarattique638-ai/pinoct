import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/common";
import { contactChannels } from "@/data/contact";
import { cn } from "@/utils/cn";

const ICONS = { whatsapp: MessageCircle, email: Mail };

/** Per-channel accent colours. */
const THEME = {
  whatsapp: {
    icon: "bg-whatsapp shadow-[0_14px_30px_-12px_var(--color-whatsapp)]",
    cta: "text-whatsapp",
    border: "hover:border-[#b7e8c8]",
    glow: "bg-[radial-gradient(circle,rgba(34,197,94,0.35),transparent_65%)]",
  },
  email: {
    icon: "bg-pink shadow-[0_14px_30px_-12px_var(--color-pink)]",
    cta: "text-pink",
    border: "hover:border-line-hover",
    glow: "bg-[radial-gradient(circle,rgba(255,116,168,0.4),transparent_65%)]",
  },
};

/** Big clickable WhatsApp + Email cards. */
export default function ContactChannels() {
  return (
    <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-[22px] md:grid-cols-2">
      {contactChannels.map((c, i) => {
        const Icon = ICONS[c.id];
        const t = THEME[c.id];
        return (
          <Reveal key={c.id} i={i}>
            <a
              href={c.href}
              {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-line bg-white p-[26px] transition duration-300 hover:-translate-y-1.5 hover:shadow-soft md:p-[34px]",
                t.border
              )}
            >
              <span aria-hidden="true" className={cn("absolute -top-[110px] -right-[110px] size-[260px] rounded-full opacity-55 transition-opacity duration-300 group-hover:opacity-100", t.glow)} />
              <span className={cn("relative grid size-[60px] place-items-center rounded-[18px] text-white [&>svg]:size-7", t.icon)}>
                <Icon aria-hidden="true" />
              </span>
              <span className="relative mt-[22px] font-display text-[26px] font-extrabold tracking-[-0.03em]">{c.title}</span>
              <p className="relative mt-2 text-[15.5px] text-muted">{c.text}</p>
              <span className="relative mt-[18px] font-display text-[22px] font-bold break-words text-ink">{c.value}</span>
              <span className={cn("relative mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-bold", t.cta)}>
                {c.cta}
                <ArrowUpRight className="w-[18px] transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}
