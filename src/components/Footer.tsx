import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-bg-light border-t border-primary/10 py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-16">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary">
              Pablo Banski <span className="font-light">Martínez</span>
            </h2>
            <p className="text-xs text-primary/70 font-semibold uppercase tracking-[0.15em]">
              Psicólogo Sanitario · Colegiado M-40879
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col md:flex-row md:justify-end gap-10 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Legal</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-primary/60 hover:text-primary transition-colors text-sm">Aviso Legal</a>
                <a href="#" className="text-primary/60 hover:text-primary transition-colors text-sm">Política de Privacidad</a>
                <a href="#" className="text-primary/60 hover:text-primary transition-colors text-sm">Confidencialidad</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Contacto</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:pr.banski@gmail.com" className="text-primary/60 hover:text-primary transition-colors text-sm">pr.banski@gmail.com</a>
                <a href="https://wa.me/34633944311" className="text-primary/60 hover:text-primary transition-colors text-sm">+34 633944311</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-muted/50 font-semibold uppercase tracking-widest">
            © {new Date().getFullYear()} Pablo Banski Martínez. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-muted/40 font-bold uppercase tracking-[0.2em]">Psicoterapia Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
