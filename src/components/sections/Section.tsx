import { ReactNode } from "react";

interface SectionProps {
  dark?: boolean;
  purpleGradient?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ dark = false, purpleGradient = false, children, className = "", id }: SectionProps) => {
  const bg = purpleGradient
    ? "hero-gradient-purple"
    : dark
    ? "hero-gradient grid-pattern"
    : "bg-background";

  const text = dark || purpleGradient ? "text-primary-foreground" : "text-foreground";

  return (
    <section id={id} className={`${bg} ${text} ${className}`}>
      <div className="container mx-auto px-6 py-20 lg:py-28">
        {children}
      </div>
    </section>
  );
};

export default Section;
