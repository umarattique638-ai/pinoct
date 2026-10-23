import { cloneElement, isValidElement, useId } from "react";
import { cn } from "@/utils/cn";

/** Shared look for <input>, <select> and <textarea>. */
export const inputClass =
  "w-full rounded-[14px] border border-line bg-bg px-4 py-[13px] text-ink outline-none transition " +
  "focus:border-pink focus:shadow-ring aria-invalid:border-[#e5484d] aria-invalid:bg-[#fff7f7]";

/**
 * Label + control + hint/error wrapper.
 * Automatically wires id, aria-invalid and aria-describedby onto the child control.
 */
export function FormField({ label, error, hint, required, className, children }) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const control = isValidElement(children)
    ? cloneElement(children, {
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
        required,
        className: cn(inputClass, children.props.className),
      })
    : children;

  return (
    <div className={cn("mt-[18px] grid content-start gap-2", className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-bold">
          {label} {required && <span className="text-pink" aria-hidden="true">*</span>}
        </label>
      )}
      {control}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-[13px] font-semibold text-[#d93a40]">{error}</p>
      ) : (
        hint && <p id={`${id}-hint`} className="text-[13px] text-muted">{hint}</p>
      )}
    </div>
  );
}

/** Toggle-style pill button (for single / multi choice). */
export function Chip({ active, className, children, ...rest }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-[9px] text-sm font-semibold transition",
        active ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-pink",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
