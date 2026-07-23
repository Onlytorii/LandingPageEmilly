import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import Reveal from "./shared/Reveal";
import { testimonials } from "../data/testimonials";

function TestimonialCard({ text, author, detail }) {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-3">
      <figure className="relative card-light p-8 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
        <Quote
          aria-hidden="true"
          size={40}
          className="text-brand-pink/50 absolute -top-3 left-6"
        />
        <blockquote className="mt-6 text-ink/80 leading-relaxed flex-1">
          “{text}”
        </blockquote>
        <figcaption className="mt-6 text-sm text-ink/50 italic">
          {author}, {detail}
        </figcaption>
      </figure>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isPausedRef = useRef(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Autoplay: pausa em hover/foco e para de vez se o usuário prefere menos movimento.
  useEffect(() => {
    if (!emblaApi) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (!isPausedRef.current) emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const pause = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  return (
    <SectionWrapper id="depoimentos" className="bg-sage-600">
      <Reveal className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-4">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-sage-50">
            O que dizem sobre a experiência da terapia
          </h2>
          <p className="mt-4 text-sm text-sage-100/60 italic leading-relaxed">
            Depoimentos ilustrativos baseados em relatos comuns de pacientes,
            apresentados de forma anônima em respeito ao sigilo profissional,
            conforme o Código de Ética do Psicólogo. Resultados terapêuticos
            variam de pessoa para pessoa.
          </p>
        </div>
      </Reveal>

      {/* IMPORTANTE: o alinhamento com a página (max-w-6xl mx-auto px-6 md:px-12)
         vai junto no MESMO elemento que recebe o emblaRef — não separado
         do gutter interno dos slides (-mx-3). Isso é o que mantém o
         carrossel visualmente alinhado com o título acima. */}
      <div
        className="mt-10 overflow-hidden px-6 md:px-12 max-w-6xl mx-auto"
        ref={emblaRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Depoimentos de pacientes"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
        <div className="flex -mx-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Depoimento anterior"
          className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center
            justify-center text-sage-700 hover:bg-sage-50 transition-colors"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              role="tab"
              aria-selected={selectedIndex === index}
              aria-label={`Ir para depoimento ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-6 bg-brand-magenta"
                  : "w-2.5 bg-sage-100 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Próximo depoimento"
          className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center
            justify-center text-sage-700 hover:bg-sage-50 transition-colors"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </SectionWrapper>
  );
}