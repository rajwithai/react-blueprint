import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";

const sections = [
  { title: "What Is PDPL?", content: "Saudi Arabia's Personal Data Protection Law, enacted by SDAIA, establishes comprehensive requirements for how personal data is collected, processed, stored, and transferred by any organization operating in the Kingdom." },
  { title: "Who Must Comply?", content: "Every organization that processes personal data of Saudi residents — regardless of where the organization is headquartered. Private companies, government entities, non-profits. No exceptions." },
  { title: "Key Requirements", content: "Data minimization. Purpose limitation. Storage limitation. Data subject rights (access, correction, deletion). Cross-border transfer controls. Consent management. Breach notification." },
  { title: "Penalties", content: "Up to SAR 5 million per violation. Repeat offenses carry increased penalties and operational restrictions." },
  { title: "The AI Problem", content: "Every employee using a cloud AI tool transmits data to foreign servers. If that data contains personal information — names, client records, financial details — the organization may be violating PDPL's cross-border transfer and data minimization requirements. Most enterprises don't even know this is happening." },
  { title: "The Aliph Solution", content: "Built from the ground up for PDPL. Privacy Shield masks personal data before external processing. Organization Memory keeps data sovereign. Full audit trails provide compliance evidence. This is not a bolt-on fix — it is architecture designed for this exact regulation." },
];

const PDPLGuide = () => {
  return (
    <>
      <PageHero
        eyebrow="RESOURCE"
        title="The Enterprise Guide to PDPL Compliance"
        subtitle="PDPL is live. Penalties are real. This is what your organization needs to know — and how AI adoption fits within the framework."
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4">{`${i + 1}. ${s.title}`}</h2>
              <p className="font-body text-muted-foreground leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Want a PDPL compliance assessment?"
        subtitle="Request a free consultation."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default PDPLGuide;
