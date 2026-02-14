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
    ? "hero-gradient"
    : "bg-background";

  return (
    <section id={id} className={`${bg} relative ${className}`}>
      {/* Grid overlay for dark sections */}
      {(dark || purpleGradient) && <div className="absolute inset-0 grid-pattern opacity-40" />}
      
      {/* Glow separator at top */}
      <div className="absolute top-0 left-0 right-0 section-glow-line" />
      
      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
