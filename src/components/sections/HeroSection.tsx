import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const trustItems = [
  "PDPL Compliant",
  "SAMA Aligned",
  "Vision 2030 Ready",
  "Azure KSA Region",
  "Arabic + English",
];

const controlPlaneNodes = [
  { icon: Shield, label: "Privacy Shield", delay: 0.4 },
  { icon: Shield, label: "Organization Memory", delay: 0.5 },
  { icon: Shield, label: "AI Governance", delay: 0.6 },
  { icon: Shield, label: "Multi-Agent AI", delay: 0.7 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
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
              For Enterprises in Saudi Arabia & GCC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.12] text-foreground mb-6"
            >
              Your teams already use AI.
              <br />
              <span className="text-gradient">You just don't govern it yet.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl mx-auto lg:mx-0 mb-8 space-y-4"
            >
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                <span className="text-foreground font-semibold">The Privacy Layer:</span>{" "}
                Aliph sits between your employees and global AI models like ChatGPT, Claude, and Gemini — stripping sensitive data before any query leaves your walls.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                <span className="text-foreground font-semibold">The Platform Power:</span>{" "}
                But Aliph isn't just a safety net. It's a sovereign AI platform with agentic workflows that automate compliance, draft documents, and turn your organization's knowledge into a permanent, searchable intelligence layer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
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
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center lg:justify-start text-xs text-muted-foreground font-body"
            >
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-border">·</span>}
                  {item}
                </span>
              ))}
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
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute inset-0 m-auto w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 flex flex-col items-center justify-center z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <span className="font-heading font-semibold text-xs text-foreground">Control Plane</span>
              </motion.div>

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
