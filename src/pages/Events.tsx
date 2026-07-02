import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { contentService } from '@/services/cms/contentService';
import type { ClubEvent } from '@/content/events';

const { upcomingEvents, eventsPageIntro } = contentService.getEventsPage();

const categoryColors: Record<ClubEvent['category'], string> = {
  dining: 'bg-amber-100 text-amber-800',
  social: 'bg-blue-100 text-blue-800',
  cigar: 'bg-stone-100 text-stone-800',
  cultural: 'bg-purple-100 text-purple-800',
  member: 'bg-green-100 text-green-800',
};

export default function Events() {
  return (
    <PageLayout
      title="Events"
      description="Upcoming events at the Allegheny HYP Club — exclusive dinners, galas, cigar nights, and member programming."
    >
      <section className="py-20 px-4 bg-[var(--color-navy)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase mb-3">
            Members Only
          </p>
          <h1 className="text-white font-heading text-4xl lg:text-5xl leading-tight mb-5">
            {eventsPageIntro.title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">{eventsPageIntro.description}</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="border border-[var(--color-navy)]/10 p-8 flex flex-col sm:flex-row gap-6"
            >
              <div className="sm:w-32 shrink-0 text-center">
                <p className="text-[var(--color-gold)] font-heading text-2xl font-semibold">
                  {event.date.split(' ')[1].replace(',', '')}
                </p>
                <p className="text-[var(--color-navy)]/50 text-sm uppercase tracking-wide">
                  {event.date.split(' ')[0]}
                </p>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="font-heading text-[var(--color-navy)] text-xl">{event.title}</h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${categoryColors[event.category]}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  {event.membersOnly && (
                    <span className="text-xs font-semibold px-2 py-0.5 bg-[var(--color-navy)] text-white rounded-sm">
                      Members Only
                    </span>
                  )}
                </div>
                <p className="text-[var(--color-charcoal)]/60 text-sm mb-1">{event.time}</p>
                <p className="text-[var(--color-charcoal)]/70 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                {event.cta && (
                  <Link
                    to={event.cta.href}
                    className="inline-block px-6 py-2.5 bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-semibold hover:bg-[var(--color-gold-light)] transition-colors"
                  >
                    {event.cta.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
