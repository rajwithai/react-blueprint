import { Link } from "react-router-dom";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";

const sections = [
  { title: "What Is PDPL?", content: "Saudi Arabia's Personal Data Protection Law, enacted by SDAIA, establishes comprehensive data protection requirements for all organizations operating in the Kingdom. It governs how personal data is collected, processed, stored, and transferred." },
  { title: "Who Must Comply?", content: "Every organization that collects or processes personal data of Saudi residents, regardless of where the organization is headquartered. This includes all private sector companies, government entities, and non-profits." },
  { title: "Key Requirements", content: "Data minimization — collect only what is necessary. Purpose limitation — use data only for the stated purpose. Storage limitation — retain data only as long as needed. Data subject rights — access, correction, deletion. Cross-border transfer controls — restrictions on sending data outside KSA. Consent management — clear, informed consent for data processing. Breach notification — mandatory notification within specified timeframes." },
  { title: "Penalties", content: "Violations carry penalties up to SAR 5 million per incident. Repeat violations can result in increased penalties and operational restrictions." },
  { title: "How AI Adoption Creates PDPL Risk", content: "Every time an employee uses a cloud-based AI tool like ChatGPT, Copilot, or Gemini, the data entered into the query is transmitted to foreign servers. If that data includes any personal information — employee names, client records, financial details — the organization may be in violation of PDPL's cross-border transfer controls." },
  { title: "How Aliph Solves PDPL + AI", content: "Aliph's four-layer architecture was designed specifically for PDPL compliance. The Privacy Shield masks all personal data before any external AI processing. Organization Memory keeps data on-premise or in-region. Full audit trails provide compliance evidence." },
];

const PDPLGuide = () => {
  return (
    <>
      <HeroSection
        eyebrow="RESOURCE"
        title="The Enterprise Guide to PDPL Compliance"
        subtitle="Saudi Arabia's Personal Data Protection Law is live and enforced. Penalties reach SAR 5 million per violation. This guide explains what PDPL requires, how enterprises must comply, and how AI adoption fits within the regulatory framework."
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4">{`${i + 1}. ${s.title}`}</h2>
              <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">{s.content}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Want a PDPL compliance assessment for your organization?"
        subtitle="Request a free consultation."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default PDPLGuide;
