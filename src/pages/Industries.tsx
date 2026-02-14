import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";

interface IndustryPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  challengeTitle: string;
  challengeBody: string;
  solutionTitle: string;
  solutionBody: string;
  badges: string[];
  ctaText: string;
}

const IndustryPage = ({ eyebrow, title, subtitle, challengeTitle, challengeBody, solutionTitle, solutionBody, badges, ctaText }: IndustryPageProps) => (
  <>
    <HeroSection
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      primaryCta={{ label: "Request a Demo", href: "/demo" }}
    />

    <Section>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-6"
        >
          {challengeTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground leading-relaxed text-lg"
        >
          {challengeBody}
        </motion.p>
      </div>
    </Section>

    <Section dark>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-primary-foreground"
        >
          {solutionTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-primary-foreground/70 leading-relaxed text-lg"
        >
          {solutionBody}
        </motion.p>
      </div>
    </Section>

    <Section>
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/5 border border-primary/10">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-body text-foreground/80">{b}</span>
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
    title="Financial data leaves your infrastructure over your regulator's dead body."
    subtitle="SAMA compliance, CMA governance, AML monitoring, and due diligence — powered by AI that treats financial data sovereignty as non-negotiable. Because SAMA does."
    challengeTitle="The regulatory burden is real. The tools are not."
    challengeBody="SAMA reporting demands specialist knowledge and weeks of manual effort. Due diligence is repetitive and error-prone. AML monitoring generates noise, not signal. And when your chief compliance officer leaves, they take the institutional memory of every regulatory interpretation they ever made. Meanwhile, every analyst using ChatGPT to summarize a financial report is a PDPL violation in progress."
    solutionTitle="Aliph for financial services."
    solutionBody="Automated SAMA compliance mapping and reporting. Contract analysis with risk scoring. Due diligence that surfaces precedents in seconds. Organization Memory that retains every regulatory interpretation. And a Privacy Shield that ensures financial data stays exactly where it belongs."
    badges={["PDPL", "SAMA", "CMA"]}
    ctaText="See it for financial services."
  />
);

export const Healthcare = () => (
  <IndustryPage
    eyebrow="HEALTHCARE"
    title="Patient data is the most sensitive data there is. We built for that."
    subtitle="CBAHI accreditation, patient data sovereignty, clinical protocol management, and Arabic medical documentation — with the strongest privacy architecture available."
    challengeTitle="Healthcare faces the hardest version of this problem."
    challengeBody="Patient data carries the maximum PDPL penalties. CBAHI accreditation requires mountains of compliance evidence. Clinical protocols are scattered across departments. Arabic medical documentation requires language understanding that most AI tools lack entirely. Using consumer AI tools in a healthcare setting isn't just a compliance risk. It's a patient safety issue."
    solutionTitle="Aliph for healthcare."
    solutionBody="Privacy Shield with healthcare-specific detection — patient IDs, diagnosis codes, medical records. CBAHI audit preparation with automated compliance mapping. Clinical knowledge management with semantic search across every department. Arabic medical document processing that actually works."
    badges={["PDPL", "CBAHI", "MOH"]}
    ctaText="See it for healthcare."
  />
);

export const ProfessionalServices = () => (
  <IndustryPage
    eyebrow="PROFESSIONAL SERVICES"
    title="When expertise is the product, losing it is existential."
    subtitle="Client confidentiality, engagement intelligence, and institutional knowledge that stays — even when partners don't. For firms where what you know is what you sell."
    challengeTitle="Every departure is a knowledge event."
    challengeBody="When a senior partner retires, they take decades of client relationships, regulatory interpretations, and engagement precedents. The next person starts from scratch. Every client engagement reinvents work that was done before. And client confidentiality requirements make commercial AI tools unusable — so teams work manually while competitors accelerate."
    solutionTitle="Aliph for professional services."
    solutionBody="Organization Memory captures engagement expertise, precedent decisions, and client context. GRC Platform automates compliance advisory end-to-end. Privacy Shield ensures client confidentiality through every AI interaction. New associates get access to the collective intelligence of everyone who came before them — on day one."
    badges={["PDPL", "SAMA", "CMA", "NCA"]}
    ctaText="See it for professional services."
  />
);
