import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import riyadhImg from "@/assets/images/riyadh-office.jpg";

const inquiryTypes = ["General Inquiry", "Partnership", "Demo Request", "Investor Relations", "Media", "Careers"];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", title: "", inquiryType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We'll be in touch soon.");
  };

  return (
    <>
      <PageHero
        title="Let's talk."
        subtitle="Exploring sovereign AI. Evaluating partnerships. Asking hard questions. Whatever the reason — we're here."
      />

      {/* Parallax Office */}
      <ParallaxImage
        src={riyadhImg}
        alt="Aliph office in Riyadh"
        className="h-[40vh] md:h-[50vh]"
        speed={0.2}
      />

      {/* Section 1: Contact Form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              <label className="block font-body text-sm font-medium mb-1.5">Job Title</label>
              <input type="text" className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
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
            <button type="submit" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110 transition-all">
              Send Message
            </button>
          </motion.form>

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
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Location</p>
                    <p className="font-body text-sm text-muted-foreground">Riyadh, Kingdom of Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section 2: Response Promise */}
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

      {/* Section 3: What to expect */}
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

      {/* Section 4: FAQ */}
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
