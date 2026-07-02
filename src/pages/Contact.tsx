import PageLayout from '@/components/layout/PageLayout';
import InquiryForm from '@/components/ui/InquiryForm';

export default function Contact() {
  return (
    <PageLayout
      title="Contact"
      description="Contact the Allegheny HYP Club — inquire about membership, private events, weddings, or any other questions."
    >
      <section className="py-20 px-4 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl font-heading text-[var(--color-navy)] leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-[var(--color-charcoal)]/60 leading-relaxed mb-10">
              Whether you're exploring membership, planning an event, or have a general question,
              our team is here to help. We'll be in touch promptly.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[var(--color-navy)] font-semibold text-sm uppercase tracking-wider mb-1">
                  Location
                </h3>
                <p className="text-[var(--color-charcoal)]/60 text-sm">Pittsburgh, PA</p>
              </div>
              <div>
                <h3 className="text-[var(--color-navy)] font-semibold text-sm uppercase tracking-wider mb-1">
                  Membership Inquiries
                </h3>
                <p className="text-[var(--color-charcoal)]/60 text-sm">
                  Use the form to reach the membership team.
                </p>
              </div>
              <div>
                <h3 className="text-[var(--color-navy)] font-semibold text-sm uppercase tracking-wider mb-1">
                  Events & Venues
                </h3>
                <p className="text-[var(--color-charcoal)]/60 text-sm">
                  Use the form to request availability and proposals.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white p-10 shadow-sm">
            <InquiryForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
