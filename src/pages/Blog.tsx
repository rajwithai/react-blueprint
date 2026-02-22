import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Shield, FileText, Globe, Cpu } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import teamImg from "@/assets/images/team-collaboration.jpg";

const blogPosts = [
  { title: "Why Sovereign AI Matters for Saudi Enterprises", category: "Sovereign AI", date: "February 2026", excerpt: "As Saudi Arabia accelerates its AI adoption under Vision 2030, data sovereignty has become the critical differentiator between responsible and reckless AI deployment." },
  { title: "Understanding PDPL: What Every Enterprise Needs to Know", category: "PDPL Compliance", date: "January 2026", excerpt: "Saudi Arabia's Personal Data Protection Law carries penalties of up to SAR 5 million per violation. Here's what your organization needs to understand." },
  { title: "The Four-Layer Architecture Behind Aliph", category: "Product Updates", date: "January 2026", excerpt: "A deep dive into how Aliph's federated architecture resolves the tension between AI capability and data sovereignty." },
  { title: "AI Governance: Beyond Checkbox Compliance", category: "Governance", date: "December 2025", excerpt: "Why traditional compliance frameworks fail for AI, and how architectural governance provides genuine protection." },
  { title: "Arabic NLP: The State of the Art in 2026", category: "Technology", date: "December 2025", excerpt: "A technical overview of Arabic language processing capabilities and why bilingual AI requires purpose-built solutions." },
  { title: "From ChatGPT to Enterprise AI: What Changes", category: "Enterprise AI", date: "November 2025", excerpt: "The gap between consumer AI tools and enterprise-grade AI infrastructure is larger than most organizations realize." },
];

const Blog = () => {
  return (
    <>
      <PageHero
        title="Insights & Resources"
        subtitle="Thought leadership on sovereign AI, PDPL compliance, and the future of enterprise intelligence."
      />

      {/* Parallax Image */}
      <ParallaxImage
        src={teamImg}
        alt="Team sharing knowledge"
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
            Knowledge that moves the industry forward.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 1: Featured Articles */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Latest articles.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-accent/5 to-primary/5" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-accent/10 text-accent">{post.category}</span>
                  <span className="text-xs font-body text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{post.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Section 2: Topics */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          Topics we cover.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Shield} title="Data Sovereignty" description="How organizations can adopt AI without compromising data control or regulatory compliance." delay={0} />
          <FeatureCard icon={FileText} title="PDPL & Regulation" description="Practical guidance on navigating Saudi Arabia's data protection landscape." delay={80} />
          <FeatureCard icon={Cpu} title="AI Architecture" description="Technical deep-dives into privacy-preserving AI systems and enterprise deployment." delay={160} />
        </div>
      </Section>

      {/* Section 3: Key Stats */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground"
          >
            The sovereign AI landscape.
          </motion.h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[
              { metric: "SAR 5M", label: "Maximum PDPL penalty per violation" },
              { metric: "78%", label: "Saudi enterprises using unauthorized AI tools" },
              { metric: "$15B", label: "Saudi AI investment under Vision 2030" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-heading font-bold text-2xl md:text-3xl text-gradient mb-1">{stat.metric}</p>
                <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4: Resources */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          Deeper resources.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={BookOpen} title="PDPL Guide" description="Comprehensive enterprise guide to PDPL compliance. Requirements, penalties, and how AI fits." delay={0} />
          <FeatureCard icon={TrendingUp} title="Market Reports" description="Research on sovereign AI adoption, regulatory trends, and enterprise AI readiness." delay={80} />
          <FeatureCard icon={Globe} title="Case Studies" description="How organizations in financial services, healthcare, and professional services deploy Aliph." delay={160} />
        </div>
      </Section>

      {/* Section 5: Newsletter */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            Stay informed.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Subscribe to our newsletter for monthly insights on sovereign AI, regulatory updates, and enterprise AI best practices.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Want to learn more?"
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default Blog;
