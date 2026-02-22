import { CheckCircle2, Mail, Code, Shield, Brain, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import riyadhImg from "@/assets/images/riyadh-office.jpg";
import teamImg from "@/assets/images/team-collaboration.jpg";

const openRoles = [
  { title: "Senior ML Engineer", team: "Engineering", desc: "Build privacy-preserving NER models for Arabic and English. Production ML at scale." },
  { title: "Full-Stack Engineer", team: "Engineering", desc: "Build enterprise AI interfaces with React, TypeScript, and Python. High-performance systems." },
  { title: "GRC Domain Expert", team: "Product", desc: "Shape the compliance automation platform. Deep PDPL/SAMA knowledge required." },
  { title: "Enterprise Sales Lead", team: "Growth", desc: "Sell sovereign AI to Saudi enterprises. C-suite relationships in financial services or healthcare." },
];

const Careers = () => {
  return (
    <>
      <PageHero
        title="Build sovereign AI from Riyadh."
        subtitle="We're assembling engineers, product builders, and domain experts who believe enterprise AI and data sovereignty are not mutually exclusive."
      />

      {/* Parallax Office */}
      <ParallaxImage
        src={riyadhImg}
        alt="Aliph offices in Riyadh"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
      />

      {/* Section 1: Why Aliph */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground"
        >
          Why Aliph
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {[
            "Category-defining problem at the intersection of AI and regulation.",
            "Be early. Shape the product, the culture, the trajectory.",
            "Build for Vision 2030 and the global sovereign AI movement.",
            "Competitive compensation with meaningful equity.",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-3 items-start"
            >
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="font-body text-muted-foreground text-sm">{item}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 2: What We Value */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          What we value.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Code} title="Craft" description="We build production-grade systems. No shortcuts. No tech debt. Every line of code matters." delay={0} />
          <FeatureCard icon={Brain} title="Curiosity" description="The best ideas come from people who ask hard questions. We hire for intellectual honesty." delay={80} />
          <FeatureCard icon={Users} title="Ownership" description="Small team, large scope. Every person shapes the product. Every contribution is visible." delay={160} />
        </div>
      </Section>

      {/* Section 3: Open Roles */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground"
        >
          Open positions.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {openRoles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-accent/10 text-accent">{role.team}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{role.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{role.desc}</p>
              <a
                href={`mailto:careers@aliphai.ai?subject=Application: ${role.title}`}
                className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold text-sm transition-all"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Parallax Team */}
      <ParallaxImage
        src={teamImg}
        alt="Team building the future of AI"
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
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            Shape the future of enterprise AI.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 4: Benefits */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          What we offer.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Shield} title="Meaningful Equity" description="Early-stage equity with real upside. You're not joining a company — you're building one." delay={0} />
          <FeatureCard icon={Globe} title="Global Impact" description="Build technology that will define sovereign AI globally. Starting from the Kingdom." delay={80} />
          <FeatureCard icon={Brain} title="Learning Environment" description="Work alongside top talent in AI, privacy engineering, and regulatory technology." delay={160} />
        </div>
      </Section>

      {/* Section 5: Contact */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            Don't see your role? We still want to hear from you.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            If you are exceptional at enterprise AI, privacy-preserving systems, Arabic NLP, or GRC automation — reach out.
          </p>
          <a href="mailto:careers@aliphai.ai" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all">
            <Mail className="h-4 w-4" /> careers@aliphai.ai
          </a>
        </div>
      </Section>

      <CTABanner
        title="Ready to build something exceptional?"
        primaryCta={{ label: "Apply Now", href: "mailto:careers@aliphai.ai" }}
      />
    </>
  );
};

export default Careers;
