import { Link } from "react-router-dom";
import { Cpu, Layers, ShieldCheck, Globe, Minimize2, Eye, Shuffle, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import { useState } from "react";

const layers = [
  { icon: Cpu, title: "Edge Intelligence", desc: "Native apps with embedded SLMs running directly on user devices. Zero-server dependency." },
  { icon: Layers, title: "Sovereign Core", desc: "Your AI hub, trained on your data. Semantic search and Organization Memory running on your infrastructure." },
  { icon: ShieldCheck, title: "Privacy Shield", desc: "Proprietary PII masking (Arabic & English). Sanitizes every query before external processing." },
  { icon: Globe, title: "Cloud Augment", desc: "Safe access to Claude, GPT-4, and ALLAM—only after full sanitization." },
];

const Platform = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <>
      <HeroSection
        eyebrow="THE ALIPH PLATFORM"
        title="Sovereign by architecture, not by compromise."
        subtitle="A four-layer AI infrastructure that keeps intelligence on-premise — and protects everything else."
        primaryCta={{ label: "Contact Sales", href: "/contact" }}
      />

      {/* Interactive Architecture */}
      <Section dark>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4"
        >
          ARCHITECTURE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-12 text-white tracking-tight"
        >
          Four layers. One principle:<br />
          <span className="text-white/50">your data stays yours.</span>
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
                  className={`relative rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                    activeLayer === i
                      ? "glass-card border border-gold/30 shadow-lg"
                      : "glass hover:border-gold/15"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200 ${activeLayer === i ? "bg-gold/15" : "bg-gold/5"}`}>
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="font-heading font-semibold text-lg text-white">{l.title}</span>
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
            <div className="glass-card rounded-lg p-8">
              <h3 className="font-heading font-semibold text-2xl mb-4 text-white">{layers[activeLayer].title}</h3>
              <p className="font-body text-white/50 leading-relaxed text-lg">{layers[activeLayer].desc}</p>
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
          className="font-heading font-bold text-3xl md:text-4xl mb-12 text-foreground tracking-tight"
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
        primaryCta={{ label: "Contact Sales", href: "/contact" }}
        dark
      />
    </>
  );
};

export default Platform;
