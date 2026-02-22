import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Globe, Shield, MessageCircle, CheckCircle2, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import riyadhImg from "@/assets/images/riyadh-office.jpg";

const inquiryTypes = ["General Inquiry", "Partnership", "Demo Request", "Investor Relations", "Media", "Careers"];

const sourceLabels: Record<string, string> = {
  platform: "our Platform",
  "aliphchat": "AliphChat",
  "agentic-ai": "Agentic AI",
  grc: "our GRC Platform",
  "privacy-shield": "Privacy Shield",
  "global-llm": "Global LLM Router",
  "org-memory": "Organization Memory",
  industries: "Industry Solutions",
  pdpl: "PDPL Compliance",
  demo: "a Demo",
};

const inquiryMap: Record<string, string> = {
  demo: "Demo Request",
  partnership: "Partnership",
  general: "General Inquiry",
  investor: "Investor Relations",
  media: "Media",
  careers: "Careers",
};

const quickConnectCards = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@aliphai.ai",
    href: "mailto:hello@aliphai.ai",
    color: "text-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+966 56 967 8421",
    href: "tel:+966569678421",
    color: "text-emerald-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat instantly",
    href: "https://wa.me/966569678421",
    color: "text-green-500",
  },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source") || "";
  const inquiry = searchParams.get("inquiry") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (inquiry && inquiryMap[inquiry]) {
      setFormData((prev) => ({ ...prev, inquiryType: inquiryMap[inquiry] }));
    }
  }, [inquiry]);

  const contextSubtitle = source && sourceLabels[source]
    ? `You're reaching out about ${sourceLabels[source]}. We'll connect you with the right team.`
    : "Exploring sovereign AI. Evaluating partnerships. Asking hard questions. Whatever the reason — we're here.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Let's talk."
        subtitle={contextSubtitle}
      />

      <ParallaxImage
        src={riyadhImg}
        alt="Aliph office in Riyadh"
        className="h-[40vh] md:h-[50vh]"
        speed={0.2}
      />

      {/* Quick Connect Cards */}
      <Section>
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {quickConnectCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target={card.title === "WhatsApp" ? "_blank" : undefined}
              rel={card.title === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <card.icon className={`w-7 h-7 ${card.color} group-hover:scale-110 transition-transform`} />
              <span className="font-heading font-semibold text-foreground">{card.title}</span>
              <span className="font-body text-sm text-muted-foreground">{card.detail}</span>
            </motion.a>
          ))}
        </div>

        {/* Availability Indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="font-body text-sm text-muted-foreground">Typically responds within 2 hours</span>
        </div>

        {/* Contact Form + Details */}
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center justify-center text-center py-16 space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-accent" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-foreground">Message sent!</h3>
                <p className="font-body text-muted-foreground max-w-sm">
                  A real person from our founding team will get back to you within 24 hours. No chatbots, no autoresponders.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", organization: "", inquiryType: "", message: "" });
                  }}
                  className="mt-4 font-body text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block font-body text-sm font-medium mb-1.5">Full Name *</label>
                  <input type="text" required className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium mb-1.5">Email Address *</label>
                  <input type="email" required className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium mb-1.5">Organization Name *</label>
                  <input type="text" required className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium mb-1.5">Inquiry Type</label>
                  <select className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})}>
                    <option value="">Select...</option>
                    {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium mb-1.5">Message *</label>
                  <textarea required rows={4} className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-2 pt-1">
                  <Shield className="w-4 h-4 text-muted-foreground/60" />
                  <span className="font-body text-xs text-muted-foreground/60">Trusted by enterprises across Saudi Arabia · PDPL Compliant</span>
                </div>

                <button type="submit" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110 transition-all">
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-xl mb-6 text-foreground">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:hello@aliphai.ai" className="font-body text-sm text-primary hover:underline">hello@aliphai.ai</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+966569678421" className="font-body text-sm text-primary hover:underline">+966 56 967 8421</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Office</p>
                    <p className="font-body text-sm text-muted-foreground">Al Olaya District, Riyadh 12213<br />Kingdom of Saudi Arabia</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Working Hours</p>
                    <p className="font-body text-sm text-muted-foreground">Sun–Thu, 9:00 AM – 6:00 PM (AST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Models */}
            <div className="rounded-xl border border-border bg-secondary/50 p-6">
              <h4 className="font-heading font-semibold text-sm text-foreground mb-3">How We Work</h4>
              <ul className="space-y-2">
                {[
                  "Enterprise licensing with custom deployment",
                  "On-premise, sovereign cloud, or hybrid",
                  "Guided pilot program for qualified enterprises",
                  "Pricing tailored to your scale and requirements",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-xs text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Response Promise */}
      <Section alabaster>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            We respond within 24 hours.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Every inquiry receives a response from a real person on the founding team. Not a chatbot. Not an autoresponder. A real conversation with someone who can actually help.
          </p>
        </div>
      </Section>

      {/* What to expect */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          What to expect.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Clock} title="Quick Response" description="We respond within 24 hours. Most inquiries receive a same-day reply." delay={0} />
          <FeatureCard icon={Globe} title="Bilingual Support" description="Full support in Arabic and English. Our team is fluent in both." delay={80} />
          <FeatureCard icon={Shield} title="Confidential" description="Your inquiry details are treated with the same privacy standards we build into our products." delay={160} />
        </div>
      </Section>

      {/* FAQ */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          Common questions.
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "How long does a demo take?", a: "30 minutes. Tailored to your industry and regulatory requirements." },
            { q: "Is there a free trial?", a: "We offer a guided pilot program for qualified enterprises. Contact us to discuss." },
            { q: "Can we deploy on-premise?", a: "Yes. Aliph supports on-premise, sovereign cloud, and hybrid deployments." },
          ].map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="font-body text-sm text-muted-foreground">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Prefer a demo instead?"
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
};

export default Contact;
