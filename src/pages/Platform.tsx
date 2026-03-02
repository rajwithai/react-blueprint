import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/sections/Section";
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
      <section className="relative bg-background overflow-hidden py-[56px] md:py-[88px]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">
            <div>
              <motion.p {...fadeUp} className="section-label mb-3">
                THE ALIPH PLATFORM
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-bold text-[32px] md:text-[40px] lg:text-[48px] tracking-tight leading-[1.1] mb-4 text-foreground"
              >
                How Aliph governs every AI interaction{" "}
                <span className="text-muted-foreground font-medium">in your organization.</span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="section-subtext mb-8 max-w-[520px]"
              >
                When an employee asks AI a question, Aliph intercepts the query, checks it against your policies, strips sensitive data if it needs to leave your walls, searches your own documents first, logs everything for compliance, and delivers an answer with source citations. Here's exactly how.
              </motion.p>
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
                <a href="#architecture" className="btn-primary">
                  See the full query flow ↓
                </a>
                <Link to="/company/contact" className="btn-secondary">
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
              <div className="rounded-lg p-8 relative border border-border bg-[#F9FAFB]">
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
                      <span className={`text-sm ${layer.highlight ? "text-accent font-semibold" : "text-muted-foreground"}`}>
                        {layer.label}
                      </span>
                      {layer.highlight && (
                        <span className="ml-auto text-[10px] text-accent/70 tracking-wide uppercase">● Active</span>
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
      <section id="architecture" className="relative bg-[hsl(220,20%,8%)] py-12 md:py-[72px]">
        <div className="container mx-auto px-6 relative z-10">
          <motion.p {...fadeUp} className="section-label mb-3">
            THE PROBLEM
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-bold text-[28px] md:text-[40px] mb-10 text-white tracking-tight max-w-3xl leading-[1.2]">
            Without a governance layer, this is what happens every time your team uses AI.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* LEFT — Without Aliph */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="md:border-r md:border-white/10 md:pr-10 lg:pr-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/25 text-xs font-semibold text-red-400 mb-8 tracking-wide">
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
                      <span className="w-7 h-7 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-red-400">{i + 1}</span>
                      </span>
                      <p className="text-sm text-white/70 leading-relaxed pt-1">{step}</p>
                    </div>
                    {i < 4 && <div className="flex items-center ml-3.5 py-1.5"><div className="w-px h-5 bg-red-500/20" /></div>}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-5">
                <p className="font-bold text-red-400 text-base">PDPL violation. No audit trail. No recourse.</p>
              </div>
            </motion.div>

            <div className="flex items-center justify-center md:hidden py-4">
              <div className="h-px w-16 bg-white/10" />
              <span className="mx-4 text-xs text-white/30 uppercase tracking-widest">vs</span>
              <div className="h-px w-16 bg-white/10" />
            </div>

            {/* RIGHT — With Aliph */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="md:pl-10 lg:pl-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-xs font-semibold text-emerald-400 mb-8 tracking-wide">
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
                      <span className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-emerald-400">{i + 1}</span>
                      </span>
                      <p className="text-sm text-white/70 leading-relaxed pt-1">{step}</p>
                    </div>
                    {i < 4 && <div className="flex items-center ml-3.5 py-1.5"><div className="w-px h-5 bg-emerald-500/20" /></div>}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5">
                <p className="font-bold text-emerald-400 text-base">Compliant. Audited. Sovereign.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Four Guarantees */}
      <Section alabaster>
        <motion.p {...fadeUp} className="section-label mb-3">
          WHAT THE PLATFORM GUARANTEES
        </motion.p>
        <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4 max-w-3xl">
          Four things that happen every time your team uses AI through Aliph.
        </motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mb-10">
          No exceptions. No manual configuration. Automatic from day one.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { num: "01", title: "Your data is checked before it leaves.", body: "Every query is evaluated against your organization's policies. If sensitive data is detected — in Arabic or English — it's handled before any external AI model sees it." },
            { num: "02", title: "Your own knowledge is searched first.", body: "Before calling any external model, Aliph checks your organization's documents, filtered by employee permissions. If the answer exists internally, no external call is ever made." },
            { num: "03", title: "Every response is sourced.", body: "No black-box answers. Every response includes citations — whether from your internal documents or external AI. Your team knows where every answer came from." },
            { num: "04", title: "Everything is logged for compliance.", body: "Full audit trail on every interaction. Who asked. What was involved. When it happened. Ready for regulatory review at any moment." },
          ].map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-std"
            >
              <span className="step-number">{card.num}</span>
              <h3 className="card-title-std mt-4 mb-2">{card.title}</h3>
              <p className="card-body-std">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="text-center mt-10">
          <p className="text-foreground text-base font-medium mb-5">
            Want to see the full architecture? Schedule a technical walkthrough.
          </p>
          <Link to="/company/contact" className="btn-secondary inline-flex">
            Schedule Technical Walkthrough <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Section>

      {/* SECTION 4 — The Four Layers */}
      <Section>
        <div className="text-center mb-10">
          <motion.p {...fadeUp} className="section-label mb-3">
            THE FOUR LAYERS
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
            Four layers. One sovereign platform.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
            Every capability is built in — not bolted on. They work together automatically from the moment you deploy.
          </motion.p>
        </div>
        <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
          <PlatformLayers />
        </motion.div>
      </Section>

      {/* SECTION 5 — Deployment */}
      <Section alabaster>
        <div className="text-center mb-10">
          <motion.p {...fadeUp} className="section-label mb-3">
            DEPLOYMENT
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
            Deploy your way. Your data never leaves where you put it.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
            Three deployment models. Same platform. Same capabilities. Choose based on your security requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "ON-PREMISE", title: "Everything inside your walls.", body: "The full Aliph platform runs on your own infrastructure. No data ever leaves your premises. Complete control over hardware, storage, and network configuration. Ideal for organizations with the strictest data sovereignty requirements.", bestFor: "Banks · Government · Defense · Healthcare groups" },
            { label: "SOVEREIGN CLOUD", title: "In the cloud — but in the Kingdom.", body: "Aliph runs on Azure's Saudi Arabia region. Your data stays within KSA borders. Managed infrastructure with enterprise SLAs. Faster deployment, lower IT overhead — with full sovereignty maintained.", bestFor: "Fintech · Professional services · Mid-size enterprises · Hospitality groups" },
            { label: "HYBRID", title: "Sensitive data on-premise. Everything else in the cloud.", body: "Keep your most sensitive data and processing on-premise. Route non-sensitive workloads through sovereign cloud. The platform manages the split automatically based on your policies — no manual routing by employees.", bestFor: "Large enterprises · Multi-entity organizations · Conglomerates" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-std flex flex-col"
            >
              <span className="section-label text-muted-foreground mb-3">{card.label}</span>
              <h3 className="card-title-std mb-2 leading-snug">{card.title}</h3>
              <p className="card-body-std mb-6 flex-1">{card.body}</p>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground/70">
                  <span className="font-semibold text-muted-foreground">Best for:</span> {card.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ delay: 0.25 }} className="mt-10 text-center">
          <h3 className="font-medium text-xl text-foreground mb-5">
            Connects to your existing systems.
          </h3>
          <p className="card-body-std text-center mb-4">
            {["Google Workspace", "Microsoft 365", "SharePoint", "Salesforce CRM", "SAP", "Custom APIs"].join(" · ")}
          </p>
          <p className="trust-line max-w-[520px] mx-auto">
            Organization Memory inherits permissions from your existing directory. No new access management needed.
          </p>
        </motion.div>
      </Section>

      {/* SECTION 6 — Final CTA */}
      <section className="dark-cta-section py-[56px] md:py-[88px]">
        <div className="container mx-auto px-6 text-center max-w-[680px]">
          <motion.h2 {...fadeUp} className="dark-cta-headline mb-4">
            See the full architecture in a 30-minute technical walkthrough.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="dark-cta-subtext mb-8 max-w-[620px] mx-auto">
            We'll walk through the query flow live, show you the Privacy Shield in action on real data, and map a deployment model for your infrastructure. Bring your CTO. Bring your CISO. We'll answer everything.
          </motion.p>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/demo" className="btn-primary">Schedule a Technical Walkthrough</Link>
            <Link to="/company/contact" className="btn-secondary btn-secondary-dark">Download the Architecture Brief</Link>
          </motion.div>

          <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="dark-cta-trust mb-4">
            No sales pitch. No commitment. A focused technical conversation with Aliph's engineering team.
          </motion.p>

          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="dark-cta-contact">
            Prefer to talk directly?<br />
            <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline transition-colors">WhatsApp: +966 56 967 8421</a>
            <span className="mx-2">|</span>
            <a href="mailto:raj@aliphai.ai" className="text-white/70 hover:text-white underline transition-colors">raj@aliphai.ai</a>
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Platform;
