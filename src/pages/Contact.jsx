import { PageHeader, Section, Seo } from "@/components/common";
import ContactForm from "@/features/contact/ContactForm";
import ContactInfo from "@/features/contact/ContactInfo";
import "@/features/contact/Contact.css";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Get in touch with the Pinoct team — questions, awareness events, partnerships and feedback." />
      <PageHeader
        crumb="Contact"
        eyebrow="Contact us"
        title="Let's talk."
        accent="We'd love to hear from you."
        lead="Want to host an awareness session, partner with us, or just have a question? Send a message and the Pinoct team will get back to you."
      />
      <Section>
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
