import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  delay?: number;
  dark?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, children, delay = 0, dark = false }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`rounded-2xl p-8 lg:p-10 transition-shadow duration-300 ${
        dark
          ? "glass glow-border"
          : "bg-card border border-border shadow-sm hover:shadow-lg hover:shadow-primary/5"
      }`}
    >
      {Icon && (
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${dark ? "bg-primary/15" : "bg-primary/10"}`}>
          <Icon className="h-6 w-6 text-primary" />
        </div>
      )}
      <h3 className={`font-heading font-semibold text-xl lg:text-2xl mb-3 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h3>
      <p className={`font-body text-base leading-relaxed ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
      {children}
    </motion.div>
  );
};

export default FeatureCard;
