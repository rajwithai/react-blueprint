import { Brain, Workflow, Shield, Eye, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import SplitHero from "@/components/sections/SplitHero";
import TrustBar from "@/components/sections/TrustBar";
import Section from "@/components/sections/Section";
import ComparisonTable from "@/components/sections/ComparisonTable";
import MidPageCTA from "@/components/sections/MidPageCTA";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import FeatureCard from "@/components/sections/FeatureCard";
import agenticImg from "@/assets/images/agentic-ai-hero.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";

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
      {/* 1. Split Hero */}
      <SplitHero
        eyebrow="AGENTIC AI PLATFORM"
        title="Autonomous AI. Sovereign by default."
        subtitle="AI agents that can research, execute, and reason through complex workflows — with every interaction protected by Privacy Shield and informed by Organization Memory."
        primaryCta={{ label: "Join the Waitlist", href: "/demo" }}
        secondaryCta={{ label: "Learn More", href: "/demo" }}
        badge="Coming Q2 2026"
        trustText="Priority access for early partners. Direct input into the product."
        image={agenticImg}
        imageAlt="Agentic AI autonomous systems"
      />

      {/* 2. Trust Bar */}
      <TrustBar
        stats={[
          { value: "4", label: "Protection layers" },
          { value: "100%", label: "Audit coverage" },
          { value: "2", label: "Languages" },
          { value: "∞", label: "Agent workflows" },
        ]}
      />

      {/* 3. Product Showcase */}
      <ParallaxImage
        src={platformImg}
        alt="Agentic AI platform architecture"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
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

      {/* 4. The Gap */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground tracking-tight"
          >
            Agentic AI is powerful.<br />
            <span className="text-muted-foreground">But it's not ready for regulated enterprise.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Open-source agentic frameworks can autonomously research, use tools, and execute multi-step workflows. But they have no privacy layer. No organizational context. No audit trail. No compliance awareness.
            </p>
            <p className="font-heading font-semibold text-xl text-gradient">
              Aliph makes agentic AI enterprise-safe.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 5. Capabilities */}
      <Section alabaster>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          CAPABILITIES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground tracking-tight"
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

      {/* 6. Comparison Table */}
      <ComparisonTable
        title="What Aliph adds."
        subtitle="Open-source agents give you autonomy. Aliph gives you governance."
        competitorName="Open-Source Agents"
        aliphName="Agents + Aliph"
        rows={[
          { feature: "Autonomous execution", competitor: true, aliph: true },
          { feature: "Data sovereignty", competitor: false, aliph: true },
          { feature: "PII protection", competitor: false, aliph: true },
          { feature: "Organizational context", competitor: false, aliph: true },
          { feature: "Regulatory compliance", competitor: false, aliph: true },
          { feature: "Complete audit trail", competitor: false, aliph: true },
          { feature: "Arabic support", competitor: false, aliph: true },
        ]}
      />

      {/* 7. Mid-page CTA */}
      <MidPageCTA
        title="Be among the first."
        subtitle="Priority access for early partners. Direct input into the product."
        primaryCta={{ label: "Join the Waitlist", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />

      {/* 8. Use Cases */}
      <Section>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          USE CASES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
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

      {/* 9. Early Access */}
      <Section alabaster>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground tracking-tight"
          >
            Early access. Direct influence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            We are onboarding early-access partners for the Agentic AI Platform. Priority access. Direct input into the product roadmap. Available Q2 2026.
          </motion.p>
        </div>
      </Section>

      {/* 10. Final CTA */}
      <CTABanner
        title="The future of enterprise AI is autonomous."
        subtitle="Join the waitlist. Shape the product."
        primaryCta={{ label: "Join the Waitlist", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
};

export default AgenticAI;
