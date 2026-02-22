import { ArrowRight, Activity, Shield, Brain, Eye, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const controlPlaneNodes = [
  { icon: Shield, label: "Privacy Shield", delay: 0.4 },
  { icon: Brain, label: "Organization Memory", delay: 0.5 },
  { icon: Eye, label: "AI Governance", delay: 0.6 },
  { icon: Workflow, label: "Multi-Agent AI", delay: 0.7 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
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

          {/* Right: Control Plane Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Central hub */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute inset-0 m-auto w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 flex flex-col items-center justify-center z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-2">
                  <Activity className="w-5 h-5 text-accent" />
                </div>
                <span className="font-heading font-semibold text-xs text-foreground">Control Plane</span>
              </motion.div>

              {/* Orbiting nodes */}
              {controlPlaneNodes.map((node, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180);
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: node.delay }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    <div className="w-24 h-24 rounded-xl bg-card border border-border flex flex-col items-center justify-center gap-1.5 shadow-sm hover:border-accent/30 transition-colors">
                      <node.icon className="w-5 h-5 text-accent" />
                      <span className="font-body text-[10px] text-muted-foreground text-center leading-tight px-1">{node.label}</span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                {controlPlaneNodes.map((_, i) => {
                  const angle = (i * 90 - 45) * (Math.PI / 180);
                  const radius = 130;
                  const x = 200 + Math.cos(angle) * radius;
                  const y = 200 + Math.sin(angle) * radius;
                  return (
                    <motion.line
                      key={i}
                      x1="200" y1="200" x2={x} y2={y}
                      stroke="hsl(var(--accent))"
                      strokeWidth="1"
                      strokeOpacity="0.15"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
