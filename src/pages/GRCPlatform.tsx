import { FileCheck, Search, BookOpen, Shield, BarChart3, Users, Workflow, Brain } from "lucide-react";
import { motion } from "framer-motion";
import SplitHero from "@/components/sections/SplitHero";
import TrustBar from "@/components/sections/TrustBar";
import Section from "@/components/sections/Section";
import AlternatingFeature from "@/components/sections/AlternatingFeature";
import ImpactStats from "@/components/sections/ImpactStats";
import ComparisonTable from "@/components/sections/ComparisonTable";
import MidPageCTA from "@/components/sections/MidPageCTA";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import FeatureCard from "@/components/sections/FeatureCard";
import grcDashboardImg from "@/assets/images/grc-dashboard.jpg";
import teamImg from "@/assets/images/team-collaboration.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";

const GRCPlatform = () => {
  return (
    <>
      {/* 1. Split Hero */}
      <SplitHero
        eyebrow="ALIPH GRC"
        title="Months of compliance work. Done in days."
        subtitle="Multi-agent AI that automates compliance mapping, contract analysis, document generation, and audit preparation — at advisory-firm quality, at a fraction of the cost."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Watch Demo", href: "/demo" }}
        badge="Live"
        trustText="No commitment required. See it with your own regulatory data."
        image={grcDashboardImg}
        imageAlt="GRC Platform compliance dashboard"
      />

      {/* 2. Trust Bar */}
      <TrustBar
        stats={[
          { value: "SAR 500K+", label: "Saved per engagement" },
          { value: "Hours", label: "Not weeks" },
          { value: "5+", label: "Regulations covered" },
          { value: "100%", label: "Audit trail coverage" },
        ]}
      />

      {/* 3. Product Showcase Parallax */}
      <ParallaxImage
        src={teamImg}
        alt="Compliance team working together"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
        overlay
        overlayOpacity={0.35}
      >
        <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            Advisory-firm quality. A fraction of the cost.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* 4. Impact Stats (Before/After) */}
      <ImpactStats
        eyebrow="IMPACT"
        title="What used to take months."
        stats={[
          { value: "Hours", label: "Compliance Reports", detail: "Previously days of manual work" },
          { value: "Minutes", label: "Regulatory Mapping", detail: "Previously weeks of research" },
          { value: "<1hr", label: "Contract Analysis", detail: "Previously multi-day review" },
          { value: "90%", label: "Cost Reduction", detail: "Compared to advisory firms" },
        ]}
      />

      {/* 5. Alternating Features */}
      <AlternatingFeature
        features={[
          {
            eyebrow: "COMPLIANCE",
            icon: FileCheck,
            title: "Compliance Engine",
            description: "Auto-map documents to PDPL, SAMA, CMA, and NCA requirements. Identify gaps. Score risk. Generate remediation plans with priority ranking.",
            bullets: ["Multi-framework mapping", "Gap analysis with remediation", "Risk scoring and prioritization", "Automated report generation"],
            image: grcDashboardImg,
            imageAlt: "Compliance engine dashboard",
          },
          {
            eyebrow: "INTELLIGENCE",
            icon: Search,
            title: "Document Intelligence",
            description: "Index and search across thousands of documents. Analyze contracts for risk. Generate board materials, audit reports, and policy drafts — in Arabic and English.",
            bullets: ["Natural language search across all documents", "Contract risk analysis", "Board material generation", "Bilingual support"],
            image: platformImg,
            imageAlt: "Document intelligence interface",
          },
          {
            eyebrow: "LEARNING",
            icon: BookOpen,
            title: "Precedent Intelligence",
            description: "Every engagement makes the platform smarter. Past decisions, past analyses, past deliverables — all searchable, all informing the next piece of work.",
            bullets: ["Historical pattern recognition", "Precedent-based recommendations", "Continuous improvement", "Cross-engagement learning"],
            image: teamImg,
            imageAlt: "Precedent intelligence system",
          },
        ]}
      />

      {/* 6. Agentic Workflow */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          AI agents that research, draft, validate, and learn.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
        >
          Four-stage pipeline that mirrors how the best advisory firms work.
        </motion.p>
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Research", desc: "Gather regulations, organizational context, and precedents." },
            { step: "02", title: "Draft", desc: "Generate documents, analyses, and recommendations." },
            { step: "03", title: "Validate", desc: "Verify compliance, check citations, score risk." },
            { step: "04", title: "Learn", desc: "Capture patterns and integrate feedback." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl bg-accent/5 border border-accent/20 p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-heading font-bold text-lg text-accent">{s.step}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-accent/30" />}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. Regulatory Coverage */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
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
              <p className="font-heading font-bold text-xl text-gradient mb-1">{r.name}</p>
              <p className="font-body text-xs text-muted-foreground">{r.note}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 8. Mid-page CTA */}
      <MidPageCTA
        title="See the platform live."
        subtitle="Get a personalized walkthrough with your own regulatory data."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />

      {/* 9. Enterprise Features */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Enterprise-grade from day one.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Shield} title="Data Sovereignty" description="All compliance data stays within your infrastructure. Zero exposure to external models during analysis." delay={0} />
          <FeatureCard icon={BarChart3} title="Risk Scoring" description="Automated risk assessment across every document, contract, and policy. Prioritized remediation plans." delay={80} />
          <FeatureCard icon={Users} title="Team Workflows" description="Assign tasks, track progress, and collaborate on compliance projects with built-in workflow management." delay={160} />
        </div>
      </Section>

      {/* 10. Who It's For */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground tracking-tight"
        >
          Built for the teams that carry the compliance burden.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 max-w-2xl"
        >
          From enterprise compliance departments to boutique advisory firms — designed for teams that need professional GRC at any scale.
        </motion.p>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { role: "Compliance Officers", desc: "Automate mapping and reporting" },
            { role: "Legal Teams", desc: "Analyze contracts at scale" },
            { role: "Advisory Firms", desc: "Deliver 10x faster engagements" },
            { role: "Internal Audit", desc: "Continuous monitoring and evidence" },
          ].map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="font-heading font-semibold text-foreground mb-2">{item.role}</p>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 11. Final CTA */}
      <CTABanner
        title="Compliance that scales. See it live."
        subtitle="No commitment. No credit card. See it with your own data."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
};

export default GRCPlatform;
