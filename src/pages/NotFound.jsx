import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, LogoMark, Seo } from "@/components/common";
import { PATHS } from "@/routes/paths";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Seo title="Page not found" />
      <section className="status-page">
        <LogoMark size={72} />
        <span className="status-code">404</span>
        <h1>This page took a day off.</h1>
        <p>The page you're looking for doesn't exist or has moved. Your monthly self-check, though, is always here.</p>
        <div className="status-actions">
          <Button to={PATHS.HOME} iconLeft={Home}>Back to home</Button>
          <Button variant="ghost" iconLeft={ArrowLeft} onClick={() => navigate(-1)}>Go back</Button>
        </div>
      </section>
    </>
  );
}
