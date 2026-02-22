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
      <HeroSection />
      <TrustBand />
      <RiskCards />
      <ControlPlaneDiagram />
      <PlatformPillars />
      <Outcomes />
      <ProductShowcase />
      <SolutionsTeaser />
      <CredibilityProof />
      <FinalCTA />
    </main>
  );
};

export default Index;
