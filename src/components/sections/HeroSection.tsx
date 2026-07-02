import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { HeroBlock } from "../../lib/types";
import { fadeUp, stagger } from "../../lib/motion";

type Props = {
  hero: HeroBlock;
  fullHeight?: boolean;
};

export default function HeroSection({ hero, fullHeight = false }: Props) {
  return (
    <section
      className={`relative bg-[var(--color-navy)] flex items-center ${
        fullHeight ? "min-h-screen" : "min-h-[60vh]"
      }`}
    >
      {hero.image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${hero.image})` }}
          aria-hidden="true"
        />
      )}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-gold)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {hero.subtitle && (
            <motion.p
              variants={fadeUp}
              className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-4"
            >
              {hero.subtitle}
            </motion.p>
          )}
          <motion.h1
            variants={fadeUp}
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight mb-6 text-wrap: balance"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            {hero.description}
          </motion.p>
          {(hero.cta || hero.secondaryCta) && (
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              {hero.cta && (
                <Link
                  to={hero.cta.href}
                  className="px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold text-sm tracking-wide hover:bg-[var(--color-gold-light)] transition-colors duration-200"
                >
                  {hero.cta.label}
                </Link>
              )}
              {hero.secondaryCta && (
                <Link
                  to={hero.secondaryCta.href}
                  className="px-8 py-3.5 border border-white/40 text-white text-sm font-medium tracking-wide hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors duration-200"
                >
                  {hero.secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
