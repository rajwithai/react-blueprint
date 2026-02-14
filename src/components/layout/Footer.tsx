import { Link } from "react-router-dom";
import aliphLogo from "@/assets/aliph-logo.png";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Privacy Shield", href: "/platform/privacy-shield" },
      { label: "Organization Memory", href: "/platform/organization-memory" },
      { label: "Global LLM Connectivity", href: "/platform/global-llm" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "AliphChat", href: "/products/aliphchat" },
      { label: "GRC Platform", href: "/products/grc" },
      { label: "Agentic AI", href: "/products/agentic-ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/resources/blog" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-secondary overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern-dense opacity-30" />
      
      {/* Top glow separator */}
      <div className="absolute top-0 left-0 right-0 section-glow-line" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block">
              <img src={aliphLogo} alt="Aliph Solutions" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed">
              Sovereign AI infrastructure.<br />
              Built for regulated markets.
            </p>

            {/* Infrastructure badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["PDPL", "GDPR", "ISO 27001"].map((badge) => (
                <span key={badge} className="inline-block px-2 py-1 rounded text-[10px] font-heading font-semibold text-muted-foreground border border-border uppercase tracking-wider">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm font-body text-foreground/50 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs font-body text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors duration-200">Terms of Service</Link>
          </div>
          <div className="text-xs font-body text-muted-foreground/60">
            © 2026 Aliph Solutions. Built for sovereign markets.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
