import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Database, Eye, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
    {
        id: "privacy",
        icon: Shield,
        title: "Privacy Shield",
        desc: "Protect sensitive information in prompts and outputs—across Arabic and English workflows.",
    },
    {
        id: "memory",
        icon: Database,
        title: "Organization Memory",
        desc: "Capture institutional knowledge with permission-aware access, so learning compounds securely.",
    },
    {
        id: "governance",
        icon: Eye,
        title: "Governance & Auditability",
        desc: "Policy enforcement, admin oversight, and audit trails built into every workflow.",
    },
    {
        id: "connectivity",
        icon: Network,
        title: "Governed Model Connectivity",
        desc: "Use leading AI safely when needed—through one controlled interface.",
    },
];

const PlatformPillars = () => {
    const [activePillar, setActivePillar] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Content & Accordion */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-4xl font-heading font-bold text-navy mb-4">
                                Compliance enforced by design—not by policy documents.
                            </h2>
                            <p className="text-xl text-slate-600">
                                The Control Plane standardizes how AI is used across the enterprise—so adoption scales without chaos.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {pillars.map((pillar, i) => {
                                const isActive = activePillar === i;
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={i}
                                        onClick={() => setActivePillar(i)}
                                        className={`cursor-pointer rounded-xl transition-all duration-300 border ${isActive
                                                ? "bg-navy text-white border-navy shadow-lg"
                                                : "bg-white text-slate-600 border-slate-200 hover:border-navy/30"
                                            }`}
                                    >
                                        <div className="p-6 flex items-start gap-4">
                                            <div className={`mt-1 p-2 rounded-lg transition-colors ${isActive ? "bg-white/10 text-gold" : "bg-slate-100 text-slate-400"
                                                }`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-bold mb-2 ${isActive ? "text-white" : "text-navy"}`}>
                                                    {pillar.title}
                                                </h3>
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-slate-300 leading-relaxed font-body">
                                                                {pillar.desc}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8">
                            <Link to="/security" className="inline-flex items-center gap-2 text-navy font-bold hover:gap-4 transition-all">
                                Security & Compliance <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Dynamic Graphic */}
                    <div className="hidden lg:flex items-center justify-center bg-slate-50 rounded-2xl p-8 border border-slate-200 h-[600px] relative overflow-hidden">

                        {/* Abstract Schematic Background */}
                        <div className="absolute inset-0 grid-pattern opacity-50"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePillar}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative z-10 w-full max-w-sm"
                            >
                                {/* We render a different 'schematic' based on active pillar */}
                                {activePillar === 0 && ( /* Privacy Shield */
                                    <div className="bg-white p-6 rounded-xl border-2 border-navy shadow-xl">
                                        <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                            <span className="text-xs font-bold text-navy uppercase">Privacy Engine</span>
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                                            <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                                            <div className="bg-red-50 p-2 rounded border border-red-100 text-[10px] text-red-600 font-mono mt-4">
                                                Detected: PII (National ID)
                                                <br />Action: Redact
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePillar === 1 && ( /* Org Memory */
                                    <div className="bg-white p-6 rounded-xl border-2 border-gold shadow-xl">
                                        <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                            <span className="text-xs font-bold text-navy uppercase">Knowledge Graph</span>
                                            <Database className="w-4 h-4 text-gold" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="aspect-square bg-slate-50 rounded border border-slate-200 flex items-center justify-center">
                                                    <div className="w-1/2 h-1/2 rounded bg-gold/20"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activePillar === 2 && ( /* Governance */
                                    <div className="bg-white p-6 rounded-xl border-2 border-navy shadow-xl">
                                        <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                            <span className="text-xs font-bold text-navy uppercase">Audit Log Stream</span>
                                            <Eye className="w-4 h-4 text-navy" />
                                        </div>
                                        <div className="font-mono text-[10px] space-y-2 text-slate-500">
                                            <div className="border-l-2 border-emerald-500 pl-2">
                                                <span className="text-navy font-bold">10:42:01</span> User.A accessed Model.GPT4
                                            </div>
                                            <div className="border-l-2 border-red-500 pl-2">
                                                <span className="text-navy font-bold">10:42:05</span> Policy Block: Financial Data
                                            </div>
                                            <div className="border-l-2 border-slate-300 pl-2 opacity-50">...</div>
                                        </div>
                                    </div>
                                )}

                                {activePillar === 3 && ( /* Connectivity */
                                    <div className="bg-white p-6 rounded-xl border-2 border-slate-400 shadow-xl">
                                        <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                            <span className="text-xs font-bold text-navy uppercase">Model Router</span>
                                            <Network className="w-4 h-4 text-slate-600" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-200">
                                                <span className="text-xs font-bold">Local Host</span>
                                                <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1 rounded">Active</span>
                                            </div>
                                            <div className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-200 opacity-50">
                                                <span className="text-xs font-bold">Public API</span>
                                                <Lock className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlatformPillars;
