import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const comparison = [
  { capability: "Agentic execution", oss: "Powerful task automation", aliph: "Same — plus data sovereignty" },
  { capability: "Privacy layer", oss: "None", aliph: "Privacy Shield on all agent interactions" },
  { capability: "Organizational context", oss: "None", aliph: "Organization Memory gives agents business knowledge" },
  { capability: "Compliance awareness", oss: "None", aliph: "PDPL, GDPR, SAMA compliance built in" },
  { capability: "Audit trail", oss: "None", aliph: "Every agent action logged and auditable" },
  { capability: "Arabic support", oss: "Limited", aliph: "Native Arabic and English" },
  { capability: "Enterprise security", oss: "Basic", aliph: "RBAC, encryption, role-based access" },
];

const AgenticAI = () => {
  return (
    <>
      <HeroSection
        eyebrow="AGENTIC AI PLATFORM"
        title="Autonomous AI agents. Sovereign by default."
        subtitle="Advanced agentic AI capabilities — autonomous task execution, tool use, and multi-step reasoning — enhanced with Aliph's Privacy Shield and Organization Memory. The power of open-source agentic frameworks, made safe for regulated enterprises."
        primaryCta={{ label: "Join the Waitlist", href: "/demo" }}
        badge="Coming Q2 2026"
      />

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12">What It Adds</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 font-heading font-semibold text-sm">Capability</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-muted-foreground">Open-Source Agents Alone</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary">Agents + Aliph</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.capability} className="border-b border-border/50">
                  <td className="py-3 font-body text-sm font-medium">{row.capability}</td>
                  <td className="py-3 font-body text-sm text-muted-foreground">{row.oss}</td>
                  <td className="py-3 font-body text-sm text-primary">{row.aliph}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-primary-foreground">Why It Matters</h2>
          <p className="font-body text-primary-foreground/60 leading-relaxed">
            Agentic AI is the next frontier of enterprise automation. Agents that can independently research, execute multi-step workflows, use tools, and reason through complex problems. But enterprises in regulated markets cannot adopt these frameworks without data sovereignty, PII protection, audit trails, and organizational context. Aliph makes agentic AI enterprise-safe.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6">Early Access</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            We are onboarding early-access partners for the Agentic AI Platform. Organizations interested in sovereign agentic capabilities can join the waitlist for priority access when the platform launches in Q2 2026.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Join the Early Access Waitlist"
        primaryCta={{ label: "Join the Waitlist", href: "/demo" }}
      />
    </>
  );
};

export default AgenticAI;
