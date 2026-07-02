import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import SplitSection from '@/components/sections/SplitSection';
import CTASection from '@/components/sections/CTASection';
import { contentService } from '@/services/cms/contentService';

const { weddingsHero, weddingsSplits, weddingsSpaces, weddingsCTA } =
  contentService.getWeddingsPage();

export default function Weddings() {
  return (
    <PageLayout
      title="Weddings"
      description="Plan your wedding at the Allegheny HYP Club — an elegant Pittsburgh venue steeped in over a century of history."
    >
      <HeroSection hero={weddingsHero} />

      {weddingsSplits.map((block, i) => (
        <SplitSection key={i} block={block} />
      ))}

      <section className="py-20 px-4 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase text-center mb-3">
            Our Spaces
          </p>
          <h2 className="text-3xl font-heading text-[var(--color-navy)] text-center mb-14">
            Venues for Every Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingsSpaces.map((space, i) => (
              <div key={i} className="bg-white overflow-hidden">
                <div className="aspect-[4/3] bg-[var(--color-cream-dark)] relative">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-[var(--color-navy)] text-xl mb-1">{space.name}</h3>
                  <p className="text-[var(--color-gold)] text-xs font-semibold tracking-wider uppercase mb-3">
                    {space.capacity}
                  </p>
                  <p className="text-[var(--color-charcoal)]/60 text-sm leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection block={weddingsCTA} />
    </PageLayout>
  );
}
