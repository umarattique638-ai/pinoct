import { LogoMark } from "./Logo/Logo";

/** Suspense fallback shown while a lazily-loaded page chunk downloads. */
export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <LogoMark size={52} />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
