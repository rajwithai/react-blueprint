import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const problems = [
  {
    num: "01",
    title: "Data Sovereignty",
    body: "Every ChatGPT query sends enterprise data to foreign servers. Under PDPL, each incident carries penalties up to SAR 5 million. Organizations face an impossible choice: adopt AI and accept compliance risk, or avoid AI and fall behind.",
  },
  {
    num: "02",
    title: "Knowledge Loss",
    body: "When a senior partner retires or a key advisor leaves, decades of institutional expertise — regulatory interpretations, client histories, hard-won lessons — disappear overnight. The next person starts from zero.",
  },
  {
    num: "03",
    title: "Affordable Compliance",
    body: "Big Four consultants charge SAR 500K+ for compliance work that takes 6 months. 1.7 million Saudi SMEs face the same PDPL penalties as corporates — but can't afford the consultants. They have no solution.",
  },
];

const layers = [
  { label: "Edge Intelligence", highlight: false },
  { label: "Sovereign Core", highlight: false },
  { label: "Privacy Shield", highlight: true },
  { label: "Cloud AI", highlight: false },
];

const team = [
  {
    role: "Co-Founder & CTO",
    name: "Des Raj Chauhan",
    credential: "15+ years enterprise software engineering",
    body: "Architect of Aliph's four-layer sovereign AI infrastructure. Built and deployed the multi-agent workflow system, Privacy Shield, and Organization Memory. Deep expertise in distributed systems, privacy-preserving computation, and Arabic NLP.",
  },
  {
    role: "Co-Founder — Compliance & Advisory",
    name: null,
    credential: "15 years Big Four GRC consulting",
    body: "KPMG, PwC, and Deloitte experience across Saudi Arabia's most regulated sectors. Direct PIF portfolio company implementation experience. C-suite relationships across healthcare, fintech, and professional services. Deep expertise in PDPL, SAMA, and CMA regulatory frameworks.",
  },
  {
    role: "Senior Advisor — Regulatory Affairs",
    name: null,
    credential: "15+ years as Big Four Partner",
    body: "Active relationships with SDAIA, SAMA, and key government stakeholders. Strategic guidance on regulatory positioning and enterprise market access.",
  },
];

const catalysts = [
  { label: "PDPL Enforcement Live", body: "Penalties active. Every Saudi enterprise must comply." },
  { label: "Vision 2030 AI Mandate", body: "Government mandating enterprise AI adoption. HUMAIN investing $100B+." },
  { label: "PwC Suspended from PIF", body: "~$200M annual market gap. Regulated enterprises seeking alternatives." },
  { label: "No Sovereign AI Exists", body: "No local or global player has built enterprise-grade sovereign AI." },
  { label: "UAE PDPL Enacted", body: "Second major market opening with identical architecture applicability." },
];

const About = () => {
  return (
    <>
      {/* SECTION 1: HERO — narrative, no CTA */}
      <section className="pt-28 md:pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-[720px] text-center">
          <motion.p {...fadeUp} className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Our Story
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="font-heading font-bold text-3xl md:text-[44px] md:leading-[1.15] lg:text-[50px] text-foreground mb-8"
          >
            We didn't set out to build an AI company. We set out to solve a problem nobody else would.
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-[1.7]"
          >
            In 2024, we watched Saudi enterprises face an impossible choice: adopt AI and risk PDPL violations with penalties up to SAR 5 million, or avoid AI and fall behind competitors gaining 30-40% productivity advantages. Global AI providers couldn't solve this — their business model depends on data leaving your walls. Big Four consultants couldn't solve this — they deliver reports, not infrastructure. So we built Aliph.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: THE THREE PROBLEMS */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.p {...fadeUp} className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-4">
            Why We Exist
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Three problems. No existing solution. One platform.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <motion.div
                key={p.num}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-7 flex flex-col"
              >
                <span className="font-heading font-bold text-3xl text-accent mb-4">{p.num}</span>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE BUILT */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.p {...fadeUp} className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            The Platform
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 max-w-3xl mx-auto">
            One architecture. Multiple applications. Built for the world's strictest data regulations.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground max-w-[660px] mx-auto mb-10 leading-relaxed">
            Aliph's four-layer sovereign architecture sits between your organization and global AI. Every product we build — AliphChat, GRC Platform, and future verticals — runs on the same foundation. The platform is the constant. The applications are endless.
          </motion.p>

          {/* Layer badges */}
          <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {layers.map((l, i) => (
              <div key={l.label} className="flex items-center gap-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-heading font-semibold border ${
                    l.highlight
                      ? "bg-accent/10 text-accent border-accent/30"
                      : "bg-secondary text-muted-foreground border-border"
                  }`}
                >
                  {l.label}
                </span>
                {i < layers.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground/40 hidden sm:block" />}
              </div>
            ))}
          </motion.div>

          {/* Product cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            {[
              { label: "LIVE NOW", title: "AliphChat", body: "Sovereign enterprise AI assistant." },
              { label: "LIVE NOW", title: "GRC Platform", body: "AI-powered compliance automation." },
            ].map((prod, i) => (
              <motion.div
                key={prod.title}
                {...fadeUp}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex-1 rounded-xl border border-border bg-card p-6 text-left"
              >
                <span className="font-body text-[10px] uppercase tracking-[0.15em] text-accent font-semibold">{prod.label}</span>
                <h4 className="font-heading font-semibold text-foreground mt-1">{prod.title}</h4>
                <p className="font-body text-sm text-muted-foreground mt-1">{prod.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE TEAM */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.p {...fadeUp} className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-4">
            The Team
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
            45 years of enterprise expertise. Built for this exact moment.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground text-center max-w-[660px] mx-auto mb-12 leading-relaxed">
            Two founders know what to deliver — Big Four methodology across PDPL, SAMA, CMA, and NCA. One founder knows how to build it — the full sovereign AI architecture. This combination is not replicable.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <motion.div
                key={t.role}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-7 flex flex-col"
              >
                <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">{t.role}</span>
                {t.name && <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{t.name}</h3>}
                <p className="font-heading font-semibold text-base text-accent mb-3">{t.credential}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY NOW */}
      <section className="py-14 md:py-18 bg-background">
        <div className="container mx-auto px-6">
          <motion.p {...fadeUp} className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-4">
            Why Now
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-10">
            Five forces are converging. Aliph sits at the center.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {catalysts.map((c, i) => (
              <motion.div key={c.label} {...fadeUp} transition={{ delay: i * 0.06 }}>
                <h4 className="font-heading font-semibold text-[15px] text-foreground mb-1">{c.label}</h4>
                <p className="font-body text-[13px] text-muted-foreground leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DARK CTA */}
      <section className="py-20 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.h2
            {...fadeUp}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.15] mb-6"
          >
            We're building the sovereign AI infrastructure Saudi Arabia needs. And we're just getting started.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="font-body text-lg text-background/70 max-w-[620px] mx-auto mb-10 leading-relaxed">
            Whether you're an enterprise looking to adopt AI safely, an investor backing the next infrastructure layer, or a builder who wants to join us — we'd like to hear from you.
          </motion.p>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/demo" className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110 transition-all">
              Book a Demo
            </Link>
            <Link to="/company/contact?inquiry=investor" className="px-8 py-3.5 rounded-lg border border-background/30 text-background font-heading font-semibold hover:bg-background/10 transition-all">
              Investor Inquiry
            </Link>
            <Link to="/company/contact?inquiry=careers" className="px-8 py-3.5 rounded-lg border border-background/30 text-background font-heading font-semibold hover:bg-background/10 transition-all">
              Join Our Team
            </Link>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="space-y-3">
            <p className="font-body text-sm text-background/50">
              We're actively hiring for enterprise sales, AI engineering, and GRC advisory roles in Riyadh.
            </p>
            <p className="font-body text-sm text-background/60">
              <a href="mailto:raj@aliphai.ai" className="hover:text-accent transition-colors">raj@aliphai.ai</a>
              <span className="mx-2">|</span>
              <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp: +966 56 967 8421</a>
            </p>
            <p className="font-body text-xs text-background/30 mt-4">
              Aliph Solutions &nbsp;|&nbsp; CR 7051528938 &nbsp;|&nbsp; Riyadh, Kingdom of Saudi Arabia
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
