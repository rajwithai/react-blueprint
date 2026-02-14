import { Link } from "react-router-dom";
import { Database, Users, RefreshCw, Search, Lock } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";

const steps = [
  "Connect your existing data sources — Google Drive, shared drives, local file systems, CRM, or upload documents directly.",
  "Aliph indexes everything with semantic search capability, preserving your existing file permissions.",
  "Every document is tagged with role-based access labels inherited from the source system — no admin configuration needed.",
  "When anyone asks a question, the system searches organizational knowledge first, filtering by that user's access level.",
  "Answers come with source citations — users know exactly where the information came from and can verify.",
  "The system learns from every interaction, getting smarter over time.",
  "New files and permission changes sync automatically — in minutes from source change to searchable in Aliph.",
];

const dataSources = [
  { name: "Google Drive", status: "Live", method: "OAuth connection with incremental sync" },
  { name: "Local File Systems & Network Drives", status: "Live", method: "On-premise agent with real-time monitoring" },
  { name: "Employee Direct Uploads", status: "Live", method: "Web interface upload" },
  { name: "Microsoft 365 / SharePoint", status: "Coming Q2 2026", method: "OAuth with incremental sync" },
  { name: "CRM (Salesforce, HubSpot)", status: "Coming Q3 2026", method: "API integration" },
];

const OrganizationMemory = () => {
  const { ref, isInView } = useInView();

  return (
    <>
      <HeroSection
        eyebrow="ORGANIZATION MEMORY"
        title="An employee who remembers everything and never leaves."
        subtitle="Organization Memory transforms your accumulated knowledge — documents, past decisions, expert know-how, regulatory interpretations — into an always-available AI intelligence layer. Connected to your existing systems. Secured by your existing permissions."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      <Section>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12">How It's Built</h2>
        <div ref={ref} className="max-w-2xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <div key={i} className={`flex gap-4 items-start ${isInView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-sm">{i + 1}</div>
              <p className="font-body text-muted-foreground pt-1">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground">Connected Data Sources</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-foreground/10">
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary-foreground/60">Data Source</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary-foreground/60">Status</th>
                <th className="text-left py-3 font-heading font-semibold text-sm text-primary-foreground/60">Sync Method</th>
              </tr>
            </thead>
            <tbody>
              {dataSources.map((ds) => (
                <tr key={ds.name} className="border-b border-primary-foreground/5">
                  <td className="py-3 font-body text-sm text-primary-foreground">{ds.name}</td>
                  <td className="py-3">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-heading font-semibold ${ds.status === "Live" ? "bg-primary/20 text-primary" : "bg-amber/20 text-amber"}`}>
                      {ds.status}
                    </span>
                  </td>
                  <td className="py-3 font-body text-sm text-primary-foreground/60">{ds.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6">RBAC — Inherited, Not Recreated</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Aliph does not require organizations to build new permission structures. We inherit your existing permissions automatically. When you connect Google Drive, the files an employee can see in Drive are exactly the files Aliph can search for them.
          </p>
          <div className="bg-muted rounded-2xl p-8">
            <p className="font-heading font-semibold text-lg mb-4">Example</p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              A CEO asks "What is our termination policy?" and receives the full policy plus internal HR notes and legal precedents. A junior analyst asks the same question and receives only the company-wide policy document. Same query. Different results. Based on their actual organizational role. Automatically.
            </p>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-primary-foreground">Continuous Learning</h2>
          <p className="font-body text-primary-foreground/60 leading-relaxed">
            Organization Memory does not just store knowledge — it learns. Every interaction generates signals that improve future responses. Explicit feedback from users refines accuracy. Usage patterns reveal which knowledge is most valuable. The platform improves with every engagement, across every employee.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Stop losing institutional knowledge."
        subtitle="See Organization Memory in action."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default OrganizationMemory;
