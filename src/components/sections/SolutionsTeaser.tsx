import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, UtensilsCrossed, Briefcase, Landmark, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "real-estate", label: "Real Estate & Property Management", icon: Building2 },
  { id: "hospitality", label: "Hospitality & Tourism", icon: UtensilsCrossed },
  { id: "professional", label: "Professional Services", icon: Briefcase },
  { id: "financial", label: "Financial Services", icon: Landmark },
];

const tabContent: Record<string, {
  hook: string;
  reality: string;
  solution: string;
  badges: string[];
}> = {
  "real-estate": {
    hook: "Saudi real estate is a SAR 2.31 trillion market. AI-driven property management can cut operational costs dramatically — but only if your tenant data stays within your walls.",
    reality: "Your property managers juggle lease renewals, maintenance requests, and tenant communications across scattered spreadsheets. Your valuation team pulls market data manually for every appraisal. Ownership records, regulatory filings, and contracts live in folders nobody can search. And every tenant's Iqama number, financial history, and personal details sitting in those files? One ChatGPT query away from a PDPL violation.",
    solution: "Every document across your portfolio — leases, contracts, regulatory filings, tenant records — indexed and searchable by AI, entirely on-premise. Tenant PII never leaves your systems. Property valuations supported by AI-assisted market analysis. Compliance documentation automated across RERA and PDPL requirements. When your senior property manager moves on, their 15 years of knowledge about every building, every tenant relationship, every municipal process stays.",
    badges: ["PDPL", "RERA", "Municipal Requirements"],
  },
  hospitality: {
    hook: "Vision 2030 targets 100 million tourists per year. Hotels need AI for guest intelligence and operations — but guest data is among the most sensitive categories under PDPL.",
    reality: "Your front desk answers the same questions hundreds of times a week — in Arabic, English, and a dozen other languages. Your revenue manager builds pricing forecasts in spreadsheets that break every Hajj season. Guest preferences and history are trapped in individual property systems — a returning VIP at your Riyadh hotel is a stranger at your Jeddah property. And every guest passport number, payment detail, and personal preference stored in your PMS is regulated data you're responsible for.",
    solution: "Guest intelligence across all properties — preferences, history, and service patterns searchable by authorized staff only. Concierge AI handles guest queries 24/7 in Arabic and English. Revenue management supported by AI-assisted demand forecasting. STA compliance requirements tracked automatically. Multi-property knowledge sharing — what one hotel learns benefits all of them. Every guest data interaction logged and sovereign.",
    badges: ["PDPL", "STA", "Tourism Authority Requirements"],
  },
  professional: {
    hook: "Client confidentiality is existential for advisory firms. AI can 10x your output — but only if client data never leaves your systems.",
    reality: "Your junior associates spend weeks on regulatory research that senior partners could answer in minutes — if they weren't in client meetings. Your firm's 20 years of engagement history lives in scattered folders nobody searches. Proposals get written from scratch every time because nobody can find the precedent from three years ago. And when a partner retires, their client relationships, regulatory interpretations, and hard-won lessons vanish overnight.",
    solution: "Precedent search across every past engagement — instant. Contract analysis and risk flagging automated. PDPL, SAMA, and CMA compliance work that used to take months delivered in days. Board materials and due diligence reports drafted by agentic AI, validated before they reach your desk. Every piece of institutional knowledge captured and accessible to authorized team members — permanently.",
    badges: ["PDPL", "SAMA", "CMA", "NCA"],
  },
  financial: {
    hook: "SAMA requires data sovereignty for financial institutions. Every fintech using global AI tools is one audit away from a serious problem.",
    reality: "Your compliance officer manually tracks SAMA regulatory updates across dozens of circulars per quarter. Your analysts paste client portfolio data into ChatGPT to speed up research — not because they don't care about security, but because there's no sovereign alternative. Your KYC process takes days of document review that could take hours. And when your head of risk moves to a competitor, their interpretation of every SAMA circular and CMA requirement walks out the door.",
    solution: "SAMA and CMA regulations mapped and monitored automatically — new circulars analyzed within hours of publication. AI-assisted KYC and due diligence entirely on-premise, no client financial data exposed. Portfolio research powered by global AI models through the Privacy Shield — your analysts get the intelligence, clients get the sovereignty. Institutional regulatory knowledge captured permanently.",
    badges: ["SAMA", "CMA", "PDPL", "AML"],
  },
};

const SolutionsTeaser = () => {
  const [activeTab, setActiveTab] = useState("real-estate");
  const content = tabContent[activeTab];

  return (
    <section className="relative bg-secondary/50 border-t border-border">
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--accent)), transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--primary)), transparent 50%)",
          }}
        />
      </div>

      <div className="relative container px-4 md:px-6 py-24 lg:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-5"
          >
            INDUSTRIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-[1.1]"
          >
            Your industry has specific regulations.
            <span className="text-muted-foreground block mt-2">Aliph already knows them.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Every industry faces different compliance requirements, different data sensitivities, and different AI use cases. Aliph ships with regulatory knowledge and workflows pre-configured for the sectors where data sovereignty matters most.
          </motion.p>
        </div>

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex overflow-x-auto no-scrollbar border-b border-border mb-0"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-card border border-t-0 border-border rounded-b-2xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
              {/* Left — The Reality (40%) */}
              <div className="lg:col-span-2 space-y-5">
                <h3 className="text-xl md:text-[22px] font-bold text-foreground leading-snug">
                  {content.hook}
                </h3>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">The Reality</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {content.reality}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="w-px h-full bg-border relative">
                  <ArrowRight className="w-5 h-5 text-accent absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-card" />
                </div>
              </div>

              {/* Right — With Aliph (60%) */}
              <div className="lg:col-span-2 space-y-5">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">What changes with Aliph</p>
                <p className="text-[15px] text-foreground/80 leading-relaxed">
                  {content.solution}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {content.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/15"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Healthcare Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16"
        >
          <div className="border-2 border-dashed border-border rounded-2xl p-8 md:p-10 bg-card/50 relative">
            <span className="absolute top-4 left-4 md:top-6 md:left-8 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/15">
              Coming H2 2026
            </span>
            <div className="flex items-start gap-4 mt-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <HeartPulse className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Healthcare Intelligence</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                  Patient data is the most sensitive category under PDPL. Aliph is building CBAHI compliance automation, clinical protocol management, and sovereign patient data intelligence for Saudi hospital groups and clinic chains.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:border-accent/30 hover:text-accent transition-all"
                >
                  Join the Healthcare Early Access List <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Sectors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-[15px] font-medium text-foreground mb-2">
            Also serving: Real Estate & Property Management · Hospitality & Tourism · Education · Government · Enterprise Conglomerates
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            The four-layer architecture is sector-agnostic. Each industry gets pre-configured regulatory modules and domain-specific workflows. Don't see your sector?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
          >
            Talk to us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsTeaser;
