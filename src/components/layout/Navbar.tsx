import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[var(--color-navy)] shadow-lg" : "bg-[var(--color-navy)]/90 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="text-[var(--color-gold)] font-heading text-lg font-semibold tracking-wide group-hover:text-[var(--color-gold-light)] transition-colors duration-200">
              Allegheny HYP Club
            </span>
            <span className="text-white/50 text-xs tracking-widest uppercase">
              Pittsburgh, PA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                      item.children.some((c) => c.href === location.pathname)
                        ? "text-[var(--color-gold)]"
                        : "text-white/80 hover:text-[var(--color-gold)]"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={cn(
                        "transition-transform duration-200",
                        openDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-0 w-52 bg-[var(--color-navy)] border border-white/10 shadow-xl py-1 transition-all duration-200 origin-top",
                      openDropdown === item.label
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-95 pointer-events-none"
                    )}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }) =>
                          cn(
                            "block px-4 py-2.5 text-sm transition-colors duration-150",
                            isActive
                              ? "text-[var(--color-gold)] bg-white/5"
                              : "text-white/70 hover:text-[var(--color-gold)] hover:bg-white/5"
                          )
                        }
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                      isActive ? "text-[var(--color-gold)]" : "text-white/80 hover:text-[var(--color-gold)]"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/membership"
              className="ml-4 px-5 py-2 bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-semibold tracking-wide hover:bg-[var(--color-gold-light)] transition-colors duration-200"
            >
              Join
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 hover:text-[var(--color-gold)] transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — animated slide */}
      <div
        className={cn(
          "lg:hidden bg-[var(--color-navy)] border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-5 pt-2">
          {navigation.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-6 py-3 text-sm font-medium transition-colors duration-150",
                    isActive ? "text-[var(--color-gold)]" : "text-white/80 hover:text-[var(--color-gold)]"
                  )
                }
              >
                {item.label}
              </NavLink>
              {item.children?.map((child) => (
                <NavLink
                  key={child.href}
                  to={child.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block pl-10 py-2 text-sm transition-colors duration-150",
                      isActive ? "text-[var(--color-gold)]" : "text-white/55 hover:text-[var(--color-gold)]"
                    )
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          ))}
          <div className="px-6 pt-4">
            <Link
              to="/membership"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-semibold hover:bg-[var(--color-gold-light)] transition-colors duration-200"
            >
              Inquire About Membership
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
