import { Link } from "react-router-dom";
import { Shield, Brain, Scale, Layers, Cpu, ShieldCheck, Globe, ArrowRight, Building2, Heart, Briefcase, CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "4", label: "Architectural layers protecting your data" },
  { value: "0", label: "Pieces of PII ever transmitted externally" },
  { value: "<3s", label: "From query to sovereign AI response" },
  { value: "45+", label: "Years of Big Four expertise encoded in AI" },
];

const StatCounter = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="font-heading font-bold text-5xl lg:text-6xl text-primary mb-2">{value}</div>
      <p className="font-body text-sm text-muted-foreground max-w-[200px] mx-auto">{label}</p>
    </div>
  );
};

const ArchLayer = ({ num, title, desc, delay }: { num: number; title: string; desc: string; delay: number }) => {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`flex gap-4 ${isInView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-sm">
        {num}
      </div>
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary-foreground">{title}</h3>
        <p className="font-body text-sm text-primary-foreground/60 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const sectionTitle = (text: string, dark = false) => {
    const { ref, isInView } = useInView();
    return (
      <h2 ref={ref} className={`font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance ${dark ? "text-primary-foreground" : "text-foreground"} ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
        {text}
      </h2>
    );
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="SOVEREIGN AI FOR ENTERPRISE"
        title="The full power of global AI. Zero data exposure."
        subtitle="Aliph enables organizations to adopt world-class AI safely — keeping sensitive data sovereign, institutional knowledge intact, and regulatory compliance automatic. Built for PDPL. Ready for GDPR. Designed for the enterprise."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
        minHeight="min-h-[85vh]"
      >
        {/* Architecture preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto animate-fade-in-up animate-fade-in-up-delay-4">
          {[
            { icon: Cpu, label: "Edge Intelligence" },
            { icon: Layers, label: "Sovereign Core" },
            { icon: ShieldCheck, label: "Privacy Shield" },
            { icon: Globe, label: "Cloud Augmentation" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <Icon className="h-6 w-6 text-primary" />
              <span className="text-xs font-body text-primary-foreground/60 text-center">{label}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* The Problem */}
      <Section>
        {sectionTitle("Three challenges. One platform.")}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard icon={Shield} title="Use AI, Risk Everything" description="Every ChatGPT query sends employee names, financial data, and client records to foreign servers. Under Saudi Arabia's PDPL, each incident carries penalties up to SAR 5 million." delay={0} />
          <FeatureCard icon={Brain} title="Your Expertise Walks Out the Door" description="When a senior partner retires or a compliance lead resigns, decades of institutional expertise — regulatory interpretations, client histories, precedent decisions — disappear overnight." delay={100} />
          <FeatureCard icon={Scale} title="World-Class Compliance Is Out of Reach" description="Advisory firms charge SAR 500K+ per engagement. For the 1.7 million Saudi SMEs facing the same penalties as large corporates, professional GRC is simply unaffordable." delay={200} />
        </div>
      </Section>

      {/* Architecture */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {sectionTitle("Architecture built for sovereignty.", true)}
            <p className="font-body text-primary-foreground/60 mb-8 leading-relaxed">
              Aliph's four-layer federated architecture resolves the vast majority of queries entirely on-premise. When external AI is needed, the Privacy Shield ensures zero sensitive data ever leaves.
            </p>
            <div className="space-y-6">
              <ArchLayer num={1} title="Edge Intelligence" desc="AI models embedded directly on user devices. Instant answers with zero network dependency." delay={0} />
              <ArchLayer num={2} title="Sovereign Core" desc="Your organization's own AI hub — knowledge base, semantic search, and intelligent routing." delay={100} />
              <ArchLayer num={3} title="Privacy Shield" desc="Proprietary PII detection and masking for Arabic and English. All sensitive data stripped before external processing." delay={200} />
              <ArchLayer num={4} title="Cloud Augmentation" desc="Secure, optional access to Claude, GPT-4, Gemini, ALLAM. Only sanitized queries reach external systems." delay={300} />
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {[
                { label: "Edge Intelligence", color: "border-primary/30", y: 0 },
                { label: "Sovereign Core", color: "border-primary/50", y: 1 },
                { label: "Privacy Shield", color: "border-primary/70", y: 2 },
                { label: "Cloud Augmentation", color: "border-primary", y: 3 },
              ].map(({ label, color, y }) => (
                <div key={label} className={`relative border-2 ${color} rounded-2xl p-6 mb-4 bg-primary-foreground/5 backdrop-blur-sm`}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-heading font-medium text-sm text-primary-foreground">{label}</span>
                  </div>
                  {y < 3 && <div className="absolute left-1/2 -bottom-4 w-px h-4 bg-primary/30" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Three Capabilities */}
      <Section>
        {sectionTitle("Every product inherits three capabilities.")}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard icon={ShieldCheck} title="Privacy Shield" description="Automatically detects and masks all personally identifiable information before any data is sent to external AI models. Supports Arabic and English simultaneously." delay={0}>
            <Link to="/platform/privacy-shield" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:underline">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Brain} title="Organization Memory" description="Connects to your existing data sources. Indexes everything with semantic search. Inherits your existing role-based permissions automatically." delay={100}>
            <Link to="/platform/organization-memory" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:underline">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Globe} title="Global LLM Connectivity" description="Model-agnostic access to Claude, GPT-4, Gemini, and ALLAM — safely through the Privacy Shield. Best model selected automatically per task." delay={200}>
            <Link to="/platform/global-llm" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:underline">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Products */}
      <Section dark>
        {sectionTitle("Three products. One sovereign platform.", true)}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "AliphChat", badge: "Live", desc: "The sovereign enterprise AI assistant. Employees ask questions in natural language. The system answers from your organization's own knowledge first.", href: "/products/aliphchat" },
            { title: "GRC Platform", badge: "Live", desc: "AI-powered Governance, Risk, and Compliance. Multi-agent AI automates compliance mapping, contract analysis, and audit preparation.", href: "/products/grc" },
            { title: "Agentic AI Platform", badge: "Coming Q2 2026", desc: "Advanced agentic AI capabilities — autonomous task execution, tool use, and multi-step reasoning — wrapped in Aliph's Privacy Shield.", href: "/products/agentic-ai" },
          ].map(({ title, badge, desc, href }, i) => (
            <FeatureCard key={title} title={title} description={desc} delay={i * 100} dark>
              <div className="flex items-center justify-between mt-4">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-primary/20 text-primary">{badge}</span>
                <Link to={href} className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary hover:underline">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        {sectionTitle("Built for regulated markets.")}
        <p className="font-body text-muted-foreground mb-12 max-w-2xl">
          Aliph's platform is sector-agnostic by design. Each vertical shares the core architecture and adds industry-specific regulatory knowledge, workflows, and document templates.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={Building2} title="Financial Services" description="SAMA compliance, CMA governance, AML monitoring, due diligence automation. Where financial data sovereignty is non-negotiable." delay={0}>
            <Link to="/industries/financial-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:underline">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Heart} title="Healthcare" description="CBAHI accreditation, patient data sovereignty, clinical protocol management. Where patient privacy is paramount." delay={100}>
            <Link to="/industries/healthcare" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:underline">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
          <FeatureCard icon={Briefcase} title="Professional Services" description="Advisory workflow automation, client confidentiality, engagement intelligence. Where institutional knowledge is your competitive advantage." delay={200}>
            <Link to="/industries/professional-services" className="inline-flex items-center gap-1.5 mt-4 text-sm font-heading font-semibold text-primary hover:underline">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FeatureCard>
        </div>
      </Section>

      {/* Trust & Compliance */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          {sectionTitle("Compliance by design, not by afterthought.", true)}
          <p className="font-body text-primary-foreground/60 mb-12 leading-relaxed">
            Aliph's architecture was built from the ground up for Saudi Arabia's PDPL — one of the world's strictest data sovereignty regulations. This means it naturally exceeds the requirements of GDPR, UAE PDPL, and most global privacy frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["PDPL Compliant", "SAMA Aligned", "NCA Cybersecurity", "GDPR Ready", "ISO 27001 (In Progress)", "AES-256 + TLS 1.3"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-body text-primary-foreground/80">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} label={s.label} delay={i * 100} />
          ))}
        </div>
      </Section>

      {/* Vision 2030 */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          {sectionTitle("Aligned with the Kingdom's AI ambitions.", true)}
          <p className="font-body text-primary-foreground/60 leading-relaxed mb-6">
            Saudi Arabia is investing over $100 billion in AI infrastructure through HUMAIN and SDAIA. Vision 2030 mandates enterprise AI adoption across every sector. Aliph is the sovereign application layer that makes this vision achievable.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20">
            <span className="text-sm font-body text-primary">ALLAM Integration-Ready — Designed for Saudi Arabia's sovereign LLM ecosystem</span>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="Ready to make AI sovereign?"
        subtitle="See how Aliph keeps your data private, your knowledge retained, and your compliance automatic."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
        tealBg
      />
    </>
  );
};

export default Index;
