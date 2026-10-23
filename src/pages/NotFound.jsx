import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, Seo, StatusScreen } from "@/components/common";
import { PATHS } from "@/routes/paths";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Seo title="Page not found" />
      <StatusScreen
        code="404"
        title="This page took a day off."
        text="The page you're looking for doesn't exist or has moved. Your monthly self-check, though, is always here."
      >
        <Button to={PATHS.HOME} iconLeft={Home}>Back to home</Button>
        <Button variant="ghost" iconLeft={ArrowLeft} onClick={() => navigate(-1)}>Go back</Button>
      </StatusScreen>
    </>
  );
}
