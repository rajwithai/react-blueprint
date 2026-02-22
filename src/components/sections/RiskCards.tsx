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
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            AI is already inside your organization.{" "}
            <span className="text-destructive">It's just not governed.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Teams are drafting contracts, policies, reports, and uploading documents into AI tools. Without a control layer, leaders can't see what data is shared, where it goes, or how to audit usage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {risks.map((risk, i) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border hover:border-destructive/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6 text-destructive">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{risk.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{risk.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RiskCards;