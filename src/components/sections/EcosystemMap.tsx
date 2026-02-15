import { motion } from "framer-motion";
import { Layers, Shield, Database, Activity, Building2, Heart, Briefcase, Network, Landmark, Server, Cpu, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const EcosystemMap = () => {
    const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

    const industries = [
        { id: "finance", label: "Financial Services", icon: Building2, products: ["grc", "chat"] },
        { id: "health", label: "Healthcare", icon: Heart, products: ["chat"] },
        { id: "pro", label: "Professional Services", icon: Briefcase, products: ["grc"] },
        { id: "conglomerates", label: "Conglomerates", icon: Network, products: ["grc", "chat"] },
        { id: "gov", label: "PIF Portfolio & Government", icon: Landmark, products: ["grc", "chat"] },
    ];

    const products = [
        { id: "grc", label: "Aliph GRC Platform", desc: "Governance & Risk" },
        { id: "chat", label: "AliphChat", desc: "Enterprise Assistant" },
    ];

    const modules = [
        { label: "Sovereign Arch", icon: Server },
        { label: "Privacy Shield", icon: Lock },
        { label: "Org Memory", icon: Database },
        { label: "Audit Logs", icon: Activity }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            {/* Background Grid for technical feel */}
            <div className="absolute inset-0 grid-pattern-dense opacity-50 pointer-events-none"></div>

            <div className="container px-4 md:px-6 text-center relative z-10">

                <div className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
                        One sovereign foundation. Every workflow. Every industry.
                    </h2>
                    <p className="text-xl text-slate-600">
                        Aliph’s Control Plane powers multiple products and deployments—so governance, privacy, and organization memory stay consistent across all use cases.
                    </p>
                </div>

                {/* 3-Tier Technical Diagram */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Connecting Lines (SVG Overlay) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                        {/* Central Spine */}
                        <motion.path
                            d="M512 100 V 500"
                            stroke="#cbd5e1"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        />
                        {/* Branch to Products */}
                        <path d="M512 250 H 300 V 320" stroke="#cbd5e1" strokeWidth="1" fill="none" />
                        <path d="M512 250 H 724 V 320" stroke="#cbd5e1" strokeWidth="1" fill="none" />
                    </svg>

                    {/* Tier 1: Control Plane (Top - The Core) */}
                    <div className="mb-16 relative z-10">
                        <div className="inline-block bg-navy text-white px-6 py-2 rounded-t-lg font-mono text-xs tracking-widest font-bold uppercase border-b border-white/10">
                            Tier 1: Aliph Control Plane
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-navy rounded-xl p-6 shadow-xl max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 relative"
                        >
                            {/* Connector Nodes */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-navy border-4 border-white"></div>

                            {modules.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                                        <Icon className="w-5 h-5 text-navy/70" />
                                        <span className="text-xs font-bold text-navy uppercase">{item.label}</span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>


                    {/* Tier 2: Products (Middle - The Application Layer) */}
                    <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-16 relative z-10">
                        {products.map((prod, i) => (
                            <motion.div
                                key={prod.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className={`bg-white p-1 rounded-xl shadow-lg border relative group
                    ${hoveredIndustry && industries.find(ind => ind.id === hoveredIndustry)?.products.includes(prod.id)
                                        ? "border-gold ring-2 ring-gold/20"
                                        : "border-slate-200"}`}
                            >
                                {/* Top Connector */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 border-2 border-white group-hover:bg-gold transition-colors"></div>

                                <div className="bg-slate-50 p-6 rounded-lg h-full flex flex-col items-center">
                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2">Product Module 0{i + 1}</span>
                                    <h3 className="text-lg font-bold text-navy mb-1">{prod.label}</h3>
                                    <p className="text-xs text-slate-500">{prod.desc}</p>
                                </div>

                                {/* Bottom Connector */}
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 border-2 border-white group-hover:bg-gold transition-colors"></div>
                            </motion.div>
                        ))}
                    </div>


                    {/* Tier 3: Industry Deployments (Bottom - The Endpoints) */}
                    <div className="relative z-10">
                        <div className="inline-block bg-slate-200 text-slate-600 px-4 py-1 rounded-full font-mono text-[10px] tracking-widest font-bold uppercase mb-6">
                            Tier 3: Active Deployments
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {industries.map((ind) => {
                                const Icon = ind.icon;
                                return (
                                    <motion.button
                                        key={ind.id}
                                        onMouseEnter={() => setHoveredIndustry(ind.id)}
                                        onMouseLeave={() => setHoveredIndustry(null)}
                                        whileHover={{ y: -5 }}
                                        className="bg-white px-5 py-3 rounded border border-slate-300 shadow-sm flex items-center gap-3 hover:border-navy hover:shadow-lg transition-all relative"
                                    >
                                        {/* Top Connector Helper */}
                                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-300"></div>

                                        <Icon className="w-4 h-4 text-slate-500" />
                                        <span className="text-sm font-semibold text-navy">{ind.label}</span>
                                    </motion.button>
                                )
                            })}
                        </motion.div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 max-w-xl mx-auto">
                    <Link to="/platform" className="inline-flex items-center gap-2 text-navy font-bold hover:gap-4 transition-all text-sm uppercase tracking-wider">
                        Explore Full Architecture <Layers className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default EcosystemMap;
