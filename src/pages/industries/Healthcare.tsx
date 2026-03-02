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
      <section className="pt-[88px] md:pt-[88px] pb-[48px] md:pb-[72px] bg-background">
        <div className="container px-6">
          <div className="max-w-3xl">
            <motion.span
              {...fadeUp}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-medium bg-accent/15 border border-accent/25 text-accent uppercase tracking-wider mb-6"
            >
              Coming H2 2026
            </motion.span>
            <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="section-label mb-3">
              Healthcare
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="section-headline mb-4"
            >
              Patient data is the most sensitive category under PDPL. It deserves the most sovereign AI.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="section-subtext mx-auto mb-8"
            >
              Saudi hospital groups sit on decades of patient records, clinical protocols, and operational knowledge that AI could transform into better outcomes, faster diagnoses, and lower costs. But patient data cannot leave your walls. It cannot be sent to foreign servers. It cannot be processed by tools that don't understand CBAHI accreditation or MOH regulations. Aliph is building healthcare AI that treats patient data with the protection it demands.
            </motion.p>
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a
                href="#waitlist"
                onClick={(e) => { e.preventDefault(); document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary group"
              >
                Join the Healthcare Early Access List
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={scrollToSection2}
                className="btn-secondary"
              >
                See What We're Building
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE REALITY */}
      <section id="reality" className="py-12 md:py-[72px] bg-[#F9FAFB]">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.p {...fadeUp} className="section-label mb-3">
              Your Reality Today
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
              Your hospital collects the data. Your staff can't safely use it.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
              Your clinicians make life-and-death decisions every day. They need instant access to patient histories, drug interaction data, clinical protocols, and institutional knowledge. Instead, they dig through fragmented EMR systems, call colleagues who may not answer, or — increasingly — paste patient details into ChatGPT because there's no sovereign alternative. Meanwhile, your compliance team tracks CBAHI accreditation requirements manually across spreadsheets. Your best physicians' thirty years of clinical intuition exist only in their heads. And every patient's national ID, medical history, insurance record, and diagnostic result stored in your systems falls under PDPL's strictest data category — with penalties up to SAR 5 million per violation.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {painCards.map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="card-std card-std-pain"
              >
                <h3 className="card-title-std mb-2">{card.title}</h3>
                <p className="card-body-std">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE'RE BUILDING */}
      <section className="py-12 md:py-[72px] bg-background">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.p {...fadeUp} className="section-label mb-3">
              What We're Building
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
              Six capabilities designed specifically for Saudi hospital groups and clinic chains.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
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
                  className="card-std card-std-success"
                >
                  <div className="p-2 rounded-lg bg-accent/10 w-fit mb-3">
                    <Icon className="card-icon" />
                  </div>
                  <h3 className="card-title-std mb-2">{cap.title}</h3>
                  <p className="card-body-std">{cap.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: REGULATIONS */}
      <section className="py-12 md:py-[72px] bg-[#F9FAFB]">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.p {...fadeUp} className="section-label mb-3">
              Regulatory Coverage
            </motion.p>
            <motion.h2 {...fadeUp} transition={{ delay: 0.05 }} className="section-headline mb-4">
              Built for the most regulated environment in Saudi Arabia.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="section-subtext mx-auto">
              Healthcare data falls under the strictest categories of every Saudi regulation. Aliph's healthcare module is being built with these frameworks embedded — not bolted on after launch.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {regulations.map((reg, i) => (
              <motion.div
                key={reg.acronym}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="card-std card-std-accent-top text-center"
              >
                <p className="reg-acronym mb-1">{reg.acronym}</p>
                <p className="reg-name mb-2">{reg.name}</p>
                <p className="reg-body">{reg.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="trust-line text-center mt-8 max-w-3xl mx-auto">
            Additional frameworks being evaluated: Saudi FDA (pharmaceutical), SCFHS (professional licensing), and medical research ethics requirements.
          </motion.p>
        </div>
      </section>

      {/* SECTION 5: WAITLIST CTA */}
      <section id="waitlist" className="dark-cta-section py-[56px] md:py-[88px]">
        <div className="container px-6 text-center max-w-3xl mx-auto">
          <motion.span
            {...fadeUp}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-medium bg-accent/20 border border-accent/30 text-accent uppercase tracking-wider mb-6"
          >
            Launching H2 2026
          </motion.span>
          <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="dark-cta-headline mb-4">
            We're selecting founding healthcare partners to shape this product.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="dark-cta-subtext mb-8 max-w-[640px] mx-auto">
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
                <span className="text-sm text-white/90">{item}</span>
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
                    className="px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    placeholder="Organization"
                    className="px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 appearance-none"
                >
                  <option value="" disabled className="text-foreground bg-background">Your Role</option>
                  {roleOptions.map((r) => (
                    <option key={r} value={r} className="text-foreground bg-background">{r}</option>
                  ))}
                </select>
                <button type="submit" className="btn-primary w-full justify-center group">
                  Apply for Founding Partner Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-lg font-heading font-semibold text-white mb-1">Application received.</p>
                <p className="text-sm text-white/60">Expect a personal response within 48 hours.</p>
              </motion.div>
            )}
          </motion.div>

          {!submitted && (
            <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="dark-cta-trust mt-4">
              We review every application. Expect a personal response within 48 hours.
            </motion.p>
          )}

          <motion.div {...fadeUp} transition={{ delay: 0.35 }} className="dark-cta-contact mt-4">
            <p>Want to discuss healthcare AI directly?</p>
            <p className="mt-1">
              <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
                <MessageCircle className="h-3.5 w-3.5" /> +966 56 967 8421
              </a>
              <span className="mx-2">|</span>
              <a href="mailto:raj@aliphai.ai" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
                <Mail className="h-3.5 w-3.5" /> raj@aliphai.ai
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Healthcare;
