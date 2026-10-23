import { lazy } from "react";

// Route-level code splitting: each page becomes its own JS chunk.
export const Home = lazy(() => import("./Home"));
export const About = lazy(() => import("./About"));
export const Awareness = lazy(() => import("./Awareness"));
export const SelfCheck = lazy(() => import("./SelfCheck"));
export const Screening = lazy(() => import("./Screening"));
export const Faq = lazy(() => import("./Faq"));
export const Contact = lazy(() => import("./Contact"));
export const NotFound = lazy(() => import("./NotFound"));
