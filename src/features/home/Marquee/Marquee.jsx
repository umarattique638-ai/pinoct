import { LogoMark } from "@/components/common";
import { marqueeWords } from "@/data/home";
import "./Marquee.css";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords]; // duplicated for a seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i}>{w}<LogoMark size={26} /></span>
        ))}
      </div>
    </div>
  );
}
