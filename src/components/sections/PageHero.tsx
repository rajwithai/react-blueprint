import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  badge?: string;
}

const PageHero = ({ eyebrow, title, subtitle, primaryCta, badge }: PageHeroProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-foreground"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          <div className="flex items-center gap-4">
            {primaryCta && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold transition-all shadow-sm group"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}

            {badge && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex px-3 py-1 rounded-full text-xs font-heading font-semibold bg-accent/10 border border-accent/20 text-accent uppercase tracking-wider"
              >
                {badge}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;