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
      className={`hero-gradient grid-pattern ${minHeight} flex items-center relative overflow-hidden`}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-violet/10 blur-[100px] animate-float animate-float-delay-2" />

      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary uppercase tracking-[0.2em] text-sm font-heading font-semibold mb-6"
            >
              {eyebrow}
            </motion.p>
          )}
          {badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold bg-primary/20 text-primary mb-4 border border-primary/30"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight text-balance"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl font-body text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base hover:brightness-110 transition-all min-w-[160px] shadow-lg shadow-primary/25"
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
            </motion.div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
