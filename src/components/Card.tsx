import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export const Card = ({ icon: Icon, title, description }: CardProps) => {
  return (
    <div className="bg-bg-light p-8 rounded-3xl shadow-sm border border-primary/5 flex flex-col gap-6 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 group cursor-default h-full">
      {Icon && (
        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shrink-0">
          <Icon size={28} />
        </div>
      )}
      <div className="space-y-3 flex-1">
        <h4 className="font-display text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
          {title}
        </h4>
        <p className="text-[15px] text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
