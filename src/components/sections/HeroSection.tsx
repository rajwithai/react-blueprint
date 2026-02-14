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
  return (
    <section
      className={`hero-gradient ${minHeight} flex items-center relative overflow-hidden`}
    >
      {/* Animated grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Light beams */}
      <div className="light-beam" style={{ left: '15%', animationDelay: '0s' }} />
      <div className="light-beam" style={{ left: '35%', animationDelay: '1.5s' }} />
      <div className="light-beam" style={{ left: '65%', animationDelay: '3s' }} />
      <div className="light-beam" style={{ left: '85%', animationDelay: '0.8s' }} />

      {/* Ambient orbs — deep, muted */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[160px]" />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-teal/4 blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-violet/4 blur-[180px]" />

      <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-primary/80 uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-6"
            >
              {eyebrow}
            </motion.p>
          )}
          {badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary mb-4 border border-primary/20"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] text-balance tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto"
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
                  className="cta-glow inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base hover:brightness-110 transition-all duration-200 min-w-[180px] shadow-lg shadow-primary/20"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground font-heading font-semibold text-base hover:bg-muted hover:border-primary/30 transition-all duration-200 min-w-[180px]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
          {children}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 section-glow-line" />
    </section>
  );
};

export default HeroSection;
