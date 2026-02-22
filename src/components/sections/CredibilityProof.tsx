import { CheckCircle, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CredibilityProof = () => {
  return (
    <section className="py-24 bg-secondary border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            What's real today
          </div>
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Products are built. The bottleneck is execution speed.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border">
            <CheckCircle className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-semibold text-foreground text-lg mb-2">Platform + products demonstrable</h3>
            <p className="text-muted-foreground text-sm">End-to-end demo available.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground text-lg mb-2">Designed for regulated adoption</h3>
            <p className="text-muted-foreground text-sm">Governance, audit trails, and controls.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border">
            <TrendingUp className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-semibold text-foreground text-lg mb-2">Deployable across industries</h3>
            <p className="text-muted-foreground text-sm">Delivered through implementation services.</p>
          </div>
        </div>

        {/* Light Dashboard Mock */}
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden border border-border bg-card shadow-sm">
          <div className="bg-secondary px-4 py-2 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-accent/40"></div>
            </div>
            <div className="ml-4 text-[10px] text-muted-foreground font-mono">AliphLiveDemo</div>
          </div>

          <div className="aspect-video bg-secondary/50 relative flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-4">Interactive Control Plane Dashboard</p>
              <Link to="/demo" className="px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:brightness-110 transition-all">
                Click to Book Live Demo
              </Link>
            </div>

            <div className="absolute top-10 left-10 w-48 h-32 bg-border/30 rounded border border-border"></div>
            <div className="absolute bottom-10 right-10 w-64 h-48 bg-border/30 rounded border border-border"></div>
            <div className="absolute top-12 right-12 w-32 h-8 bg-border/30 rounded border border-border"></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/demo" className="inline-block px-10 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-lg hover:opacity-90 shadow-sm transition-all">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CredibilityProof;