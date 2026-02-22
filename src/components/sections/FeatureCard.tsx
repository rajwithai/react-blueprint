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

const FeatureCard = ({ icon: Icon, title, description, children, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="bento-card rounded-lg p-8 lg:p-10"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-5 bg-accent/10">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
        </div>
      )}
      <h3 className="font-heading font-semibold text-xl lg:text-2xl mb-3 text-foreground">
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