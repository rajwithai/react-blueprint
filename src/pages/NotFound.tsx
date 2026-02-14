import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="hero-gradient grid-pattern min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-6xl md:text-8xl text-gradient mb-6"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-semibold text-2xl text-primary-foreground mb-2"
        >
          This page doesn't exist.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-primary-foreground/60 mb-8"
        >
          But these do:
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass glow-border text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/10 transition-all"
            >
              {link.label} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
