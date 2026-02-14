import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import aliphLogo from "@/assets/aliph-logo.png";

const navItems = [
  {
    label: "Platform",
    children: [
      { label: "Overview", href: "/platform" },
      { label: "Privacy Shield", href: "/platform/privacy-shield" },
      { label: "Organization Memory", href: "/platform/organization-memory" },
      { label: "Global LLM Connectivity", href: "/platform/global-llm" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "AliphChat", href: "/products/aliphchat" },
      { label: "GRC Platform", href: "/products/grc" },
      { label: "Agentic AI", href: "/products/agentic-ai" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Professional Services", href: "/industries/professional-services" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "PDPL Compliance Guide", href: "/resources/pdpl-guide" },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-250 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={aliphLogo} alt="Aliph Solutions" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[14px] font-body font-medium text-foreground/60 hover:text-foreground transition-colors duration-200">
                {item.label}
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="glass-card rounded-xl shadow-xl shadow-primary/5 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm font-body text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/demo"
            className="cta-glow inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-[14px] hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Request Demo
          </Link>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[72px] left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border/50">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-foreground font-body font-medium text-sm"
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileAccordion === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pb-2 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-10 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
