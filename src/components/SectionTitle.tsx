import React from 'react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle = ({ title, subtitle, align = 'center' }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-muted text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
