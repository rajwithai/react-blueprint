import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const interestOptions = [
  "AliphChat — Enterprise AI Assistant",
  "GRC Platform — Compliance Automation",
  "Partnership Opportunity",
  "Investor Inquiry",
  "Careers at Aliph",
  "General Question",
];

const inquiryMap: Record<string, string> = {
  investor: "Investor Inquiry",
  careers: "Careers at Aliph",
  partnership: "Partnership Opportunity",
  demo: "AliphChat — Enterprise AI Assistant",
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const inquiry = searchParams.get("inquiry") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (inquiry && inquiryMap[inquiry]) {
      setFormData((prev) => ({ ...prev, interest: inquiryMap[inquiry] }));
    }
  }, [inquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16">
          {/* Left column — info */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-bold text-3xl md:text-[38px] text-foreground mb-5"
            >
              Let's talk.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="font-body text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Whether you're exploring sovereign AI for your organization, interested in a partnership, or have questions about Aliph — we respond to every message.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-5"
            >
              {/* Email */}
              <div className="flex gap-3 items-start">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-semibold text-[15px] text-foreground">Email</p>
                  <a href="mailto:raj@aliphai.ai" className="font-body text-sm text-foreground hover:text-accent transition-colors">raj@aliphai.ai</a>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex gap-3 items-start">
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-semibold text-[15px] text-foreground">WhatsApp</p>
                  <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-accent transition-colors">+966 56 967 8421</a>
                </div>
              </div>
              {/* Location */}
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-semibold text-[15px] text-foreground">Location</p>
                  <p className="font-body text-sm text-muted-foreground">Riyadh, Kingdom of Saudi Arabia</p>
                </div>
              </div>
              {/* Social */}
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <div>
                  <p className="font-heading font-semibold text-[15px] text-foreground">Social</p>
                  <div className="flex gap-3">
                    <a href="https://linkedin.com/company/aliphai" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-accent transition-colors">LinkedIn</a>
                    <a href="https://x.com/AliphAI" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-accent transition-colors">@AliphAI</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xs text-muted-foreground mt-8"
            >
              Typical response time: Within 24 hours.
            </motion.p>
          </div>

          {/* Right column — form */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 space-y-4 rounded-xl border border-border bg-secondary/50"
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, delay: 0.1 }}>
                  <CheckCircle2 className="w-14 h-14 text-accent" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-foreground">Message sent!</h3>
                <p className="font-body text-muted-foreground max-w-sm">
                  A real person from our founding team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", interest: "", message: "" }); }}
                  className="mt-4 font-body text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-xl border border-border bg-secondary/30 p-6 md:p-8"
              >
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1.5">Full Name *</label>
                  <input type="text" required placeholder="Your full name" className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1.5">Email Address *</label>
                  <input type="email" required placeholder="you@company.com" className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1.5">Company Name</label>
                  <input type="text" placeholder="Optional" className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1.5">I'm interested in... *</label>
                  <select required className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" value={formData.interest} onChange={e => setFormData({ ...formData, interest: e.target.value })}>
                    <option value="">Select an option...</option>
                    {interestOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1.5">Message *</label>
                  <textarea required rows={5} placeholder="Tell us how we can help..." className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button type="submit" className="w-full px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110 transition-all">
                  Send Message
                </button>
                <p className="font-body text-xs text-muted-foreground text-center">
                  We read every message. Expect a response within 24 hours.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
