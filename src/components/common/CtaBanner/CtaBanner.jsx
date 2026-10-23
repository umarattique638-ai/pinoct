import { useState } from "react";
import { ArrowRight, Share2 } from "lucide-react";
import { PATHS } from "@/routes/paths";
import { SITE } from "@/config/site";
import Button from "../Button/Button";
import Reveal from "../Reveal";
import { CheckList } from "../Atoms";
import { Container } from "../Section";
import { LogoMark } from "../Logo/Logo";

/** Closing call-to-action shown at the bottom of most pages. */
export default function CtaBanner({
  title = "Five minutes a month.",
  accent = "Could save a life.",
  text = "Early detection saves lives. Do your self-check today, remind the women you love to do theirs, and share Pinoct — awareness only works when it's passed on.",
}) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const data = { title: SITE.name, text: "Early detection saves lives. Learn the 5-step self-check 🎀", url: window.location.origin };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(data.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* user dismissed the share sheet */
    }
  };

  return (
    <section className="pt-[30px]">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_20%_0%,#ff74a8_0%,transparent_45%),radial-gradient(circle_at_90%_100%,#7a1c58_0%,transparent_50%),linear-gradient(135deg,#e6337a,#a8104f)] px-[22px] py-[60px] text-center text-white sm:rounded-[36px] sm:px-10 sm:py-20">
          <LogoMark size={420} className="pointer-events-none absolute -top-[60px] -right-20 rotate-18 opacity-12 [&_rect]:fill-transparent" />
          <h2 className="relative text-[clamp(36px,5.4vw,64px)] font-extrabold">
            {title}
            <span className="block font-accent text-pink-soft">{accent}</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-[580px] text-lg text-pink-soft">{text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button to={`${PATHS.SELF_CHECK}#tracker`} variant="light" icon={ArrowRight}>Set my reminder</Button>
            <Button variant="outline-light" iconLeft={Share2} onClick={share}>{copied ? "Link copied!" : "Share Pinoct"}</Button>
          </div>
          <CheckList light className="relative justify-center" items={["Free & private", "Based on WHO & ACS guidance", "Works on any device"]} />
        </Reveal>
      </Container>
    </section>
  );
}
