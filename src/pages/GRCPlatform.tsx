import { FileCheck, Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const impact = [
  { label: "Compliance Reports", before: "Days of manual work", after: "Hours" },
  { label: "Regulatory Mapping", before: "Weeks of research", after: "Minutes" },
  { label: "Contract Analysis", before: "Multi-day review", after: "Under an hour" },
  { label: "Cost", before: "SAR 500K+ per engagement", after: "A fraction" },
];

const GRCPlatform = () => {
  return (
    <>
      <PageHero
        eyebrow="ALIPH GRC"
        title="Months of compliance work. Done in days."
        subtitle="Multi-agent AI that automates compliance mapping, contract analysis, document generation, and audit preparation — at advisory-firm quality, at a fraction of the cost, in a fraction of the time."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        badge="Live"
      />

      {/* Impact */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          What used to take months.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impact.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="font-heading font-semibold text-lg mb-4 text-foreground">{item.label}</p>
              <p className="font-body text-sm text-muted-foreground line-through mb-2">{item.before}</p>
              <p className="font-heading font-bold text-2xl text-gradient">{item.after}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What It Does */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Enterprise GRC, powered by agentic AI.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={FileCheck} title="Compliance Engine" description="Auto-map documents to PDPL, SAMA, CMA, and NCA requirements. Identify gaps. Score risk. Generate remediation plans with priority ranking." delay={0} />
          <FeatureCard icon={Search} title="Document Intelligence" description="Index and search across thousands of documents. Analyze contracts for risk. Generate board materials, audit reports, and policy drafts — in Arabic and English." delay={100} />
          <FeatureCard icon={BookOpen} title="Precedent Intelligence" description="Every engagement makes the platform smarter. Past decisions, past analyses, past deliverables — all searchable, all informing the next piece of work." delay={200} />
        </div>
      </Section>

      {/* Agentic Workflow */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground"
        >
          AI agents that research, draft, validate, and learn.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground leading-relaxed max-w-3xl mb-12"
        >
          The GRC Platform orchestrates specialized AI agents across four stages. Agents research applicable regulations and gather organizational context. They draft documents and analyze contracts to professional standards. They validate compliance, verify citations, and score risk before anything reaches the user. And they learn — capturing patterns and integrating feedback so the platform improves with every engagement.
        </motion.p>
        <div className="grid md:grid-cols-4 gap-4">
          {["Research", "Draft", "Validate", "Learn"].map((stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl bg-accent/5 border border-accent/20 p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-heading font-bold text-accent">{i + 1}</span>
              </div>
              <p className="font-heading font-semibold text-foreground">{stage}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-accent/30" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Regulations */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Comprehensive regulatory coverage.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "PDPL", note: "Full mapping, gap analysis, remediation" },
            { name: "SAMA", note: "Financial sector compliance" },
            { name: "CMA", note: "Corporate governance" },
            { name: "NCA", note: "Cybersecurity controls" },
            { name: "GDPR", note: "Coming with European expansion" },
          ].map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <p className="font-heading font-bold text-lg text-primary mb-1">{r.name}</p>
              <p className="font-body text-xs text-muted-foreground">{r.note}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Who it's for */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
        >
          Built for the teams that carry the compliance burden.
        </motion.h2>
        <p className="font-body text-muted-foreground leading-relaxed max-w-3xl">
          Compliance teams. Legal departments. Advisory firms. Internal audit functions. And the SMEs that need professional GRC but could never afford it before.
        </p>
      </Section>

      <CTABanner
        title="Compliance that scales. See it live."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default GRCPlatform;