import { ArrowRight, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Activity className="w-3 h-3" />
            Deployment-Ready
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.08] text-foreground mb-6"
          >
            Adopt AI—without losing{" "}
            <span className="text-gradient">control.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-xl font-body leading-relaxed mb-8 mx-auto lg:mx-0"
          >
            Aliph is the sovereign AI Control Plane for enterprise—governing how teams use modern AI while protecting sensitive data and preserving institutional knowledge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/platform"
              className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondary/80 text-foreground border border-border rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore the Platform
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;