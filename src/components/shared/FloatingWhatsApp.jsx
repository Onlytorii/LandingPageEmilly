import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5584992086643";

/**
 * Botão flutuante fixo, visível em todas as seções.
 * Pulso sutil (não invasivo) para chamar atenção sem parecer agressivo.
 */
export default function FloatingWhatsApp() {
  const href = `https://wa.me/5584992086643?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais sobre as sessões de terapia online."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center
        rounded-full bg-sage-600 text-white shadow-lg
        transition-transform duration-300 hover:scale-105
        focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-40" />
      <MessageCircle size={26} aria-hidden="true" className="relative" />
    </a>
  );
}