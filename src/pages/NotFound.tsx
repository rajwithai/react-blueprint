import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-4"
        >
          Page not found
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-7xl md:text-9xl text-gradient mb-6"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-lg text-muted-foreground mb-10 max-w-md mx-auto"
        >
          This page doesn't exist. But these do:
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          {[
            { label: "Explore the Platform", href: "/platform" },
            { label: "View Products", href: "/products/aliphchat" },
            { label: "Request a Demo", href: "/demo" },
            { label: "Go Home", href: "/" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-heading font-semibold text-sm hover:border-accent/30 hover:bg-secondary transition-all duration-200"
            >
              {link.label} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
