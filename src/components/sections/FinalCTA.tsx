import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-28 lg:py-36 bg-[hsl(220,25%,12%)] border-t border-[hsl(220,20%,18%)]">
      <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-white mb-6 leading-[1.1]">
          Your competitors are figuring this out right now. Are you?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          You've seen the platform. You've seen how it works for your industry. Book 30 minutes with our team — we'll walk through your specific use case, show you the Privacy Shield in action, and map your first deployment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/demo"
            className="inline-block px-10 py-5 bg-accent hover:brightness-110 text-accent-foreground text-lg font-bold rounded-lg shadow-lg transition-all duration-200"
          >
            Book a 30-Minute Walkthrough
          </Link>
          <Link
            to="/resources/pdpl-guide"
            className="inline-block px-10 py-5 border border-white/20 text-white hover:border-white/40 rounded-lg text-lg font-semibold transition-all duration-200"
          >
            Get the PDPL Compliance Guide — Free
          </Link>
        </div>

        <p className="text-sm text-white/50 mb-6">
          No commitment required. No lengthy sales process. Just a focused conversation about your specific needs.
        </p>

        <p className="text-sm text-white/40">
          Prefer to talk directly?{" "}
          <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline transition-colors">
            WhatsApp: +966 56 967 8421
          </a>
          <span className="mx-2">|</span>
          <a href="mailto:raj@aliphai.ai" className="text-white/60 hover:text-white underline transition-colors">
            raj@aliphai.ai
          </a>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
