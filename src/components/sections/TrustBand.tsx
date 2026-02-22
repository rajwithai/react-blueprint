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
    <section className="py-8 border-b border-border bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex-shrink-0 text-sm font-bold text-primary uppercase tracking-widest px-4 py-2 bg-primary/5 rounded-lg">
            Built for regulated environments
          </div>

          <div className="flex-1 flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-muted-foreground group hover:text-foreground transition-colors cursor-default">
                  <Icon className="w-5 h-5 text-accent opacity-80 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBand;