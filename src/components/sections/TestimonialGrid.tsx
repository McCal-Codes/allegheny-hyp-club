import { memo } from "react";
import { motion } from "framer-motion";
import type { TestimonialItem } from "../../lib/types";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

type Props = {
  items: TestimonialItem[];
  title?: string;
};

function TestimonialGrid({ items, title = "What Our Members Say" }: Props) {
  return (
    <section className="py-20 bg-[var(--color-navy)] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase text-center mb-4"
          >
            Member Voices
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-heading text-white text-center mb-14 text-wrap: balance"
          >
            {title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 px-8 py-8"
              >
                <div className="text-[var(--color-gold)] text-3xl font-heading mb-4 leading-none" aria-hidden="true">
                  "
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic line-clamp-4">
                  {item.quote}
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{item.author}</p>
                  {item.title && (
                    <p className="text-white/50 text-xs mt-0.5">{item.title}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(TestimonialGrid);
