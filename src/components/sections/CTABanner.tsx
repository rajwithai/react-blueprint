import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tealBg?: boolean;
}

const CTABanner = ({ title, subtitle, primaryCta, secondaryCta, tealBg = false }: CTABannerProps) => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className={tealBg ? "hero-gradient-teal" : "hero-gradient"}>
      <div className="container mx-auto px-6 py-20 lg:py-24 text-center">
        <h2
          className={`font-heading font-semibold text-3xl md:text-4xl text-primary-foreground mb-4 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8 ${
              isInView ? "animate-fade-in-up animate-fade-in-up-delay-1" : "opacity-0"
            }`}
          >
            {subtitle}
          </p>
        )}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isInView ? "animate-fade-in-up animate-fade-in-up-delay-2" : "opacity-0"
          }`}
        >
          <Link
            to={primaryCta.href}
            className={`inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-heading font-semibold text-base transition-all min-w-[160px] ${
              tealBg
                ? "bg-secondary text-secondary-foreground hover:brightness-125"
                : "bg-primary text-primary-foreground hover:brightness-90"
            }`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-base hover:bg-primary-foreground/10 transition-all min-w-[160px]"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
