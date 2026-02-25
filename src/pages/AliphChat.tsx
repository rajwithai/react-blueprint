import { useState } from "react";
import { Scale, UserPlus, Briefcase, ClipboardCheck, Handshake, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SplitHero from "@/components/sections/SplitHero";
import Section from "@/components/sections/Section";
import heroChatImg from "@/assets/images/hero-chat-ui.jpg";

/* ─── Section 4: Capabilities Tab Data ─── */
const capabilities = [
  {
    tab: "Your Knowledge Comes First",
    title: "Answers from your own documents — before any external AI is called.",
    body1:
      "When an employee asks a question, AliphChat searches across your organization's documents first — Google Drive, SharePoint, shared folders, uploaded files. If the answer exists internally, it's delivered instantly with source citations showing exactly which document and which section.",
    body2:
      "No external AI call is made. No data leaves. Your institutional knowledge becomes the first line of intelligence.",
    proofs: [
      "Searches across all connected knowledge sources simultaneously",
      "Citations include document name, section, and page reference",
      "The more your team uses it, the more comprehensive the knowledge becomes",
    ],
  },
  {
    tab: "Your Data Never Leaves Unprotected",
    title: "Sensitive data detected and handled before any external query.",
    body1:
      "When AliphChat needs to call an external AI model — Claude, GPT-4, or Gemini — the Privacy Shield scans the full query first. Personal identifiers, financial data, company information, and regulated data categories are detected in both Arabic and English and handled automatically.",
    body2:
      "The external AI model receives the question. It never receives the context. Your employee gets the full answer. Your data stays sovereign.",
    proofs: [
      "Arabic and English detection — not translated, natively built",
      "Covers all PDPL-regulated data categories",
      "Automatic — no employee action or judgment required",
    ],
  },
  {
    tab: "Every Employee Sees Only What They Should",
    title: "Permissions inherited from your existing directory. Zero configuration.",
    body1:
      "AliphChat inherits your organization's existing file permissions automatically. When an employee asks a question, they only receive answers from documents they're already authorized to access. A junior analyst and a managing partner ask the same question — they get different answers, sourced from different documents, based on their existing access level.",
    body2:
      "No new permission system to configure. No admin overhead. It works from day one.",
    proofs: [
      "Inherits from Google Workspace, Microsoft 365, or custom directory",
      "No IT configuration — works immediately on deployment",
      "Access levels update automatically when permissions change",
    ],
  },
];

/* ─── Comparison Table Data ─── */
const comparisonRows = [
  {
    scenario: "...an employee pastes client data into a query?",
    competitor:
      "Sent to US servers. Stored for training unless enterprise plan opted out. You have no visibility.",
    aliph:
      "Privacy Shield detects and strips sensitive data before it leaves your walls. Original query stays internal.",
  },
  {
    scenario: "...you need to prove compliance to SDAIA?",
    competitor:
      "No audit trail of what employees asked or what data was shared. You have nothing to show.",
    aliph:
      "Every interaction logged — who asked, what data, which model, when. Exportable compliance reports ready for review.",
  },
  {
    scenario: "...an employee asks about an internal policy?",
    competitor:
      "Answers from public internet data. Doesn't know your policies exist. May hallucinate an answer.",
    aliph:
      "Searches your Organization Memory first. Answers from your actual documents with page-level citations.",
  },
  {
    scenario: "...your senior risk officer resigns?",
    competitor:
      "Their knowledge walks out the door. Nothing was captured.",
    aliph:
      "Organization Memory retains every document, every insight, every interaction. New hires access it from day one.",
  },
  {
    scenario: "...you need responses in Arabic?",
    competitor:
      "Supports Arabic but doesn't detect Arabic PII or understand Saudi regulatory terminology natively.",
    aliph:
      "Arabic and English built in — including PII detection, regulatory terminology, and document processing in both languages.",
  },
  {
    scenario: "...different employees need different access levels?",
    competitor:
      "Everyone sees everything. No permission inheritance. No role-based access to knowledge.",
    aliph:
      "Inherits your existing directory permissions. Each employee only sees documents they're authorized to access. Zero admin configuration.",
  },
  {
    scenario: "...you want to switch AI models?",
    competitor:
      "Locked to OpenAI. Switching means rebuilding everything.",
    aliph:
      "Access Claude, GPT-4, Gemini, and others through one governed layer. Switch models without changing anything for users.",
  },
];

/* ─── How It Works Steps ─── */
const steps = [
  {
    step: "01",
    title: "Connect your knowledge.",
    desc: "Point AliphChat at your existing knowledge sources — Google Drive, SharePoint, shared folders, CRM exports, employee uploads. Aliph indexes everything and inherits your existing file permissions automatically. No data migration. No manual tagging. It just works.",
  },
  {
    step: "02",
    title: "Your employee asks a question.",
    desc: "In Arabic or English. About a client contract, a compliance regulation, an internal policy, last quarter's performance, or anything else. They ask naturally — like talking to a colleague who's read every document in the company.",
  },
  {
    step: "03",
    title: "Aliph searches your documents first. Protects your data if it goes further.",
    desc: "AliphChat checks your Organization Memory before calling any external AI. If the answer exists internally, it's delivered instantly — no external call made. If external AI is needed, the Privacy Shield activates — sensitive data is stripped before anything leaves your walls.",
    highlight: true,
  },
  {
    step: "04",
    title: "Answer delivered. Sources cited. Everything logged.",
    desc: "Your employee gets a clear, accurate answer with citations showing exactly where the information came from — which document, which section, which page. The full interaction is logged to an immutable audit trail. Your compliance team can review any interaction at any time.",
  },
];

const AliphChat = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ══════ SECTION 1: HERO ══════ */}
      <SplitHero
        eyebrow="ALIPHCHAT — SOVEREIGN ENTERPRISE AI ASSISTANT"
        title="Ask anything. Expose nothing."
        subtitle="Give every employee ChatGPT-level intelligence. Keep every byte of sensitive data inside your walls. Arabic and English. Fully audited. Deployed in days."
        primaryCta={{ label: "Try AliphChat", href: "/demo" }}
        secondaryCta={{ label: "See How It Works ↓", href: "#how-it-works" }}
        metrics={[
          { value: "Zero", label: "Data exposure" },
          { value: "Arabic + English", label: "Natively built in" },
          { value: "Days", label: "To deploy" },
          { value: "Every", label: "Interaction logged" },
        ]}
        image={heroChatImg}
        imageAlt="AliphChat enterprise AI interface"
      />

      {/* ══════ SECTION 2: HOW IT WORKS ══════ */}
      <Section id="how-it-works">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          HOW IT WORKS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          From question to sovereign answer{" "}
          <br className="hidden sm:block" />
          in four steps.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-14 text-center max-w-xl mx-auto"
        >
          No training needed. No IT configuration. Your team starts asking questions on day one.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
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
                  s.highlight
                    ? "border-2 border-accent bg-accent/5 shadow-[0_0_30px_-8px_hsl(var(--accent)/0.25)]"
                    : "border border-border bg-background"
                }`}
              >
                <span className={`font-heading font-bold text-3xl ${s.highlight ? "text-accent" : "text-accent/70"}`}>
                  {s.step}
                </span>
                <h3 className="font-heading font-semibold text-lg mt-4 mb-3 text-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════ SECTION 3: THE REAL COMPARISON ══════ */}
      <Section alabaster>
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
          Your team already uses ChatGPT.{" "}
          <br className="hidden sm:block" />
          Here's what that's actually costing you.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
        >
          This isn't about features. It's about what happens to your data, your compliance, and your institutional knowledge with each choice.
        </motion.p>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-[1100px] mx-auto rounded-2xl border border-border overflow-hidden bg-card">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr]">
            <div className="p-5 border-b border-border">
              <span className="font-heading font-semibold text-[15px] text-foreground">What happens when...</span>
            </div>
            <div className="p-5 border-b border-border border-l bg-secondary/50">
              <span className="font-heading font-semibold text-[15px] text-muted-foreground">ChatGPT / Copilot</span>
            </div>
            <div className="p-5 border-b border-border border-l">
              <span className="font-heading font-semibold text-[15px] text-accent">AliphChat</span>
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
                <span className="font-body text-sm text-muted-foreground">{row.competitor}</span>
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
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground font-semibold">ChatGPT / Copilot</span>
                <p className="font-body text-sm text-muted-foreground mt-1">{row.competitor}</p>
              </div>
              <div className="p-4">
                <span className="font-body text-xs uppercase tracking-wider text-accent font-semibold">AliphChat</span>
                <p className="font-body text-sm text-foreground mt-1">{row.aliph}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-lg text-center text-muted-foreground mt-10 max-w-xl mx-auto"
        >
          ChatGPT is a powerful tool.{" "}
          <span className="text-foreground">AliphChat makes it safe for enterprise.</span>
        </motion.p>
      </Section>

      {/* ══════ SECTION 4: THREE CAPABILITIES (Tabbed) ══════ */}
      <Section>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          WHAT MAKES ALIPHCHAT DIFFERENT
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          Three things no other enterprise AI assistant does.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-10 text-center max-w-xl mx-auto"
        >
          These aren't add-ons. They're built into every interaction, every query, every answer.
        </motion.p>

        <div className="max-w-[1200px] mx-auto">
          {/* Desktop: side-by-side tabs */}
          <div className="hidden md:grid md:grid-cols-[30%_70%] gap-0 rounded-2xl border border-border overflow-hidden bg-card">
            {/* Tab Navigation */}
            <div className="border-r border-border bg-secondary/30">
              {capabilities.map((cap, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left px-6 py-5 border-b border-border transition-all text-sm font-heading font-medium ${
                    activeTab === i
                      ? "bg-accent/10 text-foreground font-semibold border-l-[3px] border-l-accent"
                      : "text-muted-foreground hover:bg-secondary/60 border-l-[3px] border-l-transparent"
                  }`}
                >
                  {cap.tab}
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div className="p-8 lg:p-10 min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-5 leading-snug">
                    {capabilities[activeTab].title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {capabilities[activeTab].body1}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {capabilities[activeTab].body2}
                  </p>
                  <div className="space-y-3">
                    {capabilities[activeTab].proofs.map((proof, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="font-body text-[15px] text-foreground">{proof}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: accordion-style */}
          <div className="md:hidden space-y-3">
            {capabilities.map((cap, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                  className={`w-full text-left px-5 py-4 font-heading font-medium text-sm transition-all ${
                    activeTab === i
                      ? "bg-accent/10 text-foreground font-semibold border-l-[3px] border-l-accent"
                      : "text-muted-foreground border-l-[3px] border-l-transparent"
                  }`}
                >
                  {cap.tab}
                </button>
                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2">
                        <h3 className="font-heading font-bold text-lg text-foreground mb-4 leading-snug">
                          {cap.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                          {cap.body1}
                        </p>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                          {cap.body2}
                        </p>
                        <div className="space-y-2.5">
                          {cap.proofs.map((proof, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                              <span className="font-body text-sm text-foreground">{proof}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
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
          What teams actually do with AliphChat.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 text-center max-w-[660px] mx-auto"
        >
          Every team has questions only your organization can answer. Here's how different teams use AliphChat every day.
        </motion.p>

        <div className="max-w-[1100px] mx-auto">
          {/* Row 1: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6 md:mb-8">
            {[
              {
                icon: Scale,
                team: "Compliance & Legal",
                scenario: "Your team spends weeks researching regulatory updates manually.",
                body: "AliphChat searches your entire compliance document library instantly. Ask about PDPL requirements, SAMA circulars, or CMA guidelines — get answers sourced from your own regulatory filings and policy documents with exact citations. New regulatory updates? Ask AliphChat to compare against your current policies and flag gaps.",
              },
              {
                icon: UserPlus,
                team: "New Employee Onboarding",
                scenario: "Your new hires take months to become productive.",
                body: "A new analyst joins your firm. Instead of reading through hundreds of folders, they ask AliphChat about internal processes, past engagement approaches, client histories, and company policies. They get accurate, cited answers from documents they're authorized to see — filtered by their access level. Months of learning compressed into days.",
              },
              {
                icon: Briefcase,
                team: "Executive Decision Support",
                scenario: "Your leadership team needs answers that span every department.",
                body: "The CEO asks about quarterly performance across divisions. The CFO asks about budget allocation precedents. AliphChat searches across finance, operations, HR, and strategy documents simultaneously — returning answers with citations from each source. No more waiting for department heads to compile reports.",
              },
            ].map((card, i) => (
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
                <p className="font-heading font-semibold text-[15px] text-foreground/80 mb-3">{card.scenario}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="hidden md:block" />
            {[
              {
                icon: ClipboardCheck,
                team: "Audit & Regulatory Preparation",
                scenario: "SDAIA requests a compliance review. Your team scrambles.",
                body: "AliphChat generates instant summaries of your compliance posture — which policies exist, what data flows are documented, where gaps remain. Every answer is sourced from your actual documents. Export the interaction as part of your audit evidence. Preparation that took weeks now takes hours.",
                colStart: "md:col-start-1",
              },
              {
                icon: Handshake,
                team: "Client Advisory Teams",
                scenario: "Your consultants rewrite proposals from scratch because nobody can find the precedent.",
                body: "A senior associate needs the approach used on a similar engagement three years ago. AliphChat searches every past proposal, deliverable, and engagement note — returning the most relevant precedents with exact document references. Institutional knowledge becomes accessible to every team member, not locked in a partner's memory.",
                colStart: "md:col-start-2",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.08 }}
                className="rounded-2xl border border-border bg-card p-7 md:p-8 shadow-sm"
              >
                <card.icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{card.team}</h3>
                <p className="font-heading font-semibold text-[15px] text-foreground/80 mb-3">{card.scenario}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
            <div className="hidden md:block" />
          </div>
        </div>
      </Section>

      {/* ══════ SECTION 6: TRACTION STRIP ══════ */}
      <section className="py-12 md:py-16 bg-secondary/60 border-y border-border">
        <div className="container px-6 mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-xl md:text-[22px] text-foreground text-center mb-10"
          >
            Built, tested, and ready for your organization.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 max-w-5xl mx-auto">
            {[
              { value: "Zero", label: "Sensitive data exposed to external models" },
              { value: "1,000s", label: "Documents indexed and searchable" },
              { value: "2", label: "Languages — Arabic + English natively" },
              { value: "Days", label: "From deployment to first employee query" },
              { value: "Every", label: "Interaction logged with full audit trail" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`text-center ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <p className="font-heading font-bold text-4xl md:text-[48px] text-foreground mb-1">{stat.value}</p>
                <p className="font-body text-[13px] text-muted-foreground leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[15px] text-muted-foreground text-center mt-8"
          >
            No unverified claims. Just what the platform delivers today.
          </motion.p>
        </div>
      </section>

      {/* ══════ SECTION 7: FINAL CTA ══════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-[#1a1a2e]">
        <div className="container px-6 mx-auto max-w-[680px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-white leading-tight mb-6"
          >
            Give your team the AI they want — with the governance you need.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-body text-[17px] text-white/70 leading-relaxed max-w-[620px] mx-auto mb-9"
          >
            Book a 30-minute walkthrough. We'll connect AliphChat to a sample knowledge base, show you the Privacy Shield in action, and demonstrate source citations and audit trails live. Your team could be using it within days.
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
              Try AliphChat
            </Link>
            <Link
              to="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-lg border border-white/30 text-white hover:bg-white/10 font-heading font-semibold transition-all text-base"
            >
              Request a Live Demo
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="font-body text-sm text-white/60 mb-5"
          >
            No commitment. No lengthy sales process. See it working in 30 minutes.
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

export default AliphChat;
