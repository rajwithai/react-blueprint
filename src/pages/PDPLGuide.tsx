import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, FileCheck, Scale, BookOpen, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import riyadhImg from "@/assets/images/riyadh-office.jpg";

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

      {/* Parallax */}
      <ParallaxImage
        src={riyadhImg}
        alt="Saudi Arabia regulatory environment"
        className="h-[40vh] md:h-[50vh]"
        speed={0.2}
        overlay
        overlayOpacity={0.3}
      >
        <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            PDPL compliance is not optional.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 1: Guide Content */}
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
              <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4 text-foreground">{`${i + 1}. ${s.title}`}</h2>
              <p className="font-body text-muted-foreground leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 2: Key stats */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          PDPL by the numbers.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { metric: "SAR 5M", label: "Max penalty per violation" },
            { metric: "2024", label: "Full enforcement year" },
            { metric: "100%", label: "Organizations must comply" },
            { metric: "72 hrs", label: "Breach notification window" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-heading font-bold text-2xl text-gradient mb-1">{stat.metric}</p>
              <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 3: Risks */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Common compliance risks with AI.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={AlertTriangle} title="Uncontrolled Data Transfer" description="Every ChatGPT query sends data to US servers. If it contains PII, that's a cross-border transfer violation." delay={0} />
          <FeatureCard icon={Shield} title="No Data Minimization" description="Consumer AI tools process all data sent. PDPL requires organizations to minimize data processing to what's necessary." delay={80} />
          <FeatureCard icon={FileCheck} title="Missing Audit Trail" description="Regulators expect evidence of compliance. Consumer AI tools provide no audit capability." delay={160} />
        </div>
      </Section>

      {/* Section 4: How Aliph helps */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          How Aliph enables compliant AI adoption.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Shield} title="Privacy Shield" description="PII is detected and masked before any external AI model is reached. Zero data exposure." delay={0} />
          <FeatureCard icon={Scale} title="Data Minimization" description="Only the minimum necessary data is transmitted. Personal information is stripped automatically." delay={80} />
          <FeatureCard icon={BookOpen} title="Audit Trail" description="Complete logs of every AI interaction. Who asked what, when, and what data was involved." delay={160} />
        </div>
      </Section>

      {/* Section 5: Assessment */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            Not sure where you stand?
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            We offer a free PDPL compliance assessment for enterprises evaluating AI adoption. Understand your exposure. See how Aliph addresses each gap.
          </p>
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
