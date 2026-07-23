/**
 * Fonte única dos dados da psicóloga.
 * Usado por Navbar, AboutSection, FooterCTA, WhatsAppButton e
 * FloatingWhatsApp — atualizar aqui reflete em todo o site, evitando
 * divergência entre seções (nome, CRP, foto, número de contato).
 */
export const PSYCHOLOGIST = {
  name: "Émilly",
  crp: "01/23456", // TODO: substituir pelo número real do CRP antes de publicar
  photoSrc: "/images/psicologa-perfil02.jpeg",
  whatsappNumber: "5584992086643", // formato: DDI + DDD + número
};