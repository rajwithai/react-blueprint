import { motion } from "framer-motion";
import { Lock, Shield, Eye, Globe, Server, FileCheck } from "lucide-react";
import SplitHero from "@/components/sections/SplitHero";
import TrustBar from "@/components/sections/TrustBar";
import Section from "@/components/sections/Section";
import AlternatingFeature from "@/components/sections/AlternatingFeature";
import ImpactStats from "@/components/sections/ImpactStats";
import MidPageCTA from "@/components/sections/MidPageCTA";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import FeatureCard from "@/components/sections/FeatureCard";
import privacyImg from "@/assets/images/privacy-shield-hero.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";
import heroChatImg from "@/assets/images/hero-chat-ui.jpg";

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
      {/* 1. Split Hero */}
      <SplitHero
        eyebrow="PRIVACY SHIELD"
        title="Your data never leaves. The AI never knows."
        subtitle="Proprietary PII detection for Arabic and English. Automatic masking. Encrypted mapping. Full audit trail. The foundation of everything Aliph does."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "See How It Works", href: "/demo" }}
        trustText="Zero PII transmitted. Ever."
        image={privacyImg}
        imageAlt="Privacy Shield data masking visualization"
      />

      {/* 2. Trust Bar */}
      <TrustBar
        stats={[
          { value: "95%+", label: "NER accuracy" },
          { value: "8+", label: "Entity types detected" },
          { value: "Zero", label: "PII transmitted" },
          { value: "100%", label: "Audit coverage" },
        ]}
      />

      {/* 3. Product Showcase */}
      <ParallaxImage
        src={platformImg}
        alt="Privacy Shield architecture"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
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

      {/* 4. Before/After Demo */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-center text-foreground tracking-tight"
        >
          See the difference.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-10 text-center max-w-xl mx-auto"
        >
          What you write vs. what the AI model receives.
        </motion.p>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <p className="text-xs uppercase tracking-wider text-destructive/70 mb-3 font-heading font-semibold">What you write</p>
            <p className="font-body text-foreground text-sm leading-relaxed">
              "What PDPL penalty applies if we expose <span className="text-accent font-semibold">Ahmed Al-Rashid</span>'s email at <span className="text-accent font-semibold">National Corp</span>?"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-accent/20 bg-accent/5 p-6"
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

      {/* 5. Entity Detection */}
      <Section alabaster>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          DETECTION CAPABILITIES
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

      {/* 6. How It Works */}
      <Section>
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

      {/* 7. Compliance Grid */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground tracking-tight"
        >
          Built for the world's strictest regulations.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard title="PDPL" description="Data minimization. Purpose limitation. Storage controls. Full compliance by architecture." delay={0} />
          <FeatureCard title="GDPR" description="Exceeds requirements. No data processing outside your infrastructure." delay={80} />
          <FeatureCard title="UAE PDPL" description="Same protection standard. Ready for cross-border operations." delay={160} />
          <FeatureCard title="SAMA / NCA" description="Encryption. Audit trails. Access controls. Financial-grade security." delay={240} />
        </div>
      </Section>

      {/* 8. Mid-page CTA */}
      <MidPageCTA
        title="Protect every query."
        subtitle="See Privacy Shield in action with a live demo."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />

      {/* 9. Technical Specs */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Technical specifications.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon={Globe} title="Bilingual NER" description="Custom-trained named entity recognition for Arabic and English with 95%+ accuracy across all entity types." delay={0} />
          <FeatureCard icon={Server} title="On-Premise Processing" description="All PII detection and masking happens within your infrastructure. Zero external transmission of sensitive data." delay={80} />
          <FeatureCard icon={Eye} title="Immutable Audit Trail" description="Every masking operation logged immutably. Full traceability for compliance audits and regulatory review." delay={160} />
        </div>
      </Section>

      {/* 10. Final CTA */}
      <CTABanner
        title="Privacy that scales with your ambition."
        subtitle="No commitment. See Privacy Shield live with your own data."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
};

export default PrivacyShield;
