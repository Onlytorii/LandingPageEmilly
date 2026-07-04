import { useState } from "react";
import { Plus } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import Reveal from "./shared/Reveal";
import { faqItems } from "../data/faqItems";

/**
 * Item de accordion usando a técnica de grid-template-rows (0fr -> 1fr)
 * para animação de altura suave sem precisar medir altura via JS.
 */
function AccordionItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-sage-100">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-trigger-${id}`}
          className="w-full flex items-center justify-between gap-4 py-5 text-left
            focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="font-medium text-ink text-lg">{question}</span>
          <Plus
            aria-hidden="true"
            size={20}
            className={`shrink-0 text-brand-magenta transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
          />
        </button>
      </h3>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-ink/70 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <SectionWrapper id="faq" className="bg-sage-50">
      <Reveal className="max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-ink">
          Perguntas frequentes
        </h2>
      </Reveal>


      <Reveal delay={150} className="max-w-3xl">
      <div className="max-w-3xl card-light px-6 md:px-8">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
      </Reveal>
    </SectionWrapper>
  );
}