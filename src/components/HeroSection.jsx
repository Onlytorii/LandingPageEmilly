import WhatsAppButton from "./shared/WhatsAppButton";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-brand-gradient bg-grain">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl animate-breathe" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand-magenta/30 blur-3xl animate-breathe-slow" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 md:py-44">
        <div className="max-w-2xl">
          <p className="animate-fade-up mb-5 text-sm font-semibold uppercase tracking-widest text-brand-pink">
            Psicologia clínica · Atendimento online
          </p>

          <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-white" style={{ animationDelay: "100ms" }}>
            Terapia online para você recomeçar, no seu tempo e no seu espaço.
          </h1>

          <p className="animate-fade-up mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-xl" style={{ animationDelay: "200ms" }}>
            Um espaço seguro e sigiloso para lidar com a ansiedade, o esgotamento
            e as transições da vida adulta.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col sm:flex-row sm:items-center gap-4" style={{ animationDelay: "300ms" }}>
            <WhatsAppButton variant="inverted">Agendar minha primeira sessão</WhatsAppButton>
            <p className="text-sm text-white/60">Resposta em até 24h · 100% online · Sigilo garantido</p>
          </div>
        </div>
      </div>
    </header>
  );
}