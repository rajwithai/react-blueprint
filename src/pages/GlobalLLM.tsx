import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

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

      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12"
        >
          The best model for every task. Selected automatically.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <FeatureCard key={m.name} title={m.name} description={`${m.provider} — ${m.capability}`} delay={i * 100} />
          ))}
        </div>
      </Section>

      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground"
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
              className="flex gap-3 items-start glass glow-border rounded-xl p-4"
            >
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-primary-foreground/70 text-sm">{s}</p>
            </motion.div>
          ))}
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
