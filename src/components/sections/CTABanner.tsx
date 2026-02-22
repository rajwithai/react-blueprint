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

const CTABanner = ({ title, subtitle, primaryCta, secondaryCta }: CTABannerProps) => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-6 py-20 lg:py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-body text-lg max-w-2xl mx-auto mb-8 text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to={primaryCta.href}
            className="cta-primary inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-body font-semibold text-base min-w-[180px] bg-accent text-accent-foreground hover:brightness-110"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground hover:bg-muted font-body font-semibold text-base min-w-[180px] transition-all duration-200"
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