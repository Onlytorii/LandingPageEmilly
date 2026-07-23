import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { PSYCHOLOGIST } from "../../data/psychologist";

/**
 * Botão flutuante fixo, visível em todas as seções.
 * O pulso chama atenção só nos primeiros segundos após o carregamento —
 * depois disso, ele para (um botão pulsando o tempo todo cansa a vista
 * e destoa do tom acolhedor do site).
 */
export default function FloatingWhatsApp() {
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setShowPulse(false);
      return;
    }

    const timeout = setTimeout(() => setShowPulse(false), 6000);
    return () => clearTimeout(timeout);
  }, []);

  const href = `https://wa.me/${PSYCHOLOGIST.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais sobre as sessões de terapia online."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      <span
        className="mr-3 hidden md:block whitespace-nowrap rounded-full bg-ink px-4 py-2
          text-sm text-white opacity-0 translate-x-2 shadow-sm transition-all duration-300
          group-hover:opacity-100 group-hover:translate-x-0"
      >
        Fale comigo
      </span>

      <span
        className="relative flex h-14 w-14 items-center justify-center rounded-full
          bg-sage-600 text-white shadow-lg transition-transform duration-300
          group-hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {showPulse && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-40" />
        )}
        <MessageCircle size={26} aria-hidden="true" className="relative" />
      </span>
    </a>
  );
}