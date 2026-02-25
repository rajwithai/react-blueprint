import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Healthcare = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-32 md:py-40 bg-background">
      <div className="container px-6 max-w-[680px] text-center">
        <motion.span
          {...fadeUp}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold bg-accent/15 border border-accent/25 text-accent uppercase tracking-wider mb-8"
        >
          Coming H2 2026
        </motion.span>

        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="font-heading font-bold text-[2.5rem] md:text-[3rem] tracking-tight leading-[1.08] mb-6 text-foreground"
        >
          Sovereign AI for Saudi healthcare is coming.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Patient data is the most sensitive category under PDPL. Aliph is building CBAHI compliance automation, clinical protocol management, and sovereign patient data intelligence specifically for Saudi hospital groups and clinic chains. Be the first to know when it launches.
        </motion.p>

        {/* Email capture */}
        <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold text-sm transition-all whitespace-nowrap"
              >
                Join the Early Access List
              </button>
            </form>
          ) : (
            <div className="px-6 py-4 rounded-lg bg-accent/10 border border-accent/20 mb-4 max-w-md mx-auto">
              <p className="font-body text-sm text-accent font-semibold">You're on the list. We'll be in touch.</p>
            </div>
          )}
          <p className="text-xs text-muted-foreground mb-12">
            We'll notify you when the healthcare module launches. No spam. Unsubscribe anytime.
          </p>
        </motion.div>

        {/* What we're building */}
        <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="text-left max-w-sm mx-auto mb-12">
          <h2 className="font-heading font-semibold text-xl mb-4 text-foreground">What we're building:</h2>
          <ul className="space-y-3">
            {[
              "CBAHI accreditation compliance automation",
              "Clinical protocol management — searchable by authorized clinicians",
              "Patient data intelligence — entirely on-premise, fully sovereign",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="font-body text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div {...fadeUp} transition={{ delay: 0.5 }}>
          <p className="text-xs text-muted-foreground mb-2">Have questions about healthcare AI? Talk to us directly.</p>
          <div className="flex justify-center gap-4 text-xs text-muted-foreground">
            <a href="https://wa.me/966569678421" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              <MessageCircle className="h-3.5 w-3.5" /> +966 56 967 8421
            </a>
            <a href="mailto:raj@aliphai.ai" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" /> raj@aliphai.ai
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Healthcare;
