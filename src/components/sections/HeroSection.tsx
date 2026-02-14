import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
  minHeight?: string;
  children?: ReactNode;
}

const HeroSection = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge,
  minHeight = "min-h-[60vh]",
  children,
}: HeroSectionProps) => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`hero-gradient grid-pattern ${minHeight} flex items-center relative overflow-hidden`}
    >
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <p
              className={`text-primary uppercase tracking-[0.2em] text-sm font-heading font-semibold mb-6 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {eyebrow}
            </p>
          )}
          {badge && (
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold bg-primary/20 text-primary mb-4 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {badge}
            </span>
          )}
          <h1
            className={`font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight text-balance ${
              isInView ? "animate-fade-in-up animate-fade-in-up-delay-1" : "opacity-0"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 text-lg md:text-xl font-body text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto ${
              isInView ? "animate-fade-in-up animate-fade-in-up-delay-2" : "opacity-0"
            }`}
          >
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center ${
                isInView ? "animate-fade-in-up animate-fade-in-up-delay-3" : "opacity-0"
              }`}
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base hover:brightness-90 transition-all min-w-[160px]"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-heading font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all min-w-[160px]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
