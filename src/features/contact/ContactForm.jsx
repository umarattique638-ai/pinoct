import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button, FormField } from "@/components/common";
import { contactTopics } from "@/data/contact";
import useForm from "@/hooks/useForm";
import { sendContactMessage } from "@/services/contactService";
import { validateContact } from "@/utils/validators";

const INITIAL = { name: "", email: "", phone: "", topic: "", message: "", consent: false };

export default function ContactForm() {
  const { values, errors, status, result, register, handleChange, handleSubmit, reset } = useForm({
    initialValues: INITIAL,
    validate: validateContact,
    onSubmit: sendContactMessage,
  });

  if (status === "success") {
    return (
      <motion.div className="card contact-card form-success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="success-icon"><CheckCircle2 /></div>
        <h3>{result?.method === "api" ? "Message sent — thank you!" : "Almost done!"}</h3>
        <p>
          {result?.method === "api"
            ? "We've received your message and will get back to you soon."
            : "Your email app has opened with the message ready. Just press send there to reach us."}
        </p>
        <Button variant="ghost" onClick={reset}>Send another message</Button>
      </motion.div>
    );
  }

  return (
    <form className="card contact-card" onSubmit={handleSubmit} noValidate>
      <h3>Send us a message</h3>
      <p>Questions, event requests, partnerships or feedback — we read every message.</p>

      <div className="form-row">
        <FormField label="Full name" error={errors.name} required>
          <input type="text" autoComplete="name" placeholder="Ayesha Khan" {...register("name")} />
        </FormField>
        <FormField label="Email" error={errors.email} required>
          <input type="email" autoComplete="email" placeholder="you@example.com" {...register("email")} />
        </FormField>
      </div>

      <div className="form-row">
        <FormField label="Phone" error={errors.phone} hint="Optional">
          <input type="tel" autoComplete="tel" placeholder="+92 300 0000000" {...register("phone")} />
        </FormField>
        <FormField label="Topic" error={errors.topic} required>
          <select {...register("topic")}>
            <option value="" disabled>Choose a topic…</option>
            {contactTopics.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </FormField>
      </div>

      <FormField label="Message" error={errors.message} required hint={`${values.message.trim().length}/20 characters minimum`}>
        <textarea rows={5} placeholder="How can we help?" {...register("message")} />
      </FormField>

      <label className="checkbox">
        <input type="checkbox" name="consent" checked={values.consent} onChange={handleChange} />
        <span>I understand Pinoct shares awareness information only and cannot give personal medical advice.</span>
      </label>
      {errors.consent && <p className="field-error">{errors.consent}</p>}

      <AnimatePresence>
        {status === "error" && (
          <motion.p className="form-alert" role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <AlertCircle /> {result?.message}
          </motion.p>
        )}
      </AnimatePresence>

      <Button type="submit" className="form-submit" disabled={status === "submitting"} icon={status === "submitting" ? Loader2 : Send}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
