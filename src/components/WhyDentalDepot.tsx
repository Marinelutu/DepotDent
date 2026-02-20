import { Stethoscope, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Stethoscope,
    title: "Quality Care",
    description: "Comprehensive dentistry from routine cleanings to complex procedures, all under one roof.",
    link: "#services",
    image: "https://dentaldepot.net/wp-content/uploads/Photo-Discussing-Treatment.jpg",
  },
  {
    icon: MapPin,
    title: "25+ Locations",
    description: "Conveniently located across Oklahoma, Texas, Arizona, and Missouri — always nearby.",
    link: "#locations",
    image: "https://dentaldepot.net/wp-content/uploads/Photo_Front_view_Location_2.jpeg",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Payments",
    description: "We accept most major insurances, SoonerCare, and offer affordable in-house payment plans.",
    link: "#",
    image: "https://dentaldepot.net/wp-content/uploads/Hygienists_Dental_Depot_talent_0490.jpg",
  },
];

const WhyDentalDepot = () => {
  return (
    <section id="about" className="bg-off-white py-large md:py-xlarge">
      <div className="mx-auto max-w-content px-6 md:px-[80px]">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue mb-3">
            Why Dental Depot
          </p>
          <h2 className="font-display font-semibold text-near-black text-3xl md:text-[44px] leading-tight">
            A Family Tradition of
            <br className="hidden md:block" /> Exceptional Dentistry
          </h2>
        </ScrollReveal>

        <ScrollReveal staggerChildren staggerDelay={100} className="mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="reveal-child group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.classList.add("bg-brand-blue-light");
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-light flex items-center justify-center mb-4">
                    <card.icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-near-black">{card.title}</h3>
                  <p className="mt-2 font-body text-base text-gray-700 leading-relaxed">{card.description}</p>
                  <a
                    href={card.link}
                    className="mt-4 inline-flex items-center gap-1 text-brand-blue font-body text-sm font-semibold hover:gap-2 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyDentalDepot;
