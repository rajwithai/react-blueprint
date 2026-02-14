import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";

const companySizes = ["1–50", "51–200", "201–500", "501–1000", "1000+"];
const industries = ["Financial Services", "Healthcare", "Professional Services", "Technology", "Government", "Other"];
const products = ["AliphChat", "GRC Platform", "Agentic AI Platform", "Not Sure — Show Me Everything"];

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
        title="See Aliph in action."
        subtitle="Schedule a live demonstration of the Aliph platform. We will show you how Privacy Shield protects your data, how Organization Memory captures your institutional knowledge, and how our AI delivers enterprise-grade results with full sovereignty."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-5">
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
              <label className="block font-body text-sm font-medium mb-1.5">Which product interests you most?</label>
              <div className="space-y-2">
                {products.map(p => (
                  <label key={p} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={formData.products.includes(p)} onChange={() => toggleProduct(p)} className="rounded border-border text-primary focus:ring-primary" />
                    <span className="font-body text-sm">{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:brightness-90 transition-all text-lg">
              Book My Demo
            </button>
          </form>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-6">What to Expect</h3>
            <div className="space-y-4">
              {[
                "30-minute live demo tailored to your organization.",
                "See Privacy Shield mask real-time PII in Arabic and English.",
                "Experience Organization Memory with a sample knowledge base.",
                "Ask technical questions directly to our founding team.",
                "No commitment. No sales pressure.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-body text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Demo;
