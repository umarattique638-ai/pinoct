import { Link } from "react-router-dom";
import {
  ArrowRight, BookOpenText, CalendarCheck, GraduationCap, HandHeart, HeartPulse, Library, Megaphone, MessagesSquare, ScanLine, Search,
} from "lucide-react";
import { Card, CardMore, CardText, CardTitle, IconBox, Reveal } from "@/components/common";
import { cn } from "@/utils/cn";

const ICONS = { Search, HandHeart, CalendarCheck, BookOpenText, HeartPulse, ScanLine, MessagesSquare, Megaphone, GraduationCap, Library };

/** Grid of linked icon cards. items: [{ icon, title, text, to, linkText? }] */
export default function FeatureCards({ items, columns = 3 }) {
  const four = columns === 4;
  return (
    <div className={cn("grid", four ? "grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4" : "grid-cols-1 gap-[22px] md:grid-cols-3")}>
      {items.map((item, i) => (
        <Reveal key={item.title} i={i}>
          <Card as={Link} to={item.to} className="flex h-full flex-col">
            <IconBox icon={ICONS[item.icon]} />
            <CardTitle className={four ? "text-xl" : undefined}>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
            <CardMore icon={ArrowRight} className="mt-auto pt-5">{item.linkText ?? "Explore"}</CardMore>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
