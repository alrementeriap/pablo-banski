import React from 'react';
import { Smile, Zap, Loader, ShieldCheck } from 'lucide-react';
import { Section, SectionTitle, Card, BulletList, CTA } from '../components';

const RegulacionEmocionalPage = () => {
  return (
    <div className="pt-28 md:pt-32 lg:pt-24">
      {/* Hero / Intro */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle 
            title="Regulación Emocional" 
            align="left"
            subtitle="Las emociones son brújulas que nos indican qué está pasando en nuestro mundo interno. Aprender a regularlas no es reprimirlas, sino desarrollar la capacidad de responder a ellas con consciencia."
          />
        </div>
      </Section>

      {/* Cómo se manifiesta */}
      <Section variant="alternate">
        <div className="max-w-3xl mb-12">
          <SectionTitle 
            title="El lenguaje de las emociones" 
            align="left"
            subtitle="La dificultad para gestionar lo que sentimos suele manifestarse en los extremos: o nos desbordan o nos desconectamos de ellas."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card 
            icon={Zap} 
            title="Reactividad Intensa" 
            description="Sentir que las emociones toman el mando, llevando a reacciones impulsivas de las que luego te arrepientes." 
          />
          <Card 
            icon={Loader} 
            title="Desconexión o Vacío" 
            description="La sensación de no saber qué estás sintiendo exactamente, como si hubiera un muro entre tú y tus emociones." 
          />
          <Card 
            icon={ShieldCheck} 
            title="Evitación Emocional" 
            description="Tratar de ignorar el malestar o huir de situaciones que despierten sentimientos difíciles, limitando tu vida." 
          />
          <Card 
            icon={Smile} 
            title="Juicio y Crítica" 
            description="Sentirte culpable por lo que sientes o intentar forzar un estado de bienestar que no es real en ese momento." 
          />
        </div>
      </Section>

      {/* Cómo ayuda la terapia */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-6">Navegar la tormenta</h3>
            <div className="space-y-4 text-muted text-lg leading-relaxed font-light">
              <p>
                La terapia te ofrece un 'laboratorio seguro' para observar tus emociones sin que te arrastren. Aprenderás a identificar las sensaciones físicas que preceden a la emoción para que puedas elegir cómo actuar.
              </p>
              <p>
                Trabajaremos para que dejes de ver tus sentimientos como enemigos y empieces a verlos como información valiosa sobre tus necesidades y límites.
              </p>
            </div>
          </div>
          <div className="bg-bg-light p-8 md:p-10 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-display text-2xl font-bold text-primary mb-6">Mi perspectiva</h4>
            <div className="space-y-4 text-muted text-[15px] leading-relaxed">
              <p>
                Utilizo un enfoque que combina la psicoeducación sobre el cerebro emocional con prácticas de atención plena y autocompasión. Entenderás biológicamente qué te pasa.
              </p>
              <p>
                Buscamos la flexibilidad emocional: que puedas sostener la tristeza, el enfado o el miedo sin que colapsen tu capacidad de tomar decisiones saludables.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Puntos clave */}
      <Section variant="alternate">
        <div className="max-w-3xl">
          <SectionTitle 
            title="Objetivos fundamentales" 
            align="left"
          />
          <BulletList items={[
            "Identificación y etiquetado preciso de las emociones.",
            "Ampliación de la ventana de tolerancia al malestar.",
            "Herramientas de autogestión en momentos de crisis.",
            "Mejora de la comunicación asertiva de tus necesidades."
          ]} />
          
          <CTA 
            buttonText="Reservar primera sesión" 
            supportingText="Aprende a escuchar tus emociones sin dejar que ellas dicten cada paso de tu camino."
          />
        </div>
      </Section>
    </div>
  );
};

export default RegulacionEmocionalPage;
