
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import psicologo from "./assets/banski.jpeg";
import aboutArt from "./assets/about-art2.jpg";
import ctaTexture from "./assets/cta-texture.jpg";
import heroCircle from "./assets/hero-circle.jpg";
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  Video, 
  Lock, 
  Heart, 
  Wind, 
  Brain, 
  Users, 
  ChevronDown, 
  Mail, 
  MessageCircle, 
  Calendar,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
    { name: 'Especialidades', href: '#especialidades', id: 'especialidades' },
    { name: 'Proceso', href: '#proceso', id: 'proceso' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    const options = {
      root: null,
      rootMargin: '-30% 0px -55% 0px',
      threshold: 0.1
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
            <h1 className="font-display text-lg md:text-lg lg:text-xl font-bold tracking-tight text-primary">
              Pablo Banski <span className="font-light">Martínez</span>
            </h1>
            <span className="hidden sm:block text-[9px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.12em] lg:tracking-[0.15em] text-muted/70 font-semibold border-l border-primary/10 pl-2 ml-1">
              Psicólogo Sanitario
            </span>
          </div>

          {/* Tablet CTA (Visible only on md, hidden on mobile and lg) */}
          <div className="hidden md:flex lg:hidden">
            <a 
              href="#contacto"
              className="bg-primary text-bg-light px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/95 active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
            >
              Primera sesión gratuita
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop/Tablet Nav Links */}
        <div className="hidden md:flex items-center justify-center flex-1 md:gap-6 lg:gap-8 md:pt-5 lg:pt-0 md:border-t md:border-primary/5 lg:border-t-0">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm md:text-[13px] lg:text-sm font-semibold transition-all duration-300 relative group whitespace-nowrap ${
                activeSection === link.id ? 'text-primary' : 'text-muted hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </div>

        {/* Desktop CTA (Visible only on lg) */}
        <div className="hidden lg:flex shrink-0">
          <a 
            href="#contacto"
            className="bg-primary text-bg-light px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/95 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
          >
            Primera sesión gratuita
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
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
                  activeSection === link.id ? 'text-accent' : 'text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
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

const SpecialtyCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-bg-light p-8 rounded-3xl shadow-sm border border-primary/5 flex flex-col gap-6 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 group cursor-default">
    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shrink-0">
      <Icon size={28} />
    </div>
    <div className="space-y-3">
      <h4 className="font-display text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-500 leading-tight">{title}</h4>
      <p className="text-[15px] text-muted leading-relaxed">{description}</p>
    </div>
    <a 
      href="#contacto" 
      className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:text-accent transition-all duration-300 active:scale-95"
    >
      Saber más <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
    </a>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-bg-light/10 py-5">
      <button 
        className="w-full flex justify-between items-center text-left group py-3 focus-visible:ring-inset focus-visible:ring-bg-light"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-bg-light font-bold text-lg md:text-xl group-hover:text-secondary transition-all duration-300 pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-secondary shrink-0"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-6 text-bg-light/90 leading-relaxed text-base md:text-lg max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El formato del correo electrónico no es válido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Artistic Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
  <img 
    src={aboutArt}
    className="absolute -top-[10%] -left-[10%] w-[60%] opacity-[0.03] blur-3xl rotate-12"
    alt=""
  />
  <img 
    src={ctaTexture}
    className="absolute top-[40%] -right-[10%] w-[50%] opacity-[0.03] blur-2xl -rotate-6"
    alt=""
  />
</div>

      <Navbar />

      <main className="pt-28 md:pt-32 lg:pt-24">
        {/* Hero Section */}
        <section id="sobre-mi" className="scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 lg:py-40 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 md:space-y-12"
          >
            <div className="space-y-6 md:space-y-8">
              <span className="text-accent font-bold tracking-[0.18em] uppercase text-xs md:text-sm inline-block">Psicólogo Sanitario · Colegiado M-40879</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary font-bold">
                Un espacio seguro para tu bienestar
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed font-light max-w-xl">
                Acompañamiento psicológico online desde un enfoque integrador y humanista. Sesiones personalizadas donde tú y tu experiencia sois el centro del proceso terapéutico.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contacto"
                className="bg-primary text-bg-light font-bold py-5 px-10 rounded-2xl text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/95 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-center"
              >
                Primera sesión gratuita
              </a>
              <a 
                href="#especialidades"
                className="bg-transparent border-2 border-primary/10 text-primary font-bold py-5 px-10 rounded-2xl text-base md:text-lg hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-center"
              >
                Conoce mi enfoque
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-primary/10">
              <div className="flex items-center gap-4 text-sm text-primary font-bold">
                <CheckCircle2 className="text-accent shrink-0" size={22} />
                <span>Garantía Sanitaria</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-primary font-bold">
                <Video className="text-accent shrink-0" size={22} />
                <span>Terapia Online</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-primary font-bold">
                <Lock className="text-accent shrink-0" size={22} />
                <span>100% Confidencial</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group">
            <img 
  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.03]" 
  alt="Pablo Banski Martínez" 
  src={psicologo}
/>
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-bg-light p-4 md:p-6 rounded-2xl shadow-xl hidden md:block">
  <div className="flex items-center gap-3 md:gap-4">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0">
      <img
        src={heroCircle}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <p className="text-xs md:text-sm font-bold text-primary">Humanista</p>
      <p className="text-[10px] md:text-xs text-muted">Enfoque integrador</p>
    </div>
  </div>
</div>
          </motion.div>
        </section>

        {/* Specialties Section */}
        <section id="especialidades" className="scroll-mt-32 bg-primary/5 py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <img 
  src={aboutArt}
  className="absolute bottom-0 right-0 w-1/3 opacity-[0.04] pointer-events-none translate-y-1/4 translate-x-1/4"
  alt=""
/>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">Áreas de intervención</h3>
              <p className="text-muted max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed">Trabajamos juntos para identificar herramientas que te permitan afrontar tus desafíos actuales.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {[
                { icon: Heart, title: "Acompañamiento en el duelo", description: "Apoyo profesional para transitar procesos de pérdida y cambios vitales significativos." },
                { icon: Wind, title: "Gestión de la ansiedad", description: "Herramientas prácticas para regular el estrés y recuperar la calma en tu día a día." },
                { icon: Brain, title: "Regulación emocional", description: "Comprende tus emociones para responder a ellas de una forma más saludable y consciente." },
                { icon: Users, title: "Adultos y adolescentes", description: "Terapia individual adaptada a las necesidades específicas de cada etapa del desarrollo." }
              ].map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <SpecialtyCard 
                    icon={specialty.icon} 
                    title={specialty.title} 
                    description={specialty.description} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="scroll-mt-32 py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24"
          >
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">Cómo empezamos a trabajar</h3>
            <p className="text-muted text-base md:text-lg lg:text-xl">Un camino claro y estructurado hacia tu bienestar.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 relative">
            <div className="absolute top-10 left-0 w-full h-0.5 bg-primary/5 hidden md:block" />
            
            {[
              { 
                step: 1, 
                title: "Primer contacto", 
                desc: "Escríbeme por WhatsApp o email. Resolveremos tus dudas iniciales y buscaremos un hueco para vernos." 
              },
              { 
                step: 2, 
                title: "Sesión informativa", 
                desc: "Un encuentro gratuito de 20 min para conocernos, explorar tu motivo de consulta y valorar el proceso." 
              },
              { 
                step: 3, 
                title: "Inicio del proceso", 
                desc: "Sesiones regulares de 50-55 min enfocadas en los objetivos terapéuticos que definamos juntos." 
              }
            ].map((item, index) => (
              <motion.div 
                key={item.step} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-bg-light border-4 border-secondary/20 flex items-center justify-center text-primary font-bold text-2xl mb-10 z-10 group-hover:border-secondary group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shadow-sm">
                  {item.step}
                </div>
                <h4 className="font-display text-2xl font-bold text-primary mb-5">{item.title}</h4>
                <p className="text-muted leading-relaxed text-[15px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-32 bg-primary py-20 md:py-32 px-6 md:px-12 text-bg-light">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16 md:mb-20">
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Preguntas Frecuentes</h3>
              <p className="text-bg-light/80 text-base md:text-lg lg:text-xl">Respuestas a las dudas más comunes antes de empezar.</p>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="¿Cuánto dura cada sesión?" 
                answer="Las sesiones individuales tienen una duración de entre 50 y 55 minutos." 
              />
              <FAQItem 
                question="¿Cómo es la primera sesión?" 
                answer="La primera sesión es gratuita y sin compromiso. Nos servirá para conocernos, explorar qué te preocupa y ver si este proceso terapéutico puede ser adecuado para ti." 
              />
              <FAQItem 
                question="¿Ofreces terapia online?" 
                answer="Sí, actualmente ofrezco atención online desde España a través de videollamada segura, con la posibilidad de ofrecer sesiones presenciales en el futuro en Madrid." 
              />
              <FAQItem 
                question="¿Con qué frecuencia nos veremos?" 
                answer="La frecuencia de las sesiones se valora de forma individual según el momento y las necesidades de cada persona. Habitualmente, al inicio del proceso suele recomendarse una frecuencia semanal, que puede ajustarse posteriormente." 
              />
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="scroll-mt-32 py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto relative">
        <img 
  src={ctaTexture}
  className="absolute top-12 left-1/2 -translate-x-1/2 w-64 opacity-[0.05] pointer-events-none blur-xl"
  alt=""
/>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12 md:space-y-16"
            >
              <div className="space-y-6">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary font-bold">Hablemos</h3>
                <p className="text-muted text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
                  Si tienes alguna duda o quieres agendar nuestra primera sesión informativa, no dudes en escribirme a <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pr.banski@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary font-bold hover:underline transition-colors"
>
  pr.banski@gmail.com
</a>. Respondo habitualmente en menos de 24 horas.
                </p>
                <p className="text-sm text-muted/70 italic">
                  Te responderé personalmente lo antes posible y con total confidencialidad.
                </p>
              </div>

              <div className="space-y-8 md:space-y-10">
                <a 
                  href="mailto:pr.banski@gmail.com"
                  className="flex items-center gap-6 group cursor-pointer active:scale-[0.98] transition-transform"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl group-hover:text-accent transition-colors duration-500">Email</h4>
                    <p className="text-muted font-bold text-lg group-hover:text-primary group-hover:underline transition-all">pr.banski@gmail.com</p>
                  </div>
                </a>
                <a 
                  href="https://wa.me/34633944311" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer active:scale-[0.98] transition-transform"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shadow-sm">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl group-hover:text-accent transition-colors duration-500">WhatsApp / Teléfono</h4>
                    <p className="text-muted font-bold text-lg group-hover:text-primary transition-colors">+34 633944311</p>
                  </div>
                </a>
                <div className="flex items-center gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shadow-sm">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl group-hover:text-accent transition-colors duration-500">Horario de atención</h4>
                    <p className="text-muted font-bold text-lg">Lunes a Sábado: 09:00 - 20:00</p>
                    <p className="text-xs text-muted font-semibold mt-1 italic">La confidencialidad y el respeto por tu proceso son esenciales.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-light p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-primary/5 relative"
            >
              <div className="absolute -top-4 right-10 bg-accent text-bg-light px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl">
                Respuesta en &lt; 24h
              </div>
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center text-center py-16 space-y-6"
                  >
                    <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                      <CheckCircle2 size={56} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display text-3xl font-bold text-primary">¡Mensaje enviado!</h4>
                      <p className="text-muted text-lg font-medium">Gracias por contactar. Te responderé lo antes posible.</p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-primary font-bold hover:text-accent transition-colors pt-6 flex items-center gap-2 mx-auto active:scale-95 group"
                    >
                      Enviar otro mensaje <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8" 
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-primary uppercase tracking-[0.15em] ml-1 opacity-80">Nombre completo</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={`w-full bg-bg-light border-2 ${errors.name ? 'border-accent/30 focus:border-accent' : 'border-primary/5 focus:border-primary'} rounded-2xl p-4.5 focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-bold placeholder:text-muted/40`}
                      />
                      {errors.name && <p className="text-accent text-xs font-bold mt-1 ml-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-primary uppercase tracking-[0.15em] ml-1 opacity-80">Correo electrónico</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className={`w-full bg-bg-light border-2 ${errors.email ? 'border-accent/30 focus:border-accent' : 'border-primary/5 focus:border-primary'} rounded-2xl p-4.5 focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-bold placeholder:text-muted/40`}
                      />
                      {errors.email && <p className="text-accent text-xs font-bold mt-1 ml-1">{errors.email}</p>}
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-primary uppercase tracking-[0.15em] ml-1 opacity-80">¿Cómo puedo ayudarte?</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        className={`w-full bg-bg-light border-2 ${errors.message ? 'border-accent/30 focus:border-accent' : 'border-primary/5 focus:border-primary'} rounded-2xl p-4.5 focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-bold placeholder:text-muted/40 resize-none`}
                      />
                      {errors.message && <p className="text-accent text-xs font-bold mt-1 ml-1">{errors.message}</p>}
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:shadow-xl hover:shadow-primary/20 hover:bg-primary/95 hover:-translate-y-0.5 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                          />
                          Enviando...
                        </>
                      ) : 'Enviar mensaje'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

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
                  <a href="mailto:pr.banski@gmail.com" className="text-primary/60 hover:text-primary hover:underline transition-colors text-sm">pr.banski@gmail.com</a>
                  <p className="text-primary/60 text-sm">Madrid · Online</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <p className="text-primary/50 text-[11px] font-medium">
                © {new Date().getFullYear()} Pablo Banski Martínez. Todos los derechos reservados.
              </p>
              <p className="text-[10px] text-primary/30 font-medium">
                La práctica psicológica está sujeta al Código Deontológico del Psicólogo.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-[10px] text-primary/40 font-medium max-w-xs md:text-right leading-relaxed">
                Compromiso con la confidencialidad y el secreto profesional.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
