import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { sendWaitlistEmail } from "@/lib/emailService";

interface InlineEmailCaptureProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholder?: string;
  compact?: boolean;
}

const InlineEmailCapture = ({
  title,
  subtitle,
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  compact = false,
}: InlineEmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);
    try {
      await sendWaitlistEmail({ email, source: "Inline Waitlist" });
      setSubmitted(true);
      setEmail("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={compact ? "" : "text-center"}>
      {title && (
        <h3 className={`font-heading font-semibold text-foreground mb-2 ${compact ? "text-lg" : "text-2xl md:text-3xl"}`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="font-body text-muted-foreground text-sm mb-4 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 py-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </motion.div>
            <span className="font-heading font-semibold text-accent">You're in!</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 h-11 px-4 rounded-lg border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold text-sm transition-all shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Subscribing...</>
              ) : (
                <>
                  {buttonText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-sm text-destructive mt-3 font-body">
          {error}
        </p>
      )}

      {!submitted && (
        <p className="text-[11px] text-muted-foreground/50 font-body mt-2">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
};

export default InlineEmailCapture;
