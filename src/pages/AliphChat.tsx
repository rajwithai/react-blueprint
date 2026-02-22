import { Search, ShieldCheck, Users, MessageSquare, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import SplitHero from "@/components/sections/SplitHero";
import TrustBar from "@/components/sections/TrustBar";
import Section from "@/components/sections/Section";
import AlternatingFeature from "@/components/sections/AlternatingFeature";
import ImpactStats from "@/components/sections/ImpactStats";
import ComparisonTable from "@/components/sections/ComparisonTable";
import MidPageCTA from "@/components/sections/MidPageCTA";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import FeatureCard from "@/components/sections/FeatureCard";
import heroChatImg from "@/assets/images/hero-chat-ui.jpg";
import teamImg from "@/assets/images/team-collaboration.jpg";
import platformImg from "@/assets/images/platform-architecture.jpg";
import privacyImg from "@/assets/images/privacy-shield-hero.jpg";

const AliphChat = () => {
  return (
    <>
      {/* 1. Split Hero */}
      <SplitHero
        eyebrow="ALIPHCHAT"
        title="Ask anything. Expose nothing."
        subtitle="An enterprise AI assistant that searches your organization's knowledge first — and when it reaches beyond, your sensitive data has already been stripped. Arabic & English. Every answer cited."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Watch Demo", href: "/demo" }}
        badge="Live"
        trustText="No commitment required. Free personalized demo."
        image={heroChatImg}
        imageAlt="AliphChat enterprise AI interface"
      />

      {/* 2. Trust Bar */}
      <TrustBar
        stats={[
          { value: "95%+", label: "Query accuracy" },
          { value: "2", label: "Languages supported" },
          { value: "Zero", label: "PII exposure" },
          { value: "Days", label: "Time to deploy" },
        ]}
      />

      {/* 3. Product Showcase Parallax */}
      <ParallaxImage
        src={platformImg}
        alt="AliphChat platform in action"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
        overlay
        overlayOpacity={0.3}
      >
        <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            Enterprise AI that knows your business.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg text-white/80 max-w-xl mx-auto"
          >
            Deployed in days, not months. Your team is productive from week one.
          </motion.p>
        </div>
      </ParallaxImage>

      {/* 4. Alternating Features */}
      <AlternatingFeature
        features={[
          {
            eyebrow: "SEARCH",
            icon: Search,
            title: "Sovereign Search",
            description: "Ask in Arabic, English, or both. Answers come from your own knowledge base first — with the source document cited.",
            bullets: ["Multi-turn conversations", "Confidence scoring", "Source citations on every answer", "Cross-document reasoning"],
            image: heroChatImg,
            imageAlt: "Sovereign search interface",
            link: { label: "Learn more", href: "/products/organization-memory" },
          },
          {
            eyebrow: "PRIVACY",
            icon: ShieldCheck,
            title: "Built-in Privacy Engine",
            description: "Every query is scanned for sensitive data. Every entity is masked before external AI is reached. Encrypted. Expiring. Auditable.",
            bullets: ["Automatic PII detection", "Bilingual NER (Arabic & English)", "Zero data transmitted externally", "Complete audit trail"],
            image: privacyImg,
            imageAlt: "Privacy Shield masking flow",
            link: { label: "Learn more", href: "/products/privacy-shield" },
          },
          {
            eyebrow: "PERMISSIONS",
            icon: Users,
            title: "Inherited Permissions",
            description: "No new access structures to build. AliphChat sees exactly what each employee is authorized to see in your existing systems.",
            bullets: ["Google Workspace integration", "Microsoft 365 support", "Network drive access", "SSO provisioning"],
            image: teamImg,
            imageAlt: "Permission-based access control",
          },
        ]}
      />

      {/* 5. Impact Stats */}
      <ImpactStats
        eyebrow="IMPACT"
        title="The difference is measurable."
        stats={[
          { value: "95%+", label: "Accuracy Rate", detail: "On enterprise knowledge queries" },
          { value: "<3s", label: "Response Time", detail: "Average query to cited answer" },
          { value: "100%", label: "Audit Coverage", detail: "Every interaction logged" },
          { value: "Days", label: "Deployment", detail: "Not months. Not quarters." },
        ]}
      />

      {/* 6. How It Works */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          How it works.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 text-center max-w-xl mx-auto"
        >
          Three steps from deployment to intelligence.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Connect", desc: "Link your existing knowledge sources — Google Drive, SharePoint, local files. Permissions are inherited automatically." },
            { step: "02", title: "Ask", desc: "Type your question in Arabic or English. AliphChat searches your knowledge base first, then reaches external AI with masked data." },
            { step: "03", title: "Get Cited Answers", desc: "Every answer includes source citations. Full audit trail. Confidence scoring. Your compliance team can verify everything." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">{s.step}</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. Comparison Table */}
      <ComparisonTable
        title="Why not just use ChatGPT?"
        subtitle="Generic AI tools weren't built for regulated enterprise. AliphChat was."
        competitorName="ChatGPT / Copilot"
        aliphName="AliphChat"
        rows={[
          { feature: "Data stays sovereign", competitor: false, aliph: true },
          { feature: "Searches your documents", competitor: false, aliph: true },
          { feature: "PII masking", competitor: false, aliph: true },
          { feature: "Native Arabic", competitor: false, aliph: true },
          { feature: "Complete audit trail", competitor: false, aliph: true },
          { feature: "PDPL compliant", competitor: false, aliph: true },
          { feature: "Inherits permissions", competitor: false, aliph: true },
          { feature: "Source citations", competitor: false, aliph: true },
        ]}
        alabaster
      />

      {/* 8. Mid-page CTA */}
      <MidPageCTA
        title="See AliphChat in action."
        subtitle="Book a personalized demo with your own data."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />

      {/* 9. Use Cases */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground tracking-tight"
        >
          What teams actually do with AliphChat.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-12 max-w-2xl"
        >
          From legal research to onboarding new hires — AliphChat transforms how teams access institutional knowledge.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Zap} title="Legal Research" description="Find relevant precedents, regulations, and internal policies in seconds. Cited to source." delay={0} />
          <FeatureCard icon={Users} title="Employee Onboarding" description="New hires access institutional knowledge from day one. No more shadowing for months." delay={80} />
          <FeatureCard icon={Globe} title="Bilingual Workflows" description="Ask in Arabic, get answers from English documents. Seamless code-switching." delay={160} />
          <FeatureCard icon={MessageSquare} title="Audit Preparation" description="Surface compliance evidence instantly. Every interaction logged and traceable." delay={240} />
        </div>
      </Section>

      {/* 10. Final CTA */}
      <CTABanner
        title="Give your team world-class AI without the risk."
        subtitle="No commitment. No credit card. See it live."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
};

export default AliphChat;
