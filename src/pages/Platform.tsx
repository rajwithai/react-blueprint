import { Link } from "react-router-dom";
import { Cpu, Layers, ShieldCheck, Globe, Minimize2, Eye, Shuffle, FileCheck } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";

const layers = [
  { icon: Cpu, num: 1, title: "Edge Intelligence", desc: "Native applications with embedded small language models running directly on user devices. Sub-second responses for cached and simple queries. Full offline functionality. Voice query support in Arabic and English." },
  { icon: Layers, num: 2, title: "Sovereign Core", desc: "The organization's central AI hub. Semantic search across all organizational documents. Retrieval-augmented generation for context-rich answers. Intelligent routing that determines whether queries can be resolved locally." },
  { icon: ShieldCheck, num: 3, title: "Privacy Shield", desc: "Proprietary PII detection covering both Arabic and English. Names, organizations, locations, financial data, identity numbers detected and masked with encrypted tokens. Full audit trail for every masking operation." },
  { icon: Globe, num: 4, title: "Cloud Augmentation", desc: "Secure access to Claude, GPT-4, Gemini, and ALLAM. Model selection is automatic based on query language, complexity, and domain. Zero-retention agreements with all providers." },
];

const queryFlow = [
  "User submits a question.",
  "Edge device checks if it can answer instantly. If yes, responds in milliseconds.",
  "If not, query routes to Sovereign Core. Organization Memory is searched.",
  "If external AI is needed, Privacy Shield scans and masks all sensitive data.",
  "Sanitized query reaches the optimal cloud AI model.",
  "Response returns. Tokens are restored. Audit trail logged.",
];

const Platform = () => {
  const { ref: flowRef, isInView: flowVisible } = useInView();

  return (
    <>
      <HeroSection
        eyebrow="THE ALIPH PLATFORM"
        title="Four layers of sovereign intelligence."
        subtitle="A federated AI architecture designed to maximize data sovereignty while maintaining access to the world's most advanced AI capabilities. Resolve locally. Protect always. Augment safely."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      {/* Architecture deep dive */}
      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground">Architecture Deep-Dive</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {layers.map((l, i) => (
            <FeatureCard key={l.title} icon={l.icon} title={`Layer ${l.num}: ${l.title}`} description={l.desc} delay={i * 100}>
              <Link to={i === 0 ? "/platform" : i === 1 ? "/platform/organization-memory" : i === 2 ? "/platform/privacy-shield" : "/platform/global-llm"} className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:underline">
                Learn more →
              </Link>
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Query Flow */}
      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground">The Query Flow</h2>
        <div ref={flowRef} className="max-w-2xl mx-auto space-y-4">
          {queryFlow.map((step, i) => (
            <div key={i} className={`flex gap-4 items-start ${flowVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-sm">{i + 1}</div>
              <p className="font-body text-primary-foreground/70 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Three Capabilities */}
      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground">Three Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={ShieldCheck} title="Privacy Shield" description="Your data never leaves." delay={0}>
            <Link to="/platform/privacy-shield" className="text-sm font-heading font-semibold text-primary hover:underline mt-2 inline-block">Learn more →</Link>
          </FeatureCard>
          <FeatureCard icon={Layers} title="Organization Memory" description="An employee who remembers everything and never leaves." delay={100}>
            <Link to="/platform/organization-memory" className="text-sm font-heading font-semibold text-primary hover:underline mt-2 inline-block">Learn more →</Link>
          </FeatureCard>
          <FeatureCard icon={Globe} title="Global LLM Connectivity" description="All the power. None of the risk." delay={200}>
            <Link to="/platform/global-llm" className="text-sm font-heading font-semibold text-primary hover:underline mt-2 inline-block">Learn more →</Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Platform Principles */}
      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground">Platform Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={Minimize2} title="Data Minimization" description="Resolve as much as possible locally. External AI is a last resort, never the default." delay={0} dark />
          <FeatureCard icon={Eye} title="Zero Trust" description="Every query, every response, every access event is logged and auditable." delay={100} dark />
          <FeatureCard icon={Shuffle} title="Model Agnostic" description="Not locked into any single AI provider. Best model for each task, selected automatically." delay={200} dark />
          <FeatureCard icon={FileCheck} title="Compliance Native" description="PDPL, SAMA, NCA, GDPR compliance is built into the architecture, not bolted on." delay={300} dark />
        </div>
      </Section>

      <CTABanner
        title="See the platform in action."
        subtitle="Request a demo and see how four layers of sovereign intelligence protect your data."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default Platform;
