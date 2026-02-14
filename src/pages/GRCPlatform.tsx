import { FileCheck, Users, BookOpen, Search } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const impact = [
  { capability: "Compliance report generation", traditional: "Days of manual research", aliph: "Hours" },
  { capability: "Regulatory mapping", traditional: "Weeks of specialist research", aliph: "Minutes" },
  { capability: "Contract risk analysis", traditional: "Multi-day legal review", aliph: "Under an hour" },
  { capability: "Cost", traditional: "SAR 500K+ per engagement", aliph: "A fraction of the cost" },
  { capability: "Timeline", traditional: "6–12 months", aliph: "Weeks" },
];

const regulations = [
  { reg: "PDPL", authority: "SDAIA", coverage: "Full compliance mapping, gap analysis, remediation" },
  { reg: "SAMA Regulations", authority: "Saudi Arabian Monetary Authority", coverage: "Financial sector compliance reporting" },
  { reg: "CMA Corporate Governance", authority: "Capital Market Authority", coverage: "Board governance requirements" },
  { reg: "NCA Cybersecurity", authority: "National Cybersecurity Authority", coverage: "Security controls alignment" },
  { reg: "GDPR", authority: "European Union", coverage: "Coming with European expansion" },
];

const GRCPlatform = () => {
  return (
    <>
      <HeroSection
        eyebrow="ALIPH GRC PLATFORM"
        title="Advisory-quality compliance at a fraction of the cost."
        subtitle="Multi-agent AI automates the work that traditionally requires teams of consultants. Compliance mapping, contract analysis, document drafting, and audit preparation — delivered in hours instead of weeks."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        badge="Live — Demonstrated to Prospects"
      />

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12">The Impact</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 font-heading font-semibold text-sm">Capability</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-muted-foreground">Traditional Approach</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary">With Aliph GRC</th>
              </tr>
            </thead>
            <tbody>
              {impact.map((row) => (
                <tr key={row.capability} className="border-b border-border/50">
                  <td className="py-3 font-body text-sm font-medium">{row.capability}</td>
                  <td className="py-3 font-body text-sm text-muted-foreground">{row.traditional}</td>
                  <td className="py-3 font-body text-sm text-primary font-semibold">{row.aliph}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground">Core Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={FileCheck} title="Compliance Engine" description="Auto-map documents to Saudi regulations — PDPL, SAMA, CMA, NCA. Gap identification with risk scoring. Remediation recommendations with priority ranking. Audit-ready compliance reports." delay={0} dark />
          <FeatureCard icon={Search} title="Document Intelligence" description="Large-scale document indexing with semantic search. Contract analysis and risk flagging. Template library for common GRC documents. Arabic and English document generation." delay={100} dark />
          <FeatureCard icon={BookOpen} title="Advisory Automation" description="Board materials preparation. Due diligence automation. Policy and procedure drafting. Precedent search across all past engagements." delay={200} dark />
        </div>
      </Section>

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8">Multi-Agent AI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Intake & Research", desc: "Agents classify the request, research applicable regulations, gather organizational context." },
            { title: "Generation", desc: "Agents draft documents, analyze contracts, build structured reports aligned with professional standards." },
            { title: "Validation", desc: "Agents validate compliance, review quality, verify citations, and score risk before output reaches the user." },
            { title: "Learning", desc: "Agents capture patterns, integrate feedback, and update the knowledge base with every engagement." },
          ].map((s, i) => (
            <FeatureCard key={s.title} title={s.title} description={s.desc} delay={i * 100} />
          ))}
        </div>
      </Section>

      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground">Regulations Covered</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-foreground/10">
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary-foreground/60">Regulation</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary-foreground/60">Authority</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary-foreground/60">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {regulations.map((r) => (
                <tr key={r.reg} className="border-b border-primary-foreground/5">
                  <td className="py-3 font-body text-sm text-primary-foreground font-medium">{r.reg}</td>
                  <td className="py-3 font-body text-sm text-primary-foreground/60">{r.authority}</td>
                  <td className="py-3 font-body text-sm text-primary-foreground/60">{r.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTABanner
        title="Compliance in weeks, not months."
        subtitle="See the GRC Platform in action."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default GRCPlatform;
