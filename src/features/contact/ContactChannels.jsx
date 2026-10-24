import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { LogoMark, Reveal } from "@/components/common";
import { CLIENT, SCHOOL } from "@/config/site";
import { contactEmail } from "@/data/contact";

/** Single, prominent email contact card with the project lead's details. */
export default function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Reveal className="mx-auto max-w-[760px]">
      <div className="relative overflow-hidden rounded-[30px] border border-line bg-white p-7 shadow-soft md:p-12">
        <span aria-hidden="true" className="absolute -top-[120px] -right-[120px] size-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,116,168,0.35),transparent_65%)]" />

        <div className="relative flex flex-col items-center text-center">
          <span className="grid size-[68px] place-items-center rounded-[20px] bg-pink text-white shadow-[0_14px_30px_-12px_var(--color-pink)]">
            <Mail className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-[clamp(28px,3.4vw,38px)] font-extrabold">{contactEmail.title}</h2>
          <p className="mt-3 max-w-[520px] text-[16px] text-muted">{contactEmail.text}</p>

          <a href={contactEmail.href} className="mt-7 font-display text-[clamp(18px,2.6vw,28px)] font-bold break-all text-ink hover:text-pink">
            {contactEmail.value}
          </a>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={contactEmail.href}
              className="inline-flex items-center gap-2.5 rounded-full bg-pink px-[26px] py-[15px] text-[15.5px] font-bold text-white shadow-pink transition hover:-translate-y-0.5 hover:bg-pink-dark"
            >
              {contactEmail.cta} <ArrowUpRight className="size-[18px]" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-[26px] py-[15px] text-[15.5px] font-bold text-ink transition hover:border-pink hover:text-pink"
            >
              {copied ? <Check className="size-[18px] text-ok" aria-hidden="true" /> : <Copy className="size-[18px]" aria-hidden="true" />}
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          <div className="mt-10 flex w-full items-center gap-4 rounded-[20px] border border-line bg-bg-2 p-4 text-left">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white"><LogoMark size={46} /></span>
            <div className="min-w-0">
              <b className="block font-display text-lg">{CLIENT.name}</b>
              <span className="text-[13.5px] font-semibold text-muted">{CLIENT.role} · {SCHOOL.name}</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
