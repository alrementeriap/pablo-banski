import React from 'react';
import { Wind, Activity, Brain, Clock } from 'lucide-react';
import { Section, SectionTitle, Card, BulletList, CTA } from '../components';

const AnsiedadPage = () => {
  return (
    <div className="pt-28 md:pt-32 lg:pt-24">
      {/* Hero / Intro */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle 
            title="Gestión de la Ansiedad" 
            align="left"
            subtitle="Sentir ansiedad es, en esencia, una señal de tu cuerpo intentando protegerte. Aquí transformaremos ese malestar en una oportunidad para escucharte y recuperar la calma que necesitas."
          />
        </div>
      </Section>

      {/* Cómo se manifiesta */}
      <Section variant="alternate">
        <div className="max-w-3xl mb-12">
          <SectionTitle 
            title="Cómo se manifiesta" 
            align="left"
            subtitle="La ansiedad no siempre es un ataque de pánico; a menudo se infiltra en lo cotidiano de formas sutiles pero agotadoras."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card 
            icon={Activity} 
            title="Sintomatología Física" 
            description="Esa presión en el pecho, la respiración agitada o la tensión muscular que te acompaña sin motivo aparente." 
          />
          <Card 
            icon={Brain} 
            title="Rumiación Mental" 
            description="Pensamientos en bucle sobre el futuro o situaciones pasadas que generan una sensación de alerta constante." 
          />
          <Card 
            icon={Wind} 
            title="Inquietud Interna" 
            description="La dificultad para 'estar' simplemente presente, sintiendo una necesidad urgente de hacer o resolver algo." 
          />
          <Card 
            icon={Clock} 
            title="Agotamiento y Sueño" 
            description="Despertares con ansiedad o la sensación de no haber descansado debido a una mente que no se apaga." 
          />
        </div>
      </Section>

      {/* Cómo ayuda la terapia */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-6">El camino hacia la tranquilidad</h3>
            <div className="space-y-4 text-muted text-lg leading-relaxed font-light">
              <p>
                La terapia no busca 'eliminar' la ansiedad por la fuerza, sino entender qué te está queriendo decir. Es un proceso de desaprendizaje de los patrones que te mantienen en alerta.
              </p>
              <p>
                En nuestras sesiones, crearemos un espacio donde puedas soltar la presión de tener que controlarlo todo. Aprenderás a regular tu sistema nervioso y a responder, en lugar de solo reaccionar.
              </p>
            </div>
          </div>
          <div className="bg-bg-light p-8 md:p-10 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-display text-2xl font-bold text-primary mb-6">Mi forma de trabajar</h4>
            <div className="space-y-4 text-muted text-[15px] leading-relaxed">
              <p>
                Integro herramientas cognitivo-conductuales con una mirada humanista. Esto significa que te daré estrategias prácticas para el día a día, pero siempre validando tu historia y tus emociones.
              </p>
              <p>
                Trabajaremos a tu ritmo, estableciendo pequeñas metas que te devuelvan la confianza en tu capacidad de gestionar los momentos de incertidumbre.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Puntos clave */}
      <Section variant="alternate">
        <div className="max-w-3xl">
          <SectionTitle 
            title="Puntos clave de nuestro trabajo" 
            align="left"
          />
          <BulletList items={[
            "Identificación de los disparadores específicos de tu ansiedad.",
            "Desarrollo de técnicas de anclaje y respiración consciente.",
            "Revisión de las exigencias internas y el autoperfeccionismo.",
            "Construcción de hábitos que fomenten la seguridad y el descanso."
          ]} />
          
          <CTA 
            buttonText="Reservar mi primera sesión" 
            supportingText="Este primer encuentro de 20 minutos es totalmente gratuito y nos servirá para conocernos."
          />
        </div>
      </Section>
    </div>
  );
};

export default AnsiedadPage;
