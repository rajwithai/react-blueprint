import { motion } from "framer-motion";
import { User } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";

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
      <HeroSection
        title="45+ years of expertise. One mission."
        subtitle="Two founders know what to deliver. One knows how to build it."
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-1">{p.name}</h3>
              <p className="font-body text-sm text-primary mb-4">{p.role}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
              {p.note && (
                <p className="font-body text-xs text-muted-foreground/60 italic mt-3">{p.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-primary-foreground"
          >
            The combination is not replicable.
          </motion.h2>
          <p className="font-body text-primary-foreground/60 leading-relaxed">
            This is not a technology company learning compliance. It is not a consulting firm learning technology. It is both — integrated from inception. The regulatory expertise is real. The engineering is production-grade. The combination is not replicable.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Leadership;
