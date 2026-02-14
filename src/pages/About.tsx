import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";

const About = () => {
  return (
    <>
      <HeroSection
        eyebrow="ABOUT ALIPH"
        title="Private Intelligence. Collective Wisdom."
        subtitle="Aliph is a sovereign AI platform company headquartered in Riyadh, Kingdom of Saudi Arabia. We build the infrastructure layer that enables organizations to adopt world-class AI safely — without compromising data sovereignty, regulatory compliance, or institutional knowledge."
      />

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6">Our Mission</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Every organization deserves access to the world's best AI. No organization should have to sacrifice data sovereignty to get it. We exist to resolve this tension — by building the controlled adoption layer between enterprise data and global AI capability.
          </p>
        </div>
      </Section>

      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground">What We Are</h2>
        <div className="max-w-3xl space-y-3">
          {[
            "A sovereign AI platform powering multiple enterprise applications.",
            "The controlled adoption layer between enterprise data and global AI.",
            "A compliance-first AI company built for regulated markets.",
            "An enabler — we make global AI models safe for enterprise use.",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-primary-foreground/70">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8">What We Are Not</h2>
        <div className="max-w-3xl space-y-3">
          {[
            "Not a generic chatbot or AI wrapper.",
            "Not a consulting firm.",
            "Not a competitor to SDAIA, HUMAIN, or global AI providers.",
            "We enable their ecosystems and make them enterprise-safe.",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <span className="text-muted-foreground mt-1">—</span>
              <p className="font-body text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-primary-foreground">Vision 2030 Alignment</h2>
          <p className="font-body text-primary-foreground/60 leading-relaxed">
            Aliph is purpose-built for the Kingdom's AI ambitions. We are aligned with SDAIA's mandate for responsible AI adoption, designed as an enterprise application layer for the HUMAIN ecosystem, and committed to making Saudi Arabia a global leader in sovereign AI infrastructure.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8">Company Details</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Legal entity", value: "Aliph Solutions" },
            { label: "Headquarters", value: "Riyadh, Kingdom of Saudi Arabia" },
            { label: "Founded", value: "2024" },
            { label: "Website", value: "aliphai.ai" },
          ].map((d) => (
            <div key={d.label} className="bg-muted rounded-xl p-6">
              <p className="font-body text-sm text-muted-foreground mb-1">{d.label}</p>
              <p className="font-heading font-semibold text-foreground">{d.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Learn more about what we're building."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default About;
