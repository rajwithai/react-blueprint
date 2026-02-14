import { CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";

const comparison = [
  { cap: "Autonomous execution", oss: true, aliph: true },
  { cap: "Data sovereignty", oss: false, aliph: true },
  { cap: "PII protection", oss: false, aliph: true },
  { cap: "Organizational context", oss: false, aliph: true },
  { cap: "Regulatory compliance", oss: false, aliph: true },
  { cap: "Audit trail", oss: false, aliph: true },
  { cap: "Arabic support", oss: false, aliph: true },
];

const AgenticAI = () => {
  return (
    <>
      <HeroSection
        eyebrow="AGENTIC AI PLATFORM"
        title="Autonomous AI. Sovereign by default."
        subtitle="AI agents that can research, execute, and reason through complex workflows — with every interaction protected by Privacy Shield and informed by Organization Memory. Coming Q2 2026."
        primaryCta={{ label: "Join the Early Access Waitlist", href: "/demo" }}
        badge="Coming Q2 2026"
      />

      {/* The Gap */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground"
          >
            Agentic AI is powerful. But it's not ready for regulated enterprise.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Open-source agentic frameworks can autonomously research, use tools, and execute multi-step workflows. But they have no privacy layer. No organizational context. No audit trail. No compliance awareness. Enterprises in regulated markets cannot adopt them — until now.
            </p>
            <p className="font-heading font-semibold text-xl text-primary">
              Aliph makes agentic AI enterprise-safe.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Comparison */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground"
        >
          What Aliph adds.
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <span></span>
            <span className="font-heading font-semibold text-sm text-center text-primary-foreground/60">Open-Source Agents</span>
            <span className="font-heading font-semibold text-sm text-center text-primary">Agents + Aliph</span>
          </div>
          {comparison.map((row, i) => (
            <motion.div
              key={row.cap}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="grid grid-cols-3 gap-4 py-3 px-4 border-b border-primary-foreground/10 items-center"
            >
              <span className="font-body text-sm text-primary-foreground/80">{row.cap}</span>
              <div className="flex justify-center">
                {row.oss ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-destructive" />}
              </div>
              <div className="flex justify-center"><CheckCircle2 className="h-4 w-4 text-primary" /></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Early Access */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6"
          >
            Be among the first.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            We are onboarding early-access partners for the Agentic AI Platform. Priority access. Direct input into the product. Available Q2 2026.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Request Early Access"
        primaryCta={{ label: "Join the Waitlist", href: "/demo" }}
      />
    </>
  );
};

export default AgenticAI;
