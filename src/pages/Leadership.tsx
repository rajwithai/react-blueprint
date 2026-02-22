import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Award, Briefcase, Target, Shield, Globe } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import teamImg from "@/assets/images/team-collaboration.jpg";
import riyadhImg from "@/assets/images/riyadh-office.jpg";

const profiles = [
  {
    name: "Des Raj Chauhan",
    role: "Co-Founder & CTO",
    bio: "15+ years of enterprise software architecture and project leadership. Designed and built Aliph's four-layer sovereign AI infrastructure and multi-agent workflow system. Deep expertise in distributed systems, privacy-preserving computation, and Arabic NLP.",
  },
  {
    name: "Co-Founder",
    role: "Compliance & Advisory",
    bio: "15 years of Big Four GRC consulting across KPMG, PwC, and Deloitte. Direct implementation experience with PIF portfolio companies. Deep expertise in PDPL, SAMA, and CMA regulatory frameworks. C-suite relationships across healthcare, fintech, and professional services.",
    note: "Name disclosed under NDA — full commitment upon funding.",
  },
  {
    name: "Senior Advisor",
    role: "Regulatory Affairs",
    bio: "15+ years as Big Four Partner. Active relationships with SDAIA, SAMA, and key government stakeholders. Strategic guidance on regulatory positioning and government market access.",
  },
];

const Leadership = () => {
  return (
    <>
      <PageHero
        title="45+ years of expertise. One mission."
        subtitle="Two founders know what to deliver. One knows how to build it."
      />

      {/* Parallax Team Image */}
      <ParallaxImage
        src={teamImg}
        alt="Leadership team collaboration"
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
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            The combination is not replicable.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 1: Profiles */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-accent/5 flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-1 text-foreground">{p.name}</h3>
              <p className="font-body text-sm text-accent mb-4">{p.role}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
              {p.note && (
                <p className="font-body text-xs text-muted-foreground/60 italic mt-3">{p.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Section 2: The Advantage */}
      <Section alabaster>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            Technology meets regulation.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            This is not a technology company learning compliance. It is not a consulting firm learning technology. It is both — integrated from inception. The regulatory expertise is real. The engineering is production-grade. The combination is not replicable.
          </p>
        </div>
      </Section>

      {/* Section 3: Why This Team */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          Why this team wins.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Award} title="Deep Domain Expertise" description="45+ combined years across enterprise AI, GRC consulting, and regulatory affairs in the Kingdom." delay={0} />
          <FeatureCard icon={Briefcase} title="Big Four Relationships" description="Direct C-suite relationships across financial services, healthcare, and professional services sectors." delay={80} />
          <FeatureCard icon={Target} title="Production Experience" description="Not theoretical. The CTO has built and deployed the entire four-layer architecture already." delay={160} />
        </div>
      </Section>

      {/* Parallax Riyadh */}
      <ParallaxImage
        src={riyadhImg}
        alt="Riyadh skyline"
        className="h-[40vh] md:h-[50vh]"
        speed={0.3}
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
            Built from Riyadh, for the world.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 4: Advisory Network */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          Extended network.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Shield} title="Regulatory Access" description="Active relationships with SDAIA, SAMA, and key government stakeholders for strategic guidance." delay={0} />
          <FeatureCard icon={Globe} title="Industry Connections" description="C-suite relationships across PIF portfolio companies, healthcare systems, and financial institutions." delay={80} />
          <FeatureCard icon={Briefcase} title="Technical Partners" description="Partnerships with leading cloud providers and AI model vendors for sovereign deployment." delay={160} />
        </div>
      </Section>

      {/* Section 5: Join Us */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            We're building something exceptional.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Interested in joining the founding team? We're looking for exceptional engineers, product builders, and domain experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/company/careers" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all">
              View Open Positions
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground hover:bg-secondary font-heading font-semibold transition-all">
              Request a Meeting
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Meet the team. See the product."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default Leadership;
