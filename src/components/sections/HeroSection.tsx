import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
  minHeight?: string;
  dark?: boolean;
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
  dark = false,
  children,
}: HeroSectionProps) => {
  return (
    <section
      className={`${minHeight} flex items-center relative overflow-hidden ${
        dark ? "hero-gradient-navy" : "hero-gradient"
      }`}
    >
      {/* Subtle grid overlay */}
      <div className={`absolute inset-0 ${dark ? "grid-pattern-light" : "grid-pattern"} opacity-40`} />

      {/* Light beams for dark hero */}
      {dark && (
        <>
          <div className="light-beam" style={{ left: '20%', animationDelay: '0s' }} />
          <div className="light-beam" style={{ left: '50%', animationDelay: '2s' }} />
          <div className="light-beam" style={{ left: '80%', animationDelay: '1s' }} />
        </>
      )}

      <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`uppercase tracking-[0.25em] text-xs font-body font-semibold mb-6 ${
                dark ? "text-gold" : "text-accent"
              }`}
            >
              {eyebrow}
            </motion.p>
          )}
          {badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`inline-block px-3 py-1 rounded-lg text-xs font-body font-semibold mb-4 border ${
                dark
                  ? "bg-gold/10 text-gold border-gold/20"
                  : "bg-accent/10 text-accent border-accent/20"
              }`}
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-heading font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-balance tracking-tight ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-6 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto ${
              dark ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </motion.p>
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="cta-primary inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base min-w-[180px]"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className={`inline-flex items-center justify-center px-8 py-3.5 rounded-lg border font-body font-semibold text-base min-w-[180px] transition-all duration-200 ${
                    dark
                      ? "border-white/20 text-white hover:bg-white/5"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
          {children}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default HeroSection;
