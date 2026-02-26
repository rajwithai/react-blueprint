import { Radar, Shield, Zap, Brain } from "lucide-react";
import IndustryPageTemplate, { IndustryPageData } from "@/components/sections/IndustryPageTemplate";

const data: IndustryPageData = {
  label: "FINANCIAL SERVICES — FINTECH, INVESTMENT, INSURANCE",
  headline: "SAMA requires data sovereignty. Every fintech using global AI tools is one audit away from a serious problem.",
  subtext: "From regulatory monitoring to KYC automation to portfolio research — Aliph gives financial services firms sovereign AI that delivers full analytical power while keeping client financial data within your walls. SAMA, CMA, and PDPL compliance built in from day one.",
  primaryCta: { label: "Book a Financial Services AI Assessment", href: "/demo" },
  secondaryCta: { label: "See the Platform →", href: "/platform" },
  badges: ["SAMA", "CMA", "PDPL", "AML"],

  realityLabel: "YOUR REALITY TODAY",
  realityHeadline: "Your analysts use AI every day. Your compliance team doesn't know.",
  realitySubtext: "Your compliance officer manually tracks SAMA regulatory updates across dozens of circulars per quarter. Your analysts paste client portfolio data into ChatGPT to speed up research — not because they don't care about security, but because there's no sovereign alternative. Your KYC process takes days of document review that could take hours. Risk models sit in spreadsheets that one person understands. And when your head of risk moves to a competitor, their interpretation of every SAMA circular and CMA requirement walks out the door.",
  painCards: [
    { title: "Client financial data leaves your walls every time an analyst uses ChatGPT.", body: "Portfolio data, financial projections, client identities — sent to US servers with every AI query. No audit trail. No governance. One SAMA audit away from sanctions." },
    { title: "SAMA publishes a new circular. You hear about it weeks later.", body: "Manual regulatory monitoring means your compliance team is always behind. New requirements discovered during audits, not before. Reactive instead of proactive." },
    { title: "Your head of risk resigns. Their regulatory expertise vanishes.", body: "Ten years of interpreting SAMA circulars, navigating CMA requirements, and building risk frameworks — gone. Their replacement starts from zero. Institutional knowledge was never captured." },
  ],

  withAliphLabel: "WITH ALIPH",
  withAliphHeadline: "Full analytical power. Full sovereignty. Full compliance.",
  withAliphSubtext: "Aliph gives your financial services firm sovereign AI that monitors regulations, protects client data, and captures institutional knowledge — permanently.",
  transformCards: [
    { icon: Radar, title: "SAMA and CMA — monitored automatically.", body: "New circulars analyzed within hours of publication. Impact assessment on your current compliance posture generated automatically. Your compliance team is proactive, not reactive. No regulatory update catches you off guard." },
    { icon: Shield, title: "Client financial data — fully sovereign.", body: "Analysts get full AI analytical power through Privacy Shield. Client portfolio data, financial projections, and identities are detected and handled before any external AI model sees them. Your analysts get the intelligence. Clients get the sovereignty." },
    { icon: Zap, title: "KYC and due diligence — hours, not days.", body: "Document review automated against regulatory requirements. Client identification, beneficial ownership, and risk screening processed on-premise. AML pattern detection without exposing client data to external systems." },
    { icon: Brain, title: "Regulatory expertise — captured permanently.", body: "Every SAMA circular interpretation, every CMA compliance decision, every risk framework preserved in Organization Memory. New hires access a decade of institutional regulatory knowledge from day one. Your firm's expertise compounds — it never walks out the door." },
  ],

  useCasesLabel: "USE CASES",
  useCasesHeadline: "How financial services teams use Aliph every day.",
  useCasesSubtext: "From compliance officers to analysts to risk management — sovereign AI for every function.",
  useCases: [
    { team: "Compliance Officers", scenario: "SAMA publishes a new circular on Tuesday. Your board wants an impact assessment by Thursday. Your team usually takes three weeks.", body: "The GRC Platform analyzed the circular within hours of publication. Impact assessment against your current policies generated automatically. Your team reviews, adds judgment, and presents to the board on Wednesday. Ahead of schedule. Fully cited." },
    { team: "Research Analysts", scenario: "Your analyst needs to research a potential acquisition target but the financial data is highly confidential.", body: "AliphChat lets analysts query financial databases, company documents, and market data through Privacy Shield. The AI provides analysis. Client-sensitive details never reach external servers. Research quality of a top-tier firm. Confidentiality of a vault." },
    { team: "Risk Management", scenario: "Your risk models live in spreadsheets that one person built three years ago. Nobody else fully understands them.", body: "Organization Memory captures risk frameworks, model documentation, and decision rationale. Any team member can query 'how does our interest rate risk model work?' and get sourced answers from your own documentation. Institutional knowledge accessible to everyone, not locked in one person's head." },
  ],

  regulationsHeadline: "Regulatory frameworks mapped for Saudi financial services.",
  regulations: [
    { acronym: "SAMA", name: "Saudi Arabian Monetary Authority", description: "Cybersecurity framework, outsourcing guidelines, data governance, consumer protection. New circulars monitored and analyzed continuously." },
    { acronym: "CMA", name: "Capital Markets Authority", description: "Corporate governance, disclosure requirements, market conduct rules, shareholder communications." },
    { acronym: "PDPL", name: "Personal Data Protection Law", description: "Client data classification, consent management, cross-border transfer restrictions. Full compliance mapping for financial institutions." },
    { acronym: "AML", name: "Anti-Money Laundering", description: "Customer due diligence requirements, suspicious activity reporting, beneficial ownership identification. On-premise processing ensures client data sovereignty." },
  ],

  ctaHeadline: "See how Aliph works with your financial data — securely.",
  ctaSubtext: "Bring your SAMA compliance challenges, your KYC workflows, or your regulatory monitoring needs. We'll demonstrate sovereign AI on financial services scenarios live. 30 minutes. No commitment. No client data required for the demo.",
  ctaPrimary: { label: "Book a Financial Services AI Assessment", href: "/demo" },
  ctaSecondary: { label: "Download the Financial Services Sovereignty Guide", href: "/company/contact" },
  ctaTrust: "No sales pitch. See sovereign AI working on real financial services scenarios.",
};

const FinancialServices = () => <IndustryPageTemplate data={data} />;
export default FinancialServices;
