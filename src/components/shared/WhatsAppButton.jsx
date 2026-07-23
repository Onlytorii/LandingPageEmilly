import { MessageCircle } from "lucide-react";
import { PSYCHOLOGIST } from "../../data/psychologist";

/**
 * Botão de CTA para WhatsApp, reutilizável em qualquer seção.
 * A mensagem pré-preenchida pode ser customizada por contexto.
 */
export default function WhatsAppButton({
  message = "Olá! Gostaria de agendar uma sessão de terapia online.",
  children = "Agendar minha primeira sessão",
  variant = "primary", // "primary" | "inverted"
  className = "",
}) {
  const href = `https://wa.me/${PSYCHOLOGIST.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const styles = {
    primary:
      "bg-sage-600 text-white hover:bg-sage-700 shadow-sm hover:shadow-md",
    inverted:
      "bg-white text-sage-700 hover:bg-sage-50 shadow-sm hover:shadow-md",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} via WhatsApp`}
      className={`group inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold
        transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95
        focus-visible:outline-2 focus-visible:outline-offset-2
        ${styles[variant]} ${className}`}
    >
      <MessageCircle
        size={20}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:rotate-12"
      />
      {children}
    </a>
  );
}