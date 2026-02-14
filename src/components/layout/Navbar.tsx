import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] lg:h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-secondary"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary-foreground tracking-tight">
            aliph
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-body font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {item.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card rounded-lg shadow-xl border border-border/50 py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-[15px] hover:brightness-90 transition-all min-w-[160px] text-center"
          >
            Request Demo
          </Link>
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-secondary border-t border-primary-foreground/10 max-h-[calc(100vh-72px)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-primary-foreground/5">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-primary-foreground font-body font-medium"
                onClick={() =>
                  setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                }
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileAccordion === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAccordion === item.label && (
                <div className="pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-10 py-2.5 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
