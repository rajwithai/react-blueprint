import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  "Financial Services",
  "Healthcare",
  "Professional Services",
  "Conglomerates",
  "PIF Portfolio & Government"
];

const SolutionsTeaser = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
          Industry-ready today—configured to your workflows.
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Same Control Plane. Configured to your sector's workflows—delivered through deployment and implementation services.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, i) => (
            <span key={i} className="px-4 py-2 bg-secondary rounded-full text-sm font-semibold text-foreground border border-border">
              {ind}
            </span>
          ))}
        </div>

        <Link to="/industries/financial-services" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors">
          Explore Solutions <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default SolutionsTeaser;