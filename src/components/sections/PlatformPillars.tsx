import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Database, Eye, Network, ArrowRight, Lock, Brain, FileSearch, Server } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    id: "privacy",
    icon: Shield,
    title: "Privacy Shield",
    tagline: "Your data never leaves. The AI never knows.",
    desc: "Protect sensitive information in prompts and outputs—across Arabic and English workflows. Our engine detects PII and sovereign data boundaries in real-time.",
    features: ["Runtime PII detection", "Arabic & English support", "Data masking & minimization", "Sovereign boundary enforcement"],
  },
  {
    id: "memory",
    icon: Database,
    title: "Organization Memory",
    tagline: "Twenty years of expertise. Available in seconds.",
    desc: "Capture institutional knowledge with permission-aware access, so learning compounds securely. Your data stays within your sovereign perimeter.",
    features: ["Structured knowledge capture", "Permission-aware retrieval", "Context persistence", "Zero external exposure"],
  },
  {
    id: "governance",
    icon: Eye,
    title: "Governance & Auditability",
    tagline: "Every action logged. Every policy enforced.",
    desc: "Policy enforcement, admin oversight, and audit trails built into every workflow. Every interaction is logged for full compliance and oversight.",
    features: ["Complete audit trails", "Policy enforcement engine", "Admin oversight dashboards", "Compliance reporting"],
  },
  {
    id: "connectivity",
    icon: Network,
    title: "Governed Model Connectivity",
    tagline: "Every model. Zero exposure.",
    desc: "Use leading AI models safely when needed—through one controlled interface. Route requests based on sensitivity and cost automatically.",
    features: ["Private model routing", "External model gating", "Sensitivity-based routing", "Cost-aware orchestration"],
  },
];

const rightFeatures = [
  {
    icon: Lock,
    title: "Sensitive data never leaves. Automatically.",
    desc: "Every query to external AI models is scanned. Names, IDs, financial data, and company information are stripped and replaced with encrypted tokens. The AI gets the question. It never gets the context.",
  },
  {
    icon: Brain,
    title: "Your organization's knowledge — permanent and searchable.",
    desc: "Connect Google Drive, shared folders, and employee uploads. Aliph indexes everything, inherits your existing file permissions, and answers questions from your own data first. When someone leaves, their knowledge doesn't.",
  },
  {
    icon: FileSearch,
    title: "Every interaction logged. Every source cited.",
    desc: "Full audit trail — who asked what, which data was involved, which AI model responded, and where the answer came from. Ready for SDAIA review at any moment. Not because you prepared — because the system always is.",
  },
  {
    icon: Server,
    title: "Your AI runs where your data lives.",
    desc: "Deploy on-premise, on Azure KSA region, or hybrid. The vast majority of queries resolve within your infrastructure. External AI is only used when needed — and only after the Privacy Shield has done its work.",
  },
];

const regulations = [
  { name: "PDPL", desc: "Personal data protection and cross-border transfer compliance." },
  { name: "SAMA", desc: "Financial sector cybersecurity and data governance requirements." },
  { name: "NCA", desc: "National cybersecurity controls and critical infrastructure protection." },
  { name: "CMA", desc: "Capital markets regulatory compliance and reporting standards." },
  { name: "CBAHI", desc: "Healthcare data protection and patient privacy — coming H2 2026." },
];

const PlatformPillars = () => {
  const [activePillar, setActivePillar] = useState(0);
  const active = pillars[activePillar];
  const ActiveIcon = active.icon;

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
            Most platforms add compliance as a feature. Aliph makes it impossible to operate non-compliantly. Sensitive information is detected in prompts and outputs — across Arabic and English workflows. Our engine detects PII and sovereign data boundaries in real time. No manual configuration. No human error. No gap between policy and practice.
          </p>
        </div>

        {/* Two-column: Left UI mockup + Right features */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left side — keep existing UI mockup */}
          <div className="lg:col-span-5">
            <div className="space-y-2 mb-6">
              {pillars.map((pillar, i) => {
                const isActive = activePillar === i;
                const Icon = pillar.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActivePillar(i)}
                    className={`w-full text-left group flex items-center gap-4 focus:outline-none relative py-4 px-5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-secondary border border-border"
                        : "hover:bg-secondary/50 border border-transparent"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePillarLine"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive ? "bg-accent/10" : "bg-secondary group-hover:bg-muted"
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground"
                      }`} />
                    </div>
                    <div>
                      <span className={`text-base font-heading font-bold tracking-tight transition-colors duration-300 block ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {pillar.title}
                      </span>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-xs text-muted-foreground font-body block mt-0.5"
                        >
                          {pillar.tagline}
                        </motion.span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active pillar detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="relative h-48 md:h-56 overflow-hidden bg-secondary">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line key={`v${i}`} x1={i * 70} y1="0" x2={i * 70} y2="300"
                        stroke="hsl(var(--border))" strokeWidth="1" />
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <line key={`h${i}`} x1="0" y1={i * 55} x2="800" y2={i * 55}
                        stroke="hsl(var(--border))" strokeWidth="1" />
                    ))}
                    <circle cx="350" cy="120" r="60" fill="none" stroke="hsl(var(--accent) / 0.2)" strokeWidth="1.5" />
                    <circle cx="350" cy="120" r="30" fill="hsl(var(--accent) / 0.05)" stroke="hsl(var(--accent) / 0.3)" strokeWidth="1" />
                    <circle cx="560" cy="80" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="210" cy="200" r="25" fill="none" stroke="hsl(var(--accent) / 0.15)" strokeWidth="1" />
                    <line x1="350" y1="120" x2="560" y2="80" stroke="hsl(var(--accent) / 0.15)" strokeWidth="1" strokeDasharray="6 3" />
                    <line x1="210" y1="200" x2="350" y2="120" stroke="hsl(var(--accent) / 0.12)" strokeWidth="1" strokeDasharray="6 3" />
                    <circle cx="140" cy="60" r="3" fill="hsl(var(--accent) / 0.4)" />
                    <circle cx="490" cy="200" r="3" fill="hsl(var(--accent) / 0.3)" />
                    <circle cx="680" cy="160" r="3" fill="hsl(var(--accent) / 0.25)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-accent/10 border border-accent/20">
                      <ActiveIcon className="w-10 h-10 text-accent" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent border border-accent/20">
                    Layer {activePillar + 1}
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-10 bg-accent/40" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {active.title}
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-heading font-semibold text-foreground leading-snug mb-8">
                    {active.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {active.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/${active.id === "privacy" ? "privacy-shield" : active.id === "memory" ? "organization-memory" : active.id === "governance" ? "platform" : "global-llm"}`}
                    className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-muted-foreground hover:text-accent transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side — Four features */}
          <div className="lg:col-span-7 space-y-6">
            {rightFeatures.map((feat, i) => {
              const FeatIcon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FeatIcon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">{feat.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom row — Regulatory frameworks */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-heading font-semibold mb-8 text-center"
          >
            REGULATORY FRAMEWORKS MAPPED
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {regulations.map((reg, i) => (
              <motion.div
                key={reg.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border bg-card p-5 text-center"
              >
                <span className="font-heading font-bold text-foreground text-lg block mb-1">{reg.name}</span>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{reg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;
