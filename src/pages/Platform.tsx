import { Link } from "react-router-dom";
import { Cpu, Layers, ShieldCheck, Globe, Minimize2, Eye, Shuffle, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useState } from "react";

const layers = [
  { icon: Cpu, title: "Edge Intelligence", desc: "AI that lives on the device. Instant answers from embedded models — no server, no network, no dependency. Your fastest queries never leave the laptop." },
  { icon: Layers, title: "Sovereign Core", desc: "Your organization's AI engine. Knowledge base, semantic search, and intelligent orchestration — running entirely on your infrastructure or in your region. Where the vast majority of queries are resolved." },
  { icon: ShieldCheck, title: "Privacy Shield", desc: "The boundary layer. Every piece of sensitive data — names, IDs, financials, in Arabic and English — detected, masked, and encrypted before anything crosses to external AI. Automatic. Auditable." },
  { icon: Globe, title: "Cloud Augmentation", desc: "When your query needs the world's best AI, it gets it — through Claude, GPT-4, Gemini, or ALLAM. But the query that arrives has already been stripped of everything sensitive. The model sees the question, never the data." },
];

const Platform = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <>
      <HeroSection
        eyebrow="THE ALIPH PLATFORM"
        title="Sovereign by architecture, not by compromise."
        subtitle="A four-layer AI infrastructure that keeps the vast majority of intelligence on-premise — and protects everything else."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />

      {/* Interactive Architecture */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl mb-12 text-foreground"
        >
          Four layers. One principle: your data stays yours.
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Interactive visual */}
          <div className="space-y-3">
            {layers.map((l, i) => {
              const Icon = l.icon;
              return (
                <motion.div
                  key={l.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveLayer(i)}
                  className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    activeLayer === i
                      ? "bg-primary/10 border-2 border-primary/40 shadow-lg shadow-primary/10"
                      : "bg-muted border-2 border-transparent hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeLayer === i ? "bg-primary/20" : "bg-primary/5"}`}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-heading font-semibold text-lg">{l.title}</span>
                  </div>
                  {activeLayer === i && i < layers.length - 1 && (
                    <div className="absolute left-1/2 -bottom-3 w-px h-3 bg-primary/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
          {/* Description */}
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:sticky lg:top-32"
          >
            <div className="rounded-2xl bg-card border border-border p-8 shadow-sm">
              <h3 className="font-heading font-semibold text-2xl mb-4">{layers[activeLayer].title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">{layers[activeLayer].desc}</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Principles */}
      <Section dark>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-primary-foreground"
        >
          The principles behind the architecture.
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={Minimize2} title="Data Minimization" description="External AI is a last resort. The default is local." delay={0} dark />
          <FeatureCard icon={Eye} title="Zero Trust Audit" description="Every query, every response, every access — logged and immutable." delay={100} dark />
          <FeatureCard icon={Shuffle} title="Model Agnostic" description="Best model per task. No lock-in. Automatic selection." delay={200} dark />
          <FeatureCard icon={FileCheck} title="Compliance Native" description="PDPL, SAMA, NCA, GDPR — built into the architecture, not bolted on after." delay={300} dark />
        </div>
      </Section>

      <CTABanner
        title="Experience the platform."
        subtitle="Request a demo."
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  );
};

export default Platform;
