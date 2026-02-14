import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  purpleBg?: boolean;
  tealBg?: boolean;
}

const CTABanner = ({ title, subtitle, primaryCta, secondaryCta, purpleBg = false }: CTABannerProps) => {
  return (
    <section className={purpleBg ? "hero-gradient-purple" : "hero-gradient"}>
      <div className="container mx-auto px-6 py-20 lg:py-24 text-center relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/8 blur-[120px]" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 relative z-10"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8 relative z-10"
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
            className="cta-glow inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base hover:brightness-110 transition-all duration-200 min-w-[180px] shadow-lg shadow-primary/20"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground font-heading font-semibold text-base hover:bg-muted transition-all duration-200 min-w-[180px]"
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
