import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./shared/WhatsAppButton";
import { PSYCHOLOGIST } from "../data/psychologist";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 72);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile ao rolar a página
  useEffect(() => {
    if (!isMenuOpen) return;
    const close = () => setIsMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [isMenuOpen]);

  const isSolid = isScrolled || isMenuOpen;

  const logoClass = `shrink-0 whitespace-nowrap font-display font-medium text-lg transition-colors duration-300 ${
    isSolid ? "text-ink" : "text-white"
  }`;

  const linkClass = `relative whitespace-nowrap text-sm font-medium transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full
    after:origin-left after:scale-x-0 after:transition-transform after:duration-300
    hover:after:scale-x-100 ${
    isScrolled
      ? "text-ink/70 hover:text-ink after:bg-ink"
      : "text-white/80 hover:text-white after:bg-white"
  }`;

  const iconButtonClass = `md:hidden shrink-0 transition-colors duration-300 ${
    isSolid ? "text-ink" : "text-white"
  }`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isSolid ? "bg-sage-50/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#top" className={logoClass}>{PSYCHOLOGIST.name}</a>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>{link.label}</a>
            ))}
          </div>

          <WhatsAppButton
            variant={isScrolled ? "primary" : "inverted"}
            className="hidden md:inline-flex shrink-0 !px-5 !py-2.5 text-sm"
          >
            Agendar
          </WhatsAppButton>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className={iconButtonClass}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out bg-sage-50/95 backdrop-blur-md ${
          isMenuOpen ? "grid-rows-[1fr] shadow-sm" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 text-ink/80 font-medium hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton variant="primary" className="mt-2 justify-center !py-3">
              Agendar
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </nav>
  );
}