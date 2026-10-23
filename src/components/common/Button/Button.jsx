import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import "./Button.css";

/**
 * Polymorphic button.
 *  - `to`   → internal route (react-router <Link>)
 *  - `href` → external / anchor link
 *  - else   → native <button>
 */
export default function Button({
  to,
  href,
  variant = "primary", // primary | ghost | dark | light
  size = "md", // md | sm
  icon: Icon,
  iconLeft: IconLeft,
  className,
  children,
  ...rest
}) {
  const classes = cn("btn", `btn-${variant}`, size === "sm" && "btn-sm", className);
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
