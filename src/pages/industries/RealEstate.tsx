import { Search, Shield, BarChart3, Brain } from "lucide-react";
import IndustryPageTemplate, { IndustryPageData } from "@/components/sections/IndustryPageTemplate";

const data: IndustryPageData = {
  label: "REAL ESTATE & PROPERTY MANAGEMENT",
  headline: "Saudi real estate is a SAR 2.31 trillion market. AI can transform it — but only if your tenant data stays within your walls.",
  subtext: "From portfolio intelligence to lease management to regulatory compliance — Aliph gives real estate companies sovereign AI that works across every property, every document, and every tenant interaction. PDPL-compliant from day one.",
  primaryCta: { label: "Book a Real Estate AI Assessment", href: "/demo" },
  secondaryCta: { label: "See the Platform →", href: "/platform" },
  badges: ["PDPL", "RERA", "Municipal Requirements"],

  realityLabel: "YOUR REALITY TODAY",
  realityHeadline: "Your properties generate massive amounts of data. None of it is governed.",
  realitySubtext: "Right now, across your portfolio, property managers are pasting tenant details into ChatGPT for lease summaries. Valuation teams are feeding financial projections into AI tools hosted on US servers. Maintenance records, ownership documents, and regulatory filings sit in folders nobody can search. And every tenant's Iqama number, financial history, and personal details in those files? One ungoverned AI query away from a PDPL violation carrying penalties up to SAR 5 million.",
  painCards: [
    { title: "Tenant data crosses borders with every AI query.", body: "Global AI tools process queries on foreign servers. Under PDPL, your tenants' personal data — IDs, financials, lease terms — is being exposed without their consent." },
    { title: "Your valuation team works blind.", body: "Market data pulled manually for every appraisal. Historical comparables buried in spreadsheets. No AI-assisted analysis because there's no sovereign way to do it." },
    { title: "Your best property manager's knowledge walks out the door.", body: "Fifteen years of relationships with municipal authorities, knowledge of every building's quirks, every tenant's history — gone when they resign. Nothing was captured." },
  ],

  withAliphLabel: "WITH ALIPH",
  withAliphHeadline: "Every document across your portfolio — searchable, sovereign, and permanent.",
  withAliphSubtext: "Aliph indexes your entire property portfolio's documents and makes them accessible through sovereign AI. Your team gets intelligence. Your tenants get privacy.",
  transformCards: [
    { icon: Search, title: "Portfolio intelligence in seconds.", body: "Every lease, contract, regulatory filing, and tenant record indexed and searchable by AI. Ask about any property, any tenant, any document — get cited answers instantly. Entirely on-premise." },
    { icon: Shield, title: "Tenant PII never leaves your systems.", body: "Privacy Shield detects tenant personal data — Iqama numbers, financials, contact details — in every query. If external AI is needed, sensitive data is stripped automatically. The AI gets the question. Never the context." },
    { icon: BarChart3, title: "Valuations backed by AI-assisted analysis.", body: "Market data, historical comparables, and portfolio performance analyzed through sovereign AI. Your valuation team gets data-driven insights without exposing proprietary financial data to external tools." },
    { icon: Brain, title: "Institutional knowledge stays — permanently.", body: "Every municipal process, every tenant relationship note, every property-specific insight captured in Organization Memory. When your senior property manager moves on, their 15 years of knowledge doesn't." },
  ],

  useCasesLabel: "USE CASES",
  useCasesHeadline: "How real estate teams use Aliph every day.",
  useCasesSubtext: "From property managers to valuation teams to compliance officers — every role gets sovereign AI tailored to their workflows.",
  useCases: [
    { team: "Property Managers", scenario: "You manage 200+ units and tenants ask the same questions every month about lease terms, maintenance, and payments.", body: "AliphChat handles tenant-facing queries in Arabic and English — sourced from actual lease documents. Maintenance requests routed intelligently. Lease renewal timelines tracked automatically. Your property managers handle relationships, not paperwork." },
    { team: "Valuation & Investment Teams", scenario: "Every appraisal starts with hours of manual data gathering from scattered sources.", body: "Ask AliphChat about comparable transactions, historical occupancy rates, or market trends across your portfolio. Get sourced answers from your own data in seconds. External market data analyzed through Privacy Shield — your proprietary models stay confidential." },
    { team: "Compliance & Legal", scenario: "RERA requirements keep changing and your team tracks updates manually across dozens of properties.", body: "The GRC Platform monitors RERA and PDPL updates automatically. Gap analyses generated per property. Compliance status reports ready for regulators at any moment. Tenant data handling audited across your entire portfolio." },
  ],

  regulationsHeadline: "Regulatory frameworks mapped for Saudi real estate.",
  regulations: [
    { acronym: "PDPL", name: "Personal Data Protection Law", description: "Tenant personal data protection — consent, storage, cross-border transfer rules. Full compliance mapping." },
    { acronym: "RERA", name: "Real Estate Regulatory Authority", description: "Property registration, transaction reporting, developer obligations." },
    { acronym: "Municipal", name: "Municipal Authority Requirements", description: "Building permits, zoning compliance, occupancy regulations. Varies by city — Riyadh, Jeddah, Dammam covered." },
  ],

  ctaHeadline: "See how Aliph works for your property portfolio.",
  ctaSubtext: "Bring your lease documents, your tenant records, or your regulatory filings. We'll run them through the platform live — show you the search, the privacy protection, and the compliance mapping. 30 minutes. No commitment.",
  ctaPrimary: { label: "Book a Real Estate AI Assessment", href: "/demo" },
  ctaSecondary: { label: "Download the PropTech Sovereignty Guide", href: "/company/contact" },
  ctaTrust: "No sales pitch. See sovereign AI working on your actual property documents.",
};

const RealEstate = () => <IndustryPageTemplate data={data} />;
export default RealEstate;
