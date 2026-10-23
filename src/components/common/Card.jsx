import { cn } from "@/utils/cn";

/**
 * Base white card. `hover` adds the lift + shadow effect.
 * Children can react to card hover with Tailwind `group-hover:` classes.
 */
export function Card({ as: Component = "div", hover = true, className, children, ...rest }) {
  return (
    <Component
      className={cn(
        "group relative overflow-hidden rounded-card border border-line bg-white p-[30px] transition duration-300",
        hover && "hover:-translate-y-1.5 hover:border-line-hover hover:shadow-soft",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Rounded icon tile that turns pink + tilts when its parent card is hovered. */
export function IconBox({ icon: Icon, size = "md", className, hoverEffect = true }) {
  return (
    <div
      className={cn(
        "grid shrink-0 place-items-center bg-bg-2 text-pink transition duration-300",
        size === "md" ? "mb-[22px] size-[54px] rounded-2xl [&>svg]:size-[26px]" : "mb-[18px] size-12 rounded-[14px] [&>svg]:size-6",
        hoverEffect && "group-hover:-rotate-6 group-hover:bg-pink group-hover:text-white",
        className
      )}
    >
      <Icon aria-hidden="true" />
    </div>
  );
}

export function CardTitle({ as: Component = "h3", className, children }) {
  return <Component className={cn("text-[23px] font-bold", className)}>{children}</Component>;
}

export function CardText({ className, children }) {
  return <p className={cn("mt-3 text-[15.5px] text-muted", className)}>{children}</p>;
}

/** "Learn more →" style link label whose arrow nudges right on card hover. */
export function CardMore({ icon: Icon, className, children }) {
  return (
    <span className={cn("mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-pink", className)}>
      {children}
      {Icon && <Icon className="w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
    </span>
  );
}
