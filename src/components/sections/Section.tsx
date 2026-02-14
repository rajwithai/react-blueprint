import { ReactNode } from "react";

interface SectionProps {
  dark?: boolean;
  alabaster?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ dark = false, alabaster = false, children, className = "", id }: SectionProps) => {
  const bg = dark
    ? "hero-gradient-navy text-white"
    : alabaster
    ? "bg-alabaster"
    : "bg-background";

  return (
    <section id={id} className={`${bg} relative ${className}`}>
      {dark && <div className="absolute inset-0 grid-pattern-light opacity-30" />}
      
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
