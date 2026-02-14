import Section from "@/components/sections/Section";

const Terms = () => (
  <>
    <div className="hero-gradient py-20 pt-32">
      <div className="container mx-auto px-6">
        <h1 className="font-heading font-bold text-4xl text-primary-foreground">Terms of Service</h1>
      </div>
    </div>
    <Section>
      <div className="max-w-3xl mx-auto prose prose-sm">
        <p className="font-body text-muted-foreground leading-relaxed">
          These terms govern your use of the Aliph Solutions website and services. By accessing this website, you agree to these terms. Last updated: February 2026.
        </p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Use of Service</h2>
        <p className="font-body text-muted-foreground leading-relaxed">This website is provided for informational purposes. All content is owned by Aliph Solutions and protected by applicable intellectual property laws.</p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Limitation of Liability</h2>
        <p className="font-body text-muted-foreground leading-relaxed">Aliph Solutions provides this website on an "as is" basis. We make no warranties regarding the accuracy or completeness of content on this site.</p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Governing Law</h2>
        <p className="font-body text-muted-foreground leading-relaxed">These terms are governed by the laws of the Kingdom of Saudi Arabia.</p>
        <h2 className="font-heading font-semibold text-xl mt-8 mb-3">Contact</h2>
        <p className="font-body text-muted-foreground leading-relaxed">For questions regarding these terms, contact us at hello@aliphai.ai.</p>
      </div>
    </Section>
  </>
);

export default Terms;
