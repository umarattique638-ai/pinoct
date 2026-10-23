import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PageLoader } from "@/components/common";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress/ScrollProgress";
import ScrollManager from "@/components/layout/ScrollManager";

/** Shell shared by every page: progress bar, navbar, routed content, footer. */
export default function MainLayout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
