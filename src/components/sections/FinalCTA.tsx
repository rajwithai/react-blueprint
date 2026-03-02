import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="dark-cta-section py-[56px] md:py-[88px]">
      <div className="container px-6 text-center max-w-[680px] mx-auto">
        <h2 className="dark-cta-headline mb-4">
          Your competitors are figuring this out right now. Are you?
        </h2>
        <p className="dark-cta-subtext mb-8 max-w-2xl mx-auto">
          You've seen the platform. You've seen how it works for your industry. Book 30 minutes with our team — we'll walk through your specific use case, show you the Privacy Shield in action, and map your first deployment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link to="/demo" className="btn-primary group">
            Book a 30-Minute Walkthrough
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/resources/pdpl-guide" className="btn-secondary btn-secondary-dark">
            Get the PDPL Compliance Guide — Free
          </Link>
        </div>

        <p className="dark-cta-trust mb-4">
          No commitment required. No lengthy sales process. Just a focused conversation about your specific needs.
        </p>

        <p className="dark-cta-contact">
          Prefer to talk directly?{" "}
          <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors underline">
            WhatsApp: +966 56 967 8421
          </a>
          <span className="mx-2">|</span>
          <a href="mailto:raj@aliphai.ai" className="text-white/70 hover:text-white transition-colors underline">
            raj@aliphai.ai
          </a>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
