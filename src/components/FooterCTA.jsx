import WhatsAppButton from "./shared/WhatsAppButton";

const PSYCHOLOGIST_NAME = "[Nome da Psicóloga]";
const CRP = "[xx/xxxxx]";

export default function FooterCTA() {
  return (
    <>
      <section className="bg-brand-gradient text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium">
            Dar o primeiro passo pode ser mais simples do que parece.
          </h2>
          <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
            Se você chegou até aqui, talvez seja o momento de se permitir
            esse cuidado. Estou aqui para te ouvir, no seu tempo.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton variant="inverted">
              Falar no WhatsApp agora
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-sage-100/70 text-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 space-y-4">
          <p className="text-sage-50 font-medium">
            {PSYCHOLOGIST_NAME} · CRP {CRP}
          </p>

          <p className="leading-relaxed max-w-2xl">
            Este site tem caráter informativo e não substitui o vínculo
            terapêutico estabelecido em consulta. Em caso de emergência ou
            risco iminente, procure o CVV (188) ou um serviço de urgência.
          </p>

          <p className="leading-relaxed max-w-2xl">
            Seus dados são tratados com sigilo, conforme a Lei Geral de
            Proteção de Dados (LGPD).
          </p>

          <nav aria-label="Redes sociais e contato" className="flex gap-6 pt-2">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:contato@exemplo.com"
              className="hover:text-sage-300 transition-colors"
            >
              contato@exemplo.com
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}