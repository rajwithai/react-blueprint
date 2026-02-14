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
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-semibold text-3xl md:text-4xl text-primary-foreground mb-4 relative z-10"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8 relative z-10"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        >
          <Link
            to={primaryCta.href}
            className={`inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-heading font-semibold text-base transition-all min-w-[160px] ${
              purpleBg
                ? "bg-secondary text-secondary-foreground hover:brightness-125"
                : "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25"
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
