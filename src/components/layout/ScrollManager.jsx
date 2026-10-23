import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll behaviour on navigation:
 *  - /page#section → scroll to that section (retries while a lazy page renders)
 *  - /page         → scroll to top
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  // useLayoutEffect → reset scroll before the browser paints the new page (no flash).
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return undefined;
    }
    let tries = 0;
    const id = decodeURIComponent(hash.slice(1));
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        clearInterval(timer);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
    return () => clearInterval(timer);
  }, [pathname, hash]);

  return null;
}
