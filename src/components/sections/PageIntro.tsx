type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function PageIntro({ eyebrow, title, description, centered = false }: Props) {
  return (
    <section className={`py-16 px-4 bg-[var(--color-cream)] ${centered ? "text-center" : ""}`}>
      <div className={`max-w-7xl mx-auto ${centered ? "" : "max-w-3xl"}`}>
        {eyebrow && (
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl lg:text-5xl font-heading text-[var(--color-navy)] leading-tight mb-5">
          {title}
        </h1>
        {description && (
          <p className="text-[var(--color-charcoal)]/60 text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
