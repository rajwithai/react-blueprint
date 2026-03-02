import { motion } from "framer-motion";
import { ShieldAlert, EyeOff, BrainCog } from "lucide-react";

const risks = [
  {
    icon: ShieldAlert,
    title: "Your data crosses borders with every query.",
    desc: "Global AI tools process queries on servers in the US and Europe. Under PDPL, that's a violation — not a risk.",
  },
  {
    icon: EyeOff,
    title: "If SDAIA audits you tomorrow, what do you show them?",
    desc: "No logs. No trail. No record of what data was sent where. That's the reality for most Saudi enterprises using AI today.",
  },
  {
    icon: BrainCog,
    title: "Your best employee's expertise disappears when they leave.",
    desc: "Twenty years of institutional knowledge — regulatory interpretations, client histories, hard-won lessons — walks out the door with every resignation.",
  },
];

const RiskCards = () => {
  return (
    <section className="py-12 md:py-[72px] bg-background">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block section-label text-destructive mb-3"
          >
            The Hidden Risk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="section-headline mb-4"
          >
            Every ungoverned AI query is a liability{" "}
            <span className="text-destructive">you can't see.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-subtext mx-auto"
          >
            Right now, someone in your organization is pasting client contracts into ChatGPT. Someone else is feeding financial projections into Gemini. A third person is asking Copilot about employee performance data. Every query is stored on foreign servers. None of it is logged. And under PDPL, every incident carries penalties up to SAR 5 million.
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
                className="card-std"
              >
                <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center mb-5 text-destructive">
                  <Icon className="card-icon !text-destructive" />
                </div>
                <h3 className="card-title-std mb-2">{risk.title}</h3>
                <p className="card-body-std">{risk.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RiskCards;
