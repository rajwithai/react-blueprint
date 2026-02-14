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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="rounded-2xl p-8 lg:p-10 transition-all duration-250 glass-card gradient-border-card group"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 bg-primary/10 group-hover:bg-primary/15 transition-colors duration-200">
          <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
        </div>
      )}
      <h3 className="font-heading font-bold text-xl lg:text-2xl mb-3 text-foreground">
        {title}
      </h3>
      <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
        {description}
      </p>
      {children}
    </motion.div>
  );
};

export default FeatureCard;
