import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Sobre mí', href: '/#sobre-mi', id: 'sobre-mi' },
    { name: 'Especialidades', href: '/#especialidades', id: 'especialidades' },
    { name: 'Proceso', href: '/#proceso', id: 'proceso' },
    { name: 'FAQ', href: '/#faq', id: 'faq' },
    { name: 'Contacto', href: '/#contacto', id: 'contacto' },
  ];

  const specialtyRoutes = ['/ansiedad', '/duelo', '/regulacion-emocional', '/adolescentes'];
  const isSpecialtyPage = specialtyRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    const options = {
      root: null,
      rootMargin: '-30% 0px -55% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    }, options);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-bg-light/95 backdrop-blur-lg border-b border-primary/10 shadow-sm py-1 supports-[backdrop-filter]:bg-bg-light/85'
          : 'bg-bg-light/95 backdrop-blur-md border-b border-primary/5 py-0 supports-[backdrop-filter]:bg-bg-light/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-auto lg:h-20 flex flex-col lg:flex-row items-center justify-between py-4 md:py-6 lg:py-0 gap-4 lg:gap-0">
        <div className="flex w-full lg:w-auto items-center justify-between shrink-0 md:pb-3 lg:pb-0">
          <div className="flex items-center gap-2">
            <a href="/" className="font-display text-lg md:text-lg lg:text-xl font-bold tracking-tight text-primary">
              Pablo Banski <span className="font-light">Martínez</span>
            </a>
            <span className="hidden sm:block text-[9px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.12em] lg:tracking-[0.15em] text-muted/70 font-semibold border-l border-primary/10 pl-2 ml-1">
              Psicólogo Sanitario
            </span>
          </div>

          <div className="hidden md:flex lg:hidden">
            <a
              href="/#contacto"
              className="bg-primary text-bg-light px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/95 active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
            >
              Primera sesión gratuita
            </a>
          </div>

          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 md:gap-6 lg:gap-8 md:pt-5 lg:pt-0 md:border-t md:border-primary/5 lg:border-t-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm md:text-[13px] lg:text-sm font-semibold transition-all duration-300 relative group whitespace-nowrap ${
                activeSection === link.id || (link.id === 'especialidades' && isSpecialtyPage) 
                  ? 'text-primary' 
                  : 'text-muted hover:text-primary'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === link.id || (link.id === 'especialidades' && isSpecialtyPage) 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex shrink-0">
          <a
            href="/#contacto"
            className="bg-primary text-bg-light px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/95 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
          >
            Primera sesión gratuita
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-bg-light border-b border-primary/5 px-6 py-8 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold transition-colors ${
                  activeSection === link.id || (link.id === 'especialidades' && isSpecialtyPage) 
                    ? 'text-accent' 
                    : 'text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-bg-light w-full py-4 rounded-xl font-semibold text-lg active:scale-[0.98] transition-transform text-center"
            >
              Primera sesión gratuita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
