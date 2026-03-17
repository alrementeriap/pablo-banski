import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface BulletListProps {
  items: string[];
}

export const BulletList = ({ items }: BulletListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <CheckCircle2 className="text-accent shrink-0 mt-1" size={22} />
          <span className="text-primary font-medium text-[15px] leading-relaxed">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};
