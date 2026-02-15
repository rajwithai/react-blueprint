import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Server, Cloud, Shield, Lock, FileText, Database,
    Users, Layers, Globe, CheckCircle2, Bot, ArrowRight
} from "lucide-react";

const ControlPlaneDiagram = () => {
    const [mode, setMode] = useState<"onprem" | "cloud">("cloud");

    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="container px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-2">
                            The Aliph Control Plane
                        </h2>
                        <p className="text-lg text-slate-600">
                            One governance layer between your enterprise data and modern AI.
                        </p>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={mode}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="text-sm font-medium text-navy/70 mt-2"
                            >
                                {mode === "onprem"
                                    ? "Runs inside your environment for maximum control and data locality."
                                    : "Deployed in sovereign infrastructure with enterprise-grade governance and auditability."}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Toggle */}
                    <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-sm flex items-center">
                        <button
                            onClick={() => setMode("onprem")}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === "onprem"
                                ? "bg-navy text-white shadow-md"
                                : "text-slate-500 hover:text-navy"
                                }`}
                        >
                            On-prem
                        </button>
                        <button
                            onClick={() => setMode("cloud")}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === "cloud"
                                ? "bg-navy text-white shadow-md"
                                : "text-slate-500 hover:text-navy"
                                }`}
                        >
                            Sovereign Cloud
                        </button>
                    </div>
                </div>

                {/* Diagram Container */}
                <div className="max-w-6xl mx-auto">

                    {/* Diagram Wrapper (Grid + Boundary only) */}
                    <div className="relative">

                        {/* Environment Boundary Animation */}
                        <motion.div
                            layout
                            className={`absolute border-2 border-dashed rounded-3xl transition-colors duration-500 pointer-events-none
                                ${mode === "onprem"
                                    ? "border-navy/30 bg-navy/5 -inset-4 md:-inset-8" // Wraps A + B
                                    : "border-gold/30 bg-gold/5 inset-x-[33%] -inset-y-4 md:-inset-y-8" // Wraps B only
                                }
                            `}
                            style={{
                                left: mode === "onprem" ? "-20px" : "33%",
                                right: mode === "onprem" ? "33%" : "33%",
                            }}
                        >
                            <div className={`absolute -top-3 left-8 px-3 py-1 bg-white border rounded text-xs font-bold uppercase tracking-widest shadow-sm
                                ${mode === "onprem" ? "text-navy border-navy/30" : "text-gold border-gold/30"}
                            `}>
                                {mode === "onprem" ? "Your Environment Boundary" : "Sovereign Region Boundary"}
                            </div>
                        </motion.div>


                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {/* ... Column A, B, C ... */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Server className="w-5 h-5 text-slate-400" />
                                    <h3 className="font-bold text-navy uppercase tracking-widest text-sm">Your Systems & Data</h3>
                                </div>

                                <div className="space-y-3">
                                    {["Documents & Knowledge", "CRM / ERP", "Email & Collaboration", "Policies & Controls"].map((item, i) => (
                                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 text-sm font-medium text-slate-700">
                                            <Database className="w-4 h-4 text-slate-400" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* COLUMN B: Aliph Control Plane */}
                            <div className={`relative rounded-2xl p-6 border-2 transition-all duration-500
                                ${mode === "onprem" ? "bg-white border-navy shadow-xl" : "bg-white border-gold shadow-2xl shadow-gold/10"}
                            `}>
                                {/* Watermark for Cloud Mode */}
                                {mode === "cloud" && (
                                    <Cloud className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-gold/5 pointer-events-none" />
                                )}

                                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                                    <h3 className="font-heading font-bold text-xl text-navy">Aliph Control Plane</h3>
                                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border
                                               ${mode === "onprem" ? "bg-navy/10 text-navy border-navy/20" : "bg-gold/10 text-gold border-gold/20"}
                                         `}>
                                        {mode === "onprem" ? "On-prem" : "Sovereign Cloud"}
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">Platform Services</span>
                                        <div className="space-y-2">
                                            {["Organization Memory", "Privacy Shield", "Model Routing"].map((item) => (
                                                <div key={item} className="bg-slate-50 p-3 rounded border border-slate-200 text-sm font-bold text-navy flex items-center gap-2 hover:bg-navy hover:text-white transition-colors cursor-default group">
                                                    <Layers className="w-4 h-4 text-slate-400 group-hover:text-gold" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">Governance</span>
                                        <div className="space-y-2">
                                            {["Policies & Access Control", "Audit & Oversight"].map((item) => (
                                                <div key={item} className="bg-slate-50 p-3 rounded border border-slate-200 text-sm font-bold text-navy flex items-center gap-2 hover:bg-navy hover:text-white transition-colors cursor-default group">
                                                    <Shield className="w-4 h-4 text-slate-400 group-hover:text-gold" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                                    <p className="text-xs text-slate-500 font-medium">
                                        Same policies and audit trail across every workflow.
                                    </p>
                                </div>

                                {/* Connectors (Visual Only) */}
                                <div className="absolute top-1/2 -left-4 w-4 h-0.5 bg-slate-300"></div>
                                <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-slate-300"></div>
                            </div>

                            {/* COLUMN C: Approved AI */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Bot className="w-5 h-5 text-slate-400" />
                                    <h3 className="font-bold text-navy uppercase tracking-widest text-sm">Approved AI Models</h3>
                                </div>

                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-3 text-sm font-medium text-navy mb-3">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            Private models
                                            <span className="text-xs text-slate-400 ml-auto">(where applicable)</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pl-7">
                                            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">Llama 3</span>
                                            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">Mistral Large</span>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm group relative overflow-visible h-full">
                                        <div className="flex items-center gap-3 text-sm font-medium text-navy mb-3">
                                            <Lock className="w-4 h-4 text-gold" />
                                            External models
                                            <span className="text-xs text-slate-400 ml-auto flex items-center gap-1">
                                                (Policy Gated)
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pl-7">
                                            <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded border border-slate-200 hover:border-gold hover:text-navy transition-colors cursor-default">ChatGPT-4o</span>
                                            <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded border border-slate-200 hover:border-gold hover:text-navy transition-colors cursor-default">Claude 3.5 Sonnet</span>
                                            <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded border border-slate-200 hover:border-gold hover:text-navy transition-colors cursor-default">Gemini 1.5 Pro</span>
                                            <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded border border-slate-200 hover:border-gold hover:text-navy transition-colors cursor-default">Grok</span>
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-navy text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center z-20">
                                            Access is policy-controlled.
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* Bottom Outputs */}
                    <div className="mt-16 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 h-8 w-px bg-slate-300"></div>

                        <div className="text-center mb-8">
                            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Governed Outputs</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-navy transition-colors group">
                                <div className="p-3 bg-navy/5 rounded-lg text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Aliph GRC Platform</h4>
                                    <p className="text-sm text-slate-500">Compliance & risk workflows</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-navy transition-colors group">
                                <div className="p-3 bg-navy/5 rounded-lg text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">AliphChat</h4>
                                    <p className="text-sm text-slate-500">Governed enterprise assistant</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-xs text-slate-500 font-medium">
                                Used across: <span className="text-navy font-semibold">Financial Services • Healthcare • Professional Services • Conglomerates • PIF Portfolio & Government</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ControlPlaneDiagram;
