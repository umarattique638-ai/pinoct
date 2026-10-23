import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Button, StatusScreen } from "@/components/common";

/**
 * Router-level error boundary. Rendered outside MainLayout, so recovery uses a
 * full page load (the safest option after an unexpected crash).
 */
export default function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error) ? `${error.status} — ${error.statusText}` : "Something went wrong.";
  if (import.meta.env.DEV) console.error(error);

  return (
    <StatusScreen title={message} text="Sorry about that. Please refresh the page or head back home.">
      <Button href="/">Back to home</Button>
      <Button variant="ghost" onClick={() => window.location.reload()}>Reload</Button>
    </StatusScreen>
  );
}
