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
    <section className="bg-[#F9FAFB] py-14 md:py-[56px]">
      <div className="container px-6">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            TRACTION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-headline"
          >
            Products are built. Deployment is underway.
          </motion.h2>
        </div>

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
              <p className="stat-number mb-2">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center section-subtext italic mt-12 mx-auto"
        >
          "This isn't a roadmap. It's what exists today."
        </motion.p>
      </div>
    </section>
  );
};

export default CredibilityProof;
