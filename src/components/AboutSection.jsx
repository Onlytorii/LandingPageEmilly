import SectionWrapper from "./shared/SectionWrapper";
import Reveal from "./shared/Reveal";

const PSYCHOLOGIST = {
  name: "Émilly",
  crp: "[xx/xxxxx]",
  photoAlt: "Foto de [Nome da Psicóloga], psicóloga clínica",
  photoSrc: "/images/psicologa-perfil02.jpeg",
};

export default function AboutSection() {
  return (
    <SectionWrapper id="sobre" className="bg-sage-500">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal className="order-2 md:order-1">
          <span
            aria-hidden="true"
            className="block h-1 w-14 rounded-full bg-brand-gradient mb-5"
          />

          <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-6">
            Um pouco sobre mim
          </h2>

          <div className="space-y-4 text-ink/100 leading-relaxed">
            <p>
              Meu nome é {PSYCHOLOGIST.name}, sou psicóloga clínica (CRP{" "}
              {PSYCHOLOGIST.crp}) e minha jornada na psicologia nasceu de uma
              pergunta simples que me acompanha até hoje:{" "}
              <em>o que significa, de fato, cuidar de alguém?</em>
            </p>
            <p>
              Ao longo da minha formação, me aproximei especialmente do
              universo dos jovens adultos — pessoas que, como eu em muitos
              momentos, enfrentam a pressão de "ter tudo resolvido" enquanto
              ainda estão descobrindo quem são. Foi nesse encontro que decidi
              dedicar minha prática clínica a temas como ansiedade,
              esgotamento emocional e as transições da vida adulta.
            </p>
            <p>
              Acredito em uma terapia que não julga, que escuta antes de
              responder, e que caminha no tempo de cada pessoa. Meu
              compromisso é oferecer um espaço ético, sigiloso e
              genuinamente acolhedor — seja na tela do computador ou frente a
              frente.
            </p>
            <p>
              Se você está buscando esse espaço, será um privilégio caminhar
              ao seu lado.
            </p>
          </div>

          <p className="mt-6 italic text-brand-magenta font-high">
            — {PSYCHOLOGIST.name}, CRP {PSYCHOLOGIST.crp}
          </p>
        </Reveal>

        <Reveal delay={150} className="order-1 md:order-2 relative">
          {/* Moldura em gradiente atrás da foto — conecta com o Hero */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-4xl bg-brand-gradient opacity-25 blur-xl"
          />
          <img
            src={PSYCHOLOGIST.photoSrc}
            alt={PSYCHOLOGIST.photoAlt}
            className="relative rounded-4xl shadow-sm w-full h-auto object-cover aspect-[4/5]"
            loading="lazy"
          />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}