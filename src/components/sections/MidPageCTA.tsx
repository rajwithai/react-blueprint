import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MidPageCTAProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const MidPageCTA = ({ title, subtitle, primaryCta, secondaryCta }: MidPageCTAProps) => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
      <div className="container relative z-10 mx-auto px-6 py-16 lg:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to={primaryCta.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all group"
          >
            {primaryCta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold transition-all"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageCTA;
