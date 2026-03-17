import React from 'react';
import { Target, MessageSquare, Shield, Smartphone } from 'lucide-react';
import { Section, SectionTitle, Card, BulletList, CTA } from '../components';

const AdolescentesPage = () => {
  return (
    <div className="pt-28 md:pt-32 lg:pt-24">
      {/* Hero / Intro */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle 
            title="Terapia para Adolescentes" 
            align="left"
            subtitle="La adolescencia es una etapa de grandes descubrimientos y, a veces, de gran confusión. Mi objetivo es ofrecer un espacio donde puedan ser ellos mismos, sin las expectativas de los adultos o sus iguales."
          />
        </div>
      </Section>

      {/* Cómo se manifiesta */}
      <Section variant="alternate">
        <div className="max-w-3xl mb-12">
          <SectionTitle 
            title="El mundo adolescente" 
            align="left"
            subtitle="Acompañar en esta etapa implica entender los retos específicos a los que se enfrentan hoy en día, en un entorno cada vez más complejo."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card 
            icon={Shield} 
            title="Autoestima e Identidad" 
            description="La búsqueda de quiénes son, gestionando la presión de encajar y la construcción de una imagen propia saludable." 
          />
          <Card 
            icon={Target} 
            title="Presión y Exigencia" 
            description="La ansiedad ante el futuro académico, las expectativas familiares o la sensación de no estar a la altura." 
          />
          <Card 
            icon={MessageSquare} 
            title="Dificultades de Vínculo" 
            description="Conflictos recurrentes en casa o problemas en las relaciones de amistad que generan aislamiento y malestar." 
          />
          <Card 
            icon={Smartphone} 
            title="Desafíos Digitales" 
            description="El impacto de las redes sociales en su autopercepción, el acoso digital o la dificultad para desconectar." 
          />
        </div>
      </Section>

      {/* Cómo ayuda la terapia */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-6">Un lugar para su propia voz</h3>
            <div className="space-y-4 text-muted text-lg leading-relaxed font-light">
              <p>
                A menudo, los adolescentes sienten que no tienen un lugar donde hablar sin ser corregidos o juzgados. La terapia les devuelve ese espacio de confidencialidad y autonomía que tanto necesitan para crecer.
              </p>
              <p>
                Trabajamos para que desarrollen sus propios recursos emocionales, mejorando su capacidad de comunicación y su seguridad a la hora de tomar sus primeras grandes decisiones.
              </p>
            </div>
          </div>
          <div className="bg-bg-light p-8 md:p-10 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-display text-2xl font-bold text-primary mb-6">Mi enfoque con jóvenes</h4>
            <div className="space-y-4 text-muted text-[15px] leading-relaxed">
              <p>
                No me presento como una figura de autoridad, sino como un colaborador en su proceso. Uso un lenguaje directo y honesto, validando su realidad y sus intereses actuales.
              </p>
              <p>
                Entiendo la importancia de la privacidad para el adolescente, por lo que la confidencialidad es sagrada, manteniendo informada a la familia solo de aquello que sea vital para su bienestar.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Puntos clave */}
      <Section variant="alternate">
        <div className="max-w-3xl">
          <SectionTitle 
            title="Qué trabajaremos juntos" 
            align="left"
          />
          <BulletList items={[
            "Construcción de un autoconcepto sólido y positivo.",
            "Gestión del estrés académico y las expectativas sociales.",
            "Desarrollo de habilidades de comunicación con la familia.",
            "Fomento del pensamiento crítico frente al mundo digital."
          ]} />
          
          <CTA 
            buttonText="Solicitar primera sesión" 
            supportingText="Un espacio de confianza para que los jóvenes encuentren sus propias respuestas ante los cambios."
          />
        </div>
      </Section>
    </div>
  );
};

export default AdolescentesPage;
