import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const StickyDemoBar = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem("demoBarDismissed") === "true");

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.4);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem("demoBarDismissed", "true");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-md border-t border-border shadow-lg"
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <p className="font-body text-sm text-primary-foreground/80 hidden sm:block">
              Ready to see Aliph in action?
            </p>
            <div className="flex items-center gap-3 ml-auto">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-heading font-semibold text-sm transition-all"
              >
                Book a Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={handleDismiss}
                className="p-1.5 rounded-md text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyDemoBar;
