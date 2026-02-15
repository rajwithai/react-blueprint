import { motion } from "framer-motion";
import { Lock, Shield } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const entityTiles = [
  "Person Names (Arabic & English)",
  "Organizations & Institutions",
  "Locations & Addresses",
  "Financial Data (IBAN, accounts)",
  "Identity Documents (National ID, Iqama)",
  "Contact Information",
  "Medical Identifiers",
  "Dates & Timestamps",
];

const PrivacyShield = () => {
  return (
    <>
      <PageHero
        eyebrow="PRIVACY SHIELD"
        title="Your data never leaves. The AI never knows."
        subtitle="Proprietary PII detection for Arabic and English. Automatic masking. Encrypted mapping. Full audit trail."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
      />

      {/* The Mechanism */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground tracking-tight"
          >
            Use any AI model in the world.<br />
            <span className="text-muted-foreground">It never knows who you are.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              Before any query reaches an external model, every piece of identifiable information is detected and replaced with encrypted tokens. The AI sees the question. It never sees the data.
            </p>
            <p className="font-body text-foreground font-medium">
              No PII stored externally. No PII transmitted externally. No exceptions.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Entity Detection */}
      <Section dark>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          DETECTION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Comprehensive. Bilingual. Automatic.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {entityTiles.map((tile, i) => (
            <motion.div
              key={tile}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass-card gradient-border-card rounded-xl p-5 text-center"
            >
              <span className="font-heading font-medium text-sm text-foreground/90">{tile}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Before & After */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-center text-foreground tracking-tight"
        >
          See the difference.
        </motion.h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass-card p-6"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-heading font-semibold">What you write</p>
            <p className="font-body text-foreground text-sm leading-relaxed">
              "What PDPL penalty applies if we expose <span className="text-amber font-semibold">Ahmed Al-Rashid</span>'s email at <span className="text-amber font-semibold">National Corp</span>?"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass-card border-primary/20 p-6"
          >
            <p className="text-xs uppercase tracking-wider text-accent mb-3 font-heading font-semibold">What the AI sees</p>
            <p className="font-body text-foreground text-sm leading-relaxed">
              "What PDPL penalty applies if we expose <span className="text-primary font-semibold">[PERSON_1]</span>'s <span className="text-primary font-semibold">[DATA_TYPE_1]</span> at <span className="text-primary font-semibold">[ORG_1]</span>?"
            </p>
          </motion.div>
        </div>
        <p className="font-body text-sm text-muted-foreground mt-6 text-center max-w-xl mx-auto">
          The external model never sees real data. Privacy Shield restores context before delivering the answer.
        </p>
      </Section>

      {/* Compliance */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-foreground tracking-tight"
        >
          Built for the world's strictest regulations.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "PDPL", desc: "Data minimization. Purpose limitation. Storage controls." },
            { title: "GDPR", desc: "Exceeds requirements by architecture." },
            { title: "UAE PDPL", desc: "Same protection. Same standard." },
            { title: "SAMA / NCA", desc: "Encryption. Audit trails. Access controls." },
          ].map((c, i) => (
            <FeatureCard key={c.title} title={c.title} description={c.desc} delay={i * 80} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Protect every query."
        subtitle="See Privacy Shield in action."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
      />
    </>
  );
};

export default PrivacyShield;
