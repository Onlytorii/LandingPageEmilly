import { useEffect, useState } from "react";
import WhatsAppButton from "./shared/WhatsAppButton";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

const PSYCHOLOGIST_NAME = "Psicologa Emilly";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 72);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoClass = `shrink-0 whitespace-nowrap font-display font-medium text-lg transition-colors duration-300 ${
    isScrolled ? "text-ink" : "text-white"
  }`;

  const linkClass = `whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
    isScrolled ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white"
  }`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-sage-50/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#top" className={logoClass}>{PSYCHOLOGIST_NAME}</a>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>{link.label}</a>
            ))}
          </div>

          <WhatsAppButton
            variant={isScrolled ? "primary" : "inverted"}
            className="shrink-0 !px-5 !py-2.5 text-sm"
          >
            Agendar
          </WhatsAppButton>
        </div>
      </div>
    </nav>
  );
}