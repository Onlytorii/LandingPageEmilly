
import HeroSection from "./components/HeroSection";
import PainPointsSection from "./components/PainPointsSection";
import BenefitsSection from "./components/BenefitsSection";
import AboutSection from "./components/AboutSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FAQSection from "./components/FAQSection";
import FooterCTA from "./components/FooterCTA";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";

export default function App() {
  return (
    <>
      
      <main>
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