import { useState } from "react";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import { Shield, Brain, Globe, ArrowRight, Building2, Heart, Briefcase, CheckCircle2, Cpu, Layers, ShieldCheck, Lock, Server, FileSearch, Zap, Network, Database, Search, XCircle, Bot, FileText } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/sections/Section";
import FeatureCard from "@/components/sections/FeatureCard";
import CTABanner from "@/components/sections/CTABanner";

const archLayers = [
  { icon: Cpu, label: "Edge Intelligence", desc: "Native applications with embedded SLMs running directly on user devices. Zero-server dependency.", num: "01" },
  { icon: Layers, label: "Sovereign Core", desc: "Your institutional memory, indexed and searchable on-premise. Runs entirely on your own infrastructure.", num: "02" },
  { icon: ShieldCheck, label: "Privacy Shield", desc: "Proprietary PII masking (Arabic & English) that sanitizes every query before external processing.", num: "03" },
  { icon: Globe, label: "Cloud Augmentation", desc: "Safe access to global reasoning (Claude, GPT-4, ALLAM) only after full anonymization.", num: "04" },
];

const industries = [
  {
    id: "finance",
    label: "Financial Services",
    icon: Building2,
    desc: "SAMA & CBUAE compliant infrastructure. Run AML patterns and fraud detection on-premise with zero data egress.",
    gradient: "from-emerald-900/80 to-navy-deep"
  },
  {
    id: "health",
    label: "Healthcare",
    icon: Heart,
    desc: "CBAHI & MOH accreditation ready. Process patient records and medical imaging with full PDPL compliance.",
    gradient: "from-blue-900/80 to-navy-deep"
  },
  {
    id: "energy",
    label: "Energy & Infrastructure",
    icon: Zap,
    desc: "Critical infrastructure protection. Offline-first intelligence for remote facilities and sovereign control systems.",
    gradient: "from-amber-900/80 to-navy-deep"
  },
  {
    id: "pro",
    label: "Professional Services",
    icon: Briefcase,
    desc: "Automated contract review and precedent search for legal firms. Client confidentiality guaranteed by architecture.",
    gradient: "from-slate-800 to-navy-deep"
  },
  {
    id: "conglomerates",
    label: "Conglomerates",
    icon: Network,
    desc: "Cross-subsidiary intelligence without breaking data silos. Unified insights with strict access controls.",
    gradient: "from-purple-900/80 to-navy-deep"
  }
];

const Index = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  return (
    <>
      {/* Hero — The Sovereign Core (3D) */}
      {/* Hero — The Sovereign Stack (Split Layout) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-semibold tracking-wider uppercase mb-4 border border-navy/10">
                Sovereign AI Infrastructure
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-navy tracking-tight leading-[1.1]">
                Your Intelligence.<br />Your Borders.
              </h1>

              <p className="text-xl text-slate-600 max-w-xl font-body leading-relaxed">
                The first sovereign AI infrastructure purpose-built for Saudi Enterprise. Deploy world-class intelligence while keeping your data—and your future—within your walls.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-navy hover:bg-navy-deep text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-navy/10 flex items-center justify-center gap-2 group"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 pt-8 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> PDPL Compliant</span>
                <span className="w-px h-4 bg-slate-300 hidden sm:block"></span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> SAMA Ready</span>
                <span className="w-px h-4 bg-slate-300 hidden sm:block"></span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> NCA Aligned</span>
              </div>
            </motion.div>

            {/* Right: 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-midnight/5 shadow-2xl border border-navy/5 hidden lg:block"
            >
              <div className="absolute inset-0 bg-midnight">
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Trusted By */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Production Pilot: <span className="text-navy">Reve Consult, Riyadh</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {/* Placeholders for Logos using text for now as per "Simple grayscale logos" instructions */}
            <div className="text-xl font-heading font-bold text-navy">REVE CONSULT</div>
            <div className="text-xl font-heading font-bold text-navy">ARAMCO DIGITAL</div>
            <div className="text-xl font-heading font-bold text-navy">STC</div>
            <div className="text-xl font-heading font-bold text-navy">NEOM</div>
            <div className="text-xl font-heading font-bold text-navy">SABIC</div>
          </div>
        </div>
      </section>

      {/* 4-Layer Sovereign Perimeter — Scroll-triggered */}
      <Section dark>
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4 text-center"
          >
            THE SOVEREIGN PERIMETER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white text-center tracking-tight"
          >
            Compliance Enforced by Design.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-white/50 text-center max-w-xl mx-auto mb-16"
          >
            Every query passes through a four-layer federated perimeter before anything reaches an external model. Most never leave.
          </motion.p>

          <div className="space-y-4">
            {archLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="glass-card rounded-lg p-6 md:p-8 flex items-start gap-6 group hover:border-gold/20 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <span className="font-heading font-bold text-gold/40 text-sm">{layer.num}</span>
                    <div className="mt-2 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">{layer.label}</h3>
                    <p className="font-body text-white/50 text-sm leading-relaxed">{layer.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Section 3: The Revolution (Horizontal Panels) */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              The Status Quo vs. The Aliph Standard
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The impossible choice between modern intelligence and data sovereignty is over.
            </p>
          </motion.div>

          <div className="space-y-32">
            {/* Panel 1: Knowledge Persistence */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-slate-50 rounded-3xl p-12 flex items-center justify-center border border-slate-100 aspect-square md:aspect-auto md:h-[400px]">
                {/* Visual: Brain indexing */}
                <div className="relative">
                  <Brain className="w-32 h-32 text-navy/20 absolute top-0 left-0 -translate-x-4 -translate-y-4" />
                  <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                    <Database className="w-16 h-16 text-gold mb-4" />
                    <div className="space-y-2">
                      <div className="w-24 h-2 bg-slate-100 rounded"></div>
                      <div className="w-16 h-2 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-navy text-white p-4 rounded-xl shadow-lg">
                    <Search className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-lg">01</span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-navy">Knowledge Persistence</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Stop losing decades of institutional expertise when experts resign. Capture and search institutional memory instantly, turning your entire archive into an active intelligence asset.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through text-slate-400">Expert Flight Risk</span>
                  </li>
                  <li className="flex items-center gap-3 text-navy font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span>Permanent Institutional Memory</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Panel 2: Native Sovereignty */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 bg-slate-50 rounded-3xl p-12 flex items-center justify-center border border-slate-100 aspect-square md:aspect-auto md:h-[400px]">
                {/* Visual: Privacy Shield */}
                <div className="relative w-full max-w-xs">
                  <div className="absolute inset-0 bg-gold/5 rounded-full blur-3xl"></div>
                  <Shield className="w-48 h-48 text-navy mx-auto relative z-10" strokeWidth={1} />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Lock className="w-16 h-16 text-gold" />
                  </div>
                  {/* Particles */}
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                </div>
              </div>
              <div className="order-1 space-y-6">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-lg">02</span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-navy">Native Sovereignty</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  End the impossible choice between AI adoption and SAR 5M PDPL penalties. 0% PII ever leaves your perimeter. Our proprietary Privacy Shield sanitizes every query before it touches the cloud.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through text-slate-400">Regulatory Exposure</span>
                  </li>
                  <li className="flex items-center gap-3 text-navy font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span>100% PDPL Compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Panel 3: Agentic Execution */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-slate-50 rounded-3xl p-12 flex items-center justify-center border border-slate-100 aspect-square md:aspect-auto md:h-[400px]">
                {/* Visual: Agentic Flow */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center gap-2">
                    <Bot className="w-8 h-8 text-navy" />
                    <div className="h-1 w-8 bg-slate-200 rounded"></div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center gap-2">
                    <FileText className="w-8 h-8 text-gold" />
                    <div className="h-1 w-8 bg-slate-200 rounded"></div>
                  </div>
                  <div className="col-span-2 bg-navy p-4 rounded-xl shadow-lg flex items-center justify-between text-white">
                    <span className="text-sm font-semibold">Report Generated</span>
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-lg">03</span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-navy">Agentic Execution</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Move from reading reports to automated results. Deploy digital teammates that research, draft, and validate complex workflows. Big Four quality compliance reports generated in hours, not months.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through text-slate-400">Manual GRC Grunt Work</span>
                  </li>
                  <li className="flex items-center gap-3 text-navy font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span>Automated Outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Sovereign Perimeter (Palo Alto Style Banner) */}
      <Section dark className="bg-navy-deep py-32 border-t border-white/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold mb-6 text-center"
          >
            THE PERIMETER DEFENSE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-white text-center tracking-tight"
          >
            Compliance Enforced by Design.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-slate-300 text-center text-lg max-w-2xl mx-auto mb-20"
          >
            Every query passes through a four-layer federated perimeter before anything reaches an external model. Most never leave.
          </motion.p>

          <div className="space-y-6">
            {archLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center gap-8 border border-white/5 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-3 -right-3 bg-navy border border-white/10 text-white/50 text-xs font-bold px-2 py-1 rounded-md">
                      {layer.num}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-gold transition-colors">{layer.label}</h3>
                    <p className="font-body text-slate-400 leading-relaxed text-lg">{layer.desc}</p>
                  </div>
                  <div className="hidden md:block">
                    <ArrowRight className="text-white/20 w-6 h-6 group-hover:text-gold group-hover:translate-x-2 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Section 5: The Sovereign Suite (3-Column Grid) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-navy/60 font-semibold tracking-widest uppercase text-sm mb-4 block">The Sovereign Suite</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy tracking-tight">
                Intelligence, unflinchingly compliant.
              </h2>
            </div>
            <Link to="/products" className="text-navy font-semibold flex items-center gap-2 hover:gap-4 transition-all">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product 1: Aliph GRC */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-navy/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-navy group-hover:text-white" />
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">Live</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">Aliph GRC Platform</h3>
              <p className="text-slate-600 mb-8 leading-relaxed h-24">
                Don’t just map regulations; automate the entire advisory lifecycle. Big Four quality advisory at AI speed, fully mapped to SAMA & NCA standards.
              </p>
              <Link to="/products/grc" className="flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all">
                Explore Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Product 2: AliphChat */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-navy/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <Bot className="w-6 h-6 text-navy group-hover:text-white" />
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">Live</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">AliphChat</h3>
              <p className="text-slate-600 mb-8 leading-relaxed h-24">
                The sovereign enterprise assistant. Natural language queries in Arabic and English with 0% data risk. Connects to your internal documents securely.
              </p>
              <Link to="/products/aliphchat" className="flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all">
                Start Chatting <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Product 3: Agentic AI */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-navy/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu className="w-32 h-32" />
              </div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <Cpu className="w-6 h-6 text-navy group-hover:text-white" />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full uppercase tracking-wide">Q2 2026</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-4 relative z-10">Agentic AI Platform</h3>
              <p className="text-slate-600 mb-8 leading-relaxed h-24 relative z-10">
                Move from chatbots to "Digital Teammates." Autonomous agents that research, draft, and validate complex workflows without human intervention.
              </p>
              <button disabled className="flex items-center gap-2 text-slate-400 font-semibold cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Industry Verticals (Dark Immersive) */}
      <section className="py-0 min-h-[800px] flex bg-navy-deep relative overflow-hidden">
        {/* Background Image/Gradient driven by active state */}
        {industries.map((ind, i) => (
          <div
            key={ind.id}
            className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-br ${ind.gradient} ${activeIndustry === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-navy-deep/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>

        <div className="container relative z-10 px-4 md:px-6 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center">
          {/* Left: Menu */}
          <div className="w-full lg:w-1/3 space-y-2">
            <h2 className="text-white font-heading font-bold text-3xl mb-12">Designed for Regulated Industries</h2>
            <div className="flex flex-col">
              {industries.map((ind, i) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(i)}
                  onMouseEnter={() => setActiveIndustry(i)}
                  className={`text-left py-6 border-b border-white/10 transition-all duration-300 group flex items-center justify-between ${activeIndustry === i ? "text-white pl-4 border-gold" : "text-white/40 hover:text-white/70"}`}
                >
                  <span className={`text-xl md:text-2xl font-medium ${activeIndustry === i ? "font-bold" : ""}`}>
                    {ind.label}
                  </span>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${activeIndustry === i ? "opacity-100 translate-x-0 text-gold" : "opacity-0 -translate-x-4"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="w-full lg:w-2/3 h-full flex items-center">
            <div className="relative w-full">
              {industries.map((ind, i) => (
                <div
                  key={ind.id}
                  className={`transition-all duration-500 absolute inset-0 ${activeIndustry === i ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-8 absolute pointer-events-none"}`}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-8 border border-gold/20">
                      <ind.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                      {ind.label} for Saudi Enterprise
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                      {ind.desc}
                    </p>
                    <Link to={`/industries/${ind.id}`} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy rounded-lg font-bold hover:bg-gold hover:text-white transition-all shadow-lg">
                      Explore Solutions <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="See sovereign AI in action."
        subtitle="30-minute briefing. Tailored to your organization. No commitment."
        primaryCta={{ label: "Contact Sales", href: "/contact" }}
        dark
      />
    </>
  );
};

export default Index;
