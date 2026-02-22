import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import riyadhImg from "@/assets/images/riyadh-office.jpg";
import teamImg from "@/assets/images/team-collaboration.jpg";

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ALIPH"
        title="Private Intelligence. Collective Wisdom."
        subtitle="We build the infrastructure layer that makes AI safe for enterprise — so organizations never have to choose between intelligence and sovereignty."
      />

      {/* Parallax Hero */}
      <ParallaxImage
        src={riyadhImg}
        alt="Aliph headquarters in Riyadh"
        className="h-[50vh] md:h-[60vh]"
        speed={0.2}
      />

      {/* Section 1: Mission */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground"
          >
            The choice shouldn't exist.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg text-muted-foreground leading-relaxed"
          >
            Every organization deserves the world's best AI. None should sacrifice data sovereignty to access it. Aliph exists to eliminate this tradeoff — permanently. We are the controlled adoption layer between enterprise data and global AI, built for the most regulated markets on earth.
          </motion.p>
        </div>
      </Section>

      {/* Section 2: What We Are */}
      <Section alabaster>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-8 text-foreground"
          >
            What we are.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground leading-relaxed text-lg"
          >
            A sovereign AI platform company. Not a chatbot. Not a consulting firm. Not a competitor to the AI labs or the regulators. We are the layer that makes their ecosystems safe for enterprise. Built in Riyadh. Designed for the world.
          </motion.p>
        </div>
      </Section>

      {/* Parallax Break */}
      <ParallaxImage
        src={teamImg}
        alt="Aliph team at work"
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
            Built in Riyadh. Designed for the world.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 3: Vision 2030 */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            Aligned with the Kingdom's AI ambitions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            Aliph is purpose-built for Saudi Arabia's AI moment. We are aligned with SDAIA's mandate for responsible AI. Designed for the HUMAIN ecosystem. Committed to making the Kingdom a global leader in sovereign AI infrastructure.
          </motion.p>
        </div>
      </Section>

      {/* Section 4: Core Values */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          What drives us.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Sovereignty First", desc: "Data sovereignty is not a feature we add. It is the foundation on which everything is built." },
            { title: "Enterprise Grade", desc: "We build for production — not demos. Every component is designed for the most demanding enterprise environments." },
            { title: "Regulatory Alignment", desc: "We don't work around regulations. We build for them. PDPL, SAMA, NCA — compliance is architecture, not afterthought." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 5: Company Details */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Legal entity", value: "Aliph Solutions" },
            { label: "Headquarters", value: "Riyadh, Kingdom of Saudi Arabia" },
            { label: "Founded", value: "2024" },
            { label: "Website", value: "aliphai.ai" },
          ].map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="font-body text-sm text-muted-foreground mb-1">{d.label}</p>
              <p className="font-heading font-semibold text-foreground">{d.value}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 6: CTA */}
      <CTABanner
        title="See what we've built."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default About;
