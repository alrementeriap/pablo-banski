import psicologo from "../assets/banski.jpeg";
import aboutArt from "../assets/about-art2.jpg";
import ctaTexture from "../assets/cta-texture.jpg";
import heroCircle from "../assets/hero-circle.jpg";
import React, { useState } from 'react';
import {
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

const SpecialtyCard = ({ icon: Icon, title, description, href }: { icon: any; title: string; description: string; href: string }) => (
  <div className="bg-bg-light p-8 rounded-3xl shadow-sm border border-primary/5 flex flex-col gap-6 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 group cursor-default">
    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shrink-0">
      <Icon size={28} />
    </div>
    <div className="space-y-3">
      <h4 className="font-display text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
        {title}
      </h4>
      <p className="text-[15px] text-muted leading-relaxed">{description}</p>
    </div>
    <a
      href={href}
      className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:text-accent transition-all duration-300 active:scale-95"
    >
      Saber más <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
    </a>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-bg-light/10 py-5">
      <button
        className="w-full flex justify-between items-center text-left group py-3 focus-visible:ring-inset focus-visible:ring-bg-light"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-bg-light font-bold text-lg md:text-xl group-hover:text-secondary transition-all duration-300 pr-8">
          {question}
        </span>
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

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert('Ha habido un problema al enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="pt-28 md:pt-32 lg:pt-24">
      <section
        id="sobre-mi"
        className="scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 lg:py-40 grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10 md:space-y-12"
        >
          <div className="space-y-6 md:space-y-8">
            <span className="text-accent font-bold tracking-[0.18em] uppercase text-xs md:text-sm inline-block">
              Psicólogo Sanitario · Colegiado M-40879
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary font-bold">
              Un espacio seguro para tu bienestar
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed font-light max-w-xl">
              Acompañamiento psicológico online desde un enfoque integrador y humanista. Sesiones
              personalizadas donde tú y tu experiencia sois el centro del proceso terapéutico.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="/#contacto"
              className="bg-primary text-bg-light font-bold py-5 px-10 rounded-2xl text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/95 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-center"
            >
              Primera sesión gratuita
            </a>
            <a
              href="/#especialidades"
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
              loading="eager"
              // @ts-ignore
              fetchPriority="high"
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

      <section
        id="especialidades"
        className="scroll-mt-32 bg-primary/[0.07] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
      >
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
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
              Áreas de intervención
            </h3>
            <p className="text-muted max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed">
              Trabajamos juntos para identificar herramientas que te permitan afrontar tus desafíos actuales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { icon: Heart, title: "Acompañamiento en el duelo", description: "Apoyo profesional para transitar procesos de pérdida y cambios vitales significativos.", href: "/duelo" },
              { icon: Wind, title: "Gestión de la ansiedad", description: "Herramientas prácticas para regular el estrés y recuperar la calma en tu día a día.", href: "/ansiedad" },
              { icon: Brain, title: "Regulación emocional", description: "Comprende tus emociones para responder a ellas de una forma más saludable y consciente.", href: "/regulacion-emocional" },
              { icon: Users, title: "Adultos y adolescentes", description: "Terapia individual adaptada a las necesidades específicas de cada etapa del desarrollo.", href: "/adolescentes" }
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
                  href={specialty.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="proceso"
        className="scroll-mt-32 py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
            Cómo empezamos a trabajar
          </h3>
          <p className="text-muted text-base md:text-lg lg:text-xl">
            Un camino claro y estructurado hacia tu bienestar.
          </p>
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

      <section
        id="faq"
        className="scroll-mt-32 bg-primary/95 py-20 md:py-32 px-6 md:px-12 text-bg-light"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16 md:mb-20">
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Preguntas Frecuentes
            </h3>
            <p className="text-bg-light/80 text-base md:text-lg lg:text-xl">
              Respuestas a las dudas más comunes antes de empezar.
            </p>
          </div>

          <div className="space-y-2">
            <FAQItem question="¿Cuánto dura cada sesión?" answer="Las sesiones individuales tienen una duración de entre 50 y 55 minutos." />
            <FAQItem question="¿Cómo es la primera sesión?" answer="La primera sesión es gratuita y sin compromiso. Nos servirá para conocernos, explorar qué te preocupa y ver si este proceso terapéutico puede ser adecuado para ti." />
            <FAQItem question="¿Ofreces terapia online?" answer="Sí, actualmente ofrezco atención online desde España a través de videollamada segura, con la posibilidad de ofrecer sesiones presenciales en el futuro en Madrid." />
            <FAQItem question="¿Con qué frecuencia nos veremos?" answer="La frecuencia de las sesiones se valora de forma individual según el momento y las necesidades de cada persona. Habitualmente, al inicio del proceso suele recomendarse una frecuencia semanal, que puede ajustarse posteriormente." />
          </div>
        </motion.div>
      </section>

      <section
        id="contacto"
        className="scroll-mt-32 py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto relative"
      >
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
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
                Hablemos
              </h3>
              <p className="text-muted text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
                Si tienes alguna duda o quieres agendar nuestra primera sesión informativa, no dudes en escribirme a{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pr.banski@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline transition-color"
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pr.banski@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl group-hover:text-accent transition-colors duration-500">
                    Email
                  </h4>
                  <p className="text-muted font-bold text-lg group-hover:text-primary group-hover:underline transition-all">
                    pr.banski@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/34633944311?text=Hola%20Pablo,%20me%20gustar%C3%ADa%20hacer%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shadow-sm">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl group-hover:text-accent transition-colors duration-500">
                    WhatsApp / Teléfono
                  </h4>
                  <p className="text-muted font-bold text-lg group-hover:text-primary transition-colors">
                    +34 633944311
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-bg-light transition-all duration-500 shadow-sm">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl group-hover:text-accent transition-colors duration-500">
                    Horario de atención
                  </h4>
                  <p className="text-muted font-bold text-lg">Lunes a Sábado: 09:00 - 20:00</p>
                  <p className="text-xs text-muted font-semibold mt-1 italic">
                    La confidencialidad y el respeto por tu proceso son esenciales.
                  </p>
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
                    <p className="text-muted text-lg font-medium">
                      Gracias por contactar. Te responderé lo antes posible.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold hover:text-accent transition-colors pt-6 flex items-center gap-2 mx-auto active:scale-95 group"
                  >
                    Enviar otro mensaje{' '}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
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
                    <label className="text-xs font-bold text-primary uppercase tracking-[0.15em] ml-1 opacity-80">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={`w-full bg-bg-light border-2 ${
                        errors.name ? 'border-accent/30 focus:border-accent' : 'border-primary/5 focus:border-primary'
                      } rounded-2xl p-4.5 focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-bold placeholder:text-muted/40`}
                    />
                    {errors.name && <p className="text-accent text-xs font-bold mt-1 ml-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary uppercase tracking-[0.15em] ml-1 opacity-80">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={`w-full bg-bg-light border-2 ${
                        errors.email ? 'border-accent/30 focus:border-accent' : 'border-primary/5 focus:border-primary'
                      } rounded-2xl p-4.5 focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-bold placeholder:text-muted/40`}
                    />
                    {errors.email && <p className="text-accent text-xs font-bold mt-1 ml-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary uppercase tracking-[0.15em] ml-1 opacity-80">
                      ¿Cómo puedo ayudarte?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      className={`w-full bg-bg-light border-2 ${
                        errors.message ? 'border-accent/30 focus:border-accent' : 'border-primary/5 focus:border-primary'
                      } rounded-2xl p-4.5 focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-bold placeholder:text-muted/40 resize-none`}
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
    </div>
  );
};

export default HomePage;
