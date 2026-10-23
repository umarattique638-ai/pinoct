import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Global styles MUST be imported before App so component styles can override them.
import "./styles/index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
