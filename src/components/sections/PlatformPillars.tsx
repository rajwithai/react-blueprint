import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Database, Eye, Network, ArrowRight, Lock, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
    {
        id: "privacy",
        icon: Shield,
        title: "Privacy Shield",
        desc: "Protect sensitive information in prompts and outputs—across Arabic and English workflows. Our engine detects PII and sovereign data boundaries in real-time.",
        bgImage: "/assets/privacy.png",
    },
    {
        id: "memory",
        icon: Database,
        title: "Organization Memory",
        desc: "Capture institutional knowledge with permission-aware access, so learning compounds securely. Your data stays within your sovereign perimeter.",
        bgImage: null,
    },
    {
        id: "governance",
        icon: Eye,
        title: "Governance & Auditability",
        desc: "Policy enforcement, admin oversight, and audit trails built into every workflow. Every interaction is logged for full compliance and oversight.",
        bgImage: null,
    },
    {
        id: "connectivity",
        icon: Network,
        title: "Governed Model Connectivity",
        desc: "Use leading AI models safely when needed—through one controlled interface. Route requests based on sensitivity and cost automatically.",
        bgImage: null,
    },
];

const PlatformPillars = () => {
    const [activePillar, setActivePillar] = useState(0);

    return (
        <section className="relative min-h-[850px] flex items-center overflow-hidden bg-black text-white">

            {/* --- FULL SECTION BACKGROUND TRANSITION --- */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePillar}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: pillars[activePillar].bgImage
                                ? `url(${pillars[activePillar].bgImage})`
                                : undefined,
                            backgroundColor: '#000000' // Fallback to black
                        }}
                    >
                        {/* Cinematic Gradient Overlay: From black (left) to transparent (middle/right) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent w-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-40 bottom-0" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="container px-4 md:px-6 relative z-10 py-24">
                <div className="mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
                        Compliance enforced by design<br />
                        <span className="text-slate-500 block mt-2">not by policy documents.</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        The Control Plane standardizes how AI is used across the enterprise—so adoption scales without chaos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Minimalist Navigation */}
                    <div className="lg:col-span-4 space-y-6">
                        {pillars.map((pillar, i) => {
                            const isActive = activePillar === i;
                            const Icon = pillar.icon;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setActivePillar(i)}
                                    // Added explicit height and relative positioning for better alignment
                                    className="w-full text-left group flex items-center gap-6 focus:outline-none relative py-2"
                                >
                                    {/* Vertical Indicator Line - Positioned to the left of the icon now */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePillarLine"
                                            className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-gold rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    {/* Icon */}
                                    <div className={`transition-colors duration-300 ${isActive ? "text-gold" : "text-slate-600 group-hover:text-slate-400"}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    {/* Text */}
                                    <div className="relative">
                                        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>
                                            {pillar.title}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}

                        <div className="pt-12 pl-0">
                            <Link to="/security" className="inline-flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all text-sm uppercase tracking-wide">
                                Security & Compliance <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Clean Description (Floating on Image) */}
                    <div className="lg:col-span-8 lg:pl-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePillar}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="max-w-xl"
                            >
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="h-px w-12 bg-gold/50"></div>
                                    <span className="text-gold font-mono text-sm uppercase tracking-widest">
                                        {pillars[activePillar].title} Module
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-light text-white leading-snug mb-6 drop-shadow-xl">
                                    {pillars[activePillar].desc}
                                </h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};
// Removed internal Graphic components (PrivacyGraphic, MemoryGraphic, etc.) as they are no longer used.
export default PlatformPillars;
