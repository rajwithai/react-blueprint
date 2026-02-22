import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  eyebrow?: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  link?: { label: string; href: string };
}

interface AlternatingFeatureProps {
  features: Feature[];
}

const AlternatingFeature = ({ features }: AlternatingFeatureProps) => {
  return (
    <>
      {features.map((feature, i) => {
        const reversed = i % 2 === 1;
        const Icon = feature.icon;
        return (
          <section key={i} className={`${i % 2 === 0 ? "bg-background" : "bg-secondary"} relative`}>
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="container mx-auto px-6 py-20 lg:py-28">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  {feature.eyebrow && (
                    <p className="text-accent uppercase tracking-[0.25em] text-xs font-heading font-semibold mb-3">
                      {feature.eyebrow}
                    </p>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      </div>
                    )}
                    <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  {feature.bullets && feature.bullets.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {feature.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {feature.link && (
                    <Link
                      to={feature.link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-accent hover:underline group"
                    >
                      {feature.link.label}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default AlternatingFeature;
