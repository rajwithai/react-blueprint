import { motion } from "framer-motion";

const stats = [
  { value: "2", label: "Products live & demonstrated" },
  { value: "1,000s", label: "Documents indexed in Organization Memory" },
  { value: "2", label: "Languages — Arabic + English natively" },
  { value: "4", label: "Layers of sovereign architecture deployed" },
  { value: "1", label: "Enterprise pilot deployed & active" },
];

const CredibilityProof = () => {
  return (
    <section className="bg-secondary border-t border-border">
      <div className="container px-4 md:px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-5"
          >
            TRACTION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]"
          >
            Products are built. Deployment is underway.
          </motion.h2>
        </div>

        {/* Traction Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 max-w-5xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <p className="font-heading font-bold text-5xl md:text-[56px] text-foreground mb-2 leading-none">
                {stat.value}
              </p>
              <p className="font-body text-sm md:text-[15px] text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg md:text-xl font-medium text-foreground/80 italic mt-16"
        >
          "This isn't a roadmap. It's what exists today."
        </motion.p>
      </div>
    </section>
  );
};

export default CredibilityProof;
