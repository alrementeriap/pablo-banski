import React from 'react';
import { Heart, Umbrella, Users, Sunrise } from 'lucide-react';
import { Section, SectionTitle, Card, BulletList, CTA } from '../components';

const DueloPage = () => {
  return (
    <div className="pt-28 md:pt-32 lg:pt-24">
      {/* Hero / Intro */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle 
            title="Acompañamiento en el Duelo" 
            align="left"
            subtitle="El duelo no es una enfermedad que haya que curar, sino un proceso de adaptación emocional tras una pérdida significativa. Aquí encontrarás un espacio de respeto absoluto para transitarlo a tu ritmo."
          />
        </div>
      </Section>

      {/* Cómo se manifiesta */}
      <Section variant="alternate">
        <div className="max-w-3xl mb-12">
          <SectionTitle 
            title="Vivir la pérdida" 
            align="left"
            subtitle="Cada duelo es único, pero existen vivencias comunes que a menudo nos hacen sentir desorientados o solos en nuestro dolor."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card 
            icon={Heart} 
            title="Presencia de la Ausencia" 
            description="Esa sensación constante de que falta algo vital, que afecta a tu forma de ver el mundo y moverte en él." 
          />
          <Card 
            icon={Umbrella} 
            title="Vulnerabilidad" 
            description="Sentir que los cimientos de tu seguridad se han movido y que el futuro se percibe incierto o lejano." 
          />
          <Card 
            icon={Sunrise} 
            title="Oleadas Emocionales" 
            description="Pasar por momentos de profunda tristeza, enfado, culpa o incluso entumecimiento emocional de forma impredecible." 
          />
          <Card 
            icon={Users} 
            title="Desconexión Social" 
            description="La dificultad de sentirte comprendido por tu entorno, lo que a menudo lleva a un aislamiento involuntario." 
          />
        </div>
      </Section>

      {/* Cómo ayuda la terapia */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-6">Un refugio para tu proceso</h3>
            <div className="space-y-4 text-muted text-lg leading-relaxed font-light">
              <p>
                La terapia de duelo no sirve para olvidar, sino para aprender a vivir con el recuerdo de una forma que no te paralice. Es un lugar donde todas tus emociones, por complejas que sean, tienen cabida.
              </p>
              <p>
                Juntos exploraremos cómo recolocar el vínculo con lo perdido, encontrando un nuevo equilibrio que te permita honrar el pasado mientras reconstruyes tu presente.
              </p>
            </div>
          </div>
          <div className="bg-bg-light p-8 md:p-10 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-display text-2xl font-bold text-primary mb-6">Mi perspectiva</h4>
            <div className="space-y-4 text-muted text-[15px] leading-relaxed">
              <p>
                Trabajo desde una escucha profunda y sin juicios sobre lo que 'deberías' estar sintiendo o cuánto tiempo 'debería' durar tu duelo. Tu ritmo es el único que importa.
              </p>
              <p>
                Utilizaremos herramientas narrativas y simbólicas que te ayuden a dar sentido a la pérdida e integrar la experiencia en tu historia de vida.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Puntos clave */}
      <Section variant="alternate">
        <div className="max-w-3xl">
          <SectionTitle 
            title="En qué nos enfocaremos" 
            align="left"
          />
          <BulletList items={[
            "Validación emocional de todas las fases de tu proceso.",
            "Gestión de la culpa y los 'pendientes' emocionales.",
            "Reconstrucción del día a día y la identidad tras la pérdida.",
            "Encontrar formas de mantener el vínculo de forma saludable."
          ]} />
          
          <CTA 
            buttonText="Solicitar primera sesión" 
            supportingText="No tienes por qué transitar este camino en soledad. Hablemos cuando sientas que es el momento."
          />
        </div>
      </Section>
    </div>
  );
};

export default DueloPage;
