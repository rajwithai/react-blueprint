import { useState, useEffect, useRef } from "react";
import { ArrowRight, Shield, Database, Lock, Server, Activity, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spotlight gradient (X-Ray effect)
  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  useEffect(() => {
    // Auto-animate spotlight slightly for mobile / idle state
    animate(mouseX, [200, 800], { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" });
    animate(mouseY, [300, 400], { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "linear" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.stop(); mouseY.stop();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
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
      {/* LAYER 0: "LIVING" MESH BACKGROUND (Google Labs Style)   */}
      {/* ------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Navy/Black Base */}
        <div className="absolute inset-0 bg-navy-deep z-0" />

        {/* Drifting Aurora Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-navy-light/30 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen animate-blob animation-delay-4000" />

        {/* Faint Grid Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] z-10" />
      </div>


      {/* ------------------------------------------------------- */}
      {/* LAYER 1: "ALWAYS-ON" SYSTEM (Base Connectivity)         */}
      {/* ------------------------------------------------------- */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40"> {/* Increased base opacity from 20 to 40 */}
        <SchematicPattern color="#475569" /> {/* Slate-600 */}

        {/* CONSTANT DATA FLOW LINES */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#94a3b8" /> {/* Slate-400 */}
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Path 1: Data to Shield */}
          <path d="M 55% 30% L 75% 50%" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" />
          <circle r="2" fill="#94a3b8">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 55% 30% L 75% 50%" />
          </circle>

          {/* Path 2: Shield to Model */}
          <path d="M 75% 50% L 85% 25%" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" />
          <circle r="2" fill="#94a3b8">
            <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 75% 50% L 85% 25%" />
          </circle>

          {/* Path 3: Shield to Logs */}
          <path d="M 75% 50% L 65% 75%" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" />
          <circle r="2" fill="#94a3b8">
            <animateMotion dur="5s" repeatCount="indefinite" begin="0.5s" path="M 75% 50% L 65% 75%" />
          </circle>
        </svg>

        {/* BASE PULSING ICONS (Always Visible, faint) */}
        <div className="absolute top-[30%] left-[55%] text-slate-500 animate-pulse-slow"><Database className="w-6 h-6" /></div>
        <div className="absolute top-[50%] left-[75%] text-slate-500 animate-pulse-slow delay-700"><Shield className="w-16 h-16" /></div>
        <div className="absolute top-[25%] left-[85%] text-slate-500 animate-pulse-slow delay-300"><Activity className="w-8 h-8" /></div>
        <div className="absolute top-[75%] left-[65%] text-slate-500 animate-pulse-slow delay-1000"><Lock className="w-6 h-6" /></div>
      </div>


      {/* ------------------------------------------------------- */}
      {/* LAYER 2: X-RAY SPOTLIGHT (The "Revealed" High-Fidelity) */}
      {/* ------------------------------------------------------- */}

      {/* Ambient Spotlight Glow (Gold/Emerald) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-gold/5 blur-[100px] rounded-full opacity-30 pointer-events-none mix-blend-screen animate-pulse duration-[8000ms]"></div>

      <motion.div
        className="absolute inset-0 z-20 pointer-events-none bg-navy-deep/60 backdrop-blur-[1px]" // Slight blur to separate layers
        style={style} // MASK APPLIES HERE
      >
        {/* The "Review" Layer - Bright, Detailed, Colorful */}
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-20"></div>

        {/* Glowing Schematic */}
        <SchematicPattern color="#10b981" isGlowing />

        {/* Highlighted Icons */}
        {/* 1. Ingest/Data */}
        <div className="absolute top-[30%] left-[55%] text-slate-200">
          <Database className="w-6 h-6 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 font-mono tracking-widest mt-1">DATA</span>
        </div>

        {/* 2. Policy/Shield */}
        <div className="absolute top-[50%] left-[75%] text-gold">
          <Shield className="w-16 h-16 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 text-[10px] text-gold font-mono tracking-widest mt-2 uppercase">Policy Gate</span>
        </div>

        {/* 3. AI/Model */}
        <div className="absolute top-[25%] left-[85%] text-emerald-400">
          <Activity className="w-8 h-8 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 font-mono tracking-widest mt-1">MODEL</span>
        </div>

        {/* 4. Lock/Audit */}
        <div className="absolute top-[75%] left-[65%] text-emerald-500">
          <Lock className="w-6 h-6 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 text-[10px] text-emerald-600 font-mono tracking-widest mt-1">LOGS</span>
        </div>

        {/* Active Connection Beams (Only visible in spotlight) */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 55% 30% L 75% 50%" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" className="opacity-80" />
          <path d="M 75% 50% L 85% 25%" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,4" className="opacity-80" />
          <path d="M 75% 50% L 65% 75%" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" className="opacity-80" />
        </svg>
      </motion.div>


      <div className="container relative z-30 px-4 md:px-6 pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content (Standard) */}
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

          {/* Right: Empty for interactions */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

// Reusable Technical Pattern
const SchematicPattern = ({ color, isGlowing = false }: { color: string, isGlowing?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
    <defs>
      <pattern id={`grid-${isGlowing ? 'glow' : 'base'}`} width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke={color} strokeWidth="0.5" opacity={isGlowing ? 0.3 : 0.1} />
      </pattern>
      <pattern id={`large-grid-${isGlowing ? 'glow' : 'base'}`} width="250" height="250" patternUnits="userSpaceOnUse">
        <rect width="250" height="250" fill={`url(#grid-${isGlowing ? 'glow' : 'base'})`} />
        <path d="M 250 0 L 0 0 0 250" fill="none" stroke={color} strokeWidth="1" opacity={isGlowing ? 0.6 : 0.2} />
        <circle cx="250" cy="250" r="2" fill={color} opacity={isGlowing ? 0.8 : 0} />
        <rect x="0" y="0" width="4" height="4" fill={color} opacity={isGlowing ? 0.5 : 0} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#large-grid-${isGlowing ? 'glow' : 'base'})`} />
  </svg>
);

export default HeroSection;
