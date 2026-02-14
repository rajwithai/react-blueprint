import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { Lock, ShieldCheck, Server, FileSearch } from "lucide-react";

const models = [
  { provider: "Anthropic (Claude)", capability: "Complex reasoning and analysis", best: "Regulatory analysis, nuanced compliance questions" },
  { provider: "OpenAI (GPT-4)", capability: "General knowledge and coding", best: "Broad knowledge queries, technical tasks" },
  { provider: "Google (Gemini)", capability: "Long context and multimodal", best: "Processing large documents, multi-format analysis" },
  { provider: "SDAIA (ALLAM)", capability: "Arabic-first processing", best: "Arabic regulatory content, Saudi-specific context" },
];

const securityControls = [
  "PII masking confirmed before every external query (Privacy Shield sign-off required).",
  "TLS 1.3 encryption for all API communications.",
  "In-region cloud routing preferred (Azure Saudi Arabia where available).",
  "Zero-retention agreements with all AI providers.",
  "Complete audit trail — every query logged with model used, tokens consumed, response hash.",
  "Graceful degradation — if cloud is unavailable, local models respond with user notification.",
];

const GlobalLLM = () => {
  return (
    <>
      <HeroSection
        eyebrow="GLOBAL LLM CONNECTIVITY"
        title="All the power of global AI. None of the data risk."
        subtitle="Aliph provides model-agnostic access to the world's best AI models — Claude, GPT-4, Gemini, and ALLAM — safely through the Privacy Shield. You are never locked into a single provider."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12">Supported Models</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {models.map((m, i) => (
            <FeatureCard key={m.provider} title={m.provider} description={`${m.capability}. Best for: ${m.best}`} delay={i * 100} />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-primary-foreground">How Model Selection Works</h2>
          <p className="font-body text-primary-foreground/60 leading-relaxed">
            When a query needs external knowledge, the system analyzes language, domain, complexity, and required capability to automatically route to the optimal model. Arabic-heavy regulatory queries may route to ALLAM. Complex multi-step reasoning routes to Claude. Long document analysis routes to Gemini. No manual selection needed. No vendor lock-in.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8">Security Controls</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {securityControls.map((s, i) => (
            <div key={i} className="flex gap-3 items-start">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-muted-foreground text-sm">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Access the world's best AI, safely."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default GlobalLLM;
