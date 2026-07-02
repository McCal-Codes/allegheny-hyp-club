import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import { contentService } from '@/services/cms/contentService';

const { cigarLoungeHero, cigarLoungeDescription, cigarLoungeFeatures, cigarLoungeCTA } =
  contentService.getCigarLoungePage();

export default function CigarLounge() {
  return (
    <PageLayout
      title="Cigar Lounge"
      description="The Allegheny HYP Club Cigar Lounge — Pittsburgh's finest private smoking room with a curated humidor and full spirits bar."
    >
      <HeroSection hero={cigarLoungeHero} />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading text-[var(--color-navy)] mb-8">
            {cigarLoungeDescription.heading}
          </h2>
          <div className="space-y-5">
            {cigarLoungeDescription.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--color-charcoal)]/70 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--color-navy)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase text-center mb-3">
            The Experience
          </p>
          <h2 className="text-3xl font-heading text-white text-center mb-14">
            What the Lounge Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cigarLoungeFeatures.map((f, i) => (
              <div
                key={i}
                className="border border-white/10 p-7 hover:border-[var(--color-gold)] transition-colors"
              >
                <h3 className="text-[var(--color-gold)] font-heading text-lg mb-3">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection block={cigarLoungeCTA} dark={false} />
    </PageLayout>
  );
}
