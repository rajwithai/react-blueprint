import { motion } from "framer-motion";
import { ShieldCheck, Globe, Cpu, Lock, BarChart3, RefreshCw } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import globalLlmImg from "@/assets/images/global-llm-hero.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";

const models = [
  { name: "Claude", provider: "Anthropic", capability: "Complex reasoning and regulatory analysis." },
  { name: "GPT-4", provider: "OpenAI", capability: "Broad knowledge and technical tasks." },
  { name: "Gemini", provider: "Google", capability: "Long-context and multimodal processing." },
  { name: "ALLAM", provider: "SDAIA", capability: "Arabic-first processing and Saudi regulatory context." },
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
      <PageHero
        eyebrow="GLOBAL LLM CONNECTIVITY"
        title="Every model. Zero exposure."
        subtitle="Claude, GPT-4, Gemini, ALLAM — the world's most advanced AI, accessed safely through Privacy Shield. Automatic model selection. No vendor lock-in. No data compromise."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      {/* Parallax Hero */}
      <ParallaxImage
        src={globalLlmImg}
        alt="Global AI model connectivity network"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
      />

      {/* Section 1: Models */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          The best model for every task. Selected automatically.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <FeatureCard key={m.name} title={m.name} description={`${m.provider} — ${m.capability}`} delay={i * 100} />
          ))}
        </div>
      </Section>

      {/* Section 2: How Routing Works */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground"
        >
          Intelligent model routing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 max-w-2xl"
        >
          The Control Plane selects the optimal model based on task type, language, sensitivity level, and organizational policy.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Cpu, title: "Task-Based Selection", desc: "Reasoning tasks → Claude. Generation → GPT-4. Arabic → ALLAM. The right model for the right job." },
            { icon: Lock, title: "Sensitivity Routing", desc: "Highly sensitive queries route to on-premise models. Standard queries can reach approved external providers." },
            { icon: RefreshCw, title: "Automatic Failover", desc: "If a model is unavailable, the system gracefully degrades to the next best option. Zero downtime." },
          ].map((item, i) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i * 80} />
          ))}
        </div>
      </Section>

      {/* Section 3: Security Controls */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground"
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

      {/* Parallax Break */}
      <ParallaxImage
        src={platformImg}
        alt="Aliph platform layers"
        className="h-[40vh] md:h-[50vh]"
        speed={0.3}
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

      {/* Section 4: Benefits */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Why multi-model matters.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Globe} title="No Vendor Lock-in" description="Switch providers without changing a single line of code. Your organization is never dependent on a single AI vendor." delay={0} />
          <FeatureCard icon={BarChart3} title="Cost Optimization" description="Route simpler tasks to faster, cheaper models. Reserve premium models for complex reasoning. Automatic cost control." delay={80} />
          <FeatureCard icon={ShieldCheck} title="Future-Proof" description="New models from any provider can be added instantly. Your AI infrastructure evolves without re-architecture." delay={160} />
        </div>
      </Section>

      {/* Section 5: Integration */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
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

      <CTABanner
        title="Access global AI safely."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default GlobalLLM;
