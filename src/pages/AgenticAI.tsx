import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSearch, FileText, Users, BarChart3, ClipboardCheck, Presentation,
  Shield, Brain, Lock, Globe, ArrowRight, CheckCircle2, Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import SplitHero from "@/components/sections/SplitHero";
import Section from "@/components/sections/Section";
import agentImg from "@/assets/images/agentic-ai-agents.jpg";

/* ─── Data ─── */

const shiftCards = [
  {
    num: "01",
    title: "Today: You Ask, AI Answers",
    body: "You type a question. AI gives you one response. You evaluate it. You ask a follow-up. You evaluate again. You do the synthesis. The AI assists — but you do the work.",
  },
  {
    num: "02",
    title: "Next: You Assign, Agents Execute",
    body: "You define the objective. Specialized agents divide the work — one researches, one drafts, one validates, one learns. They coordinate with each other. You review the final output. Not the intermediate steps.",
  },
  {
    num: "03",
    title: "With Aliph: Agents Execute — Sovereign",
    body: "Same autonomous execution. But every agent interaction is governed by your data policies. Privacy Shield protects every external call. Organization Memory gives agents your institutional context. Full audit trail on every action.",
    highlight: true,
  },
];

const useCases = [
  { icon: FileSearch, title: "Regulatory Impact Assessment", subtitle: "Input: 'New SAMA circular published.' → Output: Full impact report.", body: "Agents research the circular, map it against your current policies, identify gaps, draft an impact assessment with citations, and validate every claim against source regulations. Delivered to your desk — reviewed, not drafted." },
  { icon: FileText, title: "Contract Review & Risk Analysis", subtitle: "Input: 'Review this vendor contract.' → Output: Risk report with flags.", body: "Agents analyze the contract against regulatory requirements, flag non-compliant clauses, compare terms against your historical contracts, and produce a risk-scored summary with recommended modifications." },
  { icon: Users, title: "Employee Onboarding Package", subtitle: "Input: 'New analyst joining the compliance team.' → Output: Complete onboarding kit.", body: "Agents compile relevant policies, past engagement methodologies, training materials, and team procedures from Organization Memory. New hire gets a curated knowledge package on day one — sourced, cited, permission-filtered." },
  { icon: BarChart3, title: "Market Research Brief", subtitle: "Input: 'Research the Saudi PropTech market.' → Output: 15-page market brief.", body: "Agents search public data, analyze industry reports, pull relevant internal knowledge, draft the brief, cross-check facts, and format the output. Privacy Shield ensures proprietary data stays internal when external sources are queried." },
  { icon: ClipboardCheck, title: "Compliance Audit Preparation", subtitle: "Input: 'SDAIA audit next month.' → Output: Complete audit readiness package.", body: "Agents inventory your current compliance documentation, identify gaps, draft missing documents, compile evidence packages, and produce a readiness checklist. Weeks of preparation compressed into days." },
  { icon: Presentation, title: "Board Materials Preparation", subtitle: "Input: 'Quarterly board meeting in 2 weeks.' → Output: Draft board pack.", body: "Agents pull financial data, operational metrics, compliance status, and strategic updates from Organization Memory. Draft board presentation assembled with citations. Your team refines and presents — agents handled the assembly." },
];

const comparisonRows = [
  { scenario: "…an agent needs to research using client data?", open: "Client data sent to external APIs without filtering. No PII protection. No audit trail.", aliph: "Privacy Shield intercepts every external call. Sensitive data stripped automatically. Full audit trail." },
  { scenario: "…an agent drafts a compliance report?", open: "Generic output. No access to your organization's past engagements, templates, or preferences.", aliph: "Organization Memory gives agents your firm's history, templates, regulatory interpretations, and institutional knowledge." },
  { scenario: "…you need to prove what the agents did to a regulator?", open: "No logging. No audit trail. No way to trace what data was accessed or what decisions were made.", aliph: "Every agent action logged — what was accessed, what was generated, which models were called, what data was involved." },
  { scenario: "…different teams need different agent permissions?", open: "No RBAC. Every agent has access to everything. No permission boundaries.", aliph: "Agents inherit your existing RBAC. A junior analyst's agent sees different data than a partner's agent. Zero configuration." },
  { scenario: "…an agent generates incorrect information?", open: "No built-in validation. No cross-checking. You find the errors yourself.", aliph: "Validation agents cross-check every output against source documents and regulations. Unsupported claims are flagged before you see the result." },
  { scenario: "…you want to switch the underlying AI model?", open: "Agents hardcoded to specific models. Switching requires rebuilding agent configurations.", aliph: "Model-agnostic through Aliph's governed connectivity. Switch models without changing any agent workflow." },
];

const foundationBadges = [
  { icon: Shield, title: "Privacy Shield", line: "Every agent's external call is protected." },
  { icon: Brain, title: "Organization Memory", line: "Agents know your business. Not just the internet." },
  { icon: Lock, title: "Full Audit Trail", line: "Every action traced. Every decision logged." },
  { icon: Globe, title: "Multi-Model Access", line: "Best model per task. Governed automatically." },
];

/* ─── Component ─── */

const AgenticAI = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      {/* ── 1. HERO ── */}
      <SplitHero
        eyebrow="AGENTIC AI PLATFORM"
        title="AI agents that don't just answer questions. They do the work."
        subtitle="Autonomous AI agents that can research, draft, analyze, validate, and execute complex workflows across your enterprise — with every interaction governed by your data policies, protected by Privacy Shield, and informed by your Organization Memory. The next evolution of sovereign AI."
        primaryCta={{ label: "Join the Early Access Waitlist →", href: "/demo" }}
        secondaryCta={{ label: "Learn More ↓", href: "#the-shift" }}
        badge="COMING Q2 2026"
        trustText="Priority access for early partners. Direct input into the product."
        image={agentImg}
        imageAlt="Interconnected AI agent nodes with central governance shield"
      />

      {/* ── 2. THE SHIFT ── */}
      <Section id="the-shift">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4">THE SHIFT</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground tracking-tight">
            ChatGPT answers questions.<br />AI agents complete projects.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="font-body text-muted-foreground text-lg leading-relaxed max-w-[700px] mx-auto">
            The enterprise AI you use today is reactive — you ask, it answers. Agentic AI is different. You give it an objective, and it breaks the problem down, researches across multiple sources, drafts deliverables, validates its own work against your standards, and presents you with the finished output. You supervise the result. The agents handle everything else.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {shiftCards.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border p-8 ${c.highlight ? "border-l-4 border-l-accent bg-accent/[0.03] border-accent/20" : "border-border bg-card"}`}
            >
              <span className="font-heading font-bold text-3xl text-accent mb-4 block">{c.num}</span>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 3. CAPABILITIES ── */}
      <Section alabaster>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4">CAPABILITIES</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground tracking-tight">
            Give an agent an objective. Get back a deliverable.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="font-body text-muted-foreground text-lg leading-relaxed max-w-[660px] mx-auto">
            These aren't chatbot conversations. These are autonomous workflows — agents that research, draft, check their own work, and deliver results ready for your review.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-7 shadow-sm"
            >
              <uc.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-[17px] mb-1.5 text-foreground">{uc.title}</h3>
              <p className="font-body text-sm text-muted-foreground/70 italic mb-3">{uc.subtitle}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{uc.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 4. THE REAL COMPARISON ── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4">THE REAL COMPARISON</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground tracking-tight">
            Open-source AI agents are powerful.<br className="hidden md:inline" /> They're also completely ungoverned.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="font-body text-muted-foreground text-lg leading-relaxed max-w-[680px] mx-auto">
            Frameworks like CrewAI, AutoGen, and LangGraph give you autonomous AI agents. They don't give you data sovereignty, audit trails, organizational context, or regulatory compliance. Aliph does.
          </motion.p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block max-w-4xl mx-auto rounded-2xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-[2fr_1.5fr_1.5fr] bg-secondary">
            <div className="p-4"><span className="font-heading font-semibold text-sm text-muted-foreground">What happens when…</span></div>
            <div className="p-4 text-center border-l border-border"><span className="font-heading font-semibold text-sm text-muted-foreground">Open-Source Agents</span></div>
            <div className="p-4 text-center border-l border-accent/20 bg-accent/5"><span className="font-heading font-semibold text-sm text-accent">Aliph Agentic Platform</span></div>
          </div>
          {comparisonRows.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="grid grid-cols-[2fr_1.5fr_1.5fr] border-t border-border">
              <div className="p-4"><span className="font-heading font-semibold text-sm text-foreground">{row.scenario}</span></div>
              <div className="p-4 border-l border-border bg-secondary/40"><span className="font-body text-sm text-muted-foreground">{row.open}</span></div>
              <div className="p-4 border-l border-accent/20 bg-accent/5"><span className="font-body text-sm text-foreground">{row.aliph}</span></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto">
          {comparisonRows.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="p-4 bg-secondary/60 border-b border-border"><span className="font-heading font-semibold text-sm text-foreground">{row.scenario}</span></div>
              <div className="p-4 border-b border-border"><p className="text-xs font-heading font-semibold text-muted-foreground mb-1">Open-Source Agents</p><p className="font-body text-sm text-muted-foreground">{row.open}</p></div>
              <div className="p-4 bg-accent/5"><p className="text-xs font-heading font-semibold text-accent mb-1">Aliph Agentic Platform</p><p className="font-body text-sm text-foreground">{row.aliph}</p></div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-heading font-semibold text-lg md:text-xl text-foreground mt-12 max-w-2xl mx-auto">
          Open-source gives you the engine. Aliph gives you the governance that makes it enterprise-safe.
        </motion.p>
      </Section>

      {/* ── 5. SAME SOVEREIGN FOUNDATION ── */}
      <Section alabaster>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4">SAME SOVEREIGN FOUNDATION</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
            Everything that makes AliphChat and GRC Platform sovereign — powers the agents too.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="font-body text-muted-foreground leading-relaxed max-w-[660px] mx-auto">
            The Agentic AI Platform runs on the same four-layer architecture. Privacy Shield, Organization Memory, governed model connectivity, and full audit trails — shared across every Aliph product.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {foundationBadges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <b.icon className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-base text-foreground mb-1">{b.title}</h3>
              <p className="font-body text-[13px] text-muted-foreground leading-snug">{b.line}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 6. EARLY ACCESS WAITLIST CTA ── */}
      <section className="relative bg-[hsl(220,20%,12%)] text-[hsl(0,0%,95%)]">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex px-3 py-1 rounded-full text-xs font-heading font-semibold bg-accent/15 border border-accent/25 text-accent uppercase tracking-wider mb-6">
              LAUNCHING Q2 2026
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight mb-6">
              Be the first to deploy sovereign AI agents across your enterprise.
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="font-body text-lg text-[hsl(0,0%,75%)] leading-relaxed mb-10 max-w-[620px] mx-auto">
              We're selecting a limited number of early access partners who want to shape the product with us. Early partners get priority deployment, direct engineering access, and input into the agent capabilities that matter most for their workflows.
            </motion.p>

            {/* Benefits */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-sm">
              {["Priority access before general availability", "Direct input into agent capabilities and workflows", "Dedicated engineering support during deployment"].map((t) => (
                <span key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent shrink-0" />{t}</span>
              ))}
            </motion.div>

            {/* Email capture */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-2 py-4">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-heading font-semibold text-accent">You're on the list!</span>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@company.com"
                    className="flex-1 h-12 px-4 rounded-lg border border-[hsl(220,15%,25%)] bg-[hsl(220,18%,16%)] text-[hsl(0,0%,95%)] font-body text-sm placeholder:text-[hsl(0,0%,50%)] focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                  <button type="submit" className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold text-sm transition-all shrink-0">
                    Join the Waitlist
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {!submitted && (
              <p className="text-[13px] text-[hsl(0,0%,50%)] font-body mb-10">
                No commitment. We'll notify you when early access opens and share product updates along the way.
              </p>
            )}

            <div className="text-[13px] text-[hsl(0,0%,50%)] font-body space-y-1 mt-6">
              <p>Questions about the Agentic AI Platform?</p>
              <p>
                <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp: +966 56 967 8421</a>
                <span className="mx-2">|</span>
                <a href="mailto:raj@aliphai.ai" className="hover:text-accent transition-colors">raj@aliphai.ai</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgenticAI;
