import { useId } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "@/routes/paths";
import { SITE } from "@/config/site";
import { cn } from "@/utils/cn";
import "./Logo.css";

/** The Pinoct awareness-ribbon mark (standalone, reusable for favicons, decoration, etc.). */
export function LogoMark({ size = 40, className }) {
  const id = useId();
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff5c9a" />
          <stop offset="1" stopColor="#b8125a" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill={`url(#${id}-bg)`} />
      {/* ribbon: loop + crossed tails */}
      <path d="M24 9.5c-5.6 0-9 4-9 8.8 0 4.4 3 9.3 5.8 13.6L13 41.5l5.2 1.4 5.8-9.7 5.8 9.7 5.2-1.4-7.8-9.6c2.8-4.3 5.8-9.2 5.8-13.6 0-4.8-3.4-8.8-9-8.8Zm0 5.6c2 0 3.4 1.4 3.4 3.4 0 2.2-1.5 5.6-3.4 8.9-1.9-3.3-3.4-6.7-3.4-8.9 0-2 1.4-3.4 3.4-3.4Z" fill="#fff" />
      <circle cx="37" cy="11" r="3" fill="#fff" opacity=".9" />
    </svg>
  );
}

/** Full logo: mark + "pinoct" wordmark. Links home by default. */
export default function Logo({ to = PATHS.HOME, light = false, className }) {
  return (
    <Link to={to} className={cn("logo", light && "logo-light", className)} aria-label={`${SITE.name} home`}>
      <LogoMark />
      <span className="logo-word">
        pin<span>oct</span>
      </span>
    </Link>
  );
}
