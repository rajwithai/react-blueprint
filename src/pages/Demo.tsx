import { useState } from "react";
import { CheckCircle2, Shield, Clock, Users, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";
import ParallaxImage from "@/components/sections/ParallaxImage";
import platformImg from "@/assets/images/platform-architecture.jpg";

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
      <PageHero
        title="See it live."
        subtitle="30 minutes. Tailored to your organization. See Privacy Shield mask data in real time, Organization Memory answer from your knowledge base, and multi-agent AI produce work that used to take weeks."
      />

      {/* Parallax Architecture */}
      <ParallaxImage
        src={platformImg}
        alt="Aliph platform in action"
        className="h-[40vh] md:h-[50vh]"
        speed={0.2}
        overlay
        overlayOpacity={0.2}
      >
        <div className="container mx-auto px-6 py-20 lg:py-28 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            See sovereign AI in action.
          </motion.h2>
        </div>
      </ParallaxImage>

      {/* Section 1: Form */}
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
            <button type="submit" className="w-full px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110 transition-all text-lg">
              Book My Demo
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-xl mb-6 text-foreground">What to Expect</h3>
            <div className="space-y-4">
              {[
                "Tailored to your industry and regulatory environment.",
                "Live demonstration with real AI interactions.",
                "Direct access to the founding team.",
                "No commitment. No sales pressure.",
                "Available in Arabic and English.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="font-body text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section 2: What you'll see */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          What you'll see in the demo.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Shield} title="Privacy Shield Live" description="Watch PII detection and masking happen in real-time. See exactly what the AI sees vs. what you wrote." delay={0} />
          <FeatureCard icon={Zap} title="Knowledge Search" description="Ask a question about your industry. See Organization Memory surface relevant answers with citations." delay={80} />
          <FeatureCard icon={Users} title="Multi-Agent AI" description="Watch AI agents research, draft, and validate a compliance document in minutes, not weeks." delay={160} />
        </div>
      </Section>

      {/* Section 3: Social proof */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground"
          >
            Trusted by enterprise leaders.
          </motion.h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Organizations across financial services, healthcare, and professional services trust Aliph to govern their AI interactions while maintaining full data sovereignty.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { metric: "100%", label: "PDPL Compliant" },
              { metric: "95%+", label: "PII Detection Accuracy" },
              { metric: "< 200ms", label: "Masking Latency" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-heading font-bold text-3xl text-gradient mb-1">{stat.metric}</p>
                <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4: Process */}
      <Section alabaster>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-3xl md:text-4xl mb-12 text-foreground text-center"
        >
          From demo to deployment.
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Demo", desc: "30-minute tailored demonstration." },
            { step: "02", title: "Pilot", desc: "Guided pilot with your data and users." },
            { step: "03", title: "Deploy", desc: "Production deployment in your infrastructure." },
            { step: "04", title: "Scale", desc: "Expand across teams and departments." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-xl text-accent">{s.step}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Ready to see it live?"
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
};

export default Demo;
