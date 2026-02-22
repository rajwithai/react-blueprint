import HeroSection from "@/components/sections/HeroSection";
import TrustBand from "@/components/sections/TrustBand";
import RiskCards from "@/components/sections/RiskCards";
import ControlPlaneDiagram from "@/components/sections/ControlPlaneDiagram";
import PlatformPillars from "@/components/sections/PlatformPillars";
import Outcomes from "@/components/sections/Outcomes";
import ProductShowcase from "@/components/sections/ProductShowcase";
import SolutionsTeaser from "@/components/sections/SolutionsTeaser";
import CredibilityProof from "@/components/sections/CredibilityProof";
import FinalCTA from "@/components/sections/FinalCTA";
import InlineEmailCapture from "@/components/sections/InlineEmailCapture";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <TrustBand />
      <RiskCards />
      <ControlPlaneDiagram />
      <PlatformPillars />
      <Outcomes />
      <ProductShowcase />
      <SolutionsTeaser />
      <CredibilityProof />

      {/* Inline Email Capture */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-6">
          <InlineEmailCapture
            title="Get weekly AI governance insights"
            subtitle="Join enterprise leaders staying ahead of PDPL, sovereign AI, and compliance automation."
            buttonText="Subscribe"
            placeholder="you@company.com"
          />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
};

export default Index;
