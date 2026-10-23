import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about our custom utilities so they never get dropped
// as "conflicting" with built-in ones (e.g. text-gradient vs text-ink).
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-gradient": ["text-gradient"],
      "font-accent": ["font-accent"],
      "container-page": ["container-page"],
      "dot-grid": ["dot-grid"],
    },
  },
});

/** Merge class names conditionally, resolving Tailwind conflicts (last one wins). */
export const cn = (...inputs) => twMerge(clsx(inputs));
