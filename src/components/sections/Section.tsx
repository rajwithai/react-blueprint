import { ReactNode } from "react";

interface SectionProps {
  dark?: boolean;
  alabaster?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
  compact?: boolean;
}

const Section = ({ dark = false, alabaster = false, children, className = "", id, compact = false }: SectionProps) => {
  const bg = alabaster ? "bg-[#F9FAFB]" : dark ? "bg-[#1A1A2E]" : "bg-background";
  const padding = compact
    ? "py-14 md:py-[56px]"
    : "py-12 md:py-[72px]";

  return (
    <section id={id} className={`${bg} relative ${className}`}>
      <div className={`container mx-auto px-6 ${padding} relative z-10`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
