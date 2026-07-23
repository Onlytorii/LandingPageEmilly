import { useEffect } from "react";
import { PSYCHOLOGIST } from "../../data/psychologist";

/**
 * Injeta dados estruturados (schema.org/Person) no <head> em runtime.
 * Ajuda buscadores a entenderem quem é a profissional por trás do site
 * — pode render rich snippets (nome, CRP, tipo de serviço) na busca.
 * TODO: preencher `url` com o domínio real antes de publicar.
 */
export default function SEOSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: PSYCHOLOGIST.name,
      jobTitle: "Psicóloga Clínica",
      description:
        "Atendimento psicológico online para ansiedade, esgotamento emocional e transições da vida adulta.",
      url: "https://exemplo.com",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}