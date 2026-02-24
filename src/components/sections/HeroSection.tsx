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

const layers = [
  { label: "Cloud AI", color: "border-border bg-card", textColor: "text-muted-foreground" },
  { label: "Privacy Shield", color: "border-accent bg-accent/5", textColor: "text-accent", highlight: true },
  { label: "Sovereign Core", color: "border-border bg-card", textColor: "text-muted-foreground" },
  { label: "Edge Intelligence", color: "border-border bg-card", textColor: "text-muted-foreground" },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-background pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content (55%) */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-bold tracking-tight leading-[1.12] text-foreground mb-6"
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
              className="text-lg text-muted-foreground leading-relaxed max-w-[520px] mx-auto lg:mx-0 mb-8"
            >
              Aliph governs every AI interaction across your organization — stripping sensitive data, automating compliance workflows, and turning your knowledge into a permanent intelligence layer.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start mb-6"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center lg:justify-start text-[13px] text-muted-foreground font-body"
            >
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Layered architecture visual (45%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-[60%] mx-auto lg:w-[45%] hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[380px]">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3.5,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`relative rounded-xl border px-6 py-5 ${layer.color} ${
                    i > 0 ? "-mt-3" : ""
                  } ${layer.highlight ? "shadow-[0_0_20px_hsl(var(--accent)/0.15)] border-accent/50" : "shadow-sm"}`}
                  style={{ marginLeft: `${i * 12}px`, zIndex: layers.length - i }}
                >
                  <span className={`text-sm font-semibold tracking-wide ${layer.textColor}`}>
                    {layer.label}
                  </span>
                  {layer.highlight && (
                    <span className="ml-3 text-[10px] font-bold uppercase tracking-widest text-accent/70">
                      ● Active
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
