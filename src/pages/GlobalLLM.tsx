import { motion } from "framer-motion";
import { ShieldCheck, Globe, Cpu, Lock, BarChart3, RefreshCw } from "lucide-react";
import SplitHero from "@/components/sections/SplitHero";
import TrustBar from "@/components/sections/TrustBar";
import Section from "@/components/sections/Section";
import AlternatingFeature from "@/components/sections/AlternatingFeature";
import ImpactStats from "@/components/sections/ImpactStats";
import MidPageCTA from "@/components/sections/MidPageCTA";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import FeatureCard from "@/components/sections/FeatureCard";
import globalLlmImg from "@/assets/images/global-llm-hero.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";
import privacyImg from "@/assets/images/privacy-shield-hero.jpg";

const models = [
  { name: "Claude", provider: "Anthropic", capability: "Complex reasoning and regulatory analysis.", specialty: "Reasoning" },
  { name: "GPT-4", provider: "OpenAI", capability: "Broad knowledge and technical tasks.", specialty: "Generation" },
  { name: "Gemini", provider: "Google", capability: "Long-context and multimodal processing.", specialty: "Multimodal" },
  { name: "ALLAM", provider: "SDAIA", capability: "Arabic-first processing and Saudi regulatory context.", specialty: "Arabic" },
];

const securityControls = [
  "PII masking verified before every external call.",
  "TLS 1.3 encryption on all communications.",
  "In-region routing preferred (Azure Saudi Arabia).",
  "Zero-retention agreements with all providers.",
  "Complete audit trail — model, tokens, timestamps, response hash.",
  "Graceful degradation to local models if cloud is unavailable.",
];

const GlobalLLM = () => {
  return (
    <>
      {/* 1. Split Hero */}
      <SplitHero
        eyebrow="GLOBAL LLM CONNECTIVITY"
        title="Every model. Zero exposure."
        subtitle="Claude, GPT-4, Gemini, ALLAM — the world's most advanced AI, accessed safely through Privacy Shield. Automatic model selection. No vendor lock-in. No data compromise."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "See Architecture", href: "/demo" }}
        trustText="No vendor lock-in. Switch models without changing code."
        image={globalLlmImg}
        imageAlt="Global AI model connectivity network"
      />

      {/* 2. Trust Bar */}
      <TrustBar
        stats={[
          { value: "4+", label: "AI models available" },
          { value: "Zero", label: "Data retention" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "TLS 1.3", label: "Encryption standard" },
        ]}
      />

      {/* 3. Product Showcase */}
      <ParallaxImage
        src={platformImg}
        alt="Global LLM routing architecture"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
        overlay
        overlayOpacity={0.25}
      >
        <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            No vendor lock-in. No data compromise.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* 4. Model Cards */}
      <Section>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          AVAILABLE MODELS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          The best model for every task. Selected automatically.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wider text-accent bg-accent/10 mb-3">
                {m.specialty}
              </span>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-1">{m.name}</h3>
              <p className="font-body text-xs text-muted-foreground mb-3">{m.provider}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.capability}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Intelligent Routing */}
      <AlternatingFeature
        features={[
          {
            eyebrow: "TASK ROUTING",
            icon: Cpu,
            title: "Task-Based Selection",
            description: "The Control Plane automatically selects the optimal model based on task type, language, and complexity. Reasoning tasks go to Claude. Generation to GPT-4. Arabic to ALLAM.",
            bullets: ["Automatic model matching", "Language-aware routing", "Complexity assessment", "Real-time optimization"],
            image: globalLlmImg,
            imageAlt: "Task-based model selection",
          },
          {
            eyebrow: "SECURITY",
            icon: Lock,
            title: "Sensitivity Routing",
            description: "Highly sensitive queries route to on-premise models. Standard queries can reach approved external providers. All data passes through Privacy Shield first.",
            bullets: ["Sensitivity classification", "On-premise fallback", "Policy-based routing", "Zero external PII exposure"],
            image: privacyImg,
            imageAlt: "Sensitivity-based routing",
          },
          {
            eyebrow: "RESILIENCE",
            icon: RefreshCw,
            title: "Automatic Failover",
            description: "If a model is unavailable, the system gracefully degrades to the next best option. Zero downtime. No manual intervention required.",
            bullets: ["Multi-provider redundancy", "Automatic fallback chains", "Health monitoring", "Zero-downtime architecture"],
            image: platformImg,
            imageAlt: "Automatic failover system",
          },
        ]}
      />

      {/* 6. Security Controls */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground tracking-tight"
        >
          Enterprise-grade controls at every step.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {securityControls.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-3 items-start rounded-xl border border-border bg-card p-4"
            >
              <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="font-body text-muted-foreground text-sm">{s}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. Mid-page CTA */}
      <MidPageCTA
        title="Access global AI safely."
        subtitle="See how multi-model routing works with your data protected."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/company/contact" }}
      />

      {/* 8. Why Multi-Model */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Why multi-model matters.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Globe} title="No Vendor Lock-in" description="Switch providers without changing a single line of code. Your organization is never dependent on a single AI vendor." delay={0} />
          <FeatureCard icon={BarChart3} title="Cost Optimization" description="Route simpler tasks to faster, cheaper models. Reserve premium models for complex reasoning. Automatic cost control." delay={80} />
          <FeatureCard icon={ShieldCheck} title="Future-Proof" description="New models from any provider can be added instantly. Your AI infrastructure evolves without re-architecture." delay={160} />
        </div>
      </Section>

      {/* 9. Infrastructure Ready */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground tracking-tight"
          >
            Ready for your infrastructure.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground leading-relaxed mb-8"
          >
            Deploy on-premise, in sovereign cloud, or hybrid. Connect to existing identity providers. Integrate with your current systems through standard APIs.
          </motion.p>
        </div>
      </Section>

      {/* 10. Final CTA */}
      <CTABanner
        title="Every AI model. Zero data risk."
        subtitle="No commitment. See multi-model routing live."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/company/contact" }}
      />
    </>
  );
};

export default GlobalLLM;
