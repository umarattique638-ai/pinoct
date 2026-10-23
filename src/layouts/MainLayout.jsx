import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress/ScrollProgress";
import ScrollManager from "@/components/layout/ScrollManager";

/** Shell shared by every page: progress bar, navbar, routed content, footer. */
export default function MainLayout() {
  return (
    <>
      <a
        href="#main"
        className="absolute -top-[60px] left-4 z-200 rounded-[10px] bg-ink px-4 py-2.5 font-bold text-white focus:top-3"
      >
        Skip to content
      </a>
      <ScrollManager />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
