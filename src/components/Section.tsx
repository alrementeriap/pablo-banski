import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'alternate';
}

export const Section = ({ id, className = '', children, variant = 'default' }: SectionProps) => {
  const baseClasses = "scroll-mt-32 py-20 md:py-32 px-6 md:px-12 relative overflow-hidden";
  const bgClasses = variant === 'alternate' ? "bg-primary/[0.07]" : "bg-transparent";

  return (
    <section id={id} className={`${baseClasses} ${bgClasses} ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};
