import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/common";
import { contactChannels } from "@/data/contact";
import { cn } from "@/utils/cn";
import "./Contact.css";

const ICONS = { whatsapp: MessageCircle, email: Mail };

/** Big clickable WhatsApp + Email cards. */
export default function ContactChannels() {
  return (
    <div className="contact-grid">
      {contactChannels.map((c, i) => {
        const Icon = ICONS[c.id];
        return (
          <Reveal key={c.id} i={i}>
            <a
              href={c.href}
              className={cn("contact-card", `contact-${c.id}`)}
              {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <span className="contact-icon"><Icon /></span>
              <span className="contact-title">{c.title}</span>
              <p>{c.text}</p>
              <span className="contact-value">{c.value}</span>
              <span className="contact-cta">{c.cta} <ArrowUpRight /></span>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}
