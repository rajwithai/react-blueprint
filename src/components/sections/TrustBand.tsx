import { ShieldCheck, Globe, FileCheck, Eye, Languages } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "PDPL-aware governance (KSA)" },
  { icon: Globe, label: "UAE-ready posture" },
  { icon: FileCheck, label: "Policy-based controls" },
  { icon: Eye, label: "Audit trails & oversight" },
  { icon: Languages, label: "Arabic + English workflows" },
];

const TrustBand = () => {
  return (
    <section className="py-6 border-b border-border bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <div className="text-xs font-bold text-primary uppercase tracking-widest px-3 py-1.5 bg-primary/5 rounded-md">
            Built for regulated environments
          </div>
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-4 h-4 text-accent opacity-80" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBand;