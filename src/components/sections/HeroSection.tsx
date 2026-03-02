import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const trustItems = [
  "PDPL Compliant",
  "SAMA Aligned",
  "Vision 2030 Ready",
  "Azure KSA Region",
  "Arabic + English",
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-background py-[56px] md:py-[88px]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-5"
          >
            For Enterprises in Saudi Arabia & GCC
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-bold text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] tracking-tight leading-[1.12] text-foreground mb-4"
          >
            Your teams already use AI.
            <br />
            <span className="font-medium text-muted-foreground">You just don't govern it yet.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtext mx-auto mb-8"
          >
            Aliph governs every AI interaction across your organization — stripping sensitive data, automating compliance workflows, and turning your knowledge into a permanent intelligence layer.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-6"
          >
            <Link to="/demo" className="btn-primary group">
              See it in action
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/resources/pdpl-guide" className="btn-secondary">
              Get the PDPL Guide
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center trust-line"
          >
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
