import { Link } from "react-router-dom";
import { Shield, Brain, Scale, Layers, Cpu, ShieldCheck, Globe, ArrowRight, Building2, Heart, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const stats = [
  { value: "4 layers", label: "of sovereign architecture" },
  { value: "0 PII", label: "ever transmitted externally" },
  { value: "45+ years", label: "of regulatory expertise encoded" },
  { value: "Seconds", label: "from question to cited answer" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="SOVEREIGN AI INFRASTRUCTURE"
        title="Enterprise AI that never exposes your data."
        subtitle="The full power of Claude, GPT-4, Gemini, and ALLAM — with zero sensitive data leaving your walls. Built for PDPL. Ready for GDPR."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
        minHeight="min-h-[85vh]"
      >
        {/* Architecture preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {[
            { icon: Cpu, label: "Edge Intelligence" },
            { icon: Layers, label: "Sovereign Core" },
            { icon: ShieldCheck, label: "Privacy Shield" },
            { icon: Globe, label: "Cloud Augmentation" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl glass glow-border animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <Icon className="h-6 w-6 text-primary" />
              <span className="text-xs font-body text-primary-foreground/60 text-center">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </HeroSection>

      {/* The Tension */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground"
          >
            The enterprise dilemma.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Every employee using ChatGPT at work is a compliance event waiting to happen. Employee names, client records, financial data — transmitted to foreign servers with every query. Under PDPL, each incident carries penalties up to SAR 5 million.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The alternative — avoiding AI entirely — means watching competitors gain 30–40% productivity advantages while your team works manually.
            </p>
            <p className="font-heading font-semibold text-xl text-primary">
              Aliph eliminates the tradeoff.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Platform Statement */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary-foreground"
            >
              Four layers between your data and the outside world.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="font-body text-primary-foreground/60 mb-4 leading-relaxed">
                Most queries never leave your infrastructure. Our Sovereign Core resolves them from your own knowledge base — instantly, with source citations.
              </p>
              <p className="font-body text-primary-foreground/60 mb-6 leading-relaxed">
                When external AI power is needed, the Privacy Shield strips every piece of sensitive data before anything crosses the boundary. The response returns. Context is restored. Your data never moved.
              </p>
              <p className="text-sm font-heading text-primary">
                Edge Intelligence · Sovereign Core · Privacy Shield · Cloud Augmentation
              </p>
              <Link to="/platform" className="inline-flex items-center gap-2 mt-6 text-primary font-heading font-semibold hover:gap-3 transition-all">
                See how it works <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {[
                { label: "Edge Intelligence", opacity: 0.3, delay: 0 },
                { label: "Sovereign Core", opacity: 0.5, delay: 0.1 },
                { label: "Privacy Shield", opacity: 0.7, delay: 0.2 },
                { label: "Cloud Augmentation", opacity: 1, delay: 0.3 },
              ].map(({ label, opacity, delay }, y) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay }}
                  className="relative rounded-2xl p-6 mb-4 glass glow-border"
                  style={{ borderColor: `rgba(99, 102, 241, ${opacity})` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary pulse-glow" />
                    <span className="font-heading font-medium text-sm text-primary-foreground">{label}</span>
                  </div>
                  {y < 3 && <div className="absolute left-1/2 -bottom-4 w-px h-4 bg-primary/30" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Three Capabilities */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground"
        >
          Built into every product.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard icon={ShieldCheck} title="Privacy Shield" description="Sensitive data is detected and masked before any external AI interaction. Arabic and English. Automatic. Auditable. Every token encrypted, every mapping expired." delay={0}>
            <Link to="/platform/privacy-shield" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all">
              Explore Privacy Shield <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Brain} title="Organization Memory" description="Your documents, decisions, and expertise — indexed, searchable, and permission-aware. Connected to your existing systems. No migration. No new permissions to manage." delay={100}>
            <Link to="/platform/organization-memory" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all">
              Explore Organization Memory <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Globe} title="Global LLM Connectivity" description="Claude, GPT-4, Gemini, ALLAM — accessed safely through the Privacy Shield. Best model selected per task. No vendor lock-in. No data exposure." delay={200}>
            <Link to="/platform/global-llm" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all">
              Explore LLM Connectivity <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Products */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary-foreground"
        >
          Three products. One sovereign platform.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "AliphChat", badge: "Live", desc: "The enterprise AI assistant that searches your knowledge first — and protects your data always. Natural language. Arabic and English. Full audit trail.", href: "/products/aliphchat" },
            { title: "Aliph GRC", badge: "Live", desc: "Compliance mapping, contract analysis, and audit preparation that used to take months — delivered in days by multi-agent AI.", href: "/products/grc" },
            { title: "Agentic AI", badge: "Coming Q2 2026", desc: "Autonomous AI agents that research, execute, and reason through complex workflows — with Privacy Shield and Organization Memory built in.", href: "/products/agentic-ai" },
          ].map(({ title, badge, desc, href }, i) => (
            <FeatureCard key={title} title={title} description={desc} delay={i * 100} dark>
              <div className="flex items-center justify-between mt-4">
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-heading font-semibold border ${badge === "Live" ? "bg-primary/20 text-primary border-primary/30" : "bg-amber/20 text-amber border-amber/30"}`}>{badge}</span>
                <Link to={href} className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* The Proof - Stats */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-4xl lg:text-5xl text-gradient mb-2">{s.value}</div>
              <p className="font-body text-sm text-muted-foreground max-w-[200px] mx-auto">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-12 text-primary-foreground"
        >
          Designed for regulated markets.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={Building2} title="Financial Services" description="SAMA compliance, due diligence automation, and financial data sovereignty." delay={0} dark>
            <Link to="/industries/financial-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Heart} title="Healthcare" description="Patient data protection, CBAHI accreditation, clinical knowledge management." delay={100} dark>
            <Link to="/industries/healthcare" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Briefcase} title="Professional Services" description="Client confidentiality, engagement intelligence, institutional knowledge retention." delay={200} dark>
            <Link to="/industries/professional-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:gap-2.5 transition-all">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Compliance */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground"
          >
            Compliance is the architecture, not a feature.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-muted-foreground mb-12 leading-relaxed"
          >
            Built from the ground up for PDPL — one of the world's strictest data sovereignty frameworks. This means our architecture exceeds the requirements of GDPR, UAE PDPL, and most global privacy regulations by design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["PDPL", "SAMA", "NCA", "GDPR Ready", "ISO 27001 (In Progress)", "AES-256 + TLS 1.3"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/5 border border-primary/10">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-body text-foreground/80">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Vision 2030 */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary-foreground"
          >
            Built for the Kingdom's AI ambitions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-primary-foreground/60 leading-relaxed mb-6"
          >
            Saudi Arabia is investing over $100 billion in AI through HUMAIN and SDAIA. Vision 2030 demands enterprise AI adoption at scale. Aliph is the sovereign application layer that makes it possible — and we are designed as one of the first enterprise applications for the ALLAM ecosystem.
          </motion.p>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="See sovereign AI in action."
        subtitle="30-minute demo. Tailored to your organization. No commitment."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
        purpleBg
      />
    </>
  );
};

export default Index;
