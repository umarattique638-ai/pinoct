import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, MessagesSquare, Siren } from "lucide-react";
import { Reveal } from "@/components/common";
import { contactChannels } from "@/data/contact";
import { PATHS } from "@/routes/paths";
import { cn } from "@/utils/cn";

const ICONS = { Mail, MapPin, Siren };

export default function ContactInfo() {
  return (
    <div className="contact-info">
      {contactChannels.map((c, i) => {
        const Icon = ICONS[c.icon];
        const Value = c.href ? "a" : "span";
        return (
          <Reveal key={c.title} i={i} className={cn("card info-card", c.urgent && "urgent")}>
            <div className="icon-box"><Icon /></div>
            <div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <Value className="info-value" {...(c.href && { href: c.href })}>{c.value}</Value>
            </div>
          </Reveal>
        );
      })}
      <Reveal i={3}>
        <Link to={PATHS.FAQ} className="card info-card faq-link">
          <div className="icon-box"><MessagesSquare /></div>
          <div>
            <h4>Looking for a quick answer?</h4>
            <p>Most questions about signs, screening and self-checks are answered in our FAQ.</p>
            <span className="more">Read the FAQ <ArrowRight /></span>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}
