import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";

const inquiryTypes = ["General Inquiry", "Partnership", "Demo Request", "Investor Relations", "Media", "Careers"];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", title: "", inquiryType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We'll be in touch soon.");
  };

  return (
    <>
      <HeroSection
        title="Let's talk."
        subtitle="Whether you're exploring sovereign AI for your organization, interested in partnership opportunities, or have questions about our platform — we'd like to hear from you."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-5">
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
            <button type="submit" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:brightness-90 transition-all">
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-xl mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium">Email</p>
                    <a href="mailto:hello@aliphai.ai" className="font-body text-sm text-primary hover:underline">hello@aliphai.ai</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium">Phone</p>
                    <a href="tel:+966569678421" className="font-body text-sm text-primary hover:underline">+966 56 967 8421</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium">Location</p>
                    <p className="font-body text-sm text-muted-foreground">Riyadh, Kingdom of Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
