import { useState } from "react";
import { Shield, Brain, Eye, Network, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "privacy",
    label: "Privacy Shield",
    icon: Shield,
    title: "Sensitive data handled before anything leaves your walls.",
    body: "Every query — in Arabic and English — is scanned for sensitive information before it reaches any external AI model. Personal identifiers, financial data, company-specific information, and regulated data categories are all detected and handled automatically. Your team gets full AI capability. External models never see your real data.",
    proofs: [
      "Arabic and English detection — built in, not translated",
      "Covers PDPL data categories natively",
      "Zero manual configuration required",
    ],
  },
  {
    id: "memory",
    label: "Organization Memory",
    icon: Brain,
    title: "Your company's knowledge — permanent, searchable, and permission-aware.",
    body: "Connect your existing knowledge sources — Google Drive, shared folders, CRM systems, employee uploads. Aliph indexes everything and inherits your existing file permissions automatically. Employees only see what they're authorized to. Answers are sourced from your own data first, with citations. When someone leaves, their expertise stays.",
    proofs: [
      "Inherits your existing RBAC — zero admin setup",
      "Source citations on every answer",
      "Knowledge compounds over time — the more your team uses it, the smarter it gets",
    ],
  },
  {
    id: "governance",
    label: "Governance & Auditability",
    icon: Eye,
    title: "Every interaction logged. Every policy enforced. Automatically.",
    body: "Full audit trail on every AI interaction across your organization — who asked, what data was involved, which AI model responded, what was returned, and when. Policies are enforced at the platform level, not by employee discipline. Compliance isn't something your team does — it's something the platform ensures.",
    proofs: [
      "Immutable audit trail — ready for SDAIA review at any moment",
      "Policy enforcement happens before the query is processed",
      "Exportable compliance reports for regulatory submissions",
    ],
  },
  {
    id: "connectivity",
    label: "Governed Model Connectivity",
    icon: Network,
    title: "Access the world's best AI models. On your terms.",
    body: "Connect to Claude, GPT-4, Gemini, and other leading AI models — all through Aliph's governed layer. The platform selects the optimal model for each query type. Every external interaction is protected by the Privacy Shield. Switch or add models without changing anything for your end users.",
    proofs: [
      "Multi-model access — no vendor lock-in",
      "Model selection optimized per query type",
      "New models added without disrupting workflows",
    ],
  },
];

const PlatformLayers = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Desktop: side-by-side tabs */}
      <div className="hidden md:grid md:grid-cols-[30%_70%] gap-0 rounded-xl border border-border overflow-hidden bg-card">
        {/* Left — Tab Navigation */}
        <div className="border-r border-border bg-secondary/50 py-2">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left px-6 py-5 flex items-center gap-3 transition-all relative ${
                  isActive
                    ? "bg-accent/8 text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-r" />
                )}
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-accent" : ""}`} strokeWidth={1.5} />
                <span className="font-body text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right — Content Panel */}
        <div className="p-8 lg:p-10 min-h-[380px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-heading font-bold text-xl lg:text-[22px] text-foreground mb-5 leading-snug">
                {tabs[activeTab].title}
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.65] mb-6">
                {tabs[activeTab].body}
              </p>
              <div className="space-y-3">
                {tabs[activeTab].proofs.map((proof, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="font-body text-[15px] text-foreground">{proof}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden space-y-3">
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = activeTab === i;
          return (
            <div key={tab.id} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setActiveTab(i)}
                className={`w-full text-left px-5 py-4 flex items-center gap-3 transition-all ${
                  isActive ? "bg-accent/8" : ""
                }`}
              >
                {isActive && (
                  <div className="w-[3px] h-5 bg-accent rounded-full shrink-0" />
                )}
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-accent" : "text-muted-foreground"}`} strokeWidth={1.5} />
                <span className={`font-body text-sm ${isActive ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                  {tab.label}
                </span>
              </button>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-2">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-4 leading-snug">
                        {tab.title}
                      </h3>
                      <p className="font-body text-[15px] text-muted-foreground leading-[1.65] mb-5">
                        {tab.body}
                      </p>
                      <div className="space-y-3">
                        {tab.proofs.map((proof, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="font-body text-[15px] text-foreground">{proof}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformLayers;
