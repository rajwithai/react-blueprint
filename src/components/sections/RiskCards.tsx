import { motion } from "framer-motion";
import { ShieldAlert, EyeOff, BrainCog } from "lucide-react";

const risks = [
  {
    icon: ShieldAlert,
    title: "Data leaves silently",
    desc: "Every ChatGPT or Copilot query transmits prompts to foreign servers. Client names, financial figures, contract terms — gone in a keystroke. PDPL penalties reach SAR 5M per violation.",
  },
  {
    icon: EyeOff,
    title: "No visibility into what's shared",
    desc: "You have no audit trail. No log of which employee sent what data to which model. When SDAIA asks for your AI governance records, the answer today is silence.",
  },
  {
    icon: BrainCog,
    title: "Knowledge walks out the door",
    desc: "When your senior compliance lead or partner leaves, every regulatory interpretation, client history, and precedent decision they carried leaves with them. Permanently.",
  },
];

const RiskCards = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-destructive mb-4"
          >
            The Hidden Risk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Every query is a decision.{" "}
            <span className="text-destructive">Most of them happen without you.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Your employees ask AI to summarize contracts, draft emails with client names, analyze financials, and rewrite HR policies. Every one of those queries sends sensitive data to servers outside the Kingdom — with no audit trail, no access control, and no way to know what was shared.
          </motion.p>
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
