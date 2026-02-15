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
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6 text-center">

                <h2 className="text-4xl font-heading font-bold text-navy mb-4">
                    Industry-ready today—configured to your workflows.
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                    Same Control Plane. Configured to your sector’s workflows—delivered through deployment and implementation services.
                </p>

                {/* Industry Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {industries.map((ind, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-700 border border-slate-200">
                            {ind}
                        </span>
                    ))}
                </div>

                {/* Preview Panel Link */}
                <Link to="/solutions" className="inline-flex items-center gap-2 text-navy font-bold text-lg hover:underline decoration-gold decoration-2 underline-offset-4">
                    Explore Solutions <ArrowRight className="w-5 h-5" />
                </Link>

            </div>
        </section>
    );
};

export default SolutionsTeaser;
