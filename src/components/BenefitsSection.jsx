import { Clock, Home, Lock, MapPin } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import Reveal from "./shared/Reveal";

const benefits = [
  { id: "flexibilidade", icon: Clock, title: "Flexibilidade de horários", description: "Sessões que se encaixam na sua rotina, sem deslocamento nem tempo perdido no trânsito." },
  { id: "conforto", icon: Home, title: "Conforto do seu espaço", description: "Converse em um ambiente onde você já se sente seguro(a) — sua casa, seu ritmo." },
  { id: "sigilo", icon: Lock, title: "Sigilo absoluto", description: "Atendimento realizado por plataforma segura e criptografada, seguindo o Código de Ética Profissional do Psicólogo." },
  { id: "acesso", icon: MapPin, title: "Acesso de qualquer lugar", description: "Ideal para quem mora longe de grandes centros ou tem uma rotina que dificulta o presencial." },
];

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="card-glass p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center mb-4">
        <Icon size={20} className="text-sage-200" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-sage-50 text-lg">{title}</h3>
      <p className="text-sage-100/60 mt-2 leading-relaxed">{description}</p>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <SectionWrapper id="beneficios" className="bg-sage-800">  
      <Reveal className="max-w-2xl mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-sage-50">
          Por que escolher a terapia online?
        </h2>
        <p className="mt-4 text-lg text-sage-100/70 leading-relaxed">
          A terapia online une a mesma qualidade de escuta e cuidado clínico de
          um atendimento presencial à flexibilidade que a vida adulta pede.
        </p>
      </Reveal>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit.id} delay={index * 120}>
            <BenefitCard {...benefit} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}