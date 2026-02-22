import { Link } from "react-router-dom";
import { Shield, Brain, Eye, Network, Server, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const flowSteps = [
  "User or system initiates query.",
  "Query enters Control Plane.",
  "Policy evaluation applied.",
  "Sensitive elements detected.",
  "Routing decision executed.",
  "Inference performed via governed pathway.",
  "Output logged.",
  "Organizational memory optionally updated.",
];

const Platform = () => {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4">
                THE ALIPH PLATFORM
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.1] mb-6 text-foreground"
              >
                The Architecture Behind Sovereign AI Governance.
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-body text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl"
              >
                Aliph introduces a Control Plane that governs how AI interacts with enterprise systems — enforcing policy, preserving institutional knowledge, and maintaining accountability across every model and workflow.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-body text-[15px] text-muted-foreground/70 leading-relaxed mb-8 max-w-xl"
              >
                The Control Plane does not replace AI models. It sits between your organization and artificial intelligence — inspecting, routing, filtering, logging, and structuring every interaction.
              </motion.p>
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
                <a
                  href="#architecture"
                  className="cta-gold inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-body font-semibold text-[15px] transition-all shadow-sm"
                >
                  View Architecture
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground hover:bg-secondary rounded-lg font-body font-semibold text-[15px] transition-all"
                >
                  Request Technical Briefing
                </Link>
              </motion.div>
            </div>

            {/* Right — Architectural Schematic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="rounded-xl p-8 relative border border-border bg-secondary">
                <div className="space-y-3">
                  {[
                    { label: "Edge Intelligence", highlight: false },
                    { label: "Privacy Shield", highlight: false },
                    { label: "Control Plane", highlight: true },
                    { label: "Organization Memory", highlight: false },
                    { label: "Governed Connectivity", highlight: false },
                  ].map((layer, i) => (
                    <motion.div
                      key={layer.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${layer.highlight ? "border-accent/30 bg-accent/5" : "border-border bg-card"}`}
                    >
                      <div className={`w-2 h-2 rounded-full ${layer.highlight ? "bg-accent" : "bg-muted-foreground/30"}`} />
                      <span className={`font-body text-sm ${layer.highlight ? "text-accent font-semibold" : "text-muted-foreground"}`}>
                        {layer.label}
                      </span>
                      {i < 4 && (
                        <ChevronRight className="w-3 h-3 text-muted-foreground/30 ml-auto" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — AI Governance Boundary */}
      <Section id="architecture">
        <div className="max-w-3xl">
          <motion.h2 {...fadeUp} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
            AI Requires a Governance Boundary.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
            Most organizations connect directly to AI models. This creates structural gaps:
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="space-y-4 mb-8">
            {[
              "No inspection before inference.",
              "No structured knowledge retention.",
              "No enforceable audit trail.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 font-body text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span className="text-[15px]">{item}</span>
              </div>
            ))}
          </motion.div>
          <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="font-body text-muted-foreground leading-relaxed text-[15px]">
            Aliph introduces a Control Boundary. Every interaction passes through this boundary before reaching any model — private or external.
          </motion.p>
        </div>
      </Section>

      {/* SECTION 3 — System Flow */}
      <Section alabaster>
        <motion.h2 {...fadeUp} className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground tracking-tight">
          System Flow: From Query to Controlled Intelligence.
        </motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="font-body text-muted-foreground mb-12 max-w-2xl">
          Every query follows a governed pathway through the Control Plane.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {flowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bento-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center font-heading font-bold text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed">{step}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 4 — Layer 1: Privacy Shield */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div {...fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-body font-semibold">Layer 1</span>
            </motion.div>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
              Privacy Enforcement Before Inference.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-[15px] mb-6">
              Before any query reaches an AI model, the Privacy Shield performs runtime policy enforcement — masking, blocking, or minimizing sensitive data based on configurable rules.
            </motion.p>
            <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="font-body text-muted-foreground/70 leading-relaxed text-[15px]">
              This is automatic enforcement at the infrastructure level — not documentation, not guidelines, not optional configuration. Every interaction is governed before inference begins.
            </motion.p>
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bento-card rounded-xl p-8">
            <div className="space-y-4">
              {["PII Detection (Arabic & English)", "Runtime Policy Enforcement", "Data Minimization Rules", "Automatic Masking & Blocking"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 5 — Layer 2: Organization Memory */}
      <Section alabaster>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="order-2 lg:order-1">
            <div className="bento-card p-8">
              <div className="space-y-4">
                {["Structured Internal Memory", "Context Persistence Across Sessions", "Permissioned Access Controls", "Zero External Exposure"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary border border-border">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-body font-semibold">Layer 2</span>
            </motion.div>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
              Institutional Knowledge Structuring.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-[15px] mb-4">
              Organization Memory captures and structures institutional knowledge — creating a persistent, permissioned intelligence layer that enriches AI responses with enterprise context.
            </motion.p>
            <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="font-body text-muted-foreground leading-relaxed text-[15px]">
              Knowledge remains internal. No enterprise data is exposed to external providers. Context persists across sessions and users within governed access boundaries.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* SECTION 6 — Layer 3: Governance & Auditability */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div {...fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-body font-semibold">Layer 3</span>
            </motion.div>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
              Oversight Embedded in Every Interaction.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-[15px] mb-4">
              Every query, every response, every model access — logged immutably. Governance is not a reporting layer applied after the fact. It is embedded in the interaction itself.
            </motion.p>
            <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="font-body text-muted-foreground/70 leading-relaxed text-[15px]">
              Usage tracking, model access visibility, and full traceability ensure that AI operations remain accountable infrastructure — not opaque tooling.
            </motion.p>
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bento-card rounded-xl p-8">
            <div className="space-y-4">
              {["Immutable Interaction Logging", "Model Access Visibility", "Usage & Cost Tracking", "Full Audit Trail per Query"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 7 — Layer 4: Governed Connectivity */}
      <Section alabaster>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="order-2 lg:order-1">
            <div className="bento-card p-8">
              <div className="space-y-4">
                {["Private On-Premise Models", "Sovereign Cloud Models", "Approved External Providers", "Policy-Controlled Routing Rules"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary border border-border">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Network className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-body font-semibold">Layer 4</span>
            </motion.div>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
              Controlled Model Routing.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-[15px] mb-4">
              The Control Plane connects to private models, sovereign cloud models, and approved external providers — but only through policy-controlled routing.
            </motion.p>
            <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="font-body text-muted-foreground leading-relaxed text-[15px]">
              No direct model access. Every connection is governed by routing rules that enforce organizational policy, data residency requirements, and model selection criteria.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* SECTION 8 — Deployment Architecture */}
      <Section>
        <motion.div {...fadeUp} className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Server className="w-5 h-5 text-accent" strokeWidth={1.5} />
          </div>
        </motion.div>
        <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
          Deployment Designed for Sovereignty.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Deployment Options</h3>
            <div className="space-y-3">
              {["On-premise infrastructure", "Sovereign cloud environments", "Hybrid configurations"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">System Integration</h3>
            <div className="space-y-3">
              {["CRM & ERP platforms", "Document management systems", "Internal repositories & knowledge bases", "Enterprise communication tools"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 9 — Why This Architecture Matters */}
      <Section alabaster>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeUp} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
            Governance Is Infrastructure.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
            AI without governance creates long-term operational risk — unstructured data flows, untraceable decisions, and unaccountable model access.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
            AI with a Control Plane becomes controlled infrastructure — inspectable, auditable, and aligned with organizational policy.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="font-heading font-semibold text-accent text-xl">
            Aliph is governance infrastructure for artificial intelligence.
          </motion.p>
        </div>
      </Section>

      {/* SECTION 10 — Final CTA */}
      <CTABanner
        title="Build AI Infrastructure — Not AI Risk."
        subtitle="See how the Control Plane operates inside your environment."
        primaryCta={{ label: "Schedule a Technical Walkthrough", href: "/contact" }}
      />
    </>
  );
};

export default Platform;