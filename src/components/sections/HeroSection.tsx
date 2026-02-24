import { ArrowRight, Shield, Brain, Check } from "lucide-react";
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
        {/* Zone 1 — Centered Impact Block */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6"
          >
            For Enterprises in Saudi Arabia & GCC
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.12] text-foreground mb-8"
          >
            Your teams already use AI.
            <br />
            <span className="text-gradient">You just don't govern it yet.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8"
          >
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
            >
              See it in action
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/resources/pdpl-guide"
              className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondary/80 text-foreground border border-border rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              Get the PDPL Guide
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center text-sm text-muted-foreground font-body"
          >
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Zone 2 — Two Value Proposition Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl bg-card border border-border p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-3">The Privacy Layer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aliph sits between your employees and global AI models like ChatGPT, Claude, and Gemini — stripping sensitive data before any query leaves your walls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl bg-card border border-border p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-3">The Platform Power</h3>
            <p className="text-muted-foreground leading-relaxed">
              But Aliph isn't just a safety net. It's a sovereign AI platform with agentic workflows that automate compliance, draft documents, and turn your organization's knowledge into a permanent, searchable intelligence layer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
