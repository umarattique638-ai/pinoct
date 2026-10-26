import { Link } from "react-router-dom";
import { PATHS } from "@/routes/paths";
import { SCHOOL, SITE } from "@/config/site";
import { cn } from "@/utils/cn";

const RIBBON_PATH =
  "M32 6c-8 0-13 6-13 13 0 6 4 13 8 20L15 58l8 2 9-16 9 16 8-2-12-19c4-7 8-14 8-20 0-7-5-13-13-13zm0 8c3 0 5 2 5 5 0 3-2 8-5 13-3-5-5-10-5-13 0-3 2-5 5-5z";

/** Pakistan International School logo (the brand mark used across the site). */
export function LogoMark({ size = 40, className }) {
  return (
    <img
      src={SCHOOL.logo}
      alt=""
      aria-hidden="true"
      width={Math.round(size * 0.74)}
      height={size}
      decoding="async"
      className={cn("shrink-0 object-contain", className)}
      style={{ height: size, width: "auto" }}
    />
  );
}

/** Plain single-colour awareness ribbon — for decoration on coloured backgrounds. */
export function Ribbon({ className, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d={RIBBON_PATH} fill={color} />
    </svg>
  );
}

/**
 * Full logo: school mark + "pinoct" wordmark + school name.
 * Links home by default; pass `to={null}` to render it as plain (non-link) text.
 */
export default function Logo({ to = PATHS.HOME, className }) {
  const content = (
    <>
      <LogoMark size={46} className="transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-6" />
      <span className="flex flex-col">
        <span className="font-display text-[25px] leading-none font-extrabold tracking-[-0.05em] text-ink">
          pin<span className="text-pink">oct</span>
        </span>
        <span className="mt-1 text-[10.5px] leading-none font-bold tracking-[0.06em] text-muted uppercase">
          {SCHOOL.name}
        </span>
      </span>
    </>
  );
  const classes = cn("group inline-flex items-center gap-2.5", className);

  if (to === null) return <span className={classes}>{content}</span>;
  return (
    <Link to={to} className={classes} aria-label={`${SITE.name} — ${SCHOOL.name} home`}>
      {content}
    </Link>
  );
}
