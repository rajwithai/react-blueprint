import { motion } from "framer-motion";
import { Timer, ShieldAlert, BookOpen, FileCheck } from "lucide-react";

const outcomes = [
    {
        icon: Timer,
        title: "Accelerate compliance deliverables",
        desc: "Analysis, reports, remediation-ready outputs.",
    },
    {
        icon: ShieldAlert,
        title: "Reduce exposure from unmanaged AI use",
        desc: "Govern prompts, documents, and outputs.",
    },
    {
        icon: BookOpen,
        title: "Preserve institutional knowledge",
        desc: "Permission-aware organization memory.",
    },
    {
        icon: FileCheck,
        title: "Be audit-ready by default",
        desc: "Logs, oversight, governance built-in.",
    },
];

const Outcomes = () => {
    return (
        <section className="py-24 bg-navy-deep text-white border-t border-white/5">
            <div className="container px-4 md:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold mb-4">Move faster—stay governable.</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="w-8 h-8 text-gold mb-4" />
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Outcomes;
