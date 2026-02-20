import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const NAV_ITEMS = ["Services", "Orthodontics", "Locations", "About"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-card transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 md:px-[80px] h-[72px]">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://dentaldepot.net/wp-content/uploads/2022/06/Dental-Depot-Round-Logo.png"
              alt="Dental Depot"
              className="h-[44px] w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link font-body text-[15px] font-medium text-gray-700 hover:text-brand-blue transition-colors"
                >
                  {item}
                  {(item === "Services" || item === "Locations") && (
                    <ChevronDown className="inline ml-1 -mt-0.5" size={14} />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+14055551234"
              className="flex items-center gap-2 text-[15px] font-medium text-gray-700 hover:text-brand-blue transition-colors"
            >
              <Phone size={16} />
              (405) 555-1234
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center h-[48px] px-6 rounded-[24px] bg-brand-blue text-primary-foreground font-body text-[15px] font-semibold hover:bg-brand-blue-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-card flex flex-col">
          <div className="flex items-center justify-between px-6 h-[72px]">
            <img
              src="https://dentaldepot.net/wp-content/uploads/2022/06/Dental-Depot-Round-Logo.png"
              alt="Dental Depot"
              className="h-[38px] w-auto"
            />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-12">
            <a href="tel:+14055551234" className="flex items-center gap-2 text-lg font-medium text-brand-blue">
              <Phone size={20} /> (405) 555-1234
            </a>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-semibold text-near-black"
              >
                {item}
              </a>
            ))}
            <a
              href="#book"
              className="mt-4 inline-flex items-center justify-center h-[56px] px-10 rounded-[28px] bg-brand-blue text-primary-foreground font-body text-lg font-semibold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
