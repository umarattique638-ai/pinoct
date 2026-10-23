import { useState } from "react";
import { ArrowRight, CheckCircle2, Share2 } from "lucide-react";
import { PATHS } from "@/routes/paths";
import { SITE } from "@/config/site";
import Button from "../Button/Button";
import Reveal from "../Reveal";
import { LogoMark } from "../Logo/Logo";
import "./CtaBanner.css";

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
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta">
          <LogoMark size={420} className="ribbon-bg" />
          <h2>{title}<span className="serif">{accent}</span></h2>
          <p>{text}</p>
          <div className="cta-actions">
            <Button to={`${PATHS.SELF_CHECK}#tracker`} variant="light" icon={ArrowRight}>Set my reminder</Button>
            <Button variant="outline-light" iconLeft={Share2} onClick={share}>{copied ? "Link copied!" : "Share Pinoct"}</Button>
          </div>
          <ul className="checks">
            <li><CheckCircle2 /> Free &amp; private</li>
            <li><CheckCircle2 /> Based on WHO &amp; ACS guidance</li>
            <li><CheckCircle2 /> Works on any device</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
