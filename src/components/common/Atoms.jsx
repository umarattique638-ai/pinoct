import { CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/cn";

const PILL_TONES = {
  pink: "bg-bg-2 text-pink",
  ok: "bg-[#e3f7f0] text-ok",
  warn: "bg-[#fdf1de] text-warn",
  info: "bg-[#ebebfc] text-info",
};

/** Small rounded status/label badge. */
export function Pill({ tone = "pink", className, children }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-[5px] text-xs font-bold", PILL_TONES[tone], className)}>
      {children}
    </span>
  );
}

/** Inline list of green-tick reassurance points. `light` for use on pink/dark backgrounds. */
export function CheckList({ items, light = false, className }) {
  return (
    <ul className={cn("mt-[26px] flex flex-wrap gap-x-[22px] gap-y-2.5 text-sm font-semibold", light ? "text-pink-soft" : "text-muted", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <CheckCircle2 className={cn("size-[17px]", light ? "text-white" : "text-ok")} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Soft-pink highlighted strip with content on the left and an action on the right. */
export function Callout({ className, children }) {
  return (
    <div className={cn("mt-[30px] flex flex-wrap items-center justify-between gap-[18px] rounded-card border border-[#f9c6d9] bg-linear-120 from-[#ffe4ee] to-[#fff4f8] px-7 py-6", className)}>
      {children}
    </div>
  );
}

/** Small muted footnote with a leading icon. */
export function Note({ icon: Icon, className, children }) {
  return (
    <p className={cn("mt-[26px] flex items-start gap-2.5 text-[13.5px] text-muted", className)}>
      {Icon && <Icon className="mt-0.5 w-[17px] shrink-0" aria-hidden="true" />}
      {children}
    </p>
  );
}

/** Centred/left row of call-to-action buttons below a section. */
export function ActionRow({ center = false, className, children }) {
  return <div className={cn("mt-[34px] flex flex-wrap gap-3", center && "justify-center", className)}>{children}</div>;
}
