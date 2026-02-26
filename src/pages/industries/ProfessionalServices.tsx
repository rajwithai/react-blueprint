import { Search, Shield, FileText, Brain } from "lucide-react";
import IndustryPageTemplate, { IndustryPageData } from "@/components/sections/IndustryPageTemplate";

const data: IndustryPageData = {
  label: "PROFESSIONAL SERVICES — LEGAL, ADVISORY, CONSULTING",
  headline: "Client confidentiality is existential. AI can 10x your output — but only if client data never leaves your systems.",
  subtext: "From precedent research to contract analysis to compliance engagements — Aliph gives advisory firms sovereign AI that turns decades of institutional knowledge into a permanent, searchable intelligence layer. Your clients get faster results. Their data stays fully protected.",
  primaryCta: { label: "Book an Advisory AI Assessment", href: "/demo" },
  secondaryCta: { label: "See the Platform →", href: "/platform" },
  badges: ["PDPL", "SAMA", "CMA", "NCA"],

  realityLabel: "YOUR REALITY TODAY",
  realityHeadline: "Your firm's greatest asset is institutional knowledge. And it's disappearing.",
  realitySubtext: "Your junior associates spend weeks on regulatory research that senior partners could answer in minutes — if they weren't in client meetings. Your firm's 20 years of engagement history lives in scattered folders nobody searches. Proposals get written from scratch every time because nobody can find the precedent from three years ago. Your associates paste client financial data into ChatGPT to speed up analysis — not because they don't care about confidentiality, but because there's no sovereign alternative. And when a partner retires, their client relationships, regulatory interpretations, and hard-won lessons vanish overnight.",
  painCards: [
    { title: "Every proposal starts from scratch.", body: "Three years ago your firm delivered the exact same type of engagement. The deliverables exist somewhere. Nobody can find them. Your junior associate spends two weeks recreating what already exists." },
    { title: "Client data is one ChatGPT query from exposure.", body: "Your associates use AI tools daily for research and analysis. Every query containing client financial data, contract terms, or strategic details is sent to foreign servers. No audit trail. No governance." },
    { title: "When partners leave, decades of expertise leave with them.", body: "Regulatory interpretations, client relationship nuances, industry-specific insights — twenty years of hard-won knowledge locked in one person's head. When they retire, your firm's competitive advantage walks out the door." },
  ],

  withAliphLabel: "WITH ALIPH",
  withAliphHeadline: "Every engagement, every precedent, every regulatory interpretation — searchable, sovereign, permanent.",
  withAliphSubtext: "Aliph turns your firm's accumulated knowledge into a competitive advantage that compounds with every engagement and never leaves.",
  transformCards: [
    { icon: Search, title: "Precedent search — instant.", body: "Search across every past engagement, deliverable, proposal, and regulatory interpretation your firm has ever produced. Ask AliphChat 'what approach did we use for the SAMA compliance engagement last year?' and get cited answers in seconds." },
    { icon: Shield, title: "Client confidentiality — guaranteed.", body: "Privacy Shield protects client data in every AI interaction. Names, financials, contract terms — detected and handled automatically in Arabic and English. External AI models never see your clients' sensitive information." },
    { icon: FileText, title: "Compliance work — days, not months.", body: "The GRC Platform's agentic AI researches regulations, maps client documents against requirements, identifies gaps, and drafts remediation reports. Advisory-firm quality output delivered in hours. Your team validates and adds judgment." },
    { icon: Brain, title: "Institutional knowledge — permanent.", body: "Every regulatory interpretation, every client approach, every lesson learned captured in Organization Memory. Junior associates access decades of partner expertise from day one. When someone leaves, their knowledge stays." },
  ],

  useCasesLabel: "USE CASES",
  useCasesHeadline: "How advisory teams use Aliph every day.",
  useCasesSubtext: "From senior partners to junior associates to compliance teams — sovereign AI for every role in your firm.",
  useCases: [
    { team: "Senior Partners", scenario: "You're in back-to-back client meetings. Your team needs your regulatory expertise but you're unavailable until Thursday.", body: "Organization Memory captures your regulatory interpretations, engagement approaches, and client insights. Your team queries your expertise through AliphChat — getting sourced answers from your actual work, filtered by appropriate access levels. Your knowledge multiplies without your calendar." },
    { team: "Junior Associates", scenario: "You're assigned a new PDPL compliance engagement. You've never done one before. The last person who did it left the firm.", body: "Search for 'PDPL compliance engagement approach' in AliphChat. Get the full methodology, past deliverables, regulatory interpretations, and client communication templates — all from your firm's own history. What used to take weeks of stumbling through folders takes minutes." },
    { team: "Compliance & Risk Teams", scenario: "A client calls asking about the impact of a new SAMA circular published yesterday. They need your analysis by Friday.", body: "The GRC Platform has already analyzed the circular. Impact assessment against your client's existing documentation generated automatically. Your team reviews, adds expert judgment, and delivers by Wednesday — not Friday. Client impressed. Engagement retained." },
  ],

  regulationsHeadline: "Regulatory frameworks mapped for Saudi advisory firms.",
  regulations: [
    { acronym: "PDPL", name: "Personal Data Protection Law", description: "Full compliance mapping for advisory engagements. Client data classification, consent frameworks, cross-border rules." },
    { acronym: "SAMA", name: "Saudi Arabian Monetary Authority", description: "Financial sector regulations for advisory firms serving banks, fintechs, and insurance companies." },
    { acronym: "CMA", name: "Capital Markets Authority", description: "Corporate governance, disclosure requirements, board reporting standards." },
    { acronym: "NCA", name: "National Cybersecurity Authority", description: "Cybersecurity controls, risk assessment frameworks, incident response requirements." },
  ],

  ctaHeadline: "See how Aliph transforms your advisory practice.",
  ctaSubtext: "Bring a sample engagement, a regulatory question, or your firm's compliance challenges. We'll show you the precedent search, the privacy protection, and the GRC automation live. 30 minutes. Partner to CTO.",
  ctaPrimary: { label: "Book an Advisory AI Assessment", href: "/demo" },
  ctaSecondary: { label: "Download the Professional Services Guide", href: "/company/contact" },
  ctaTrust: "No sales pitch. See sovereign AI working on real advisory scenarios.",
};

const ProfessionalServices = () => <IndustryPageTemplate data={data} />;
export default ProfessionalServices;
