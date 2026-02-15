import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
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
    // Basic expand functionality logic kept simple as per 'Two large cards' requirement
    // Hovering or Clicking could reveal more, but for now we follow the structure strictly.

    return (
        <section className="py-24 bg-slate-50">
            <div className="container px-4 md:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-navy mb-4">
                        Two products. One sovereign foundation.
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Start with your highest-risk workflows, then expand across the enterprise using the same Control Plane.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((prod) => (
                        <div key={prod.id} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 hover:border-navy hover:shadow-xl transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                {/* Abstract background shape */}
                                <div className="w-32 h-32 bg-gradient-to-br from-navy to-gold rounded-full blur-3xl"></div>
                            </div>

                            <div className="relative z-10">
                                <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">{prod.subtitle}</span>
                                <h3 className="text-3xl font-heading font-bold text-navy mb-6">{prod.title}</h3>

                                <ul className="space-y-4 mb-8">
                                    {prod.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to={prod.link} className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy text-white rounded-lg font-bold hover:bg-navy-light transition-colors group-hover:ring-2 ring-navy/20">
                                    {prod.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductShowcase;
