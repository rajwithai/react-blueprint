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
  { icon: FileCheck, title: "PDPL Gap Analysis", body: "Complete mapping of your current policies against PDPL requirements. Every gap identified. Every finding cited to the specific regulation clause. Risk-scored by severity." },
  { icon: BarChart3, title: "Compliance Status Reports", body: "Board-ready compliance posture summaries. Generated in minutes from live platform data. Current as of today — not the last time a consultant visited." },
  { icon: ShieldAlert, title: "Risk Assessment Reports", body: "Regulatory risk mapped across your organization. Risk scores assigned per department, per regulation, per data category. Prioritized remediation recommendations included." },
  { icon: FilePen, title: "Policy Documents & Templates", body: "Data protection policies, consent frameworks, breach notification procedures — drafted by AI, validated against current regulations, formatted to your firm's templates." },
  { icon: ClipboardCheck, title: "Audit Evidence Packages", body: "Complete audit trail documentation — every analysis run, every finding, every remediation action. Packaged for SDAIA review or internal audit committee presentation." },
  { icon: BellRing, title: "Continuous Monitoring Alerts", body: "New regulatory circular published? Impact assessment on your current compliance posture generated automatically. Your team is notified before the regulation takes effect — not after." },
];

/* ─── Section 4: Agent Pipeline Data ─── */
const agents = [
  { step: "01", name: "Research", subtitle: "Regulatory Research — Automated", body: "Specialized agents scan regulatory databases, track new circulars and amendments, map requirements to your specific industry, entity type, and jurisdiction. PDPL, SAMA, CMA, NCA — monitored continuously. Your team stops chasing updates. Updates come to them." },
  { step: "02", name: "Analyze & Draft", subtitle: "Document Analysis & Report Drafting — Hours, Not Weeks", body: "Agents analyze your existing policies, contracts, and internal documents against regulatory requirements. Gaps identified. Risk scores assigned. Remediation reports drafted in your firm's format and templates. A full PDPL gap analysis that used to take a consultant 6 weeks is drafted in hours." },
  { step: "03", name: "Validate", subtitle: "Every Claim Cross-Checked — Before You See It", body: "Nothing reaches your desk unverified. Validation agents cross-reference every statement in every draft against source regulations, your internal documents, and precedent engagements. Unsupported claims are flagged. Inconsistencies are caught. Every output includes source citations so your team can verify with one click.", highlight: true },
  { step: "04", name: "Learn", subtitle: "Your Expertise Compounds — Permanently", body: "Every correction your team makes, every preference expressed, every regulatory interpretation approved — captured and embedded into the system. The platform gets smarter with every engagement. When a partner retires or an associate leaves, their expertise stays. New hires inherit decades of institutional knowledge from day one." },
];

/* ─── Section 4: Regulation Cards ─── */
const regulations = [
  { acronym: "PDPL", fullName: "Personal Data Protection Law", body: "Full compliance mapping — data classification, consent requirements, cross-border transfer rules, breach notification procedures. Updated as SDAIA releases new guidance." },
  { acronym: "SAMA", fullName: "Saudi Arabian Monetary Authority", body: "Financial sector regulatory framework — cybersecurity requirements, outsourcing guidelines, data governance standards. New circulars analyzed within hours of publication." },
  { acronym: "CMA", fullName: "Capital Markets Authority", body: "Corporate governance and disclosure requirements — board reporting, conflict of interest policies, shareholder communications. Cross-referenced with SAMA where applicable." },
  { acronym: "NCA", fullName: "National Cybersecurity Authority", body: "Essential cybersecurity controls — risk assessment frameworks, incident response requirements, third-party security standards. Mapped against your existing security posture." },
];

/* ─── Section 5: Use Case Cards ─── */
const useCases = [
  { icon: Shield, team: "Compliance Officers", scenario: "You're responsible for PDPL compliance but your team is three people and the regulation keeps evolving.", body: "The platform tracks every PDPL update, maps it against your current policies, identifies gaps, and drafts remediation reports. You review and approve. Your three-person team operates with the output capacity of a 15-person department." },
  { icon: Scale, team: "Legal Teams", scenario: "Every new contract requires regulatory review. Your lawyers spend more time on compliance checks than legal strategy.", body: "Contract analysis automated against regulatory requirements. Risk flags generated instantly. Standard compliance language suggested. Your lawyers focus on judgment and negotiation, not regulatory cross-referencing." },
  { icon: Briefcase, team: "Advisory Firms", scenario: "Your consultants deliver compliance engagements to clients. Each engagement starts from scratch because precedents are buried in old deliverables.", body: "Every past engagement, deliverable, and regulatory interpretation is searchable. New engagements start with full context. Deliverable quality is consistent across partners. Junior staff produce senior-quality work from day one." },
];

/* ─── Section 6: Comparison Table Data ─── */
const comparisonRows = [
  { scenario: "...a new SAMA circular is published?", traditional: "You hear about it weeks later. Engagement scoped. Work starts in 1-2 months.", aliph: "Analyzed within hours. Impact assessment on your current policies generated automatically." },
  { scenario: "...you need a PDPL gap analysis?", traditional: "3-6 month engagement. SAR 300K-750K. Delivered as a static PDF.", aliph: "Completed in days. Continuously updated as your documents or regulations change. Always current." },
  { scenario: "...your board asks for a compliance status update?", traditional: "Your team scrambles for 2 weeks to compile data from the last engagement.", aliph: "Generated in minutes from live platform data. Audit-ready with citations." },
  { scenario: "...a junior compliance officer leaves?", traditional: "Their institutional knowledge disappears. Next hire starts from zero.", aliph: "Every regulatory interpretation, every decision, every correction captured permanently. New hire accesses full history from day one." },
  { scenario: "...you need to prove compliance to SDAIA?", traditional: "You present the consultant's last report — which may be 6 months old.", aliph: "You present live compliance data with full audit trail. Current as of today. Every source cited." },
  { scenario: "...regulations change mid-engagement?", traditional: "Scope creep. Additional fees. Timeline extends.", aliph: "Automatically detected. Impact assessed. Your existing analysis updated in real time. No additional cost." },
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
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3 text-center">
          WHAT YOU GET
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline mb-4 text-center">
          Upload your documents. Get audit-ready compliance deliverables.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-subtext mb-10 text-center mx-auto">
          The Aliph GRC Platform doesn't just analyze — it produces. Every output is sourced, validated, and formatted for regulatory submission or board presentation.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deliverables.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-std">
              <d.icon className="card-icon mb-4" />
              <h3 className="card-title-std mb-2">{d.title}</h3>
              <p className="card-body-std">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════ SECTION 3: THE COST OF COMPLIANCE TODAY ══════ */}
      <Section>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3 text-center">
          THE REAL COST
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline mb-4 text-center">
          You're not paying for compliance.{" "}
          <br className="hidden sm:block" />
          You're paying for manual labor.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-subtext mb-10 text-center mx-auto">
          A typical Big Four compliance engagement costs SAR 300K-750K and takes 3-6 months. The vast majority of that time is spent on research, document review, and report drafting — work that AI agents can complete in hours with higher consistency.
        </motion.p>

        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-0 rounded-lg border border-border overflow-hidden">
          {/* Traditional Advisory Column */}
          <div className="bg-[#FAFAFA] p-8 md:border-r border-border">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold bg-muted text-muted-foreground mb-6">
              Traditional Advisory
            </span>
            <div className="space-y-0">
              {traditionalItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex justify-between py-3 border-b border-border/60">
                  <span className="card-body-std">{item.label}</span>
                  <span className="card-body-std font-medium">{item.time}</span>
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
          <div className="bg-card p-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold bg-accent/10 text-accent mb-6">
              With Aliph GRC
            </span>
            <div className="space-y-0">
              {aliphItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex justify-between py-3 border-b border-border/60">
                  <span className="card-body-std text-foreground">{item.label}</span>
                  <span className="text-[15px] text-accent font-semibold">{item.time}</span>
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
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3 text-center">
          THE AI AGENTS
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline mb-4 text-center max-w-4xl mx-auto">
          A team of AI agents that research, draft, validate, and learn — so your compliance team handles judgment, not paperwork.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-subtext mb-10 text-center mx-auto">
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
              {i > 0 && (
                <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M6 4l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {i > 0 && (
                <div className="flex lg:hidden absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M4 6l6 8 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div
                className={`flex-1 rounded-lg p-7 text-center transition-all ${
                  a.highlight
                    ? "border-2 border-accent bg-accent/5 shadow-[0_0_30px_-8px_hsl(var(--accent)/0.25)]"
                    : "border border-border bg-background"
                }`}
              >
                <span className="step-number">{a.step}</span>
                <h3 className="card-title-std mt-4 mb-1 leading-snug">{a.name}</h3>
                {a.subtitle && (
                  <p className="font-heading font-medium text-sm text-muted-foreground mb-3">{a.subtitle}</p>
                )}
                <p className="card-body-std">{a.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════ SECTION 4: REGULATORY COVERAGE ══════ */}
      <Section>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3 text-center">
          REGULATIONS
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline mb-10 text-center">
          Your regulations. Already mapped. Continuously updated.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {regulations.map((r, i) => (
            <motion.div key={r.acronym} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-std card-std-accent-top">
              <p className="reg-acronym mb-1">{r.acronym}</p>
              <p className="reg-name mb-2">{r.fullName}</p>
              <p className="reg-body">{r.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="trust-line text-center mt-8">
          Additional frameworks in development: CBAHI (Healthcare) · STA (Tourism) · RERA (Real Estate)
        </motion.p>
      </Section>

      {/* ══════ SECTION 5: USE CASES ══════ */}
      <Section alabaster>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3 text-center">
          USE CASES
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline mb-4 text-center">
          Built for the teams that carry the compliance burden.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-subtext mb-10 text-center mx-auto">
          From three-person compliance departments to 50-partner advisory firms — designed for teams that need production-grade GRC at any scale.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-std">
              <card.icon className="card-icon mb-4" />
              <h3 className="card-title-std mb-2">{card.team}</h3>
              <p className="font-heading font-medium text-sm text-foreground/80 italic mb-4">{card.scenario}</p>
              <div className="h-px bg-border mb-4" />
              <p className="card-body-std">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════ SECTION 6: THE REAL COMPARISON ══════ */}
      <Section>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3 text-center">
          THE REAL COMPARISON
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-headline mb-4 text-center">
          Your Big Four consultant delivers a report.{" "}
          <br className="hidden sm:block" />
          Aliph delivers a system.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-subtext mb-10 text-center mx-auto">
          This isn't about replacing your advisory relationships. It's about what happens between engagements — when regulations change, when new requirements emerge, and when your team needs answers now, not in 6 weeks.
        </motion.p>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-[1060px] mx-auto rounded-lg border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b-2 border-border">
            <div className="p-5">
              <span className="font-heading font-semibold text-[15px] text-foreground">What happens when...</span>
            </div>
            <div className="p-5 border-l bg-[#FAFAFA]">
              <span className="font-heading font-semibold text-[15px] text-muted-foreground">Traditional Advisory</span>
            </div>
            <div className="p-5 border-l">
              <span className="font-heading font-semibold text-[15px] text-accent">Aliph GRC Platform</span>
            </div>
          </div>

          {comparisonRows.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-[#F3F4F6]">
              <div className="comparison-cell">
                <span className="font-semibold text-[15px] text-foreground">{row.scenario}</span>
              </div>
              <div className="comparison-cell border-l bg-[#FAFAFA]">
                <span className="text-[15px] text-muted-foreground">{row.traditional}</span>
              </div>
              <div className="comparison-cell border-l">
                <span className="text-[15px] text-foreground">{row.aliph}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto">
          {comparisonRows.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card-std overflow-hidden p-0">
              <div className="p-4 bg-[#F9FAFB] border-b border-border">
                <span className="font-semibold text-sm text-foreground">{row.scenario}</span>
              </div>
              <div className="p-4 bg-[#FAFAFA] border-b border-border">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Traditional Advisory</span>
                <p className="text-sm text-muted-foreground mt-1">{row.traditional}</p>
              </div>
              <div className="p-4">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold">Aliph GRC Platform</span>
                <p className="text-sm text-foreground mt-1">{row.aliph}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading font-semibold text-lg text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
          Consultants deliver expertise at a point in time.{" "}
          <span className="text-foreground">Aliph delivers expertise that compounds continuously.</span>
        </motion.p>
      </Section>

      {/* ══════ SECTION 7: FINAL CTA ══════ */}
      <section className="dark-cta-section py-[56px] md:py-[88px]">
        <div className="container px-6 mx-auto max-w-[680px] text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="dark-cta-headline mb-4">
            See it work on your own regulatory data.
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="dark-cta-subtext mb-8 max-w-[620px] mx-auto">
            Bring your PDPL policies, your SAMA documentation, or any regulatory framework you're working with. We'll run it through the platform live and show you the gap analysis, the drafted report, and the full audit trail. 30 minutes. No commitment.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link to="/demo" className="btn-primary">
              Book a GRC Demo
            </Link>
            <Link to="/company/contact" className="btn-secondary btn-secondary-dark">
              Download the GRC Capability Brief
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.24 }} className="dark-cta-trust mb-4">
            No sales pitch. See the agents research, draft, and validate on your actual documents.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="dark-cta-contact">
            <p>Prefer to talk directly?</p>
            <p className="mt-1">
              WhatsApp:{" "}
              <a href="https://wa.me/966569678421" className="text-white/70 hover:underline">+966 56 967 8421</a>
              {"  |  "}
              <a href="mailto:raj@aliphai.ai" className="text-white/70 hover:underline">raj@aliphai.ai</a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GRCPlatform;
