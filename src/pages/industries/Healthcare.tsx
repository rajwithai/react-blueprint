import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, MessageCircle, Mail, ArrowRight, ArrowDown,
  ClipboardCheck, FileText, Shield, Pill, Brain, Languages
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const painCards = [
  {
    title: "Clinicians paste patient data into ChatGPT because there's no alternative.",
    body: "Your physicians need AI to research drug interactions, analyze symptoms, and review clinical literature. Every query containing patient identifiers, medical histories, or diagnostic data sent to foreign servers is a PDPL violation. They know the risk. They have no other option.",
  },
  {
    title: "CBAHI accreditation preparation consumes your compliance team for months.",
    body: "Manual tracking of accreditation requirements across departments. Evidence collection scattered across shared drives and email chains. Every accreditation cycle is a scramble — and your team is already understaffed.",
  },
  {
    title: "Your senior physician retires. Thirty years of clinical intuition vanishes.",
    body: "Protocol decisions, rare case experiences, institutional knowledge about which treatments work for which patient populations — gone overnight. The new attending starts from textbooks, not from decades of real-world clinical wisdom.",
  },
];

const capabilities = [
  { icon: ClipboardCheck, title: "CBAHI Compliance Automation", body: "Accreditation requirements mapped and tracked automatically across every department. Gap analyses generated per standard. Evidence collection streamlined. Preparation that consumes months compressed into weeks. Updated as CBAHI standards evolve." },
  { icon: FileText, title: "Clinical Protocol Management", body: "Every clinical protocol, treatment guideline, and standard operating procedure indexed and searchable by authorized clinicians. Ask AliphChat about the protocol for a specific condition — get the answer with citations from your hospital's own approved guidelines." },
  { icon: Shield, title: "Sovereign Patient Data Intelligence", body: "Clinicians query patient histories, lab results, and clinical data through AliphChat — entirely on-premise. Privacy Shield ensures patient identifiers are never exposed to external AI models. Physicians get AI-assisted analysis. Patients get data sovereignty." },
  { icon: Pill, title: "Drug Interaction & Clinical Decision Support", body: "AI-assisted drug interaction checking, contraindication alerts, and treatment option analysis — powered by your hospital's own formulary data combined with medical knowledge bases. Processed locally. No patient data transmitted externally." },
  { icon: Brain, title: "Institutional Clinical Knowledge", body: "Thirty years of a senior physician's treatment decisions, rare case experiences, and clinical intuition — captured in Organization Memory. New residents and attending physicians access institutional wisdom from day one. Knowledge that compounds across every clinician who uses the system." },
  { icon: Languages, title: "Arabic Medical Document Processing", body: "Patient records, clinical notes, and medical documentation in Arabic processed natively — not translated. Medical terminology in both Arabic and English recognized and handled correctly. Referral letters, discharge summaries, and clinical reports generated bilingually." },
];

const regulations = [
  { acronym: "CBAHI", name: "Central Board for Accreditation of Healthcare Institutions", body: "Full accreditation standard mapping. Automated gap analysis per department. Evidence collection and audit preparation. Continuous monitoring as standards are updated." },
  { acronym: "PDPL", name: "Personal Data Protection Law", body: "Patient data is classified as the most sensitive category. Consent management, data handling, cross-border restrictions, and breach notification — all mapped for healthcare-specific scenarios." },
  { acronym: "MOH", name: "Ministry of Health Regulations", body: "Healthcare facility licensing requirements, clinical standards, reporting obligations, and pharmaceutical regulations. Tracked and analyzed for compliance gaps." },
  { acronym: "NPHIES", name: "National Platform for Health Insurance Exchange", body: "Insurance claims processing, eligibility verification, and health information exchange requirements. Integration-ready for sovereign data processing." },
];

const roleOptions = [
  "Hospital CEO / COO",
  "Chief Medical Officer",
  "IT Director / CIO",
  "Compliance / Quality Officer",
  "Clinic Chain Owner / Manager",
  "Other",
];

const Healthcare = () => {
  const [form, setForm] = useState({ name: "", org: "", email: "", role: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email && form.name) setSubmitted(true);
  };

  const scrollToSection2 = () => {
    document.getElementById("reality")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="pt-[100px] md:pt-[120px] pb-[60px] md:pb-[80px] bg-background">
        <div className="container px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <motion.span
              {...fadeUp}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold bg-accent/15 border border-accent/25 text-accent uppercase tracking-wider mb-6"
            >
              Coming H2 2026
            </motion.span>
            <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-muted-foreground mb-4">
              Healthcare
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-[2.5rem] md:text-[3.25rem] tracking-tight leading-[1.08] mb-6 text-foreground"
            >
              Patient data is the most sensitive category under PDPL. It deserves the most sovereign AI.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="font-body text-lg md:text-[19px] text-muted-foreground leading-[1.7] mb-10 max-w-[640px] mx-auto"
            >
              Saudi hospital groups sit on decades of patient records, clinical protocols, and operational knowledge that AI could transform into better outcomes, faster diagnoses, and lower costs. But patient data cannot leave your walls. It cannot be sent to foreign servers. It cannot be processed by tools that don't understand CBAHI accreditation or MOH regulations. Aliph is building healthcare AI that treats patient data with the protection it demands.
            </motion.p>
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a
                href="#waitlist"
                onClick={(e) => { e.preventDefault(); document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all shadow-sm group"
              >
                Join the Healthcare Early Access List
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={scrollToSection2}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground hover:bg-muted font-heading font-semibold transition-all"
              >
                See What We're Building
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE REALITY */}
      <section id="reality" className="py-16 md:py-20 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-muted-foreground mb-3">
              Your Reality Today
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Your hospital collects the data. Your staff can't safely use it.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-base md:text-lg max-w-[700px] mx-auto">
              Your clinicians make life-and-death decisions every day. They need instant access to patient histories, drug interaction data, clinical protocols, and institutional knowledge. Instead, they dig through fragmented EMR systems, call colleagues who may not answer, or — increasingly — paste patient details into ChatGPT because there's no sovereign alternative. Meanwhile, your compliance team tracks CBAHI accreditation requirements manually across spreadsheets. Your best physicians' thirty years of clinical intuition exist only in their heads. And every patient's national ID, medical history, insurance record, and diagnostic result stored in your systems falls under PDPL's strictest data category — with penalties up to SAR 5 million per violation.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {painCards.map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm border-l-[3px] border-l-destructive/60"
              >
                <h3 className="font-heading font-semibold text-base mb-2 text-foreground">{card.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE'RE BUILDING */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-muted-foreground mb-3">
              What We're Building
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Six capabilities designed specifically for Saudi hospital groups and clinic chains.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-lg max-w-[680px] mx-auto">
              Every capability runs on Aliph's four-layer sovereign architecture. Patient data never leaves your infrastructure. Every interaction is logged for compliance. Arabic and English are natively supported.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm border-l-[3px] border-l-green-500/60"
                >
                  <div className="p-2 rounded-lg bg-accent/10 w-fit mb-3">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2 text-foreground">{cap.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{cap.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: REGULATIONS */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-muted-foreground mb-3">
              Regulatory Coverage
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Built for the most regulated environment in Saudi Arabia.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground leading-relaxed text-lg max-w-[660px] mx-auto">
              Healthcare data falls under the strictest categories of every Saudi regulation. Aliph's healthcare module is being built with these frameworks embedded — not bolted on after launch.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {regulations.map((reg, i) => (
              <motion.div
                key={reg.acronym}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border border-t-[3px] border-t-accent/60 text-center"
              >
                <p className="font-heading font-bold text-[28px] md:text-[32px] text-accent mb-1">{reg.acronym}</p>
                <p className="font-heading text-[11px] uppercase tracking-wider text-muted-foreground mb-3">{reg.name}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{reg.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto">
            Additional frameworks being evaluated: Saudi FDA (pharmaceutical), SCFHS (professional licensing), and medical research ethics requirements.
          </motion.p>
        </div>
      </section>

      {/* SECTION 5: WAITLIST CTA */}
      <section id="waitlist" className="py-20 md:py-24 bg-[hsl(var(--primary))] text-primary-foreground">
        <div className="container px-6 text-center max-w-3xl mx-auto">
          <motion.span
            {...fadeUp}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold bg-accent/20 border border-accent/30 text-accent uppercase tracking-wider mb-6"
          >
            Launching H2 2026
          </motion.span>
          <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="font-heading font-bold text-3xl md:text-[2.5rem] leading-tight mb-6">
            We're selecting founding healthcare partners to shape this product.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="font-body text-primary-foreground/70 text-lg leading-relaxed mb-8 max-w-[640px] mx-auto">
            We're building healthcare AI in close collaboration with a small number of Saudi hospital groups and clinic chains. Founding partners get direct input into which capabilities launch first, priority deployment access, and dedicated engineering support during integration with your EMR and clinical systems.
          </motion.p>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="text-left max-w-md mx-auto mb-10 space-y-3">
            {[
              "Direct input into which healthcare capabilities are built first",
              "Priority access before general availability — months ahead of the market",
              "Dedicated engineering integration with your EMR, clinical, and administrative systems",
              "Founding partner pricing — locked in before general availability rates",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="font-body text-sm text-primary-foreground/90">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp} transition={{ delay: 0.25 }} className="max-w-[520px] mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    placeholder="Organization"
                    className="px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 appearance-none"
                >
                  <option value="" className="text-muted-foreground bg-card text-foreground">Your Role</option>
                  {roleOptions.map((r) => (
                    <option key={r} value={r} className="bg-card text-foreground">{r}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all shadow-sm inline-flex items-center justify-center gap-2 group"
                >
                  Apply for Founding Partner Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="px-6 py-5 rounded-lg bg-accent/15 border border-accent/25">
                <p className="font-heading font-semibold text-accent text-base mb-1">Application received.</p>
                <p className="font-body text-sm text-primary-foreground/70">We review every application. Expect a personal response within 48 hours.</p>
              </div>
            )}
          </motion.div>

          {!submitted && (
            <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="text-xs text-primary-foreground/40 mt-4">
              We review every application. Expect a personal response within 48 hours.
            </motion.p>
          )}

          <motion.div {...fadeUp} transition={{ delay: 0.35 }} className="mt-8">
            <p className="text-xs text-primary-foreground/40 mb-2">Want to discuss healthcare AI directly?</p>
            <div className="flex justify-center gap-4 text-xs text-primary-foreground/50">
              <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
                <MessageCircle className="h-3.5 w-3.5" /> +966 56 967 8421
              </a>
              <a href="mailto:raj@aliphai.ai" className="inline-flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
                <Mail className="h-3.5 w-3.5" /> raj@aliphai.ai
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Healthcare;
