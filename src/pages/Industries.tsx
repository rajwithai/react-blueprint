import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

interface IndustryPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  challenges: string[];
  solutions: string[];
  targetUsers: string;
  badges: string[];
  ctaText: string;
}

const IndustryPage = ({ eyebrow, title, subtitle, challenges, solutions, targetUsers, badges, ctaText }: IndustryPageProps) => (
  <>
    <HeroSection
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      primaryCta={{ label: "Request a Demo", href: "/demo" }}
    />

    <Section>
      <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8">Key Challenges We Solve</h2>
      <div className="max-w-3xl space-y-4">
        {challenges.map((c, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
              <span className="text-xs font-heading font-bold text-destructive">{i + 1}</span>
            </div>
            <p className="font-body text-muted-foreground">{c}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section dark>
      <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-primary-foreground">How Aliph Helps</h2>
      <div className="max-w-3xl space-y-4">
        {solutions.map((s, i) => (
          <div key={i} className="flex gap-3 items-start">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="font-body text-primary-foreground/70">{s}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">Target Users</h2>
      <p className="font-body text-muted-foreground">{targetUsers}</p>
    </Section>

    <Section dark>
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-body text-primary-foreground/80">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <CTABanner title={ctaText} primaryCta={{ label: "Request a Demo", href: "/demo" }} />
  </>
);

export const FinancialServices = () => (
  <IndustryPage
    eyebrow="FINANCIAL SERVICES"
    title="Sovereign AI for the institutions that move capital."
    subtitle="SAMA compliance, CMA governance, AML monitoring, and due diligence automation — powered by AI that keeps financial data where it belongs: within your walls."
    challenges={[
      "Regulatory reporting for SAMA requires significant manual effort and specialist knowledge.",
      "AML and due diligence processes are time-intensive and error-prone.",
      "Financial data sovereignty is non-negotiable — SAMA requires it.",
      "Institutional knowledge from departing compliance officers is difficult to retain.",
    ]}
    solutions={[
      "Automated SAMA compliance mapping and reporting.",
      "Contract analysis with risk scoring for financial agreements.",
      "Due diligence automation that surfaces relevant precedents instantly.",
      "Organization Memory that retains all regulatory interpretations and compliance history.",
      "Privacy Shield ensuring financial data never leaves your infrastructure.",
    ]}
    targetUsers="Banks, insurance companies, fintech companies, investment firms, asset managers, DIFC and ADGM-registered firms."
    badges={["PDPL", "SAMA", "CMA"]}
    ctaText="See how Aliph works for financial services."
  />
);

export const Healthcare = () => (
  <IndustryPage
    eyebrow="HEALTHCARE"
    title="Patient data is sacred. Your AI should treat it that way."
    subtitle="CBAHI accreditation preparation, patient data sovereignty, clinical protocol management, and Arabic medical document processing — with the strongest privacy architecture in the market."
    challenges={[
      "Patient data is the most sensitive category under PDPL. Any exposure carries maximum penalties.",
      "CBAHI accreditation preparation requires extensive documentation and compliance evidence.",
      "Clinical protocols and best practices are scattered across departments and systems.",
      "Arabic medical documentation requires specialized language understanding.",
    ]}
    solutions={[
      "Privacy Shield with healthcare-specific entity detection — patient IDs, diagnosis codes, medical records.",
      "CBAHI audit preparation with automated compliance mapping.",
      "Clinical protocol management with semantic search across all institutional knowledge.",
      "Arabic medical document processing with high-accuracy entity recognition.",
    ]}
    targetUsers="Hospital groups, clinic chains, health insurance companies, pharmaceutical companies, medical research institutions."
    badges={["PDPL", "CBAHI", "MOH"]}
    ctaText="See how Aliph works for healthcare."
  />
);

export const ProfessionalServices = () => (
  <IndustryPage
    eyebrow="PROFESSIONAL SERVICES"
    title="Your firm's expertise, amplified by AI."
    subtitle="Advisory workflow automation, client confidentiality, engagement intelligence, and institutional knowledge retention — for firms where expertise is the product."
    challenges={[
      "When senior partners leave, decades of client relationships and engagement expertise leave with them.",
      "Every client engagement starts from scratch instead of building on past precedents.",
      "Client confidentiality requirements make it impossible to use commercial AI tools.",
      "Junior staff lack access to the institutional knowledge that senior staff carry in their heads.",
    ]}
    solutions={[
      "Organization Memory captures engagement expertise, precedent decisions, and client history.",
      "GRC Platform automates compliance advisory with multi-agent AI workflows.",
      "Privacy Shield ensures client data remains confidential through every AI interaction.",
      "Precedent search surfaces relevant past work instantly for every new engagement.",
    ]}
    targetUsers="Consulting firms, law firms, audit firms, advisory practices, professional services companies."
    badges={["PDPL", "SAMA", "CMA", "NCA"]}
    ctaText="See how Aliph works for professional services."
  />
);
