import { motion } from "framer-motion";
import { ShieldCheck, MessageSquareLock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-heading font-semibold mb-5"
          >
            PRODUCTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-[1.1]"
          >
            Built for different teams.
            <span className="text-muted-foreground block mt-2">Powered by the same sovereign platform.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Both products share Privacy Shield, Organization Memory, and governed model connectivity. Choose the one that fits your starting point — or deploy both.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 — GRC */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden hover:border-amber-500/30 transition-all group"
          >
            {/* Gradient banner */}
            <div className="relative h-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">
                  GOVERNANCE, RISK & COMPLIANCE
                </span>
              </div>

              <p className="text-lg font-heading font-bold text-foreground mb-6 leading-snug">
                "Compliance work that takes Big Four consultants months and costs SAR 500K+ — delivered in days at a fraction of the cost."
              </p>

              <div className="space-y-5 mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">How</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Upload your documents. Aliph's agentic AI maps them against PDPL, SAMA, CMA, and NCA regulations automatically. It identifies gaps, scores risks, drafts remediation reports, and validates everything before it reaches your desk. Every output is audit-ready with full source citations.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">For</p>
                  <p className="text-sm text-muted-foreground">
                    Compliance teams · Legal departments · Advisory firms · Internal audit
                  </p>
                </div>

                <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
                  <p className="text-sm text-foreground font-medium italic">
                    "Every week without proper GRC is another week of unaudited PDPL exposure."
                  </p>
                </div>
              </div>

              <Link
                to="/products/grc"
                className="inline-flex items-center gap-2 text-amber-500 font-bold hover:gap-3 transition-all"
              >
                See GRC Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 — AliphChat */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border overflow-hidden hover:border-blue-500/30 transition-all group"
          >
            {/* Gradient banner */}
            <div className="relative h-3 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600" />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center">
                  <MessageSquareLock className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">
                  SOVEREIGN ENTERPRISE AI ASSISTANT
                </span>
              </div>

              <p className="text-lg font-heading font-bold text-foreground mb-6 leading-snug">
                "Every employee gets ChatGPT-level intelligence. Zero sensitive data leaves your walls."
              </p>

              <div className="space-y-5 mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">How</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Employees ask questions in Arabic or English. AliphChat answers from your organization's own documents first — filtered by each employee's access level, with sources cited. When external AI is needed, the Privacy Shield strips all sensitive data before anything leaves. Full audit trail on every interaction.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">For</p>
                  <p className="text-sm text-muted-foreground">
                    All employees — from analysts to C-suite
                  </p>
                </div>

                <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-4">
                  <p className="text-sm text-foreground font-medium italic">
                    "Your employees used AI today. Do you know what data they shared?"
                  </p>
                </div>
              </div>

              <Link
                to="/products/chat"
                className="inline-flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all"
              >
                See AliphChat <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
