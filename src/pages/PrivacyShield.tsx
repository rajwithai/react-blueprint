import { motion } from "framer-motion";
import { Lock, Shield, Eye, FileCheck, Globe, Server } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import privacyImg from "@/assets/images/privacy-shield-hero.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";

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

      {/* Parallax Hero */}
      <ParallaxImage
        src={privacyImg}
        alt="Privacy Shield data protection"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
      />

      {/* Section 1: The Mechanism */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground tracking-tight"
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

      {/* Section 2: Entity Detection */}
      <Section alabaster>
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
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
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
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <span className="font-heading font-medium text-sm text-foreground">{tile}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 3: Before & After */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-center text-foreground tracking-tight"
        >
          See the difference.
        </motion.h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-heading font-semibold">What you write</p>
            <p className="font-body text-foreground text-sm leading-relaxed">
              "What PDPL penalty applies if we expose <span className="text-accent font-semibold">Ahmed Al-Rashid</span>'s email at <span className="text-accent font-semibold">National Corp</span>?"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-card p-6"
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

      {/* Parallax Break */}
      <ParallaxImage
        src={platformImg}
        alt="Aliph four-layer architecture"
        className="h-[40vh] md:h-[50vh]"
        speed={0.3}
        overlay
        overlayOpacity={0.25}
      >
        <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            Privacy is not a feature. It's the architecture.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 4: How It Works */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight text-center"
        >
          Three steps. Zero exposure.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Detect", desc: "Every query is scanned for PII in Arabic and English. Names, IDs, financial data, medical records — all identified automatically." },
            { step: "02", title: "Mask", desc: "Sensitive entities are replaced with encrypted tokens. The mapping is stored locally. The AI model receives a clean, anonymized query." },
            { step: "03", title: "Restore", desc: "When the AI responds, Privacy Shield re-maps tokens to real data. The user sees a complete answer. The AI never saw the real data." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">{s.step}</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 5: Compliance */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground tracking-tight"
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

      {/* Section 6: Technical specs */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Technical specifications.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Globe, title: "Bilingual NER", desc: "Custom-trained named entity recognition for Arabic and English with 95%+ accuracy." },
            { icon: Server, title: "On-Premise Processing", desc: "All PII detection and masking happens within your infrastructure. Zero external transmission." },
            { icon: Eye, title: "Audit Trail", desc: "Every masking operation logged immutably. Full traceability for compliance audits." },
          ].map((spec, i) => (
            <FeatureCard key={spec.title} icon={spec.icon} title={spec.title} description={spec.desc} delay={i * 80} />
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
