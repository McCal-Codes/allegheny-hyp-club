import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import { contentService } from '@/services/cms/contentService';

const { membershipHero, membershipBenefits, membershipTypes, membershipFAQ, membershipCTA } =
  contentService.getMembershipPage();

export default function Membership() {
  return (
    <PageLayout
      title="Membership"
      description="Join the Allegheny HYP Club — Pittsburgh's premier private club. Explore membership benefits, types, and the application process."
    >
      <section className="bg-[var(--color-navy)] pt-32 pb-20 px-4">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-gold)]" />
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase mb-4">
            Membership
          </p>
          <h1 className="text-white font-heading text-4xl sm:text-5xl leading-tight mb-5 max-w-2xl">
            {membershipHero.title}
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl mb-10">
            {membershipHero.description}
          </p>
          {membershipHero.cta && (
            <Link
              to={membershipHero.cta.href}
              className="inline-block px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold text-sm tracking-wide hover:bg-[var(--color-gold-light)] transition-colors duration-200"
            >
              {membershipHero.cta.label}
            </Link>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase text-center mb-3">
            Member Privileges
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-[var(--color-navy)] text-center mb-14">
            What Membership Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-navy)]/8">
            {membershipBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 group hover:bg-[var(--color-cream)] transition-colors duration-200"
                >
                  <div className="text-[var(--color-gold)] mb-5 group-hover:scale-110 transition-transform duration-200 origin-left">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[var(--color-navy)] text-xl mb-2">{b.title}</h3>
                  <p className="text-[var(--color-charcoal)]/60 text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--color-navy)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase text-center mb-3">
            Find Your Fit
          </p>
          <h2 className="text-3xl font-heading text-white text-center mb-12">
            Membership Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {membershipTypes.map((t, i) => (
              <div
                key={i}
                className="border border-white/10 p-8 hover:border-[var(--color-gold)]/50 transition-colors duration-200"
              >
                <div className="w-8 h-0.5 bg-[var(--color-gold)] mb-5" />
                <h3 className="font-heading text-white text-xl mb-3">{t.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={membershipFAQ} title="Membership Questions" />
      <CTASection block={membershipCTA} />
    </PageLayout>
  );
}
