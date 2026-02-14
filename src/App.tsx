import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import PrivacyShield from "./pages/PrivacyShield";
import OrganizationMemory from "./pages/OrganizationMemory";
import GlobalLLM from "./pages/GlobalLLM";
import AliphChat from "./pages/AliphChat";
import GRCPlatform from "./pages/GRCPlatform";
import AgenticAI from "./pages/AgenticAI";
import { FinancialServices, Healthcare, ProfessionalServices } from "./pages/Industries";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Blog from "./pages/Blog";
import PDPLGuide from "./pages/PDPLGuide";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/platform/privacy-shield" element={<PrivacyShield />} />
            <Route path="/platform/organization-memory" element={<OrganizationMemory />} />
            <Route path="/platform/global-llm" element={<GlobalLLM />} />
            <Route path="/products/aliphchat" element={<AliphChat />} />
            <Route path="/products/grc" element={<GRCPlatform />} />
            <Route path="/products/agentic-ai" element={<AgenticAI />} />
            <Route path="/industries/financial-services" element={<FinancialServices />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/professional-services" element={<ProfessionalServices />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/company/leadership" element={<Leadership />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/pdpl-guide" element={<PDPLGuide />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
