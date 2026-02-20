import { Phone } from "lucide-react";

const footerLinks = {
  Services: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Invisalign®", "Emergency Dental", "Dental Implants"],
  Company: ["About Us", "Careers", "Philanthropy", "Blog", "Academy", "SoonerCare", "Privacy Policy"],
};

const FooterSection = () => {
  return (
    <footer id="footer" className="bg-near-black pt-large pb-8">
      <div className="mx-auto max-w-content px-6 md:px-[80px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <img
              src="https://dentaldepot.net/wp-content/uploads/2022/06/Dental-Depot-Round-Logo.png"
              alt="Dental Depot"
              className="h-[52px] w-auto mb-4"
            />
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Oklahoma's most trusted family dentist for over 47 years.
            </p>
            <div className="flex gap-4 mt-4">
              {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors font-body text-xs">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">
              Contact
            </h4>
            <a
              href="tel:+14055551234"
              className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-4"
            >
              <Phone size={14} /> (405) 555-1234
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center h-[40px] px-5 rounded-[20px] bg-brand-blue text-primary-foreground font-body text-sm font-semibold hover:bg-brand-blue-dark transition-colors"
            >
              Book Appointment
            </a>
            <p className="mt-4 font-body text-xs text-primary-foreground/40">
              Saturday hours available at most locations
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2025 Dental Depot · Doctor-Owned Dental Offices
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
