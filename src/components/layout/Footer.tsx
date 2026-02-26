import { Link } from "react-router-dom";
import aliphLogo from "@/assets/aliph-logo.png";
import InlineEmailCapture from "@/components/sections/InlineEmailCapture";

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "AliphChat", href: "/products/aliphchat" },
      { label: "Privacy Shield", href: "/platform/privacy-shield" },
      { label: "Organization Memory", href: "/platform/organization-memory" },
      { label: "GRC Platform", href: "/products/grc" },
      { label: "Agentic AI", href: "/products/agentic-ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Contact", href: "/company/contact" },
      { label: "Blog", href: "/resources/blog" },
      { label: "PDPL Guide", href: "/resources/pdpl-guide" },
      { label: "Book a Demo", href: "/demo" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Tagline */}
          <div>
            <Link to="/" className="inline-block">
              <img src={aliphLogo} alt="Aliph Solutions" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed">
              Private Intelligence.<br />
              Collective Wisdom.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["PDPL Compliant", "SAMA Ready", "NCA Aligned"].map((badge) => (
                <span key={badge} className="inline-block px-2 py-1 rounded text-[10px] font-body font-semibold text-muted-foreground border border-border uppercase tracking-wider">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-accent font-body">
              Live Production Pilot: Reve Consult, Riyadh.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-3">
              <a href="https://linkedin.com/company/aliphai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/aliphai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="X (Twitter)">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Link columns */}
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
                      className="text-sm font-body text-foreground/60 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Newsletter
            </h4>
            <InlineEmailCapture
              title="Stay ahead of sovereign AI."
              subtitle="Monthly insights on PDPL, enterprise AI governance, and product updates."
              buttonText="Subscribe"
              placeholder="you@company.com"
              compact
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs font-body text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors duration-200">Terms of Service</Link>
          </div>
          <div className="text-xs font-body text-muted-foreground/60">
            © 2026 Aliph Solutions. Private Intelligence. Collective Wisdom.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
