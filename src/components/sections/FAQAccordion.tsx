import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { FAQItem } from "../../lib/types";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

type Props = {
  items: FAQItem[];
  title?: string;
};

export default function FAQAccordion({ items, title = "Frequently Asked Questions" }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[var(--color-cream)] px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-3xl font-heading text-[var(--color-navy)] text-center mb-12 text-wrap: balance"
        >
          {title}
        </motion.h2>
        <motion.div
          className="space-y-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <AccordionItem
                index={i}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AccordionItem({
  index,
  item,
  isOpen,
  onToggle,
}: {
  index: number;
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className={`border bg-white transition-colors duration-200 ${
        isOpen ? "border-[var(--color-gold)]/40" : "border-[var(--color-navy)]/10"
      }`}
    >
      <button
        id={buttonId}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-medium text-[var(--color-navy)] pr-4">{item.question}</span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 text-[var(--color-gold)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "2000px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-5 pt-1 text-[var(--color-charcoal)]/70 text-sm leading-relaxed border-t border-[var(--color-navy)]/5">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
