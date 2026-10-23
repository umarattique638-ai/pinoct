import { Link } from "react-router-dom";
import { ArrowRight, MessagesSquare, Siren } from "lucide-react";
import { Card, CardMore, IconBox, PageHeader, Reveal, Section, Seo } from "@/components/common";
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

        <div className="mx-auto mt-[22px] grid max-w-[920px] grid-cols-1 gap-[22px] md:grid-cols-2">
          <Reveal>
            <Card hover={false} className="flex h-full gap-4 border-[#f7c2d2] bg-linear-120 from-[#fff1f4] to-white p-6">
              <IconBox icon={Siren} className="m-0 bg-pink text-white" hoverEffect={false} />
              <div>
                <h4 className="text-lg">Medical emergency?</h4>
                <p className="mt-1.5 text-[14.5px] text-muted">
                  {SITE.name} shares awareness information and can't give personal medical advice. In an emergency in Pakistan, call{" "}
                  <a href={`tel:${SITE.emergency}`} className="font-bold text-pink">{SITE.emergency}</a>.
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal i={1}>
            <Card as={Link} to={PATHS.FAQ} className="flex h-full gap-4 p-6">
              <IconBox icon={MessagesSquare} className="m-0" />
              <div>
                <h4 className="text-lg">Looking for a quick answer?</h4>
                <p className="mt-1.5 text-[14.5px] text-muted">Most questions about signs, screening and self-checks are answered in our FAQ.</p>
                <CardMore icon={ArrowRight} className="mt-3">Read the FAQ</CardMore>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
