import { Link } from "react-router-dom";
import { Shield, Brain, Globe, ArrowRight, Building2, Heart, Briefcase, CheckCircle2, Cpu, Layers, ShieldCheck, Lock, Server, FileSearch } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const stats = [
  { value: "4 Layers", label: "Sovereign architecture depth" },
  { value: "0 PII", label: "Ever transmitted externally" },
  { value: "45+ Years", label: "Regulatory expertise encoded" },
  { value: "<3s", label: "Query to cited answer" },
];

const archLayers = [
  { icon: Cpu, label: "Local SLM", desc: "On-device intelligence", color: "text-accent" },
  { icon: ShieldCheck, label: "Privacy Shield", desc: "PII detection & masking", color: "text-primary" },
  { icon: Globe, label: "External LLM", desc: "Masked queries only", color: "text-violet" },
  { icon: FileSearch, label: "Audit Log", desc: "Immutable record", color: "text-accent" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="SOVEREIGN AI INFRASTRUCTURE"
        title="Enterprise AI that never exposes your data."
        subtitle="Deploy sovereign-by-design AI across your organization without sacrificing compliance, control, or performance."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
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
          {["PDPL Compliant", "GDPR Ready", "SOC 2", "ISO 27001"].map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs font-heading font-semibold text-foreground/70 tracking-wide"
            >
              <Lock className="h-3 w-3 text-accent" />
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </HeroSection>

      {/* Architecture Diagram — Authority Section */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
          >
            ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground text-center tracking-tight"
          >
            Four layers. Zero exposure.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16"
          >
            Every query passes through sovereign infrastructure before anything reaches an external model. Most never leave.
          </motion.p>

          {/* Animated data flow diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {archLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <div key={layer.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="glass-card rounded-2xl p-6 w-[180px] text-center relative group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/15 transition-colors duration-200">
                      <Icon className={`h-5 w-5 ${layer.color}`} strokeWidth={1.5} />
                    </div>
                    <p className="font-heading font-bold text-sm text-foreground">{layer.label}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{layer.desc}</p>
                  </motion.div>
                  {i < archLayers.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="hidden md:flex items-center px-2"
                    >
                      <div className="w-8 h-px bg-gradient-to-r from-primary/40 to-accent/30 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent data-flow-dot" />
                      </div>
                    </motion.div>
                  )}
                  {i < archLayers.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="md:hidden w-px h-6 bg-gradient-to-b from-primary/30 to-accent/20 relative"
                    >
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent data-flow-dot" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-heading font-extrabold text-4xl lg:text-5xl text-gradient mb-2 tracking-tight">{s.value}</div>
              <p className="font-body text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section dark>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          CORE CAPABILITIES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-foreground tracking-tight"
        >
          Three pillars. No compromises.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={ShieldCheck} title="Privacy Shield" description="Every token of sensitive data — detected, masked, encrypted. Arabic and English. The external model sees the question, never the identity." delay={0}>
            <Link to="/platform/privacy-shield" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Brain} title="Organization Memory" description="Institutional knowledge — indexed, permission-aware, citation-ready. Connected to your existing systems. No migration required." delay={80}>
            <Link to="/platform/organization-memory" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Globe} title="Global LLM Access" description="Claude, GPT-4, Gemini, ALLAM — accessed safely through Privacy Shield. Best model per task. No lock-in. No exposure." delay={160}>
            <Link to="/platform/global-llm" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Products */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-foreground tracking-tight"
        >
          Products built on sovereign infrastructure.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "AliphChat", badge: "Live", desc: "Enterprise AI assistant. Searches your knowledge first. Protects your data always. Full audit trail.", href: "/products/aliphchat" },
            { title: "Aliph GRC", badge: "Live", desc: "Compliance mapping and contract analysis. Months of work delivered in days. Multi-agent AI.", href: "/products/grc" },
            { title: "Agentic AI", badge: "Q2 2026", desc: "Autonomous agents that research, execute, and reason — with Privacy Shield and Organization Memory built in.", href: "/products/agentic-ai" },
          ].map(({ title, badge, desc, href }, i) => (
            <FeatureCard key={title} title={title} description={desc} delay={i * 80}>
              <div className="flex items-center justify-between mt-4">
                <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-heading font-semibold uppercase tracking-wider border ${badge === "Live" ? "text-accent border-accent/30 bg-accent/5" : "text-amber border-amber/30 bg-amber/5"}`}>{badge}</span>
                <Link to={href} className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200">
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
            className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
          >
            COMPLIANCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground tracking-tight"
          >
            Compliance is the architecture,<br />not a feature.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            Designed for PDPL — one of the world's strictest data sovereignty frameworks. Our architecture exceeds the requirements of GDPR, UAE PDPL, and most global privacy regulations by design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["PDPL", "SAMA", "NCA", "GDPR", "ISO 27001", "AES-256 + TLS 1.3"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass text-sm font-body text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-accent" />
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
          className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-foreground tracking-tight"
        >
          Designed for regulated markets.<br />
          <span className="text-muted-foreground">Enforced by architecture.</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Building2} title="Financial Services" description="SAMA compliance. Due diligence automation. Financial data sovereignty." delay={0}>
            <Link to="/industries/financial-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Heart} title="Healthcare" description="Patient data protection. CBAHI accreditation. Clinical knowledge management." delay={80}>
            <Link to="/industries/healthcare" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Briefcase} title="Professional Services" description="Client confidentiality. Engagement intelligence. Institutional knowledge retention." delay={160}>
            <Link to="/industries/professional-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Data Residency */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6"
          >
            <Server className="h-7 w-7 text-accent" strokeWidth={1.5} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground tracking-tight"
          >
            Your data stays where it belongs.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground max-w-xl mx-auto mb-8"
          >
            On-premise or in-region deployment. Data never crosses jurisdictional boundaries. Sovereign by design, not by workaround.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-card rounded-2xl p-8 max-w-md mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">Data Location</span>
              <span className="text-xs font-heading font-semibold text-accent">Sovereign</span>
            </div>
            <div className="space-y-3">
              {["Knowledge base", "Query logs", "User data", "Audit trails", "Encryption keys"].map((item) => (
                <div key={item} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                  <span className="flex items-center gap-1.5 text-xs font-heading text-accent">
                    <Lock className="h-3 w-3" /> On-premise
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="See sovereign AI in action."
        subtitle="30-minute demo. Tailored to your organization. No commitment."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
        purpleBg
      />
    </>
  );
};

export default Index;
