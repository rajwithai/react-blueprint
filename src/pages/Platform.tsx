import { Link } from "react-router-dom";
import { Cpu, Layers, ShieldCheck, Globe, Minimize2, Eye, Shuffle, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useState } from "react";

const layers = [
  { icon: Cpu, title: "Edge Intelligence", desc: "AI that lives on the device. Instant answers from embedded models — no server, no network, no dependency." },
  { icon: Layers, title: "Sovereign Core", desc: "Your organization's AI engine. Knowledge base, semantic search, and orchestration — running entirely on your infrastructure." },
  { icon: ShieldCheck, title: "Privacy Shield", desc: "Every piece of sensitive data — detected, masked, encrypted before anything crosses to external AI. Automatic. Auditable." },
  { icon: Globe, title: "Cloud Augmentation", desc: "When your query needs the world's best AI, it gets it. But the query that arrives has already been stripped of everything sensitive." },
];

const Platform = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <>
      <HeroSection
        eyebrow="THE ALIPH PLATFORM"
        title="Sovereign by architecture, not by compromise."
        subtitle="A four-layer AI infrastructure that keeps intelligence on-premise — and protects everything else."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
      />

      {/* Interactive Architecture */}
      <Section dark>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          ARCHITECTURE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-foreground tracking-tight"
        >
          Four layers. One principle:<br />
          <span className="text-muted-foreground">your data stays yours.</span>
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-3">
            {layers.map((l, i) => {
              const Icon = l.icon;
              return (
                <motion.div
                  key={l.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setActiveLayer(i)}
                  className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-250 ${
                    activeLayer === i
                      ? "glass-card border border-primary/30 shadow-lg shadow-primary/5"
                      : "glass hover:border-primary/15"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 ${activeLayer === i ? "bg-primary/15" : "bg-primary/5"}`}>
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="font-heading font-bold text-lg text-foreground">{l.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:sticky lg:top-32"
          >
            <div className="glass-card rounded-2xl p-8 gradient-border-card">
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">{layers[activeLayer].title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">{layers[activeLayer].desc}</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
        >
          Design principles.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Minimize2} title="Data Minimization" description="External AI is a last resort. The default is local." delay={0} />
          <FeatureCard icon={Eye} title="Zero Trust Audit" description="Every query, every response, every access — logged and immutable." delay={80} />
          <FeatureCard icon={Shuffle} title="Model Agnostic" description="Best model per task. No lock-in. Automatic selection." delay={160} />
          <FeatureCard icon={FileCheck} title="Compliance Native" description="PDPL, SAMA, NCA, GDPR — built into the architecture, not bolted on." delay={240} />
        </div>
      </Section>

      <CTABanner
        title="Experience the platform."
        subtitle="See sovereign AI infrastructure in action."
        primaryCta={{ label: "Request Demo", href: "/demo" }}
      />
    </>
  );
};

export default Platform;
