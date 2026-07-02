import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-[var(--color-gold)] font-heading text-lg font-semibold mb-3">
              Allegheny HYP Club
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Pittsburgh's premier private club for young professionals.
              Established 1908.
            </p>
            <p className="text-xs text-white/40">
              A tradition of excellence in the heart of Pittsburgh.
            </p>
          </div>

          {/* Club */}
          <div>
            <h4 className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4">
              The Club
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[var(--color-gold)] transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="hover:text-[var(--color-gold)] transition-colors">Membership</Link></li>
              <li><Link to="/membership/reciprocity" className="hover:text-[var(--color-gold)] transition-colors">Reciprocal Clubs</Link></li>
              <li><Link to="/events" className="hover:text-[var(--color-gold)] transition-colors">Events</Link></li>
              <li><Link to="/cigar-lounge" className="hover:text-[var(--color-gold)] transition-colors">Cigar Lounge</Link></li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4">
              Events & Venues
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/private-events" className="hover:text-[var(--color-gold)] transition-colors">Private Events</Link></li>
              <li><Link to="/weddings" className="hover:text-[var(--color-gold)] transition-colors">Weddings</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-gold)] transition-colors">Request a Proposal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Pittsburgh, PA</li>
              <li>
                <Link to="/contact" className="hover:text-[var(--color-gold)] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} The Allegheny HYP Club. All rights reserved.</p>
          <p>Pittsburgh, Pennsylvania</p>
        </div>
      </div>
    </footer>
  );
}
