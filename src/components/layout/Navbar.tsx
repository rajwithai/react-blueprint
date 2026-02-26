import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import aliphLogo from "@/assets/aliph-logo.png";

const singleLinks = [
  { label: "Platform", href: "/platform" },
];

const navItems = [
  {
    label: "Products",
    children: [
      { label: "AliphChat", href: "/products/aliphchat" },
      { label: "GRC Platform", href: "/products/grc" },
      { label: "Agentic AI Platform", href: "/products/agentic-ai", badge: "Coming Q2 2026" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Real Estate & Property Management", href: "/industries/real-estate" },
      { label: "Hospitality & Tourism", href: "/industries/hospitality" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { divider: true } as any,
      { label: "Healthcare", href: "/industries/healthcare", badge: "Coming H2 2026" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Contact", href: "/contact" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={aliphLogo} alt="Aliph Solutions" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {singleLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-4 py-2 text-[14px] font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[14px] font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
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
                    <div className="bg-card rounded-lg shadow-lg shadow-foreground/5 border border-border py-2 min-w-[260px]">
                      {item.children.map((child: any, ci: number) =>
                        child.divider ? (
                          <div key={ci} className="my-1 mx-4 h-px bg-border" />
                        ) : (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-body transition-colors duration-200 ${
                              child.badge ? "text-muted-foreground/70 hover:text-accent hover:bg-accent/5" : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                            }`}
                          >
                            {child.label}
                            {child.badge && (
                              <span className="ml-auto text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="cta-primary inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[14px]"
          >
            Contact Sales
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
            className="lg:hidden absolute top-[72px] left-0 right-0 bg-card border-t border-border max-h-[calc(100vh-72px)] overflow-y-auto shadow-lg"
          >
            {singleLinks.map((item) => (
              <div key={item.label} className="border-b border-border/50">
                <Link
                  to={item.href}
                  className="w-full flex items-center px-6 py-4 text-foreground font-body font-medium text-sm"
                >
                  {item.label}
                </Link>
              </div>
            ))}
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
                      {item.children.map((child: any, ci: number) =>
                        child.divider ? (
                          <div key={ci} className="my-1 mx-6 h-px bg-border" />
                        ) : (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`flex items-center gap-2 px-10 py-2.5 text-sm transition-colors duration-200 ${
                              child.badge ? "text-muted-foreground/70 hover:text-accent" : "text-muted-foreground hover:text-accent"
                            }`}
                          >
                            {child.label}
                            {child.badge && (
                              <span className="text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        )
                      )}
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
