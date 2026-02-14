import { CheckCircle2, Mail } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";

const Careers = () => {
  return (
    <>
      <HeroSection
        title="Build the future of sovereign AI."
        subtitle="We're assembling a team of engineers, product builders, and domain experts who believe that enterprise AI and data sovereignty are not mutually exclusive. Riyadh-based. Mission-driven."
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6">Open Positions</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            We are currently building our team. If you are passionate about enterprise AI, privacy-preserving computation, Arabic NLP, or GRC automation, we would like to hear from you.
          </p>
          <a href="mailto:careers@aliphai.ai" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:underline">
            <Mail className="h-4 w-4" /> careers@aliphai.ai
          </a>
        </div>
      </Section>

      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground text-center">Why Aliph</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            "Work at the intersection of AI and regulatory compliance — a category-defining problem.",
            "Be early. Shape the product, the culture, and the direction.",
            "Build for Saudi Arabia's Vision 2030 and the global sovereign AI movement.",
            "Competitive compensation with meaningful equity.",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-primary-foreground/70 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Careers;
