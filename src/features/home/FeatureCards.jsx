import { Link } from "react-router-dom";
import { ArrowRight, BookOpenText, CalendarCheck, HandHeart, HeartPulse, MessagesSquare, ScanLine, Search } from "lucide-react";
import { Reveal } from "@/components/common";
import { cn } from "@/utils/cn";

const ICONS = { Search, HandHeart, CalendarCheck, BookOpenText, HeartPulse, ScanLine, MessagesSquare };

/** Grid of linked icon cards. items: [{ icon, title, text, to, linkText? }] */
export default function FeatureCards({ items, columns = 3 }) {
  return (
    <div className={cn(columns === 4 ? "grid-4" : "grid-3")}>
      {items.map((item, i) => {
        const Icon = ICONS[item.icon];
        return (
          <Reveal key={item.title} i={i}>
            <Link to={item.to} className="card feature-card">
              <div className="icon-box"><Icon /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="more">{item.linkText ?? "Explore"} <ArrowRight /></span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
