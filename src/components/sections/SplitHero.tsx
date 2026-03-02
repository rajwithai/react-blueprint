import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SplitHeroMetric {
  value: string;
  label: string;
}

interface SplitHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
  trustText?: string;
  metrics?: SplitHeroMetric[];
  image: string;
  imageAlt: string;
}

const SplitHero = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge,
  trustText,
  metrics,
  image,
  imageAlt,
}: SplitHeroProps) => {
  return (
    <section className="relative py-[56px] md:py-[88px] bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-8 lg:gap-12 items-center">
          {/* Left: Copy */}
          <div>
            {badge && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 border border-accent/20 text-accent uppercase tracking-wider mb-4"
              >
                {badge}
              </motion.span>
            )}

            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="section-label mb-3"
              >
                {eyebrow}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-[32px] md:text-[40px] lg:text-[48px] tracking-tight leading-[1.1] mb-4 text-foreground"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-subtext mb-8 max-w-lg"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
            >
              {primaryCta && (
                <Link to={primaryCta.href} className="btn-primary group">
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>

            {trustText && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="trust-line"
              >
                {trustText}
              </motion.p>
            )}

            {metrics && metrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border/60"
              >
                {metrics.map((m, i) => (
                  <div key={i}>
                    <p className="font-bold text-xl text-foreground">{m.value}</p>
                    <p className="stat-label mt-0.5">{m.label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-border/50 max-w-[90%] ml-auto">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[500px] md:h-[560px] object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="absolute -inset-4 bg-accent/5 rounded-xl -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
