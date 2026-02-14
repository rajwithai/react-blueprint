import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";

const companySizes = ["1–50", "51–200", "201–500", "501–1000", "1000+"];
const industries = ["Financial Services", "Healthcare", "Professional Services", "Technology", "Government", "Other"];
const products = ["AliphChat", "GRC Platform", "Agentic AI Platform", "Show Me Everything"];

const Demo = () => {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", title: "", companySize: "", industry: "", products: [] as string[] });

  const toggleProduct = (p: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(p) ? prev.products.filter(x => x !== p) : [...prev.products, p],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll schedule your demo shortly.");
  };

  return (
    <>
      <HeroSection
        title="See it live."
        subtitle="30 minutes. Tailored to your organization. See Privacy Shield mask data in real time, Organization Memory answer from your knowledge base, and multi-agent AI produce work that used to take weeks."
      />

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
              <label className="block font-body text-sm font-medium mb-1.5">Work Email *</label>
              <input type="email" required className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block font-body text-sm font-medium mb-1.5">Organization Name *</label>
              <input type="text" required className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} />
            </div>
            <div>
              <label className="block font-body text-sm font-medium mb-1.5">Job Title *</label>
              <input type="text" required className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
            </div>
            <div>
              <label className="block font-body text-sm font-medium mb-1.5">Company Size</label>
              <select className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.companySize} onChange={e => setFormData({...formData, companySize: e.target.value})}>
                <option value="">Select...</option>
                {companySizes.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-body text-sm font-medium mb-1.5">Industry</label>
              <select className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})}>
                <option value="">Select...</option>
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-body text-sm font-medium mb-1.5">Products of interest</label>
              <div className="space-y-2">
                {products.map(p => (
                  <label key={p} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={formData.products.includes(p)} onChange={() => toggleProduct(p)} className="rounded border-border text-primary focus:ring-primary" />
                    <span className="font-body text-sm">{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:brightness-110 transition-all text-lg shadow-lg shadow-primary/25">
              Book My Demo
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-xl mb-6">What to Expect</h3>
            <div className="space-y-4">
              {[
                "Tailored to your industry and regulatory environment.",
                "Live demonstration with real AI interactions.",
                "Direct access to the founding team.",
                "No commitment. No sales pressure.",
                "Available in Arabic and English.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-body text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Demo;
