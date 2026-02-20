import { ArrowRight, MapPin } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const HeroSection = () => {
  const rating = useCountUp({ end: 4.9, duration: 1500, decimals: 1 });
  const reviews = useCountUp({ end: 2400, duration: 2000, suffix: "+" });

  return (
    <section className="bg-card overflow-hidden">
      <div className="mx-auto max-w-content px-6 md:px-[80px] py-16 md:py-xlarge">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="hero-text">
            <h1 className="font-display font-bold text-near-black text-[42px] md:text-[68px] leading-[1.08] tracking-tight">
              Smiles That Last
              <span className="block pl-2 md:pl-4 bg-gradient-to-r from-near-black to-brand-blue bg-clip-text text-transparent">a Lifetime.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 font-body leading-relaxed max-w-lg">
              Oklahoma's most trusted family dentist for over 47 years.
              <br />
              Accepting new patients at 25+ locations.
            </p>
            <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center h-[48px] px-8 rounded-[24px] bg-brand-blue text-primary-foreground font-body text-[15px] font-semibold hover:bg-brand-blue-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book an Appointment
              </a>
              <a
                href="#locations"
                className="inline-flex items-center gap-2 h-[48px] px-4 text-brand-blue font-body text-[15px] font-semibold hover:gap-3 transition-all duration-200"
              >
                <MapPin size={16} />
                Find My Nearest Location
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image relative">
            <div className="relative rounded-2xl overflow-hidden border-l-4 border-brand-blue clip-reveal">
              <img
                src="https://dentaldepot.net/wp-content/uploads/Lobby_Dental_Depot_talent_1401_Edit.jpg"
                alt="Family smiling in Dental Depot lobby"
                className="w-full aspect-[3/2] object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  target.parentElement!.classList.add("bg-brand-blue-light");
                  target.parentElement!.style.minHeight = "320px";
                }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 backdrop-blur-xl bg-card/80 rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg border border-border">
              <span className="text-star-gold text-lg">⭐</span>
              <span ref={rating.ref} className="font-body text-sm font-semibold text-near-black">{rating.value}</span>
              <span className="text-gray-400 text-sm">·</span>
              <span ref={reviews.ref} className="font-body text-sm text-gray-700">{reviews.value} Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
