import { cloneElement, isValidElement, useId } from "react";
import { cn } from "@/utils/cn";

/**
 * Label + control + hint/error wrapper.
 * Automatically wires id, aria-invalid and aria-describedby onto the child control.
 */
export function FormField({ label, error, hint, required, className, children }) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const control = isValidElement(children)
    ? cloneElement(children, { id, "aria-invalid": Boolean(error), "aria-describedby": describedBy, required })
    : children;

  return (
    <div className={cn("field", error && "has-error", className)}>
      {label && (
        <label htmlFor={id}>
          {label} {required && <span className="req" aria-hidden="true">*</span>}
        </label>
      )}
      {control}
      {error ? <p id={`${id}-error`} className="field-error" role="alert">{error}</p> : hint && <p id={`${id}-hint`} className="field-hint">{hint}</p>}
    </div>
  );
}

/** Toggle-style pill button (for single / multi choice). */
export function Chip({ active, className, children, ...rest }) {
  return (
    <button type="button" aria-pressed={active} className={cn("chip", active && "on", className)} {...rest}>
      {children}
    </button>
  );
}
