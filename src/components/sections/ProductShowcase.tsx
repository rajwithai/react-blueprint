import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "grc",
    title: "Aliph GRC Platform",
    subtitle: "Governance & Risk",
    bullets: [
      "GRC workflows powered by the Control Plane",
      "AI-assisted analysis with structured outputs",
      "Built for regulated enterprises and accessible for SMEs"
    ],
    cta: "View Aliph GRC",
    link: "/products/grc"
  },
  {
    id: "chat",
    title: "AliphChat",
    subtitle: "Enterprise Assistant",
    bullets: [
      "Everyday enterprise assistant with governance built-in",
      "Uses Organization Memory first; governed augmentation when needed",
      "Designed for permissions, oversight, and real operations"
    ],
    cta: "View AliphChat",
    link: "/products/chat"
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Two products. One sovereign foundation.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with your highest-risk workflows, then expand across the enterprise using the same Control Plane.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((prod) => (
            <div key={prod.id} className="bg-card rounded-xl p-8 md:p-12 border border-border hover:border-accent/30 transition-all">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">{prod.subtitle}</span>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-6">{prod.title}</h3>

              <ul className="space-y-4 mb-8">
                {prod.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <Link to={prod.link} className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-all">
                {prod.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;