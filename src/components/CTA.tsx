import React from 'react';

interface CTAProps {
  buttonText: string;
  supportingText?: string;
  href?: string;
  align?: 'left' | 'center';
}

export const CTA = ({ buttonText, supportingText, href = '/#contacto', align = 'left' }: CTAProps) => {
  return (
    <div className={`mt-12 space-y-6 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <a
        href={href}
        className="inline-block bg-primary text-bg-light font-bold py-5 px-10 rounded-2xl text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/95 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
      >
        {buttonText}
      </a>
      {supportingText && (
        <p className={`text-sm text-muted/70 italic max-w-md ${align === 'center' ? 'mx-auto' : ''}`}>
          {supportingText}
        </p>
      )}
    </div>
  );
};
