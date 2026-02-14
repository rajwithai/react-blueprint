import { Link } from "react-router-dom";
import { Search, ShieldCheck, Users, MessageSquare, CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";

const howItWorks = [
  { title: "Understand", desc: "The system interprets the user's intent and assesses data sensitivity." },
  { title: "Resolve Locally", desc: "Organization Memory is searched first. Most queries are answered from your own data." },
  { title: "Protect & Augment", desc: "If external AI is needed, all sensitive data is masked before the query leaves." },
  { title: "Deliver with Context", desc: "Response is restored with full context. Source citations attached. Audit trail logged." },
];

const comparison = [
  { capability: "Data sovereignty", chatgpt: "Data sent to foreign servers", aliph: "Data stays within your infrastructure" },
  { capability: "Organizational knowledge", chatgpt: "No access to your documents", aliph: "Searches your entire knowledge base" },
  { capability: "PII protection", chatgpt: "None", aliph: "Automatic detection and masking" },
  { capability: "Arabic support", chatgpt: "Limited", aliph: "Native Arabic and English" },
  { capability: "Audit trail", chatgpt: "None", aliph: "Every interaction logged and auditable" },
  { capability: "PDPL compliance", chatgpt: "Not compliant", aliph: "Built for PDPL compliance" },
  { capability: "Role-based access", chatgpt: "Not available", aliph: "Inherited from your existing systems" },
  { capability: "Source citations", chatgpt: "Not available", aliph: "Every answer cites its sources" },
];

const AliphChat = () => {
  const { ref, isInView } = useInView();

  return (
    <>
      <HeroSection
        eyebrow="ALIPHCHAT"
        title="Enterprise AI that knows your business and keeps your secrets."
        subtitle="The sovereign enterprise AI assistant. Employees ask questions in natural language. The system answers from your organization's own knowledge first."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        badge="Live — Demonstrated to Prospects"
      />

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((s, i) => (
            <FeatureCard key={s.title} title={`${i + 1}. ${s.title}`} description={s.desc} delay={i * 100} />
          ))}
        </div>
      </Section>

      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard icon={Search} title="Intelligent Search" description="Natural language queries in Arabic and English. Semantic search across all organizational documents. Source citations with every answer. Multi-turn conversation with memory." delay={0} dark />
          <FeatureCard icon={ShieldCheck} title="Privacy Engine" description="Automatic PII detection on every query. High-accuracy masking for Arabic and English. Encrypted token mapping with automatic expiry. Full audit trail for regulatory compliance." delay={100} dark />
          <FeatureCard icon={MessageSquare} title="Enterprise Integration" description="SSO integration with existing Google Workspace or Microsoft 365 credentials. Google Drive connector, local file system connectors. Admin dashboard with usage analytics." delay={200} dark />
          <FeatureCard icon={Users} title="Role-Based Access Control" description="AliphChat inherits your existing permissions automatically. The files an employee can see are exactly the files AliphChat can search for them. Zero admin configuration." delay={300} dark />
        </div>
      </Section>

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12">The Difference</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 font-heading font-semibold text-sm">Capability</th>
                <th className="text-left py-3 px-4 font-heading font-semibold text-sm">ChatGPT / Copilot</th>
                <th className="text-left py-3 pl-4 font-heading font-semibold text-sm text-primary">AliphChat</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.capability} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-body text-sm font-medium">{row.capability}</td>
                  <td className="py-3 px-4 font-body text-sm text-muted-foreground">{row.chatgpt}</td>
                  <td className="py-3 pl-4 font-body text-sm text-primary">{row.aliph}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTABanner
        title="Give your team ChatGPT-level intelligence with zero data risk."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default AliphChat;
