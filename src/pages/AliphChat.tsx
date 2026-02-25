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
        eyebrow="ALIPHCHAT — SOVEREIGN ENTERPRISE AI ASSISTANT"
        title="Ask anything. Expose nothing."
        subtitle="Give every employee ChatGPT-level intelligence. Keep every byte of sensitive data inside your walls. Arabic and English. Fully audited. Deployed in days."
        primaryCta={{ label: "Try AliphChat", href: "/demo" }}
        secondaryCta={{ label: "See How It Works ↓", href: "#how-it-works" }}
        metrics={[
          { value: "Zero", label: "Data exposure" },
          { value: "Arabic + English", label: "Natively built in" },
          { value: "Days", label: "To deploy" },
          { value: "Every", label: "Interaction logged" },
        ]}
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

      {/* 2. How It Works — 4-Step Pipeline */}
      <Section id="how-it-works">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4 text-center"
        >
          HOW IT WORKS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground text-center tracking-tight"
        >
          From question to sovereign answer{" "}
          <br className="hidden sm:block" />
          in four steps.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-body text-muted-foreground mb-14 text-center max-w-xl mx-auto"
        >
          No training needed. No IT configuration. Your team starts asking questions on day one.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Connect your knowledge.",
              desc: "Point at Google Drive, SharePoint, shared folders. Aliph indexes everything. Inherits your permissions. No data migration.",
              highlight: false,
            },
            {
              step: "02",
              title: "Your employee asks a question.",
              desc: "In Arabic or English. About contracts, regulations, policies, performance — anything. Like talking to a colleague who's read every document in the company.",
              highlight: false,
            },
            {
              step: "03",
              title: "Aliph searches your documents first. Protects your data if it goes further.",
              desc: "Checks Organization Memory before any external call. If external AI needed, Privacy Shield strips sensitive data first.",
              highlight: true,
            },
            {
              step: "04",
              title: "Answer delivered. Sources cited. Everything logged.",
              desc: "Clear answer with document citations. Full interaction logged to immutable audit trail. Compliance-ready at any moment.",
              highlight: false,
            },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex"
            >
              {i > 0 && (
                <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M6 4l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {i > 0 && (
                <div className="flex lg:hidden absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M4 6l6 8 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div
                className={`flex-1 rounded-2xl p-7 md:p-8 text-center transition-all ${
                  s.highlight
                    ? "border-2 border-accent bg-accent/5 shadow-[0_0_30px_-8px_hsl(var(--accent)/0.25)]"
                    : "border border-border bg-background"
                }`}
              >
                <span className={`font-heading font-bold text-3xl ${s.highlight ? "text-accent" : "text-accent/70"}`}>
                  {s.step}
                </span>
                <h3 className="font-heading font-semibold text-lg mt-4 mb-3 text-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

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
