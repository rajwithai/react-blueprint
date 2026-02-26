import { Shield, Scale, Briefcase, FileCheck, BarChart3, ShieldAlert, FilePen, ClipboardCheck, BellRing } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SplitHero from "@/components/sections/SplitHero";
import Section from "@/components/sections/Section";
import grcDashboardImg from "@/assets/images/grc-dashboard.jpg";

/* ─── Section 2: Cost Comparison Data ─── */
const traditionalItems = [
  { label: "Regulatory Research", time: "2-4 weeks" },
  { label: "Document Review", time: "3-6 weeks" },
  { label: "Gap Analysis", time: "2-3 weeks" },
  { label: "Report Drafting", time: "2-4 weeks" },
  { label: "Review & Revisions", time: "2-3 weeks" },
];

const aliphItems = [
  { label: "Regulatory Research", time: "Hours" },
  { label: "Document Review", time: "Hours" },
  { label: "Gap Analysis", time: "Automatic" },
  { label: "Report Drafting", time: "Minutes" },
  { label: "Review & Revisions", time: "Your team validates" },
];

/* ─── Section 2: What the Platform Delivers ─── */
const deliverables = [
  {
    icon: FileCheck,
    title: "PDPL Gap Analysis",
    body: "Complete mapping of your current policies against PDPL requirements. Every gap identified. Every finding cited to the specific regulation clause. Risk-scored by severity.",
  },
  {
    icon: BarChart3,
    title: "Compliance Status Reports",
    body: "Board-ready compliance posture summaries. Generated in minutes from live platform data. Current as of today — not the last time a consultant visited.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Assessment Reports",
    body: "Regulatory risk mapped across your organization. Risk scores assigned per department, per regulation, per data category. Prioritized remediation recommendations included.",
  },
  {
    icon: FilePen,
    title: "Policy Documents & Templates",
    body: "Data protection policies, consent frameworks, breach notification procedures — drafted by AI, validated against current regulations, formatted to your firm's templates.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Evidence Packages",
    body: "Complete audit trail documentation — every analysis run, every finding, every remediation action. Packaged for SDAIA review or internal audit committee presentation.",
  },
  {
    icon: BellRing,
    title: "Continuous Monitoring Alerts",
    body: "New regulatory circular published? Impact assessment on your current compliance posture generated automatically. Your team is notified before the regulation takes effect — not after.",
  },
];

/* ─── Section 4: Agent Pipeline Data ─── */
const agents = [
  {
    step: "01",
    name: "Research",
    subtitle: "Regulatory Research — Automated",
    body: "Specialized agents scan regulatory databases, track new circulars and amendments, map requirements to your specific industry, entity type, and jurisdiction. PDPL, SAMA, CMA, NCA — monitored continuously. Your team stops chasing updates. Updates come to them.",
  },
  {
    step: "02",
    name: "Analyze & Draft",
    subtitle: "Document Analysis & Report Drafting — Hours, Not Weeks",
    body: "Agents analyze your existing policies, contracts, and internal documents against regulatory requirements. Gaps identified. Risk scores assigned. Remediation reports drafted in your firm's format and templates. A full PDPL gap analysis that used to take a consultant 6 weeks is drafted in hours.",
  },
  {
    step: "03",
    name: "Validate",
    subtitle: "Every Claim Cross-Checked — Before You See It",
    body: "Nothing reaches your desk unverified. Validation agents cross-reference every statement in every draft against source regulations, your internal documents, and precedent engagements. Unsupported claims are flagged. Inconsistencies are caught. Every output includes source citations so your team can verify with one click.",
    highlight: true,
  },
  {
    step: "04",
    name: "Learn",
    subtitle: "Your Expertise Compounds — Permanently",
    body: "Every correction your team makes, every preference expressed, every regulatory interpretation approved — captured and embedded into the system. The platform gets smarter with every engagement. When a partner retires or an associate leaves, their expertise stays. New hires inherit decades of institutional knowledge from day one.",
  },
];

/* ─── Section 4: Regulation Cards ─── */
const regulations = [
  {
    acronym: "PDPL",
    fullName: "Personal Data Protection Law",
    body: "Full compliance mapping — data classification, consent requirements, cross-border transfer rules, breach notification procedures. Updated as SDAIA releases new guidance.",
  },
  {
    acronym: "SAMA",
    fullName: "Saudi Arabian Monetary Authority",
    body: "Financial sector regulatory framework — cybersecurity requirements, outsourcing guidelines, data governance standards. New circulars analyzed within hours of publication.",
  },
  {
    acronym: "CMA",
    fullName: "Capital Markets Authority",
    body: "Corporate governance and disclosure requirements — board reporting, conflict of interest policies, shareholder communications. Cross-referenced with SAMA where applicable.",
  },
  {
    acronym: "NCA",
    fullName: "National Cybersecurity Authority",
    body: "Essential cybersecurity controls — risk assessment frameworks, incident response requirements, third-party security standards. Mapped against your existing security posture.",
  },
];

/* ─── Section 5: Use Case Cards ─── */
const useCases = [
  {
    icon: Shield,
    team: "Compliance Officers",
    scenario: "You're responsible for PDPL compliance but your team is three people and the regulation keeps evolving.",
    body: "The platform tracks every PDPL update, maps it against your current policies, identifies gaps, and drafts remediation reports. You review and approve. Your three-person team operates with the output capacity of a 15-person department.",
  },
  {
    icon: Scale,
    team: "Legal Teams",
    scenario: "Every new contract requires regulatory review. Your lawyers spend more time on compliance checks than legal strategy.",
    body: "Contract analysis automated against regulatory requirements. Risk flags generated instantly. Standard compliance language suggested. Your lawyers focus on judgment and negotiation, not regulatory cross-referencing.",
  },
  {
    icon: Briefcase,
    team: "Advisory Firms",
    scenario: "Your consultants deliver compliance engagements to clients. Each engagement starts from scratch because precedents are buried in old deliverables.",
    body: "Every past engagement, deliverable, and regulatory interpretation is searchable. New engagements start with full context. Deliverable quality is consistent across partners. Junior staff produce senior-quality work from day one.",
  },
];

/* ─── Section 6: Comparison Table Data ─── */
const comparisonRows = [
  {
    scenario: "...a new SAMA circular is published?",
    traditional: "You hear about it weeks later. Engagement scoped. Work starts in 1-2 months.",
    aliph: "Analyzed within hours. Impact assessment on your current policies generated automatically.",
  },
  {
    scenario: "...you need a PDPL gap analysis?",
    traditional: "3-6 month engagement. SAR 300K-750K. Delivered as a static PDF.",
    aliph: "Completed in days. Continuously updated as your documents or regulations change. Always current.",
  },
  {
    scenario: "...your board asks for a compliance status update?",
    traditional: "Your team scrambles for 2 weeks to compile data from the last engagement.",
    aliph: "Generated in minutes from live platform data. Audit-ready with citations.",
  },
  {
    scenario: "...a junior compliance officer leaves?",
    traditional: "Their institutional knowledge disappears. Next hire starts from zero.",
    aliph: "Every regulatory interpretation, every decision, every correction captured permanently. New hire accesses full history from day one.",
  },
  {
    scenario: "...you need to prove compliance to SDAIA?",
    traditional: "You present the consultant's last report — which may be 6 months old.",
    aliph: "You present live compliance data with full audit trail. Current as of today. Every source cited.",
  },
  {
    scenario: "...regulations change mid-engagement?",
    traditional: "Scope creep. Additional fees. Timeline extends.",
    aliph: "Automatically detected. Impact assessed. Your existing analysis updated in real time. No additional cost.",
  },
];

const GRCPlatform = () => {
  return (
    <>
      {/* ══════ SECTION 1: HERO ══════ */}
      <SplitHero
        eyebrow="ALIPH GRC PLATFORM — AI-POWERED COMPLIANCE"
        title="Months of compliance work. Done in days. At a fraction of what you pay consultants."
        subtitle="Aliph's agentic AI researches regulations, maps your documents against requirements, identifies gaps, drafts remediation reports, and validates everything — before it reaches your desk. Advisory-firm quality. Your team handles judgment. AI handles the heavy lifting."
        primaryCta={{ label: "See It With Your Regulatory Data", href: "/demo" }}
        secondaryCta={{ label: "Watch a 2-Minute Demo", href: "/demo" }}
        metrics={[
          { value: "Days", label: "Not months" },
          { value: "SAR 500K+", label: "Saved vs traditional advisory engagement" },
          { value: "5+", label: "Saudi regulations mapped natively" },
          { value: "Every", label: "Output audit-ready with citations" },
        ]}
        image={grcDashboardImg}
        imageAlt="GRC Platform compliance dashboard"
      />

      {/* ══════ SECTION 2: WHAT THE PLATFORM DELIVERS ══════ */}
      <Section>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          WHAT YOU GET
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          Upload your documents. Get audit-ready compliance deliverables.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-14 text-center max-w-[680px] mx-auto"
        >
          The Aliph GRC Platform doesn't just analyze — it produces. Every output is sourced, validated, and formatted for regulatory submission or board presentation.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-7 md:p-8 shadow-sm"
            >
              <d.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading font-bold text-[17px] text-foreground mb-2">{d.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════ SECTION 3: THE COST OF COMPLIANCE TODAY ══════ */}
      <Section>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          THE REAL COST
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          You're not paying for compliance.{" "}
          <br className="hidden sm:block" />
          You're paying for manual labor.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-14 text-center max-w-[680px] mx-auto"
        >
          A typical Big Four compliance engagement costs SAR 300K-750K and takes 3-6 months. The vast majority of that time is spent on research, document review, and report drafting — work that AI agents can complete in hours with higher consistency.
        </motion.p>

        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden">
          {/* Traditional Advisory Column */}
          <div className="bg-secondary/50 p-8 md:p-10 md:border-r border-border">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold bg-muted text-muted-foreground mb-6">
              Traditional Advisory
            </span>
            <div className="space-y-0">
              {traditionalItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex justify-between py-3 border-b border-border/60"
                >
                  <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                  <span className="font-body text-sm text-muted-foreground font-medium">{item.time}</span>
                </motion.div>
              ))}
            </div>
            <div className="border-t-2 border-muted-foreground/30 mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-heading font-bold text-foreground">Total</span>
                <span className="font-heading font-bold text-foreground">3-6 months</span>
              </div>
              <div className="flex justify-between">
                <span className="font-heading font-bold text-foreground">Cost</span>
                <span className="font-heading font-bold text-foreground">SAR 300K-750K</span>
              </div>
            </div>
          </div>

          {/* Aliph GRC Column */}
          <div className="bg-card p-8 md:p-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold bg-accent/10 text-accent mb-6">
              With Aliph GRC
            </span>
            <div className="space-y-0">
              {aliphItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex justify-between py-3 border-b border-border/60"
                >
                  <span className="font-body text-sm text-foreground">{item.label}</span>
                  <span className="font-body text-sm text-accent font-semibold">{item.time}</span>
                </motion.div>
              ))}
            </div>
            <div className="border-t-2 border-accent/40 mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-heading font-bold text-foreground">Total</span>
                <span className="font-heading font-bold text-accent">Days</span>
              </div>
              <div className="flex justify-between">
                <span className="font-heading font-bold text-foreground">Cost</span>
                <span className="font-heading font-bold text-accent">A fraction</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════ SECTION 3: HOW THE AGENTS WORK ══════ */}
      <Section alabaster>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          THE AI AGENTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight max-w-4xl mx-auto"
        >
          A team of AI agents that research, draft, validate, and learn — so your compliance team handles judgment, not paperwork.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-14 text-center max-w-[660px] mx-auto"
        >
          Multiple specialized agents coordinate across every engagement — each focused on a specific task, each cross-checking the others' work, each learning from your team's corrections. The result: advisory-firm quality output, validated against primary sources, delivered in hours instead of months.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 max-w-5xl mx-auto">
          {agents.map((a, i) => (
            <motion.div
              key={a.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex"
            >
              {/* Desktop arrow */}
              {i > 0 && (
                <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M6 4l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {/* Mobile arrow */}
              {i > 0 && (
                <div className="flex lg:hidden absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M4 6l6 8 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div
                className={`flex-1 rounded-2xl p-7 md:p-8 text-center transition-all ${
                  a.highlight
                    ? "border-2 border-accent bg-accent/5 shadow-[0_0_30px_-8px_hsl(var(--accent)/0.25)]"
                    : "border border-border bg-background"
                }`}
              >
                <span className={`font-heading font-bold text-3xl ${a.highlight ? "text-accent" : "text-accent/70"}`}>
                  {a.step}
                </span>
                <h3 className="font-heading font-semibold text-lg mt-4 mb-1 text-foreground leading-snug">
                  {a.name}
                </h3>
                {a.subtitle && (
                  <p className="font-heading font-medium text-sm text-muted-foreground mb-3">{a.subtitle}</p>
                )}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════ SECTION 4: REGULATORY COVERAGE ══════ */}
      <Section>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          REGULATIONS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-12 text-foreground text-center tracking-tight"
        >
          Your regulations. Already mapped. Continuously updated.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {regulations.map((r, i) => (
            <motion.div
              key={r.acronym}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card p-6 md:p-7 border-t-[3px] border-t-accent"
            >
              <p className="font-heading font-bold text-3xl text-accent mb-1">{r.acronym}</p>
              <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground mb-3">{r.fullName}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-sm text-muted-foreground text-center mt-8"
        >
          Additional frameworks in development: CBAHI (Healthcare) · STA (Tourism) · RERA (Real Estate)
        </motion.p>
      </Section>

      {/* ══════ SECTION 5: USE CASES ══════ */}
      <Section alabaster>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          USE CASES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          Built for the teams that carry the compliance burden.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 text-center max-w-[640px] mx-auto"
        >
          From three-person compliance departments to 50-partner advisory firms — designed for teams that need production-grade GRC at any scale.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 md:p-8 shadow-sm"
            >
              <card.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{card.team}</h3>
              <p className="font-heading font-medium text-sm text-foreground/80 italic mb-4">{card.scenario}</p>
              <div className="h-px bg-border mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════ SECTION 6: THE REAL COMPARISON ══════ */}
      <Section>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          THE REAL COMPARISON
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          Your Big Four consultant delivers a report.{" "}
          <br className="hidden sm:block" />
          Aliph delivers a system.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 text-center max-w-[680px] mx-auto"
        >
          This isn't about replacing your advisory relationships. It's about what happens between engagements — when regulations change, when new requirements emerge, and when your team needs answers now, not in 6 weeks.
        </motion.p>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-[1100px] mx-auto rounded-2xl border border-border overflow-hidden bg-card">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr]">
            <div className="p-5 border-b border-border">
              <span className="font-heading font-semibold text-[15px] text-foreground">What happens when...</span>
            </div>
            <div className="p-5 border-b border-border border-l bg-secondary/50">
              <span className="font-heading font-semibold text-[15px] text-muted-foreground">Traditional Advisory</span>
            </div>
            <div className="p-5 border-b border-border border-l">
              <span className="font-heading font-semibold text-[15px] text-accent">Aliph GRC Platform</span>
            </div>
          </div>

          {comparisonRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-border"
            >
              <div className="p-5">
                <span className="font-body text-sm font-semibold text-foreground">{row.scenario}</span>
              </div>
              <div className="p-5 border-l border-border bg-secondary/50">
                <span className="font-body text-sm text-muted-foreground">{row.traditional}</span>
              </div>
              <div className="p-5 border-l border-border">
                <span className="font-body text-sm text-foreground">{row.aliph}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto">
          {comparisonRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="p-4 bg-secondary/30 border-b border-border">
                <span className="font-body text-sm font-semibold text-foreground">{row.scenario}</span>
              </div>
              <div className="p-4 bg-secondary/50 border-b border-border">
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground font-semibold">Traditional Advisory</span>
                <p className="font-body text-sm text-muted-foreground mt-1">{row.traditional}</p>
              </div>
              <div className="p-4">
                <span className="font-body text-xs uppercase tracking-wider text-accent font-semibold">Aliph GRC Platform</span>
                <p className="font-body text-sm text-foreground mt-1">{row.aliph}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-lg text-center text-muted-foreground mt-10 max-w-2xl mx-auto"
        >
          Consultants deliver expertise at a point in time.{" "}
          <span className="text-foreground">Aliph delivers expertise that compounds continuously.</span>
        </motion.p>
      </Section>

      {/* ══════ SECTION 7: FINAL CTA ══════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-[#1a1a2e]">
        <div className="container px-6 mx-auto max-w-[680px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-white leading-tight mb-6"
          >
            See it work on your own regulatory data.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-body text-[17px] text-white/70 leading-relaxed max-w-[620px] mx-auto mb-9"
          >
            Bring your PDPL policies, your SAMA documentation, or any regulatory framework you're working with. We'll run it through the platform live and show you the gap analysis, the drafted report, and the full audit trail. 30 minutes. No commitment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7"
          >
            <Link
              to="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all shadow-sm text-base"
            >
              Book a GRC Demo
            </Link>
            <Link
              to="/company/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-lg border border-white/30 text-white hover:bg-white/10 font-heading font-semibold transition-all text-base"
            >
              Download the GRC Capability Brief
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="font-body text-sm text-white/60 mb-5"
          >
            No sales pitch. See the agents research, draft, and validate on your actual documents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-1"
          >
            <p className="font-body text-sm text-white/50">Prefer to talk directly?</p>
            <p className="font-body text-sm text-white/50">
              WhatsApp:{" "}
              <a href="https://wa.me/966569678421" className="text-white/70 hover:underline">
                +966 56 967 8421
              </a>
              {"  |  "}
              <a href="mailto:raj@aliphai.ai" className="text-white/70 hover:underline">
                raj@aliphai.ai
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GRCPlatform;
