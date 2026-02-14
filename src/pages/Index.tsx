import { Link } from "react-router-dom";
import { Shield, Brain, Globe, ArrowRight, Building2, Heart, Briefcase, CheckCircle2, Cpu, Layers, ShieldCheck, Lock, Server, FileSearch } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const archLayers = [
  { icon: Cpu, label: "Edge Intelligence", desc: "Native apps with embedded SLMs running directly on user devices. Zero-server dependency.", num: "01" },
  { icon: Layers, label: "Sovereign Core", desc: "Your AI hub, trained on your data. Semantic search and Organization Memory running on your infrastructure.", num: "02" },
  { icon: ShieldCheck, label: "Privacy Shield", desc: "Proprietary PII masking (Arabic & English). Sanitizes every query before external processing.", num: "03" },
  { icon: Globe, label: "Cloud Augment", desc: "Safe access to Claude, GPT-4, and ALLAM—only after full sanitization.", num: "04" },
];

const Index = () => {
  return (
    <>
      {/* Hero — The Sovereign Perimeter */}
      <HeroSection
        eyebrow="SOVEREIGN AI INFRASTRUCTURE"
        title="Your Intelligence. Your Borders."
        subtitle="The first sovereign AI infrastructure purpose-built for Saudi Enterprise. Deploy world-class intelligence while keeping your data—and your future—within your walls."
        primaryCta={{ label: "Contact Sales", href: "/contact" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
        minHeight="min-h-[90vh]"
      >
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {["PDPL Compliant", "SAMA Ready", "NCA Aligned"].map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white/80 text-xs font-body font-semibold text-foreground/60 tracking-wide"
            >
              <CheckCircle2 className="h-3 w-3 text-accent" />
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </HeroSection>

      {/* 4-Layer Federated Architecture — Scroll-triggered */}
      <Section dark>
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4 text-center"
          >
            THE 4-LAYER FEDERATED ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white text-center tracking-tight"
          >
            Sovereign by design.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-white/50 text-center max-w-xl mx-auto mb-16"
          >
            Every query passes through sovereign infrastructure before anything reaches an external model. Most never leave.
          </motion.p>

          <div className="space-y-4">
            {archLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="glass-card rounded-lg p-6 md:p-8 flex items-start gap-6 group hover:border-gold/20 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <span className="font-heading font-bold text-gold/40 text-sm">{layer.num}</span>
                    <div className="mt-2 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">{layer.label}</h3>
                    <p className="font-body text-white/50 text-sm leading-relaxed">{layer.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Organization Memory — The Asset */}
      <Section alabaster>
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4"
          >
            ORGANIZATION MEMORY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground tracking-tight"
          >
            Your Institutional Memory, Digitized.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 font-body text-muted-foreground leading-relaxed max-w-2xl"
          >
            <p>Capture decades of institutional expertise that would otherwise walk out the door.</p>
            <p>Inherit existing permissions (Google Drive/MS 365) automatically—zero admin configuration required.</p>
            <p>Every answer is delivered with full source citations—no hallucinations, only evidence.</p>
          </motion.div>

          {/* Connector visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-lg"
          >
            {["Google Drive", "Microsoft 365", "Local Shared Drives"].map((connector) => (
              <div key={connector} className="bento-card p-4 text-center">
                <p className="font-body text-xs text-muted-foreground font-medium">{connector}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-8"
          >
            <Link
              to="/platform/organization-memory"
              className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-accent hover:gap-2.5 transition-all duration-200"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Sovereign Suite — Products */}
      <Section>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4"
        >
          THE SOVEREIGN SUITE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-12 text-foreground tracking-tight"
        >
          Products built on sovereign infrastructure.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Aliph GRC Platform",
              badge: "Live",
              desc: "Big Four quality GRC advisory automated. Auto-map documents to KSA regulations (PDPL, SAMA, CMA, NCA) in hours, not months.",
              href: "/products/grc",
            },
            {
              title: "AliphChat",
              badge: "Live",
              desc: "The sovereign enterprise assistant. Natural language queries in Arabic and English with 0% data risk.",
              href: "/products/aliphchat",
            },
            {
              title: "Agentic AI Platform",
              badge: "Q2 2026",
              desc: "Advanced agentic power built on OpenClaw, hardened with Aliph's Privacy Shield and security.",
              href: "/products/agentic-ai",
            },
          ].map(({ title, badge, desc, href }, i) => (
            <FeatureCard key={title} title={title} description={desc} delay={i * 80}>
              <div className="flex items-center justify-between mt-4">
                <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-body font-semibold uppercase tracking-wider border ${
                  badge === "Live"
                    ? "text-accent border-accent/30 bg-accent/5"
                    : "text-muted-foreground border-border bg-muted"
                }`}>
                  {badge}
                </span>
                <Link to={href} className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-accent hover:gap-2.5 transition-all duration-200">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Compliance as Architecture */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4"
          >
            COMPLIANCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-white tracking-tight"
          >
            Compliance is the architecture,<br />not a feature.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-white/50 mb-12 max-w-xl mx-auto"
          >
            Designed for PDPL—one of the world's strictest data sovereignty frameworks. Our architecture exceeds the requirements of GDPR, UAE PDPL, and most global privacy regulations by design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["PDPL", "SAMA", "NCA", "GDPR", "ISO 27001"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass text-sm font-body text-white/70">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-12 text-foreground tracking-tight"
        >
          Designed for regulated markets.<br />
          <span className="text-muted-foreground">Enforced by architecture.</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Building2} title="Financial Services" description="SAMA compliance. Due diligence automation. Financial data sovereignty." delay={0}>
            <Link to="/industries/financial-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-body font-semibold text-accent hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Heart} title="Healthcare" description="Patient data protection. CBAHI accreditation. Clinical knowledge management." delay={80}>
            <Link to="/industries/healthcare" className="inline-flex items-center gap-1.5 mt-4 text-sm font-body font-semibold text-accent hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Briefcase} title="Professional Services" description="Client confidentiality. Engagement intelligence. Institutional knowledge retention." delay={160}>
            <Link to="/industries/professional-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-body font-semibold text-accent hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="See sovereign AI in action."
        subtitle="30-minute briefing. Tailored to your organization. No commitment."
        primaryCta={{ label: "Contact Sales", href: "/contact" }}
        dark
      />
    </>
  );
};

export default Index;
