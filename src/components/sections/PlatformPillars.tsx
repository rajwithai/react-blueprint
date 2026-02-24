import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Database, Eye, Network } from "lucide-react";

const tabs = [
  {
    icon: Shield,
    tabTitle: "Privacy Shield",
    tabSubtitle: "Sensitive data stripped from every query",
    title: "Sensitive data never leaves. Automatically.",
    body: "Every query to external AI models is scanned. Names, IDs, financial data, and company information are stripped and replaced with encrypted tokens. The AI gets the question. It never gets the context.",
  },
  {
    icon: Database,
    tabTitle: "Organization Memory",
    tabSubtitle: "Your knowledge, permanent and searchable",
    title: "Your organization's knowledge — permanent and searchable.",
    body: "Connect Google Drive, shared folders, and employee uploads. Aliph indexes everything, inherits your existing file permissions, and answers questions from your own data first. When someone leaves, their knowledge doesn't.",
  },
  {
    icon: Eye,
    tabTitle: "Governance & Auditability",
    tabSubtitle: "Every action logged. Every policy enforced.",
    title: "Every interaction logged. Every source cited.",
    body: "Full audit trail — who asked what, which data was involved, which AI model responded, and where the answer came from. Ready for SDAIA review at any moment. Not because you prepared — because the system always is.",
  },
  {
    icon: Network,
    tabTitle: "Governed Model Connectivity",
    tabSubtitle: "Access to global AI, safely",
    title: "Your AI runs where your data lives.",
    body: "Deploy on-premise, on Azure KSA region, or hybrid. The vast majority of queries resolve within your infrastructure. External AI is only used when needed — and only after the Privacy Shield has done its work.",
  },
];

const PlatformPillars = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];
  const ActiveIcon = current.icon;

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-heading font-semibold mb-5"
          >
            HOW IT ACTUALLY WORKS
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Compliance enforced by design,
            <span className="text-muted-foreground block mt-2">not by policy documents.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            Most platforms add compliance as a feature. Aliph makes it impossible to operate non-compliantly. Sensitive information is detected in prompts and outputs — across Arabic and English workflows. No manual configuration. No human error. No gap between policy and practice.
          </p>
        </div>

        {/* Tabbed component — desktop: side-by-side, mobile: accordion */}
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-12 gap-0 rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          {/* Left tabs — 30% */}
          <div className="md:col-span-4 border-r border-border bg-secondary/30">
            {tabs.map((tab, i) => {
              const isActive = active === i;
              const Icon = tab.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-start gap-4 px-6 py-5 transition-all duration-200 relative border-b border-border last:border-b-0 ${
                    isActive
                      ? "bg-accent/5"
                      : "hover:bg-secondary/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="pillarTabAccent"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isActive ? "bg-accent/10" : "bg-muted"
                  }`}>
                    <Icon className={`w-4.5 h-4.5 transition-colors ${
                      isActive ? "text-accent" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div>
                    <span className={`text-sm font-heading font-bold block transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {tab.tabTitle}
                    </span>
                    <span className={`text-xs font-body block mt-0.5 transition-colors ${
                      isActive ? "text-muted-foreground" : "text-muted-foreground/60"
                    }`}>
                      {tab.tabSubtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right content — 70% */}
          <div className="md:col-span-8 p-10 lg:p-14 flex items-center min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 leading-snug">
                  {current.title}
                </h3>
                <p className="text-base text-muted-foreground font-body leading-relaxed max-w-xl">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden space-y-3">
          {tabs.map((tab, i) => {
            const isOpen = active === i;
            const Icon = tab.icon;
            return (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-3 px-5 py-4 transition-colors ${
                    isOpen ? "bg-accent/5" : ""
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    isOpen ? "bg-accent/10" : "bg-muted"
                  }`}>
                    <Icon className={`w-4.5 h-4.5 ${isOpen ? "text-accent" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <span className={`text-sm font-heading font-bold block ${isOpen ? "text-foreground" : "text-muted-foreground"}`}>
                      {tab.tabTitle}
                    </span>
                    <span className="text-xs text-muted-foreground/60 font-body">{tab.tabSubtitle}</span>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-border">
                        <h3 className="text-lg font-heading font-bold text-foreground mb-2">{tab.title}</h3>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">{tab.body}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;
