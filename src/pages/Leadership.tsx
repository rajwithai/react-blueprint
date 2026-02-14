import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import { useInView } from "@/hooks/useInView";
import { User } from "lucide-react";

const profiles = [
  {
    name: "Des Raj Chauhan",
    role: "Co-Founder & CTO",
    bio: "15+ years of enterprise software engineering and project leadership. Architect of Aliph's four-layer sovereign AI infrastructure. Built and deployed the multi-agent workflow system. Deep expertise in distributed systems, privacy-preserving computation, and Arabic NLP.",
  },
  {
    name: "Co-Founder",
    role: "Compliance & Advisory",
    bio: "15 years of Big Four GRC consulting across KPMG, PwC, and Deloitte. Direct implementation experience with PIF portfolio companies. Deep expertise in PDPL, SAMA, and CMA regulatory frameworks. C-suite relationships across healthcare, fintech, and professional services.",
    note: "Name disclosed under NDA — protecting current employment.",
  },
  {
    name: "Senior Advisor",
    role: "Regulatory Affairs",
    bio: "15+ years as Big Four Partner. Active relationships with SDAIA, SAMA, and key government stakeholders. Strategic guidance on regulatory positioning and market access.",
  },
];

const Leadership = () => {
  return (
    <>
      <HeroSection
        title="45+ years of expertise. One mission."
        subtitle="Two founders know what to deliver. One founder knows how to build it. This combination is not replicable."
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-8 card-hover">
              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-1">{p.name}</h3>
              <p className="font-body text-sm text-primary mb-4">{p.role}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
              {p.note && (
                <p className="font-body text-xs text-muted-foreground/60 italic mt-3">{p.note}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-primary-foreground">Team Narrative</h2>
          <p className="font-body text-primary-foreground/60 leading-relaxed">
            Our founding team combines deep regulatory domain expertise with enterprise AI architecture capability. This is not a technology company trying to learn compliance, or a consulting firm trying to learn technology. It is both — integrated from day one.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Leadership;
