import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { SplitBlock } from "../../lib/types";
import { fadeUp, fadeIn, viewportOnce } from "../../lib/motion";

type Props = { block: SplitBlock };

export default function SplitSection({ block }: Props) {
  const content = (
    <motion.div
      className="flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {block.eyebrow && (
        <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase mb-3">
          {block.eyebrow}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-heading text-[var(--color-navy)] leading-tight mb-5 text-wrap: balance">
        {block.title}
      </h2>
      <p className="text-[var(--color-charcoal)]/70 text-base lg:text-lg leading-relaxed mb-8 line-clamp-4">
        {block.description}
      </p>
      {block.cta && (
        <Link
          to={block.cta.href}
          className="self-start px-7 py-3 border-2 border-[var(--color-gold)] text-[var(--color-gold)] text-sm font-semibold tracking-wide hover:bg-[var(--color-gold)] hover:text-white transition-colors duration-200"
        >
          {block.cta.label}
        </Link>
      )}
    </motion.div>
  );

  const image = (
    <motion.div
      className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden bg-[var(--color-cream-dark)]"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <img
        src={block.image}
        alt={block.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {block.reversed ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </section>
  );
}
