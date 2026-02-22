import { Link } from "react-router-dom";
import { Search, ShieldCheck, Users, MessageSquare, CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const beforeAfter = [
  { without: "Employees use ChatGPT. You don't know what data leaves.", withAliph: "Every query is audited. Sensitive data is masked automatically." },
  { without: "A senior partner leaves. Their knowledge leaves with them.", withAliph: "Their expertise is in Organization Memory. Accessible to the next person, instantly." },
  { without: "Searching for a past decision means digging through email and folders.", withAliph: "Ask in natural language. Get the answer with the source document cited." },
  { without: "Compliance team discovers unauthorized AI use after the fact.", withAliph: "Full visibility from day one. Admin dashboard. Usage analytics." },
];

const comparison = [
  { cap: "Data stays sovereign", chatgpt: false, aliph: true },
  { cap: "Searches your documents", chatgpt: false, aliph: true },
  { cap: "PII masking", chatgpt: false, aliph: true },
  { cap: "Native Arabic", chatgpt: false, aliph: true },
  { cap: "Audit trail", chatgpt: false, aliph: true },
  { cap: "PDPL compliant", chatgpt: false, aliph: true },
  { cap: "Inherits your permissions", chatgpt: false, aliph: true },
  { cap: "Source citations", chatgpt: false, aliph: true },
];

const AliphChat = () => {
  return (
    <>
      <PageHero
        eyebrow="ALIPHCHAT"
        title="Ask anything. Expose nothing."
        subtitle="An enterprise AI assistant that searches your organization's knowledge first — and when it reaches beyond, your sensitive data has already been stripped. Natural language. Arabic and English. Every answer cited. Every interaction audited."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        badge="Live"
      />

      {/* What Changes */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          The difference is immediate.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {beforeAfter.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border overflow-hidden"
            >
              <div className="bg-secondary p-5 border-b border-border">
                <p className="text-xs uppercase tracking-wider text-destructive mb-2 font-heading font-semibold">Without AliphChat</p>
                <p className="font-body text-sm text-muted-foreground">{item.without}</p>
              </div>
              <div className="bg-accent/5 p-5">
                <p className="text-xs uppercase tracking-wider text-primary mb-2 font-heading font-semibold">With AliphChat</p>
                <p className="font-body text-sm text-foreground">{item.withAliph}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Built for the enterprise, not the consumer.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard icon={Search} title="Sovereign Search" description="Ask in Arabic, English, or both. Answers come from your own knowledge base first — with the source document cited. Multi-turn conversations. Confidence scoring." delay={0} />
          <FeatureCard icon={ShieldCheck} title="Privacy Engine" description="Every query scanned for sensitive data. Every entity masked before external AI is reached. Encrypted. Expiring. Auditable." delay={100} />
          <FeatureCard icon={Users} title="Inherited Permissions" description="No new access structures to build. AliphChat sees exactly what each employee is authorized to see in your existing systems — Google Drive, SharePoint, network drives." delay={200} />
          <FeatureCard icon={MessageSquare} title="Enterprise Ready" description="SSO with Google Workspace and Microsoft 365. Admin dashboard. Usage analytics. Deployed in days, not months." delay={300} />
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Why not just use ChatGPT?
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <span className="font-heading font-semibold text-sm"></span>
            <span className="font-heading font-semibold text-sm text-center text-muted-foreground">ChatGPT / Copilot</span>
            <span className="font-heading font-semibold text-sm text-center text-primary">AliphChat</span>
          </div>
          {comparison.map((row, i) => (
            <motion.div
              key={row.cap}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="grid grid-cols-3 gap-4 py-3 px-4 border-b border-border/50 items-center"
            >
              <span className="font-body text-sm text-foreground">{row.cap}</span>
              <div className="flex justify-center"><X className="h-4 w-4 text-destructive" /></div>
              <div className="flex justify-center"><CheckCircle2 className="h-4 w-4 text-primary" /></div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Give your team world-class AI without the risk."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default AliphChat;