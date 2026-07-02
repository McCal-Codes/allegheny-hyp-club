import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  interest: "membership",
  message: "",
};

const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
const FORMSPREE_ENDPOINT = formspreeId
  ? `https://formspree.io/f/${formspreeId}`
  : null;

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-[var(--color-navy)]/20 bg-white text-sm text-[var(--color-charcoal)] focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus:border-[var(--color-gold)] transition-colors duration-200";
  const labelClass =
    "block text-xs font-semibold text-[var(--color-navy)] uppercase tracking-wider mb-1.5";

  if (status === "success") {
    return (
      <div className="py-12 text-center" role="status" aria-live="polite">
        <div className="w-12 h-0.5 bg-[var(--color-gold)] mx-auto mb-6" aria-hidden="true" />
        <h3 className="text-2xl font-heading text-[var(--color-navy)] mb-3">Thank You</h3>
        <p className="text-[var(--color-charcoal)]/60">
          We've received your inquiry and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {!FORMSPREE_ENDPOINT && (
        <p className="text-sm text-[var(--color-charcoal)]/70 bg-[var(--color-cream-dark)] px-4 py-3 border border-[var(--color-navy)]/10">
          The contact form is not configured yet. Set <code className="text-xs">VITE_FORMSPREE_ID</code> in a{" "}
          <code className="text-xs">.env</code> file to enable submissions.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
            autoComplete="name"
            disabled={!FORMSPREE_ENDPOINT}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="your@email.com"
            autoComplete="email"
            spellCheck={false}
            disabled={!FORMSPREE_ENDPOINT}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(412) 000-0000"
            autoComplete="tel"
            disabled={!FORMSPREE_ENDPOINT}
          />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>
            I'm Inquiring About
          </label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className={inputClass}
            disabled={!FORMSPREE_ENDPOINT}
          >
            <option value="membership">Membership</option>
            <option value="private-events">Private Events</option>
            <option value="weddings">Weddings</option>
            <option value="cigar-lounge">Cigar Lounge</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell us a bit about what you're looking for..."
          disabled={!FORMSPREE_ENDPOINT}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-red-600 text-sm">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={!FORMSPREE_ENDPOINT || status === "sending"}
        className="w-full sm:w-auto px-10 py-3.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold text-sm tracking-wide hover:bg-[var(--color-gold-light)] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
