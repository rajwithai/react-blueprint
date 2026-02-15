import { useState, useEffect, useRef } from "react";
import { ArrowRight, Shield, Database, Lock, Server, Activity, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spotlight gradient
  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  useEffect(() => {
    // Auto-animate spotlight for initial impression or mobile
    animate(mouseX, [200, 800], { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "linear" });
    animate(mouseY, [300, 400], { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "linear" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.stop(); mouseY.stop(); // Stop auto-animation on interaction
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      setIsHovered(true);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-navy-deep text-white selection:bg-gold/30"
    >

      {/* ------------------------------------------------------- */}
      {/* LAYER 1: The "Dark" Schematic (Base State)              */}
      {/* ------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <SchematicPattern color="#334155" /> {/* Slate-700 */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
      </div>

      {/* ------------------------------------------------------- */}
      {/* LAYER 2: The "Revealed" Schematic (Spotlight State)     */}
      {/* ------------------------------------------------------- */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none bg-navy-deep/50"
        style={style}
      >
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10"></div> {/* Optional noisy texture */}

        {/* The glowing schematic parts */}
        <SchematicPattern color="#10b981" isGlowing /> {/* Emerald-500 */}

        {/* Floating specific icons at key grid points to simulate "Nodes" */}
        <div className="absolute top-[20%] left-[60%] text-emerald-400 animate-pulse"><Database className="w-8 h-8" /></div>
        <div className="absolute top-[50%] left-[80%] text-gold animate-pulse delay-75"><Shield className="w-12 h-12" /></div>
        <div className="absolute top-[70%] left-[55%] text-emerald-400 animate-pulse delay-150"><Server className="w-8 h-8" /></div>

        {/* Connecting lines that are only visible in spotlight */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 100 L 800 500" stroke="#10b981" strokeWidth="1" strokeDasharray="5,5" className="opacity-50" />
          <path d="M 200 600 L 900 200" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" className="opacity-50" />
        </svg>
      </motion.div>


      <div className="container relative z-20 px-4 md:px-6 pointer-events-none">
        {/* pointer-events-none on container to let mouse pass to section for tracking, elements need -auto */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div className="pointer-events-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase"
            >
              <Activity className="w-3 h-3" />
              Deployment-Ready
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1]"
            >
              Adopt AI—without losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">control.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-xl font-body leading-relaxed"
            >
              Aliph is the sovereign AI Control Plane for enterprise—governing how teams use modern AI while protecting sensitive data and preserving institutional knowledge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-white rounded-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2 group border border-gold/50"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Explore the Platform
              </Link>
            </motion.div>
          </div>

          {/* Right: Hint / Visual (Hidden on mobile mostly) */}
          <div className="hidden lg:flex justify-end pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              className="flex items-center gap-3 text-sm text-slate-500 font-mono"
            >
              <Search className="w-4 h-4 animate-bounce" />
              <span>Move cursor to inspect architecture</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Technical Pattern for Background
const SchematicPattern = ({ color, isGlowing = false }: { color: string, isGlowing?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
    <defs>
      <pattern id={`grid-${isGlowing ? 'glow' : 'base'}`} width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke={color} strokeWidth="0.5" opacity={isGlowing ? 0.3 : 0.1} />
      </pattern>
      <pattern id={`large-grid-${isGlowing ? 'glow' : 'base'}`} width="250" height="250" patternUnits="userSpaceOnUse">
        <rect width="250" height="250" fill={`url(#grid-${isGlowing ? 'glow' : 'base'})`} />
        <path d="M 250 0 L 0 0 0 250" fill="none" stroke={color} strokeWidth="1" opacity={isGlowing ? 0.6 : 0.2} />
        {/* Circuit Nodes */}
        <circle cx="250" cy="250" r="2" fill={color} opacity={isGlowing ? 0.8 : 0} />
        <rect x="0" y="0" width="4" height="4" fill={color} opacity={isGlowing ? 0.5 : 0} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#large-grid-${isGlowing ? 'glow' : 'base'})`} />
  </svg>
);

export default HeroSection;
