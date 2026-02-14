import { Link } from "react-router-dom";

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
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold text-primary-foreground tracking-tight">
              aliph
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/60 font-body leading-relaxed">
              Private Intelligence. Collective Wisdom.
            </p>
            <p className="mt-6 text-xs text-secondary-foreground/40 font-body">
              © 2026 Aliph Solutions. All rights reserved.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-sm text-secondary-foreground/80 uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm font-body text-secondary-foreground/50 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs font-body text-secondary-foreground/40">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-4 text-xs font-body text-secondary-foreground/40">
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
