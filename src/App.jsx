import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PainPointsSection from "./components/PainPointsSection";
import BenefitsSection from "./components/BenefitsSection";
import AboutSection from "./components/AboutSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FAQSection from "./components/FAQSection";
import FooterCTA from "./components/FooterCTA";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";
import SEOSchema from "./components/shared/Seoschema";

export default function App() {
  return (
    <>
      <SEOSchema />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
          focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm
          focus:font-medium focus:text-ink focus:shadow-md focus-visible:outline-2
          focus-visible:outline-offset-2"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="top">
        <HeroSection />
        <PainPointsSection />
        <BenefitsSection />
        <AboutSection />
        <TestimonialsCarousel />
        <FAQSection />
      </main>
      <FooterCTA />
      <FloatingWhatsApp />
    </>
  );
}