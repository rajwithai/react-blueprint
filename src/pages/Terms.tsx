import Section from "@/components/sections/Section";

const Terms = () => (
  <>
    <div className="hero-gradient py-20 pt-32">
      <div className="container mx-auto px-6">
        <h1 className="font-heading font-bold text-4xl text-primary-foreground">Terms of Service</h1>
        <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl">
          The terms and conditions governing your use of Aliph Solutions' website and services.
        </p>
      </div>
    </div>
    <Section>
      <div className="max-w-3xl mx-auto prose prose-sm">
        <p className="font-body text-muted-foreground leading-relaxed text-sm italic">
          Last updated: February 2026
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">1. Acceptance of Terms</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          By accessing or using the Aliph Solutions website (aliphai.ai) and any associated services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of our website and services immediately.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">2. Description of Services</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Aliph Solutions provides enterprise AI platforms, governance and compliance tools, and related software services. This website serves as an informational resource about our products and services, including AliphChat, the GRC Platform, Agentic AI solutions, and Privacy Shield technologies.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">3. Intellectual Property</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          All content, trademarks, logos, software, designs, text, graphics, and other materials on this website are the exclusive property of Aliph Solutions and are protected by applicable intellectual property laws of the Kingdom of Saudi Arabia and international treaties. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">4. User Conduct</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-3">When using our website and services, you agree not to:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-body">
          <li>Use the services for any unlawful purpose or in violation of any applicable laws or regulations.</li>
          <li>Attempt to gain unauthorized access to any systems, servers, or networks connected to our services.</li>
          <li>Interfere with or disrupt the integrity or performance of our website or services.</li>
          <li>Transmit any viruses, malware, or other harmful code through our platforms.</li>
          <li>Reverse-engineer, decompile, or disassemble any part of our software or technology.</li>
        </ul>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">5. Demo Requests & Communications</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          When you submit a demo request or contact form, you consent to receiving communications from Aliph Solutions regarding your inquiry. We may use the information you provide to schedule demonstrations, share relevant product information, and follow up on your interest. You may opt out of non-essential communications at any time.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">6. Limitation of Liability</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Aliph Solutions provides this website and its content on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall Aliph Solutions be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our website or services.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">7. Third-Party Links</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Our website may contain links to third-party websites or services that are not owned or controlled by Aliph Solutions. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites. You acknowledge and agree that we are not responsible for any damage or loss caused by your use of such external resources.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">8. Confidentiality</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Any proprietary information, product details, pricing, or technical specifications shared during demonstrations or consultations are considered confidential. You agree not to disclose such information to third parties without Aliph Solutions' prior written consent.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">9. Modifications to Terms</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page, with the "Last updated" date revised accordingly. Your continued use of the website after changes constitutes acceptance of the modified terms.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">10. Governing Law & Dispute Resolution</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          These Terms of Service are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Riyadh, Kingdom of Saudi Arabia.
        </p>

        <h2 className="font-heading font-semibold text-xl mt-10 mb-3">11. Contact Information</h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          For questions or concerns regarding these Terms of Service, please contact us:
        </p>
        <ul className="list-none pl-0 space-y-1 text-muted-foreground font-body mt-3">
          <li><strong>Email:</strong> hello@aliphai.ai</li>
          <li><strong>Address:</strong> Riyadh, Kingdom of Saudi Arabia</li>
        </ul>
      </div>
    </Section>
  </>
);

export default Terms;
