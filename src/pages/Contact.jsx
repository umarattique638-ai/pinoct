import { Link } from "react-router-dom";
import { ArrowRight, MessagesSquare, Siren } from "lucide-react";
import { PageHeader, Reveal, Section, Seo } from "@/components/common";
import ContactChannels from "@/features/contact/ContactChannels";
import { SITE } from "@/config/site";
import { PATHS } from "@/routes/paths";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Contact Pinoct on WhatsApp or email — questions, awareness sessions, partnerships and help finding breast cancer resources." />
      <PageHeader
        crumb="Contact"
        eyebrow="Contact us"
        title="Let's talk."
        accent="We'd love to hear from you."
        lead="Want to host an awareness session, help spread the message, or need help finding the right information and resources? Message the Pinoct team on WhatsApp or email."
      />
      <Section>
        <ContactChannels />
        <div className="contact-extra">
          <Reveal className="card info-urgent">
            <div className="icon-box"><Siren /></div>
            <div>
              <h4>Medical emergency?</h4>
              <p>{SITE.name} shares awareness information and can't give personal medical advice. In an emergency in Pakistan, call <a href={`tel:${SITE.emergency}`} className="info-value">{SITE.emergency}</a>.</p>
            </div>
          </Reveal>
          <Reveal i={1}>
            <Link to={PATHS.FAQ} className="card">
              <div className="icon-box"><MessagesSquare /></div>
              <div>
                <h4>Looking for a quick answer?</h4>
                <p>Most questions about signs, screening and self-checks are answered in our FAQ.</p>
                <span className="more">Read the FAQ <ArrowRight /></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
