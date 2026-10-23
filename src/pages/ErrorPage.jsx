import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { LogoMark } from "@/components/common";

/**
 * Router-level error boundary. Rendered outside MainLayout, so it uses plain
 * anchors (a full reload is the safest recovery after an unexpected crash).
 */
export default function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error) ? `${error.status} — ${error.statusText}` : "Something went wrong.";
  if (import.meta.env.DEV) console.error(error);

  return (
    <section className="status-page">
      <LogoMark size={72} />
      <h1>{message}</h1>
      <p>Sorry about that. Please refresh the page or head back home.</p>
      <div className="status-actions">
        <a className="btn btn-primary" href="/">Back to home</a>
        <button className="btn btn-ghost" onClick={() => window.location.reload()}>Reload</button>
      </div>
    </section>
  );
}
