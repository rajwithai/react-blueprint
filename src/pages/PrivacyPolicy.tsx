import Section from "@/components/sections/Section";

const PrivacyPolicy = () => (
  <>
    <div className="hero-gradient py-20 pt-32">
      <div className="container mx-auto px-6">
        <h1 className="font-heading font-bold text-4xl text-primary-foreground">Privacy Policy</h1>
      </div>
    </div>
    <Section>
      <div className="max-w-3xl mx-auto prose prose-sm">
        <p className="font-body text-muted-foreground leading-relaxed">
          This privacy policy outlines how Aliph Solutions collects, uses, and protects your personal data in compliance with PDPL and applicable data protection regulations. Last updated: February 2026.
        </p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Data Collection</h2>
        <p className="font-body text-muted-foreground leading-relaxed">We collect information you provide through contact forms, demo requests, and direct communication. This includes name, email, organization, and job title.</p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Data Usage</h2>
        <p className="font-body text-muted-foreground leading-relaxed">Your data is used solely to respond to your inquiries, schedule demonstrations, and provide information about our services.</p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Data Protection</h2>
        <p className="font-body text-muted-foreground leading-relaxed">All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We do not sell, share, or transfer your personal data to third parties.</p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Contact</h2>
        <p className="font-body text-muted-foreground leading-relaxed">For privacy-related inquiries, contact us at hello@aliphai.ai.</p>
      </div>
    </Section>
  </>
);

export default PrivacyPolicy;
