import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ALIPH"
        title="Private Intelligence. Collective Wisdom."
        subtitle="We build the infrastructure layer that makes AI safe for enterprise — so organizations never have to choose between intelligence and sovereignty."
      />

      {/* Mission */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8"
          >
            The choice shouldn't exist.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg text-muted-foreground leading-relaxed"
          >
            Every organization deserves the world's best AI. None should sacrifice data sovereignty to access it. Aliph exists to eliminate this tradeoff — permanently. We are the controlled adoption layer between enterprise data and global AI, built for the most regulated markets on earth.
          </motion.p>
        </div>
      </Section>

      {/* What We Are */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground"
          >
            What we are.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-primary-foreground/70 leading-relaxed text-lg"
          >
            A sovereign AI platform company. Not a chatbot. Not a consulting firm. Not a competitor to the AI labs or the regulators. We are the layer that makes their ecosystems safe for enterprise. Built in Riyadh. Designed for the world.
          </motion.p>
        </div>
      </Section>

      {/* Vision 2030 */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6"
          >
            Aligned with the Kingdom's AI ambitions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            Aliph is purpose-built for Saudi Arabia's AI moment. We are aligned with SDAIA's mandate for responsible AI. Designed for the HUMAIN ecosystem. Committed to making the Kingdom a global leader in sovereign AI infrastructure.
          </motion.p>
        </div>
      </Section>

      {/* Company Details */}
      <Section dark>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Legal entity", value: "Aliph Solutions" },
            { label: "Headquarters", value: "Riyadh, Kingdom of Saudi Arabia" },
            { label: "Founded", value: "2024" },
            { label: "Website", value: "aliphai.ai" },
          ].map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glow-border rounded-xl p-6"
            >
              <p className="font-body text-sm text-primary-foreground/50 mb-1">{d.label}</p>
              <p className="font-heading font-semibold text-primary-foreground">{d.value}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="See what we've built."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default About;
