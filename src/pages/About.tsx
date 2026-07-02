import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import { contentService } from '@/services/cms/contentService';

const { aboutHero, aboutStory, aboutValues, aboutCTA } = contentService.getAboutPage();

export default function About() {
  return (
    <PageLayout
      title="About"
      description="The history and mission of the Allegheny HYP Club — Pittsburgh's most distinguished private club, founded in 1908."
    >
      <HeroSection hero={aboutHero} />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase mb-3">
              {aboutStory.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading text-[var(--color-navy)] leading-tight mb-6">
              {aboutStory.heading}
            </h2>
          </div>
          <div className="space-y-5">
            {aboutStory.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--color-charcoal)]/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase text-center mb-3">
            What We Stand For
          </p>
          <h2 className="text-3xl font-heading text-[var(--color-navy)] text-center mb-14">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutValues.map((v, i) => (
              <div key={i} className="bg-white p-8 border-t-2 border-[var(--color-gold)]">
                <h3 className="text-[var(--color-navy)] font-heading text-xl mb-3">{v.title}</h3>
                <p className="text-[var(--color-charcoal)]/60 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection block={aboutCTA} />
    </PageLayout>
  );
}
