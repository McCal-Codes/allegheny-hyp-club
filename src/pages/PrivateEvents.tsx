import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import { contentService } from '@/services/cms/contentService';

const { privateEventsHero, privateEventsTypes, privateEventsCTA } =
  contentService.getPrivateEventsPage();

export default function PrivateEvents() {
  return (
    <PageLayout
      title="Private Events"
      description="Host your corporate dinner, gala, or celebration at the Allegheny HYP Club — Pittsburgh's most prestigious private event venue."
    >
      <HeroSection hero={privateEventsHero} />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase text-center mb-3">
            What We Host
          </p>
          <h2 className="text-3xl font-heading text-[var(--color-navy)] text-center mb-14">
            Events of Every Kind
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {privateEventsTypes.map((type, i) => (
              <div
                key={i}
                className="p-8 bg-[var(--color-cream)] border-b-2 border-[var(--color-gold)] hover:bg-[var(--color-cream-dark)] transition-colors"
              >
                <h3 className="font-heading text-[var(--color-navy)] text-xl mb-3">{type.title}</h3>
                <p className="text-[var(--color-charcoal)]/60 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection block={privateEventsCTA} />
    </PageLayout>
  );
}
