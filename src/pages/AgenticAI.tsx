import { CheckCircle2, X, Brain, Workflow, Shield, Eye, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import agenticImg from "@/assets/images/agentic-ai-hero.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";

const comparison = [
  { cap: "Autonomous execution", oss: true, aliph: true },
  { cap: "Data sovereignty", oss: false, aliph: true },
  { cap: "PII protection", oss: false, aliph: true },
  { cap: "Organizational context", oss: false, aliph: true },
  { cap: "Regulatory compliance", oss: false, aliph: true },
  { cap: "Audit trail", oss: false, aliph: true },
  { cap: "Arabic support", oss: false, aliph: true },
];

const capabilities = [
  { icon: Brain, title: "Multi-Step Reasoning", description: "Agents break complex tasks into subtasks, research independently, and synthesize results — all within governed boundaries." },
  { icon: Workflow, title: "Workflow Orchestration", description: "Chain multiple agents together for end-to-end automation. Research → Draft → Validate → Deliver." },
  { icon: Shield, title: "Privacy-First Execution", description: "Every agent interaction passes through Privacy Shield. PII is masked before any external model is reached." },
  { icon: Eye, title: "Full Observability", description: "Watch agents work in real-time. Every decision logged. Every data access tracked. Complete audit trail." },
  { icon: Cpu, title: "Model Selection", description: "Agents automatically select the best model for each subtask — Claude for reasoning, GPT-4 for generation, ALLAM for Arabic." },
  { icon: Network, title: "Enterprise Integration", description: "Agents connect to your existing systems — CRM, ERP, document stores — with inherited permissions." },
];

const AgenticAI = () => {
  return (
    <>
      <PageHero
        eyebrow="AGENTIC AI PLATFORM"
        title="Autonomous AI. Sovereign by default."
        subtitle="AI agents that can research, execute, and reason through complex workflows — with every interaction protected by Privacy Shield and informed by Organization Memory. Coming Q2 2026."
        primaryCta={{ label: "Join the Early Access Waitlist", href: "/demo" }}
        badge="Coming Q2 2026"
      />

      {/* Parallax Hero Image */}
      <ParallaxImage
        src={agenticImg}
        alt="Agentic AI autonomous systems"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
      />

      {/* Section 1: The Gap */}
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

      {/* Section 2: Capabilities */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground"
        >
          What sovereign agents can do.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 max-w-2xl"
        >
          Enterprise-grade autonomous AI with privacy, observability, and compliance built into every interaction.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <FeatureCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} delay={i * 80} />
          ))}
        </div>
      </Section>

      {/* Parallax Architecture */}
      <ParallaxImage
        src={platformImg}
        alt="Aliph platform architecture layers"
        className="h-[40vh] md:h-[50vh]"
        speed={0.25}
        overlay
        overlayOpacity={0.2}
      >
        <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            Four layers of protection. Every interaction.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 3: Comparison */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          What Aliph adds.
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <span></span>
            <span className="font-heading font-semibold text-sm text-center text-muted-foreground">Open-Source Agents</span>
            <span className="font-heading font-semibold text-sm text-center text-primary">Agents + Aliph</span>
          </div>
          {comparison.map((row, i) => (
            <motion.div
              key={row.cap}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="grid grid-cols-3 gap-4 py-3 px-4 border-b border-border/50 items-center"
            >
              <span className="font-body text-sm text-foreground">{row.cap}</span>
              <div className="flex justify-center">
                {row.oss ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-destructive" />}
              </div>
              <div className="flex justify-center"><CheckCircle2 className="h-4 w-4 text-primary" /></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 4: Use Cases */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Real-world agent workflows.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Regulatory Research", desc: "Agent researches PDPL requirements, maps to your policies, identifies gaps, and drafts a remediation plan — autonomously." },
            { title: "Due Diligence", desc: "Agent analyzes target company documents, extracts risk factors, cross-references with regulatory requirements, produces a report." },
            { title: "Contract Review", desc: "Agent reviews contracts against regulatory frameworks, flags non-compliant clauses, suggests amendments with citations." },
          ].map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8"
            >
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{uc.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 5: Early Access */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
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
