import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-navy-deep text-white">
      {/* Background: Placeholder for Generated Asset */}
      {/* Note: We will update 'hero-background.webp' once generated and moved */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-[url('/assets/hero_background.webp')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block border-l-2 border-gold pl-4">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
                Built in Riyadh. Designed for regulated adoption across Saudi Arabia and the UAE.
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1]">
              Adopt AI—without losing control of your data.
            </h1>

            <p className="text-xl text-slate-300 max-w-xl font-body leading-relaxed">
              Aliph is the sovereign AI Control Plane for enterprise—governing how teams use modern AI while protecting sensitive data and preserving institutional knowledge.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-white rounded-lg font-bold transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 flex items-center justify-center gap-2 group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore the Platform
              </Link>
            </div>
          </motion.div>

          {/* Right: Governed Path Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:flex items-center justify-center"
          >
            {/* Visual Background Asset */}
            <div className="absolute inset-0 bg-[url('/assets/control_plane_illustration.webp')] bg-contain bg-no-repeat bg-center opacity-30" />

            {/* SVG Animation Layer */}
            <svg className="w-full h-full relative z-10" viewBox="0 0 600 600">
              {/* Path: Request -> Shield -> Model -> Output */}
              <path
                id="governed-path"
                d="M 50 300 L 200 300 C 250 300 250 300 300 300 C 350 300 350 300 550 300"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />

              {/* Node: Request */}
              <circle cx="50" cy="300" r="8" fill="#cbd5e1" />
              <text x="50" y="340" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">REQUEST</text>

              {/* Node: Policy Gate */}
              <g transform="translate(280, 280)">
                <rect width="40" height="40" rx="8" fill="#0f172a" stroke="#b8860b" strokeWidth="2" />
                <path d="M12 12 L28 28 M28 12 L12 28" stroke="#b8860b" strokeWidth="2" transform="scale(0.5) translate(20,20)" />
                {/* Shield Icon approximation */}
              </g>
              <text x="300" y="340" textAnchor="middle" fill="#b8860b" fontSize="12" fontWeight="bold">POLICY GATE</text>

              {/* Node: Output */}
              <circle cx="550" cy="300" r="8" fill="#emerald" className="text-emerald-500 fill-current" />
              <text x="550" y="340" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">AUDIT READY</text>

              {/* Animated Packet */}
              <circle r="6" fill="#b8860b">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 50 300 L 550 300" />
                <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
