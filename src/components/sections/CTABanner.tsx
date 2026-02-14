import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  purpleBg?: boolean;
}

const CTABanner = ({ title, subtitle, primaryCta, secondaryCta, dark = true }: CTABannerProps) => {
  return (
    <section className={dark ? "hero-gradient-navy" : "bg-alabaster"}>
      <div className="container mx-auto px-6 py-20 lg:py-24 text-center relative overflow-hidden">
        {dark && <div className="absolute inset-0 grid-pattern-light opacity-20" />}

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`font-heading font-bold text-3xl md:text-4xl mb-4 relative z-10 ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`font-body text-lg max-w-2xl mx-auto mb-8 relative z-10 ${
              dark ? "text-white/50" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        >
          <Link
            to={primaryCta.href}
            className={`cta-primary inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-body font-semibold text-base min-w-[180px] ${
              dark
                ? "bg-gold text-accent-foreground hover:brightness-110"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {primaryCta.label}
          </Link>
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
      </div>
    </section>
  );
};

export default CTABanner;
