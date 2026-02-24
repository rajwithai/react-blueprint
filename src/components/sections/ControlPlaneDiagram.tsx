import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server, Cloud, Shield, Lock, Database,
  Layers, Globe, CheckCircle2, Bot, ArrowRight, Users, Building2
} from "lucide-react";
import { Link } from "react-router-dom";

const whatPeopleGet = [
  "Access to Claude, GPT-4, Gemini — safely",
  "AI that works offline, on-device",
  "Each employee sees only what they're authorized to",
  "Ask anything in Arabic or English",
];

const whatOrgControls = [
  "Sensitive data stripped from every external query",
  "PDPL, SAMA, and NCA mapped automatically",
  "Full audit trail — who asked what, when, with what data",
  "Agentic AI that drafts, validates, and learns from your work",
];

const ControlPlaneDiagram = () => {
  const [mode, setMode] = useState<"onprem" | "cloud">("cloud");

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="mb-16 max-w-4xl">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-heading font-semibold mb-5">
            THE ALIPH PLATFORM
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-[1.1]">
            One layer between your people and AI.{" "}
            <span className="text-muted-foreground">Fully governed. Fully sovereign.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Aliph sits inside your infrastructure. Every AI query is intercepted, sensitive data is stripped before it leaves, every interaction is logged for compliance, and your organization's knowledge stays — even when people don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl">
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">What your people get</h3>
            </div>
            <ul className="space-y-3">
              {whatPeopleGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">What your organization controls</h3>
            </div>
            <ul className="space-y-3">
              {whatOrgControls.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end mb-8">
          <div className="bg-card p-1 rounded-lg border border-border flex items-center">
            <button
              onClick={() => setMode("onprem")}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === "onprem"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              On-prem
            </button>
            <button
              onClick={() => setMode("cloud")}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === "cloud"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sovereign Cloud
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <motion.div
              layout
              className={`absolute border-2 border-dashed rounded-3xl transition-colors duration-500 pointer-events-none
                ${mode === "onprem"
                  ? "border-primary/30 bg-primary/5 -inset-4 md:-inset-8"
                  : "border-accent/30 bg-accent/5 inset-x-[33%] -inset-y-4 md:-inset-y-8"
                }
              `}
              style={{
                left: mode === "onprem" ? "-20px" : "33%",
                right: mode === "onprem" ? "33%" : "33%",
              }}
            >
              <div className={`absolute -top-3 left-8 px-3 py-1 bg-card border rounded text-xs font-bold uppercase tracking-widest shadow-sm
                ${mode === "onprem" ? "text-primary border-primary/30" : "text-accent border-accent/30"}
              `}>
                {mode === "onprem" ? "Your Environment Boundary" : "Sovereign Region Boundary"}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Server className="w-5 h-5 text-muted-foreground" />
                  <h3 className="font-bold text-foreground uppercase tracking-widest text-sm">Your Systems & Data</h3>
                </div>
                <div className="space-y-3">
                  {["Documents & Knowledge", "CRM / ERP", "Email & Collaboration", "Policies & Controls"].map((item, i) => (
                    <div key={i} className="bg-card p-4 rounded-xl border border-border flex items-center gap-3 text-sm font-medium text-foreground">
                      <Database className="w-4 h-4 text-muted-foreground" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative rounded-2xl p-6 border-2 transition-all duration-500
                ${mode === "onprem" ? "bg-card border-primary shadow-sm" : "bg-card border-accent shadow-md"}
              `}>
                {mode === "cloud" && (
                  <Cloud className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-accent/5 pointer-events-none" />
                )}

                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                  <h3 className="font-heading font-bold text-xl text-foreground">Aliph Control Plane</h3>
                  <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border
                    ${mode === "onprem" ? "bg-primary/10 text-primary border-primary/20" : "bg-accent/10 text-accent border-accent/20"}
                  `}>
                    {mode === "onprem" ? "On-prem" : "Sovereign Cloud"}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase mb-2 block">Platform Services</span>
                    <div className="space-y-2">
                      {["Organization Memory", "Privacy Shield", "Model Routing"].map((item) => (
                        <div key={item} className="bg-secondary p-3 rounded border border-border text-sm font-bold text-foreground flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default group">
                          <Layers className="w-4 h-4 text-muted-foreground group-hover:text-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase mb-2 block">Governance</span>
                    <div className="space-y-2">
                      {["Policies & Access Control", "Audit & Oversight"].map((item) => (
                        <div key={item} className="bg-secondary p-3 rounded border border-border text-sm font-bold text-foreground flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default group">
                          <Shield className="w-4 h-4 text-muted-foreground group-hover:text-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border text-center">
                  <p className="text-xs text-muted-foreground font-medium">
                    Same policies and audit trail across every workflow.
                  </p>
                </div>

                <div className="absolute top-1/2 -left-4 w-4 h-0.5 bg-border"></div>
                <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-border"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-muted-foreground" />
                  <h3 className="font-bold text-foreground uppercase tracking-widest text-sm">Approved AI Models</h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-card p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-3 text-sm font-medium text-foreground mb-3">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Private models
                      <span className="text-xs text-muted-foreground ml-auto">(where applicable)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded border border-accent/20">Llama 3</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded border border-accent/20">Mistral Large</span>
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-xl border border-border group relative overflow-visible">
                    <div className="flex items-center gap-3 text-sm font-medium text-foreground mb-3">
                      <Lock className="w-4 h-4 text-accent" />
                      External models
                      <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1">(Policy Gated)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {["ChatGPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Grok"].map((m) => (
                        <span key={m} className="px-2 py-1 bg-secondary text-foreground text-xs font-bold rounded border border-border hover:border-accent hover:text-accent transition-colors cursor-default">{m}</span>
                      ))}
                    </div>

                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-primary text-primary-foreground text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center z-20">
                      Access is policy-controlled.
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 h-8 w-px bg-border"></div>
            <div className="text-center mb-8">
              <span className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-border">Governed Outputs</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tab 1</span>
                    <h4 className="font-heading font-bold text-foreground text-lg">Aliph GRC Platform</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Compliance work that used to take months — done in days. Agentic AI handles research, drafting, and validation so your team handles judgment.
                </p>
                <Link
                  to="/grc-platform"
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-accent hover:gap-3 transition-all group/link"
                >
                  Try Aliph GRC
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tab 2</span>
                    <h4 className="font-heading font-bold text-foreground text-lg">AliphChat</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Every employee gets ChatGPT-level intelligence. Zero sensitive data leaves your walls. Answers cite their sources.
                </p>
                <Link
                  to="/aliph-chat"
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-accent hover:gap-3 transition-all group/link"
                >
                  Try AliphChat
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPlaneDiagram;
