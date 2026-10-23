import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

const BASE =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition duration-200 [&>svg]:size-[18px] " +
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pink-3 " +
  "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

const VARIANTS = {
  primary: "bg-pink text-white shadow-pink hover:-translate-y-0.5 hover:bg-pink-dark",
  ghost: "border border-line bg-white text-ink hover:border-pink hover:text-pink",
  dark: "bg-ink text-white hover:-translate-y-0.5",
  light: "bg-white text-pink shadow-dark hover:-translate-y-0.5",
  "outline-light": "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

const SIZES = {
  md: "px-[26px] py-[15px] text-[15.5px]",
  sm: "px-5 py-[11px] text-[14.5px]",
};

/**
 * Polymorphic button.
 *  - `to`   → internal route (react-router <Link>)
 *  - `href` → external / anchor link
 *  - else   → native <button>
 */
export default function Button({ to, href, variant = "primary", size = "md", icon: Icon, iconLeft: IconLeft, className, children, ...rest }) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);
  const content = (
    <>
      {IconLeft && <IconLeft aria-hidden="true" />}
      {children}
      {Icon && <Icon aria-hidden="true" />}
    </>
  );

  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>;
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a href={href} className={classes} {...(external && { target: "_blank", rel: "noopener noreferrer" })} {...rest}>
        {content}
      </a>
    );
  }
  return <button type="button" className={classes} {...rest}>{content}</button>;
}
