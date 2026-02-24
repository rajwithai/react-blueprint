import { motion } from "framer-motion";
import { Timer, Search, Brain, Shield } from "lucide-react";

const outcomes = [
  {
    icon: Timer,
    title: "Compliance reports in hours, not months.",
    desc: "Your team used to spend weeks compiling PDPL gap analyses. Aliph's agentic AI researches regulations, maps your documents, identifies gaps, and drafts the report — validated before it reaches your desk.",
  },
  {
    icon: Search,
    title: "Ask your entire organization a question. Get an answer in seconds.",
    desc: "AliphChat searches across every document your team has ever created — filtered by your access level, cited with sources. Decisions backed by institutional knowledge, not guesswork.",
  },
  {
    icon: Brain,
    title: "Your senior partner retires. Their expertise doesn't.",
    desc: "Organization Memory captures regulatory interpretations, client histories, and hard-won lessons from every engagement. New team members access decades of knowledge from day one.",
  },
  {
    icon: Shield,
    title: "Scale AI across every department. Governance scales with it.",
    desc: "From 50 users to 5,000 — every employee gets AI access governed by their existing role permissions. No new admin configuration. Deploy on-premise, KSA cloud, or hybrid.",
  },
];

const Outcomes = () => {
  return (
    <section className="py-24 bg-secondary border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-heading font-semibold mb-5"
          >
            WHAT CHANGES FOR YOUR ORGANIZATION
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-[1.1]">
            Stop choosing between speed and compliance.
            <span className="text-muted-foreground block mt-2">You get both.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-accent/30 transition-colors"
            >
              <item.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-xl font-heading font-bold text-foreground mb-2">
            Two products. One sovereign foundation.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Both built on the same four-layer architecture. Both ready for deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Outcomes;
