import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "../chat/ChatWidget";
import StickyDemoBar from "../sections/StickyDemoBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const showStickyBar = ["/", "/platform", "/products/aliphchat", "/products/grc", "/products/agentic-ai", "/products/privacy-shield", "/products/organization-memory", "/products/global-llm"].includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
      <ChatWidget />
      {showStickyBar && <StickyDemoBar />}
    </div>
  );
};

export default Layout;
