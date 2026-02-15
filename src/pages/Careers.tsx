import { CheckCircle2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";

const Careers = () => {
  return (
    <>
      <PageHero
        title="Build sovereign AI from Riyadh."
        subtitle="We're assembling engineers, product builders, and domain experts who believe enterprise AI and data sovereignty are not mutually exclusive."
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6"
          >
            We're building our founding team.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            If you are exceptional at enterprise AI, privacy-preserving systems, Arabic NLP, or GRC automation — we want to hear from you.
          </p>
          <a href="mailto:careers@aliphai.ai" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all">
            <Mail className="h-4 w-4" /> careers@aliphai.ai
          </a>
        </div>
      </Section>

      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground text-center"
        >
          Why Aliph
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            "Category-defining problem at the intersection of AI and regulation.",
            "Be early. Shape the product, the culture, the trajectory.",
            "Build for Vision 2030 and the global sovereign AI movement.",
            "Competitive compensation with meaningful equity.",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-3 items-start"
            >
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-primary-foreground/70 text-sm">{item}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Careers;
