import { BatteryLow, Waves, Moon, Compass } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import Reveal from "./shared/Reveal";

const painPoints = [
  {
    id: "cansaco",
    icon: BatteryLow,
    title: "Sensação constante de cansaço",
    description: 'mesmo depois de dormir ou "descansar"',
  },
  {
    id: "pensamentos",
    icon: Waves,
    title: "Pensamentos acelerados",
    description: "e preocupação excessiva com o futuro, o trabalho ou os relacionamentos",
  },
  {
    id: "insonia",
    icon: Moon,
    title: "Dificuldade para desligar a mente",
    description: "à noite, com sono agitado ou insônia",
  },
  {
    id: "perdido",
    icon: Compass,
    title: 'Sentimento de estar "perdido"',
    description: "nas escolhas da vida adulta — carreira, relações, propósito",
  },
];

export default function PainPointsSection() {
  return (
    <SectionWrapper id="identificacao" className="bg-sage-600">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-sage-50">
          Você se reconhece em algum desses sinais?
        </h2>
        <p className="mt-4 text-lg text-sage-100/70 leading-relaxed">
          Muitas vezes, a rotina não dá espaço para perceber o quanto estamos
          esgotados — até que o corpo e a mente cobram a conta.
        </p>
      </Reveal>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {painPoints.map((point, index) => (
          <Reveal key={point.id} delay={index * 120} className="h-full">
            <li className="card-light p-7 flex gap-5 h-full transition-transform duration-300 hover:-translate-y-1">
              <span
                className="shrink-0 h-12 w-12 rounded-full bg-sage-100 flex items-center justify-center"
                aria-hidden="true"
              >
                <point.icon size={22} className="text-sage-600" />
              </span>
              <div>
                <p className="font-semibold text-sage-900">{point.title}</p>
                <p className="text-ink/70 mt-1">{point.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
      <Reveal delay={400}>
      <p className="mt-12 text-lg text-sage-100/80 leading-relaxed max-w-2xl">
        Se algo disso ecoou em você, saiba que buscar ajuda é um passo de
        coragem — e você não precisa passar por isso sozinho(a).
      </p>
      </Reveal>
    </SectionWrapper>
  );
}