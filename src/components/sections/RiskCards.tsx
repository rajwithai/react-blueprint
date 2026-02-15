import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, BrainCircuit } from "lucide-react";

const risks = [
    {
        icon: AlertTriangle,
        title: "Data sovereignty risk",
        desc: "Employees paste sensitive text into AI tools every day.",
    },
    {
        icon: FileWarning,
        title: "No auditability",
        desc: "No consistent policies, logs, or oversight across teams.",
    },
    {
        icon: BrainCircuit,
        title: "Knowledge leakage",
        desc: "Institutional know-how spreads across tools and turnover.",
    },
];

const RiskCards = () => {
    return (
        <section className="py-24 bg-midnight relative overflow-hidden">
            {/* Background Risk Line Graphic */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent -translate-y-1/2 md:block hidden animate-pulse"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        AI is already inside your organization. <span className="text-red-500">It’s just not governed.</span>
                    </h2>
                    <p className="text-xl text-slate-400">
                        Teams are drafting contracts, policies, reports, and uploading documents into AI tools. Without a control layer, leaders can’t see what data is shared, where it goes, or how to audit usage.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {risks.map((risk, i) => {
                        const Icon = risk.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="group relative bg-navy-deep p-8 rounded-2xl border border-white/5 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] transition-all duration-300"
                            >
                                {/* Red Alert Gradient on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                                <div className="w-14 h-14 bg-red-900/20 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300 border border-red-900/30 group-hover:border-red-500/50">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{risk.title}</h3>
                                <p className="text-slate-400 leading-relaxed relative z-10">
                                    {risk.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RiskCards;
