import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import { About, Awareness, Contact, Faq, Home, NotFound, Screening, SelfCheck } from "@/pages";
import { PATHS } from "./paths";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: PATHS.HOME, element: <Home /> },
      { path: PATHS.ABOUT, element: <About /> },
      { path: PATHS.AWARENESS, element: <Awareness /> },
      { path: PATHS.SELF_CHECK, element: <SelfCheck /> },
      { path: PATHS.SCREENING, element: <Screening /> },
      { path: PATHS.FAQ, element: <Faq /> },
      { path: PATHS.CONTACT, element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
