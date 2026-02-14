import { ReactNode } from "react";

interface SectionProps {
  dark?: boolean;
  tealGradient?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ dark = false, tealGradient = false, children, className = "", id }: SectionProps) => {
  const bg = tealGradient
    ? "hero-gradient-teal"
    : dark
    ? "hero-gradient grid-pattern"
    : "bg-background";

  const text = dark || tealGradient ? "text-primary-foreground" : "text-foreground";

  return (
    <section id={id} className={`${bg} ${text} ${className}`}>
      <div className="container mx-auto px-6 py-20 lg:py-28">
        {children}
      </div>
    </section>
  );
};

export default Section;
