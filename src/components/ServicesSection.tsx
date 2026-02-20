import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "General Dentistry",
    desc: "Cleanings, exams & preventive care for the whole family.",
    image: "https://dentaldepot.net/wp-content/uploads/Photo-Discussing-Treatment-1.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers & smile makeovers that build confidence.",
    image: "https://dentaldepot.net/wp-content/uploads/Hygientists_dental_depot_2299-e1723057788347.jpg",
  },
  {
    title: "Orthodontics & Invisalign®",
    desc: "Braces and clear aligners for teens and adults.",
    image: "https://dentaldepot.net/wp-content/uploads/Invisi_Ortho_Dental_Depot_talent_0386-e1742847884514.jpg",
  },
  {
    title: "Emergency Dental",
    desc: "Same-day appointments for urgent dental needs.",
    image: "https://dentaldepot.net/wp-content/uploads/Photo-EmergencyService-1.jpg",
  },
];

const chips = [
  "Dental Implants", "Veneers", "Root Canals", "Teeth Whitening",
  "Wisdom Teeth", "Dentures", "Deep Cleaning",
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-card py-large md:py-xlarge">
      <div className="mx-auto max-w-content px-6 md:px-[80px]">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue mb-3">
            Our Services
          </p>
          <h2 className="font-display font-semibold text-near-black text-3xl md:text-[44px] leading-tight">
            One Team for Everything
            <br className="hidden md:block" /> Your Smile Needs
          </h2>
        </ScrollReveal>

        <ScrollReveal staggerChildren staggerDelay={80} className="mt-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <a
                key={s.title}
                href="#"
                className="reveal-child group relative block rounded-2xl overflow-hidden h-[280px] md:h-[320px]"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.classList.add("bg-brand-blue-light");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-near-black/20 to-transparent" />
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/8 transition-colors duration-150" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-primary-foreground">{s.title}</h3>
                  <p className="mt-1 font-body text-sm text-primary-foreground/80">{s.desc}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/0 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-150 opacity-0 group-hover:opacity-100">
                  <ArrowRight size={18} className="text-primary-foreground" />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <a
                key={chip}
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue-light text-brand-blue font-body text-sm font-medium hover:bg-brand-blue hover:text-primary-foreground transition-colors duration-150"
              >
                {chip}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
