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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Section 1: Hero (Urgency + Promise) */}
      <HeroSection />

      {/* Section 2: Trust Band */}
      <TrustBand />

      {/* Section 3: Why Now (Risk Cards) */}
      <RiskCards />

      {/* Section 4: The Aliph Ecosystem (Control Plane Diagram) */}
      <ControlPlaneDiagram />

      {/* Section 5: Platform Pillars */}
      <PlatformPillars />

      {/* Section 6: Outcomes */}
      <Outcomes />

      {/* Section 7: Products */}
      <ProductShowcase />

      {/* Section 8: Solutions Teaser */}
      <SolutionsTeaser />

      {/* Section 9: Proof / Credibility */}
      <CredibilityProof />

      {/* Section 10: Final CTA */}
      <FinalCTA />

    </main>
  );
};

export default Index;
