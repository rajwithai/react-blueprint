import { motion } from "framer-motion";
import { RefreshCw, Users, TrendingUp, Database, Search, Lock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import orgMemoryImg from "@/assets/images/org-memory-hero.jpg";
import teamImg from "@/assets/images/team-collaboration.jpg";

const dataSources = [
  { name: "Google Drive", status: "Live" },
  { name: "Local File Systems", status: "Live" },
  { name: "Direct Uploads", status: "Live" },
  { name: "Microsoft 365", status: "Q2 2026" },
  { name: "Salesforce", status: "Q3 2026" },
];

const OrganizationMemory = () => {
  return (
    <>
      <PageHero
        eyebrow="ORGANIZATION MEMORY"
        title="Twenty years of expertise. Available in seconds."
        subtitle="Every document, every decision, every lesson — indexed, searchable, and secured by the permissions you already have."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
      />

      {/* Parallax Hero */}
      <ParallaxImage
        src={orgMemoryImg}
        alt="Organization Memory knowledge network"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
      />

      {/* Section 1: The Promise */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground tracking-tight"
          >
            When people leave,<br />
            <span className="text-muted-foreground">their knowledge doesn't.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            Organization Memory is not a document repository. It is a living intelligence layer that inherits, indexes, and surfaces institutional knowledge — filtered by role, cited to source, available in natural language.
          </motion.p>
        </div>
      </Section>

      {/* Section 2: Connected Systems */}
      <Section alabaster>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          INTEGRATIONS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Connects to where knowledge already lives.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {dataSources.map((ds, i) => (
            <motion.div
              key={ds.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <span className="font-heading font-medium text-sm text-foreground block mb-2">{ds.name}</span>
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wider ${ds.status === "Live" ? "text-accent bg-accent/10" : "text-muted-foreground bg-secondary"}`}>
                {ds.status}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 3: Permissions */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground tracking-tight"
            >
              Your permissions.<br />
              <span className="text-muted-foreground">Automatically.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-muted-foreground leading-relaxed mb-4"
            >
              Aliph inherits your existing permission structure. Same question, different depth — based on organizational role. Zero admin configuration.
            </motion.p>
            <p className="font-body text-sm text-muted-foreground/60">
              Permission changes propagate in minutes. SSO deprovisioning revokes access immediately.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="rounded-2xl border border-accent/20 bg-card p-6">
              <p className="text-xs uppercase tracking-wider text-accent mb-2 font-heading font-semibold">CEO query result</p>
              <p className="font-body text-sm text-muted-foreground">Full policy + HR notes + legal precedents</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-heading font-semibold">Analyst query result</p>
              <p className="font-body text-sm text-muted-foreground">Company-wide policy document only</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Parallax Break */}
      <ParallaxImage
        src={teamImg}
        alt="Knowledge sharing across teams"
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
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            Knowledge that compounds with every interaction.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 4: Core capabilities */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Core capabilities.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Database} title="Semantic Indexing" description="Documents are indexed by meaning, not just keywords. Ask complex questions and get relevant answers instantly." delay={0} />
          <FeatureCard icon={Search} title="Natural Language Search" description="Ask in Arabic or English. Get cited answers from across your entire knowledge base in seconds." delay={80} />
          <FeatureCard icon={Lock} title="Zero Exposure" description="All indexing and search happens within your infrastructure. No document content is ever transmitted externally." delay={160} />
        </div>
      </Section>

      {/* Section 5: Gets Smarter */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Intelligence that compounds.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={RefreshCw} title="Learns from feedback" description="Corrections and approvals refine every future response." delay={0} />
          <FeatureCard icon={Users} title="Captures new knowledge" description="Every engagement adds to institutional memory." delay={80} />
          <FeatureCard icon={TrendingUp} title="Strengthens over time" description="The platform you deploy today is the weakest version you'll ever have." delay={160} />
        </div>
      </Section>

      {/* Section 6: How it works */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground tracking-tight text-center"
        >
          From documents to intelligence.
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Connect", desc: "Link your document sources — Drive, SharePoint, local files." },
            { step: "02", title: "Index", desc: "Documents are semantically indexed within your infrastructure." },
            { step: "03", title: "Query", desc: "Ask questions in natural language. Get cited answers instantly." },
            { step: "04", title: "Learn", desc: "Feedback improves results. Knowledge compounds over time." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-xl text-accent">{s.step}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Stop losing what your organization knows."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
      />
    </>
  );
};

export default OrganizationMemory;
