import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Database, Eye, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    id: "privacy",
    icon: Shield,
    title: "Privacy Shield",
    tagline: "Your data never leaves. The AI never knows.",
    desc: "Protect sensitive information in prompts and outputs—across Arabic and English workflows. Our engine detects PII and sovereign data boundaries in real-time.",
    features: ["Runtime PII detection", "Arabic & English support", "Data masking & minimization", "Sovereign boundary enforcement"],
    accentHsl: "36 92% 38%", // gold
  },
  {
    id: "memory",
    icon: Database,
    title: "Organization Memory",
    tagline: "Twenty years of expertise. Available in seconds.",
    desc: "Capture institutional knowledge with permission-aware access, so learning compounds securely. Your data stays within your sovereign perimeter.",
    features: ["Structured knowledge capture", "Permission-aware retrieval", "Context persistence", "Zero external exposure"],
    accentHsl: "160 60% 40%", // teal
  },
  {
    id: "governance",
    icon: Eye,
    title: "Governance & Auditability",
    tagline: "Every action logged. Every policy enforced.",
    desc: "Policy enforcement, admin oversight, and audit trails built into every workflow. Every interaction is logged for full compliance and oversight.",
    features: ["Complete audit trails", "Policy enforcement engine", "Admin oversight dashboards", "Compliance reporting"],
    accentHsl: "28 80% 52%", // amber
  },
  {
    id: "connectivity",
    icon: Network,
    title: "Governed Model Connectivity",
    tagline: "Every model. Zero exposure.",
    desc: "Use leading AI models safely when needed—through one controlled interface. Route requests based on sensitivity and cost automatically.",
    features: ["Private model routing", "External model gating", "Sensitivity-based routing", "Cost-aware orchestration"],
    accentHsl: "200 70% 50%", // cyan
  },
];

const PlatformPillars = () => {
  const [activePillar, setActivePillar] = useState(0);
  const active = pillars[activePillar];
  const ActiveIcon = active.icon;

  return (
    <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-heading font-semibold mb-5"
          >
            CONTROL PLANE MODULES
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Compliance enforced by design
            <span className="text-slate-500 block mt-2">not by policy documents.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-body">
            The Control Plane standardizes how AI is used across the enterprise—so adoption scales without chaos.
          </p>
        </div>

        {/* Main layout: tabs left, content right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Tab Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {pillars.map((pillar, i) => {
              const isActive = activePillar === i;
              const Icon = pillar.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActivePillar(i)}
                  className={`w-full text-left group flex items-center gap-4 focus:outline-none relative py-4 px-5 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.08] border border-white/10"
                      : "hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillarLine"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-gold/20" : "bg-white/5 group-hover:bg-white/10"
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-slate-500 group-hover:text-slate-300"
                    }`} />
                  </div>
                  <div>
                    <span className={`text-base font-heading font-bold tracking-tight transition-colors duration-300 block ${
                      isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                    }`}>
                      {pillar.title}
                    </span>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-xs text-slate-400 font-body block mt-0.5"
                      >
                        {pillar.tagline}
                      </motion.span>
                    )}
                  </div>
                </button>
              );
            })}

            <div className="pt-6 pl-5">
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 text-gold font-heading font-semibold hover:gap-4 transition-all text-sm uppercase tracking-wider group"
              >
                Explore the Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Content Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden"
              >
                {/* Top: Abstract geometric header */}
                <div className="relative h-48 md:h-56 overflow-hidden" style={{
                  background: `linear-gradient(135deg, hsl(${active.accentHsl} / 0.15), hsl(${active.accentHsl} / 0.05), transparent)`,
                }}>
                  {/* Geometric abstract pattern */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
                    {/* Grid lines */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line key={`v${i}`} x1={i * 70} y1="0" x2={i * 70} y2="300"
                        stroke={`hsl(${active.accentHsl} / 0.08)`} strokeWidth="1" />
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <line key={`h${i}`} x1="0" y1={i * 55} x2="800" y2={i * 55}
                        stroke={`hsl(${active.accentHsl} / 0.08)`} strokeWidth="1" />
                    ))}
                    {/* Accent circles at intersections */}
                    <circle cx="350" cy="120" r="60" fill="none" stroke={`hsl(${active.accentHsl} / 0.2)`} strokeWidth="1.5" />
                    <circle cx="350" cy="120" r="30" fill={`hsl(${active.accentHsl} / 0.08)`} stroke={`hsl(${active.accentHsl} / 0.3)`} strokeWidth="1" />
                    <circle cx="560" cy="80" r="40" fill="none" stroke={`hsl(${active.accentHsl} / 0.12)`} strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="210" cy="200" r="25" fill="none" stroke={`hsl(${active.accentHsl} / 0.15)`} strokeWidth="1" />
                    {/* Connection lines */}
                    <line x1="350" y1="120" x2="560" y2="80" stroke={`hsl(${active.accentHsl} / 0.15)`} strokeWidth="1" strokeDasharray="6 3" />
                    <line x1="210" y1="200" x2="350" y2="120" stroke={`hsl(${active.accentHsl} / 0.12)`} strokeWidth="1" strokeDasharray="6 3" />
                    {/* Small node dots */}
                    <circle cx="140" cy="60" r="3" fill={`hsl(${active.accentHsl} / 0.4)`} />
                    <circle cx="490" cy="200" r="3" fill={`hsl(${active.accentHsl} / 0.3)`} />
                    <circle cx="680" cy="160" r="3" fill={`hsl(${active.accentHsl} / 0.25)`} />
                    <circle cx="280" cy="50" r="2" fill={`hsl(${active.accentHsl} / 0.3)`} />
                    <circle cx="620" cy="240" r="2" fill={`hsl(${active.accentHsl} / 0.2)`} />
                  </svg>

                  {/* Centered icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ background: `hsl(${active.accentHsl} / 0.15)`, border: `1px solid hsl(${active.accentHsl} / 0.3)` }}>
                      <ActiveIcon className="w-10 h-10" style={{ color: `hsl(${active.accentHsl})` }} />
                    </div>
                  </div>

                  {/* Layer badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: `hsl(${active.accentHsl} / 0.15)`, color: `hsl(${active.accentHsl})`, border: `1px solid hsl(${active.accentHsl} / 0.2)` }}>
                    Layer {activePillar + 1}
                  </div>
                </div>

                {/* Bottom: Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-10" style={{ background: `hsl(${active.accentHsl} / 0.4)` }} />
                    <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: `hsl(${active.accentHsl})` }}>
                      {active.title}
                    </span>
                  </div>

                  <p className="text-xl md:text-2xl font-heading font-semibold text-white leading-snug mb-8">
                    {active.desc}
                  </p>

                  {/* Feature list */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {active.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `hsl(${active.accentHsl})` }} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/${active.id === "privacy" ? "privacy-shield" : active.id === "memory" ? "organization-memory" : active.id === "governance" ? "platform" : "global-llm"}`}
                    className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-white/70 hover:text-gold transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;
