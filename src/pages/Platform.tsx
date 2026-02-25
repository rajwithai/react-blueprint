import { Link } from "react-router-dom";
import { Server, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/sections/Section";
import CTABanner from "@/components/sections/CTABanner";
import PlatformLayers from "@/components/sections/PlatformLayers";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Platform = () => {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
            <div>
              <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4">
                THE ALIPH PLATFORM
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.1] mb-6 text-foreground"
              >
                How Aliph governs every AI interaction{" "}
                <span className="text-muted-foreground font-medium">in your organization.</span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-[520px]"
              >
                When an employee asks AI a question, Aliph intercepts the query, checks it against your policies, strips sensitive data if it needs to leave your walls, searches your own documents first, logs everything for compliance, and delivers an answer with source citations. Here's exactly how.
              </motion.p>
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4 mb-0">
                <a
                  href="#architecture"
                  className="cta-gold inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-body font-semibold text-[15px] transition-all shadow-sm"
                >
                  See the full query flow ↓
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground hover:bg-secondary rounded-lg font-body font-semibold text-[15px] transition-all"
                >
                  Schedule a technical walkthrough
                </Link>
              </motion.div>
            </div>

            {/* Right — Platform Layer Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="rounded-xl p-8 relative border border-border bg-secondary">
                <div className="space-y-3">
                  {[
                    { label: "Cloud AI Gateway", highlight: false },
                    { label: "Privacy Shield", highlight: true },
                    { label: "Control Plane", highlight: false },
                    { label: "Organization Memory", highlight: false },
                    { label: "Edge Intelligence", highlight: false },
                  ].map((layer, i) => (
                    <motion.div
                      key={layer.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${layer.highlight ? "border-accent/30 bg-accent/5 shadow-[0_0_16px_hsl(var(--accent)/0.1)]" : "border-border bg-card"}`}
                    >
                      <div className={`w-2 h-2 rounded-full ${layer.highlight ? "bg-accent" : "bg-muted-foreground/30"}`} />
                      <span className={`font-body text-sm ${layer.highlight ? "text-accent font-semibold" : "text-muted-foreground"}`}>
                        {layer.label}
                      </span>
                      {layer.highlight && (
                        <span className="ml-auto text-[10px] font-body text-accent/70 tracking-wide uppercase">● Active</span>
                      )}
                      {!layer.highlight && i < 4 && (
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

      {/* SECTION 2 — The Problem */}
      <section id="architecture" className="relative bg-[hsl(220,20%,8%)] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 relative z-10">
          <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4">
            THE PROBLEM
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-14 text-white tracking-tight max-w-3xl">
            Without a governance layer, this is what happens every time your team uses AI.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* LEFT — Without Aliph */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="md:border-r md:border-white/10 md:pr-10 lg:pr-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/25 font-body text-xs font-semibold text-red-400 mb-8 tracking-wide">
                Without Aliph
              </span>
              <div className="space-y-0">
                {[
                  "Employee pastes client contract into ChatGPT",
                  "Full text — names, financials, terms — sent to US servers",
                  "No record of what was sent or when",
                  "AI responds with no source citations",
                  "Employee acts on unverified information",
                ].map((step, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <span className="w-7 h-7 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center shrink-0">
                          <span className="font-heading text-xs font-bold text-red-400">{i + 1}</span>
                        </span>
                      </div>
                      <p className="font-body text-sm text-white/70 leading-relaxed pt-1">{step}</p>
                    </div>
                    {i < 4 && (
                      <div className="flex items-center ml-3.5 py-1.5">
                        <div className="w-px h-5 bg-red-500/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-5">
                <p className="font-heading font-bold text-red-400 text-base">
                  PDPL violation. No audit trail. No recourse.
                </p>
              </div>
            </motion.div>

            {/* Divider on mobile */}
            <div className="flex items-center justify-center md:hidden py-4">
              <div className="h-px w-16 bg-white/10" />
              <span className="mx-4 font-body text-xs text-white/30 uppercase tracking-widest">vs</span>
              <div className="h-px w-16 bg-white/10" />
            </div>

            {/* RIGHT — With Aliph */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="md:pl-10 lg:pl-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 font-body text-xs font-semibold text-emerald-400 mb-8 tracking-wide">
                With Aliph
              </span>
              <div className="space-y-0">
                {[
                  "Employee asks question through AliphChat",
                  "Aliph searches organization's own documents first",
                  "If external AI needed — Privacy Shield strips all sensitive data",
                  "AI responds. Tokens restored. Sources cited.",
                  "Employee acts on verified, attributed information",
                ].map((step, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <span className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
                          <span className="font-heading text-xs font-bold text-emerald-400">{i + 1}</span>
                        </span>
                      </div>
                      <p className="font-body text-sm text-white/70 leading-relaxed pt-1">{step}</p>
                    </div>
                    {i < 4 && (
                      <div className="flex items-center ml-3.5 py-1.5">
                        <div className="w-px h-5 bg-emerald-500/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5">
                <p className="font-heading font-bold text-emerald-400 text-base">
                  Compliant. Audited. Sovereign.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Four Guarantees */}
      <Section alabaster>
        <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4">
          WHAT THE PLATFORM GUARANTEES
        </motion.p>
        <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground tracking-tight max-w-3xl">
          Four things that happen every time your team uses AI through Aliph.
        </motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground mb-12 max-w-[680px]">
          No exceptions. No manual configuration. Automatic from day one.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              num: "01",
              title: "Your data is checked before it leaves.",
              body: "Every query is evaluated against your organization's policies. If sensitive data is detected — in Arabic or English — it's handled before any external AI model sees it.",
            },
            {
              num: "02",
              title: "Your own knowledge is searched first.",
              body: "Before calling any external model, Aliph checks your organization's documents, filtered by employee permissions. If the answer exists internally, no external call is ever made.",
            },
            {
              num: "03",
              title: "Every response is sourced.",
              body: "No black-box answers. Every response includes citations — whether from your internal documents or external AI. Your team knows where every answer came from.",
            },
            {
              num: "04",
              title: "Everything is logged for compliance.",
              body: "Full audit trail on every interaction. Who asked. What was involved. When it happened. Ready for regulatory review at any moment.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card p-8 hover:shadow-md transition-shadow"
            >
              <span className="font-heading font-semibold text-[2rem] text-accent leading-none">{card.num}</span>
              <h3 className="font-heading font-bold text-lg text-foreground mt-4 mb-3">{card.title}</h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="text-center mt-14">
          <p className="font-body text-foreground text-base font-medium mb-5">
            Want to see the full architecture? Schedule a technical walkthrough.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground hover:bg-secondary rounded-lg font-body font-semibold text-[15px] transition-all"
          >
            Schedule Technical Walkthrough <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Section>

      {/* SECTION 4 — The Four Layers */}
      <Section>
        <div className="text-center mb-14">
          <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4">
            THE FOUR LAYERS
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground tracking-tight">
            Four layers. One sovereign platform.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground max-w-[640px] mx-auto">
            Every capability is built in — not bolted on. They work together automatically from the moment you deploy.
          </motion.p>
        </div>
        <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
          <PlatformLayers />
        </motion.div>
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