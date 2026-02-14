import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const entityTiles = [
  "Person Names (Arabic & English)",
  "Organizations & Institutions",
  "Locations & Addresses",
  "Financial Data (IBAN, accounts)",
  "Identity Documents (National ID, Iqama, Passport)",
  "Contact Information (phone, email)",
  "Medical Identifiers",
  "Dates & Timestamps",
];

const PrivacyShield = () => {
  return (
    <>
      <HeroSection
        eyebrow="PRIVACY SHIELD"
        title="Your sensitive data never touches an external server. Ever."
        subtitle="Proprietary PII detection for Arabic and English. Automatic masking. Encrypted mapping. Full audit trail. This is the layer that makes global AI safe for regulated enterprise."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      {/* The Idea */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground"
          >
            What if you could use any AI model in the world — and it never knew who you were?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              That is what Privacy Shield does. Before any query reaches an external AI model, every piece of identifiable information is detected and replaced with encrypted tokens. The AI sees the question. It never sees the data. The response returns, tokens are restored, and a complete audit trail is logged. The encrypted mapping expires automatically.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed font-medium">
              No PII is stored externally. No PII is transmitted externally. No exceptions.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* What It Covers */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground"
        >
          Comprehensive detection across Arabic and English.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {entityTiles.map((tile, i) => (
            <motion.div
              key={tile}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass glow-border rounded-xl p-5 text-center"
            >
              <span className="font-heading font-medium text-sm text-primary-foreground">{tile}</span>
            </motion.div>
          ))}
        </div>
        <p className="font-body text-sm text-primary-foreground/50 mt-6 text-center">
          Detection runs in parallel across both languages, including mixed-language queries. Continuously improving.
        </p>
      </Section>

      {/* Before and After */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-center"
        >
          See the difference.
        </motion.h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-muted border border-border p-6"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-heading font-semibold">What you write</p>
            <p className="font-body text-foreground text-sm leading-relaxed">
              "What PDPL penalty applies if we expose <span className="text-amber font-semibold">Ahmed Al-Rashid</span>'s email at <span className="text-amber font-semibold">National Corp</span>?"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-primary/5 border border-primary/20 p-6"
          >
            <p className="text-xs uppercase tracking-wider text-primary mb-3 font-heading font-semibold">What the AI sees</p>
            <p className="font-body text-foreground text-sm leading-relaxed">
              "What PDPL penalty applies if we expose <span className="text-primary font-semibold">[PERSON_1]</span>'s <span className="text-primary font-semibold">[DATA_TYPE_1]</span> at <span className="text-primary font-semibold">[ORG_1]</span>?"
            </p>
          </motion.div>
        </div>
        <p className="font-body text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto">
          The AI responds to the masked query. Privacy Shield restores the original context before delivering the answer. The external model never saw a single piece of real data.
        </p>
      </Section>

      {/* Compliance */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground"
        >
          Built for the world's strictest regulations.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "PDPL", desc: "Data minimization, purpose limitation, storage controls." },
            { title: "GDPR", desc: "Exceeds requirements by architecture." },
            { title: "UAE PDPL", desc: "Same protection, same standard." },
            { title: "SAMA / NCA", desc: "Encryption, audit trails, access controls." },
          ].map((c, i) => (
            <FeatureCard key={c.title} title={c.title} description={c.desc} delay={i * 100} dark />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Protect every query. See Privacy Shield live."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default PrivacyShield;
