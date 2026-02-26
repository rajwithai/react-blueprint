import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Brain, FileCheck, Users, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import MidPageCTA from "@/components/sections/MidPageCTA";
import ParallaxImage from "@/components/sections/ParallaxImage";
import financialImg from "@/assets/images/financial-services.jpg";
import healthcareImg from "@/assets/images/healthcare.jpg";
import professionalImg from "@/assets/images/professional-services.jpg";
import teamImg from "@/assets/images/team-collaboration.jpg";

interface IndustryPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  challengeTitle: string;
  challengeBody: string;
  solutionTitle: string;
  solutionBody: string;
  badges: string[];
  ctaText: string;
  capabilities: { icon: any; title: string; description: string }[];
  stats: { metric: string; label: string }[];
}

const IndustryPage = ({ eyebrow, title, subtitle, heroImage, heroImageAlt, challengeTitle, challengeBody, solutionTitle, solutionBody, badges, ctaText, capabilities, stats }: IndustryPageProps) => (
  <>
    <PageHero
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      primaryCta={{ label: "Request a Demo", href: "/demo" }}
    />

    {/* Parallax Hero */}
    <ParallaxImage
      src={heroImage}
      alt={heroImageAlt}
      className="h-[50vh] md:h-[60vh]"
      speed={0.2}
    />

    {/* Section 1: Challenge */}
    <Section>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
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

    {/* Section 2: Solution */}
    <Section alabaster>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
        >
          {solutionTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground leading-relaxed text-lg"
        >
          {solutionBody}
        </motion.p>
      </div>
    </Section>

    {/* Parallax Break */}
    <ParallaxImage
      src={teamImg}
      alt="Industry team collaboration"
      className="h-[40vh] md:h-[50vh]"
      speed={0.3}
      overlay
      overlayOpacity={0.35}
    >
      <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl"
        >
          Enterprise AI that understands your industry.
        </motion.h2>
      </div>
    </ParallaxImage>

    {/* Section 3: Capabilities */}
    <Section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
      >
        Key capabilities.
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {capabilities.map((cap, i) => (
          <FeatureCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} delay={i * 80} />
        ))}
      </div>
    </Section>

    {/* Mid-Page CTA */}
    <MidPageCTA
      title={`See how ${eyebrow.toLowerCase()} leaders use Aliph`}
      subtitle="Walk through a real workflow designed for your industry."
      primaryCta={{ label: "Book a Demo", href: "/demo" }}
      secondaryCta={{ label: "Contact Sales", href: "/company/contact" }}
    />

    {/* Section 4: Stats */}
    <Section alabaster>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Impact by the numbers.
        </motion.h2>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-heading font-bold text-2xl md:text-3xl text-gradient mb-1">{stat.metric}</p>
              <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>

    {/* Section 5: Compliance Badges */}
    <Section>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground"
        >
          Regulatory coverage.
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/5 border border-accent/10">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-body text-foreground">{b}</span>
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
    heroImage={financialImg}
    heroImageAlt="Financial services technology environment"
    challengeTitle="The regulatory burden is real. The tools are not."
    challengeBody="SAMA reporting demands specialist knowledge and weeks of manual effort. Due diligence is repetitive and error-prone. AML monitoring generates noise, not signal. And when your chief compliance officer leaves, they take the institutional memory of every regulatory interpretation they ever made. Meanwhile, every analyst using ChatGPT to summarize a financial report is a PDPL violation in progress."
    solutionTitle="Aliph for financial services."
    solutionBody="Automated SAMA compliance mapping and reporting. Contract analysis with risk scoring. Due diligence that surfaces precedents in seconds. Organization Memory that retains every regulatory interpretation. And a Privacy Shield that ensures financial data stays exactly where it belongs."
    badges={["PDPL", "SAMA", "CMA"]}
    ctaText="See it for financial services."
    capabilities={[
      { icon: Shield, title: "SAMA Compliance", description: "Automated regulatory mapping, gap analysis, and reporting for SAMA requirements." },
      { icon: FileCheck, title: "Contract Analysis", description: "AI-powered contract review with risk scoring and non-compliance flagging." },
      { icon: BarChart3, title: "Risk Analytics", description: "Real-time risk assessment across your entire compliance portfolio." },
    ]}
    stats={[
      { metric: "90%", label: "Faster SAMA reporting" },
      { metric: "10x", label: "More contracts analyzed" },
      { metric: "100%", label: "Audit trail coverage" },
    ]}
  />
);

export const Healthcare = () => (
  <IndustryPage
    eyebrow="HEALTHCARE"
    title="Patient data is the most sensitive data there is. We built for that."
    subtitle="CBAHI accreditation, patient data sovereignty, clinical protocol management, and Arabic medical documentation — with the strongest privacy architecture available."
    heroImage={healthcareImg}
    heroImageAlt="Modern healthcare facility"
    challengeTitle="Healthcare faces the hardest version of this problem."
    challengeBody="Patient data carries the maximum PDPL penalties. CBAHI accreditation requires mountains of compliance evidence. Clinical protocols are scattered across departments. Arabic medical documentation requires language understanding that most AI tools lack entirely. Using consumer AI tools in a healthcare setting isn't just a compliance risk. It's a patient safety issue."
    solutionTitle="Aliph for healthcare."
    solutionBody="Privacy Shield with healthcare-specific detection — patient IDs, diagnosis codes, medical records. CBAHI audit preparation with automated compliance mapping. Clinical knowledge management with semantic search across every department. Arabic medical document processing that actually works."
    badges={["PDPL", "CBAHI", "MOH"]}
    ctaText="See it for healthcare."
    capabilities={[
      { icon: Shield, title: "Patient Data Protection", description: "Healthcare-specific PII detection covering patient IDs, diagnosis codes, and medical records." },
      { icon: Brain, title: "Clinical Knowledge", description: "Semantic search across clinical protocols, department guidelines, and medical literature." },
      { icon: Users, title: "CBAHI Accreditation", description: "Automated compliance mapping and evidence generation for CBAHI audit requirements." },
    ]}
    stats={[
      { metric: "100%", label: "Patient data sovereignty" },
      { metric: "80%", label: "Faster CBAHI preparation" },
      { metric: "95%+", label: "Medical entity detection" },
    ]}
  />
);

export const ProfessionalServices = () => (
  <IndustryPage
    eyebrow="PROFESSIONAL SERVICES"
    title="When expertise is the product, losing it is existential."
    subtitle="Client confidentiality, engagement intelligence, and institutional knowledge that stays — even when partners don't. For firms where what you know is what you sell."
    heroImage={professionalImg}
    heroImageAlt="Professional services environment"
    challengeTitle="Every departure is a knowledge event."
    challengeBody="When a senior partner retires, they take decades of client relationships, regulatory interpretations, and engagement precedents. The next person starts from scratch. Every client engagement reinvents work that was done before. And client confidentiality requirements make commercial AI tools unusable — so teams work manually while competitors accelerate."
    solutionTitle="Aliph for professional services."
    solutionBody="Organization Memory captures engagement expertise, precedent decisions, and client context. GRC Platform automates compliance advisory end-to-end. Privacy Shield ensures client confidentiality through every AI interaction. New associates get access to the collective intelligence of everyone who came before them — on day one."
    badges={["PDPL", "SAMA", "CMA", "NCA"]}
    ctaText="See it for professional services."
    capabilities={[
      { icon: Brain, title: "Engagement Memory", description: "Capture and surface expertise from every past engagement. New hires access decades of precedent." },
      { icon: FileCheck, title: "Advisory Automation", description: "AI-powered compliance mapping, contract analysis, and document generation at Big Four quality." },
      { icon: TrendingUp, title: "Client Intelligence", description: "Search across client history, engagement precedents, and regulatory interpretations instantly." },
    ]}
    stats={[
      { metric: "10x", label: "Faster onboarding" },
      { metric: "Zero", label: "Client data exposure" },
      { metric: "85%", label: "Less repetitive work" },
    ]}
  />
);
