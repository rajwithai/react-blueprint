import { Link } from "react-router-dom";
import { Shield, Lock, Globe2, FileCheck, Eye } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";

const steps = [
  "User submits a query containing sensitive data.",
  "Privacy Shield scans for PII — names, organizations, ID numbers, financial data, contact information.",
  "All detected entities are replaced with anonymized tokens.",
  "An encrypted mapping between tokens and original values is stored temporarily.",
  "Only the sanitized query reaches the external AI model.",
  "Response returns. Tokens are restored to original values. Full audit trail logged.",
  "Encrypted mapping auto-expires. No residual data.",
];

const entityTypes = [
  { category: "Person Names", examples: "Full names in Arabic and English, including titles and honorifics" },
  { category: "Organizations", examples: "Company names, government bodies, institutions" },
  { category: "Locations", examples: "Addresses, cities, landmarks, regions" },
  { category: "Financial Data", examples: "IBAN numbers, account numbers, transaction amounts" },
  { category: "Identity Documents", examples: "National ID, Iqama, passport numbers" },
  { category: "Contact Information", examples: "Phone numbers, email addresses, URLs" },
  { category: "Medical Data", examples: "Patient identifiers, diagnosis references" },
  { category: "Temporal Data", examples: "Dates of birth, appointment dates" },
];

const PrivacyShield = () => {
  const { ref, isInView } = useInView();

  return (
    <>
      <HeroSection
        eyebrow="PRIVACY SHIELD"
        title="Your data never leaves. Ever."
        subtitle="Aliph's proprietary Privacy Shield automatically detects and masks all personally identifiable information before any data reaches external AI models. High-accuracy detection for both Arabic and English. Encrypted. Auditable. Automatic."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      {/* How It Works */}
      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12">How It Works</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <div key={i} ref={i === 0 ? ref : undefined} className={`flex gap-4 items-start ${isInView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-sm">{i + 1}</div>
              <p className="font-body text-muted-foreground pt-1">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Detect */}
      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground">What We Detect</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {entityTypes.map((e, i) => (
            <FeatureCard key={e.category} title={e.category} description={e.examples} delay={i * 80} dark />
          ))}
        </div>
      </Section>

      {/* Bilingual */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6">Bilingual by Design</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Unlike global privacy tools built for English-only environments, Aliph's Privacy Shield was engineered from day one for Arabic and English — including mixed-language queries where both languages appear in the same sentence. Separate detection systems run in parallel for each language, with results merged and deduplicated.
          </p>
        </div>
      </Section>

      {/* Live Example */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground text-center">Live Example</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
              <p className="text-xs uppercase tracking-wider text-primary mb-3 font-heading font-semibold">Before Masking</p>
              <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
                "What PDPL penalty applies if we expose <span className="text-amber">Ahmed Al-Rashid</span>'s email at <span className="text-amber">National Corp</span>?"
              </p>
            </div>
            <div className="rounded-2xl bg-primary-foreground/5 border border-primary/30 p-6">
              <p className="text-xs uppercase tracking-wider text-primary mb-3 font-heading font-semibold">After Masking</p>
              <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
                "What PDPL penalty applies if we expose <span className="text-primary">[PERSON_1]</span>'s <span className="text-primary">[DATA_TYPE_1]</span> at <span className="text-primary">[ORG_1]</span>?"
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Compliance */}
      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8">Compliance Alignment</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "PDPL (Saudi Arabia)", desc: "Data minimization, purpose limitation, storage limitation." },
            { title: "GDPR (Europe)", desc: "Exceeds GDPR requirements by design." },
            { title: "UAE PDPL", desc: "Same architecture, same compliance coverage." },
            { title: "SAMA / NCA", desc: "Encryption standards, audit trails, access controls." },
          ].map((c, i) => (
            <FeatureCard key={c.title} title={c.title} description={c.desc} delay={i * 100} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Protect your data. See Privacy Shield in action."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default PrivacyShield;
