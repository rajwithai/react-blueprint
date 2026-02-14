import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  delay?: number;
  dark?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, children, delay = 0, dark = false }: FeatureCardProps) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`rounded-2xl p-8 lg:p-10 card-hover ${
        dark
          ? "bg-secondary-foreground/5 border border-primary-foreground/10"
          : "bg-card border border-border shadow-sm"
      } ${isInView ? `animate-fade-in-up` : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${dark ? "bg-primary/10" : "bg-primary/10"}`}>
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
    </div>
  );
};

export default FeatureCard;
