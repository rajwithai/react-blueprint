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
    bgImage: "/assets/pillar-privacy.jpg",
    accentColor: "from-gold/20 to-amber-600/10",
  },
  {
    id: "memory",
    icon: Database,
    title: "Organization Memory",
    tagline: "Twenty years of expertise. Available in seconds.",
    desc: "Capture institutional knowledge with permission-aware access, so learning compounds securely. Your data stays within your sovereign perimeter.",
    bgImage: "/assets/pillar-memory.jpg",
    accentColor: "from-emerald-500/20 to-teal-600/10",
  },
  {
    id: "governance",
    icon: Eye,
    title: "Governance & Auditability",
    tagline: "Every action logged. Every policy enforced.",
    desc: "Policy enforcement, admin oversight, and audit trails built into every workflow. Every interaction is logged for full compliance and oversight.",
    bgImage: "/assets/pillar-governance.jpg",
    accentColor: "from-amber-500/20 to-orange-600/10",
  },
  {
    id: "connectivity",
    icon: Network,
    title: "Governed Model Connectivity",
    tagline: "Every model. Zero exposure.",
    desc: "Use leading AI models safely when needed—through one controlled interface. Route requests based on sensitivity and cost automatically.",
    bgImage: "/assets/pillar-connectivity.jpg",
    accentColor: "from-cyan-500/20 to-blue-600/10",
  },
];

const PlatformPillars = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="relative min-h-[900px] flex items-center overflow-hidden bg-black text-white">
      {/* Full Section Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${pillars[activePillar].bgImage})`,
            }}
          >
            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            {/* Accent color wash */}
            <div className={`absolute inset-0 bg-gradient-to-br ${pillars[activePillar].accentColor} mix-blend-overlay`} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container px-4 md:px-6 relative z-10 py-24">
        {/* Section Header */}
        <div className="mb-20 max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-heading font-semibold mb-5"
          >
            CONTROL PLANE MODULES
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
            Compliance enforced by design
            <span className="text-slate-500 block mt-2">not by policy documents.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-body">
            The Control Plane standardizes how AI is used across the enterprise—so adoption scales without chaos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {pillars.map((pillar, i) => {
              const isActive = activePillar === i;
              const Icon = pillar.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActivePillar(i)}
                  className={`w-full text-left group flex items-center gap-5 focus:outline-none relative py-4 px-5 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 backdrop-blur-md border border-white/10"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarLine"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isActive ? "bg-gold/20" : "bg-white/5 group-hover:bg-white/10"
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-slate-500 group-hover:text-slate-300"
                    }`} />
                  </div>

                  {/* Text */}
                  <div>
                    <span className={`text-lg font-heading font-bold tracking-tight transition-colors duration-300 block ${
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

            <div className="pt-8 pl-5">
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
          <div className="lg:col-span-8 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-xl"
              >
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-px w-16 bg-gold/40" />
                  <span className="text-gold font-mono text-xs uppercase tracking-[0.2em]">
                    {pillars[activePillar].title}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white leading-snug mb-6">
                  {pillars[activePillar].desc}
                </h3>
                <Link
                  to={`/${pillars[activePillar].id === "privacy" ? "privacy-shield" : pillars[activePillar].id === "memory" ? "organization-memory" : pillars[activePillar].id === "governance" ? "platform" : "global-llm"}`}
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-white/70 hover:text-gold transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;
