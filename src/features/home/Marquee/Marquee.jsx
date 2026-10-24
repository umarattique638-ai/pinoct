import { Ribbon } from "@/components/common";
import { marqueeWords } from "@/data/home";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords]; // duplicated for a seamless loop
  return (
    <div aria-hidden="true" className="overflow-hidden bg-pink py-[22px] text-white">
      <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-[22px] font-bold whitespace-nowrap">
            {w}
            <Ribbon color="#fff" className="w-[22px] opacity-80" />
          </span>
        ))}
      </div>
    </div>
  );
}
