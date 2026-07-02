import { Link } from "react-router-dom";
import type { CTABlock } from "../../lib/types";

type Props = { block: CTABlock; dark?: boolean };

export default function CTASection({ block, dark = true }: Props) {
  return (
    <section
      className={`py-20 px-4 ${
        dark ? "bg-[var(--color-navy)]" : "bg-[var(--color-cream)]"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-0.5 bg-[var(--color-gold)] mx-auto mb-8" />
        <h2
          className={`text-3xl lg:text-4xl font-heading leading-tight mb-5 ${
            dark ? "text-white" : "text-[var(--color-navy)]"
          }`}
        >
          {block.title}
        </h2>
        <p
          className={`text-base lg:text-lg leading-relaxed mb-10 ${
            dark ? "text-white/60" : "text-[var(--color-charcoal)]/60"
          }`}
        >
          {block.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={block.cta.href}
            className="px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold text-sm tracking-wide hover:bg-[var(--color-gold-light)] transition-colors"
          >
            {block.cta.label}
          </Link>
          {block.secondaryCta && (
            <Link
              to={block.secondaryCta.href}
              className={`px-8 py-3.5 border text-sm font-medium tracking-wide transition-colors ${
                dark
                  ? "border-white/30 text-white hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  : "border-[var(--color-navy)]/30 text-[var(--color-navy)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              }`}
            >
              {block.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
