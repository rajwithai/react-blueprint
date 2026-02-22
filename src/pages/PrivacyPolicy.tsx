import Section from "@/components/sections/Section";

const PrivacyPolicy = () => (
  <>
    <div className="hero-gradient py-20 pt-32">
      <div className="container mx-auto px-6">
        <h1 className="font-heading font-bold text-4xl text-primary-foreground">Privacy Policy</h1>
        <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl">
          How Aliph Solutions collects, uses, and protects your personal data in compliance with PDPL and applicable data protection regulations.
        </p>
      </div>
    </div>
    <Section>
      <div className="max-w-3xl mx-auto prose prose-sm">
        <p className="font-body text-muted-foreground leading-relaxed text-sm italic">
          Last updated: February 2026
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">1. Introduction</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Aliph Solutions ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (aliphai.ai) or use our products and services. We comply with the Kingdom of Saudi Arabia's Personal Data Protection Law (PDPL) and applicable international data protection regulations.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">2. Data We Collect</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-3">We collect the following categories of personal data:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-body">
          <li><strong>Contact Information:</strong> Name, email address, phone number, organization name, and job title — provided through contact forms, demo requests, or direct communication.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on pages, browser type, device information, and IP address — collected automatically via standard web analytics.</li>
          <li><strong>Communication Data:</strong> Records of correspondence when you contact us for support or inquiries.</li>
          <li><strong>Cookie Data:</strong> Information collected through cookies and similar technologies as described in our Cookie section below.</li>
        </ul>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">3. How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-body">
          <li>To respond to your inquiries and schedule product demonstrations.</li>
          <li>To provide, maintain, and improve our services and website experience.</li>
          <li>To send relevant information about our products and services (with your consent).</li>
          <li>To comply with legal obligations under PDPL and other applicable laws.</li>
          <li>To detect and prevent fraud or unauthorized access to our systems.</li>
        </ul>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">4. Data Protection & Security</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          We implement industry-leading security measures to protect your personal data:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-body mt-3">
          <li><strong>Encryption in Transit:</strong> All data is transmitted using TLS 1.3 encryption.</li>
          <li><strong>Encryption at Rest:</strong> Stored data is encrypted using AES-256 standards.</li>
          <li><strong>Access Controls:</strong> Strict role-based access controls limit who can view personal data within our organization.</li>
          <li><strong>Regular Audits:</strong> We conduct periodic security assessments and vulnerability testing.</li>
        </ul>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">5. Data Sharing & Third Parties</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          We do not sell, rent, or trade your personal data. We may share data only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-body mt-3">
          <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operating our website and services, bound by strict data processing agreements.</li>
          <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process under Saudi Arabian jurisdiction.</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice to affected individuals.</li>
        </ul>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">6. Cookies & Tracking Technologies</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include essential cookies for website functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings. You can manage cookie preferences through your browser settings at any time.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">7. Your Rights Under PDPL</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-3">As a data subject under PDPL, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-body">
          <li>Access and obtain a copy of your personal data.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request deletion of your personal data (subject to legal retention requirements).</li>
          <li>Withdraw consent for data processing at any time.</li>
          <li>Object to processing of your data for direct marketing purposes.</li>
        </ul>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">8. Data Retention</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. Contact form submissions are retained for up to 24 months. Analytics data is anonymized after 12 months.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">9. International Data Transfers</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Your data is primarily processed and stored within the Kingdom of Saudi Arabia. If any data transfer outside of KSA is required, we ensure appropriate safeguards are in place in accordance with PDPL requirements, including data processing agreements and adequate protection measures.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">10. Contact Us</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          For privacy-related inquiries, data access requests, or to exercise your rights under PDPL, please contact our Data Protection team:
        </p>
        <ul className="list-none pl-0 space-y-1 text-muted-foreground font-body mt-3">
          <li><strong>Email:</strong> hello@aliphai.ai</li>
          <li><strong>Address:</strong> Riyadh, Kingdom of Saudi Arabia</li>
        </ul>
        <p className="font-body text-muted-foreground leading-relaxed mt-4">
          We will respond to all legitimate requests within 30 days in accordance with PDPL requirements.
        </p>
      </div>
    </Section>
  </>
);

export default PrivacyPolicy;
