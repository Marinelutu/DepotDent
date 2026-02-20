import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stateLocations: Record<string, string[]> = {
  Oklahoma: [
    "Oklahoma City — 23rd St.", "Oklahoma City — NW Expressway", "Oklahoma City — S. Western",
    "Moore", "Norman", "Midwest City", "Edmond", "Yukon", "Tulsa — Memorial",
    "Tulsa — 71st St.", "Broken Arrow", "Owasso", "Muskogee", "Stillwater",
    "Enid", "Lawton", "Shawnee", "Durant", "Ardmore",
  ],
  Texas: ["Dallas — Central", "Dallas — North", "Fort Worth", "Arlington"],
  Arizona: ["Phoenix", "Mesa", "Tucson"],
  Missouri: ["Springfield", "Joplin"],
};

const LocationsSection = () => {
  const [activeState, setActiveState] = useState("Oklahoma");
  const [zip, setZip] = useState("");

  return (
    <section id="locations" className="relative bg-brand-blue-light py-large md:py-xlarge overflow-hidden">
      {/* Background image */}
      <img
        src="https://dentaldepot.net/wp-content/uploads/Photo-LobbyShot3.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
      />

      <div className="relative mx-auto max-w-content px-6 md:px-[80px]">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue mb-3">
            Locations
          </p>
          <h2 className="font-display font-semibold text-near-black text-3xl md:text-[44px] leading-tight">
            Find Your Dental Depot
          </h2>
        </ScrollReveal>

        {/* ZIP Finder */}
        <ScrollReveal className="mt-10">
          <div className="flex max-w-md gap-3">
            <input
              type="text"
              placeholder="Enter your ZIP code..."
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="flex-1 h-[48px] px-4 rounded-xl bg-card border border-border font-body text-base text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-150"
            />
            <button className="inline-flex items-center gap-2 h-[48px] px-6 rounded-xl bg-brand-blue text-primary-foreground font-body text-[15px] font-semibold hover:bg-brand-blue-dark transition-colors duration-200">
              Find <ArrowRight size={16} />
            </button>
          </div>
        </ScrollReveal>

        {/* State tabs */}
        <ScrollReveal className="mt-10">
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {Object.keys(stateLocations).map((state) => (
              <button
                key={state}
                onClick={() => setActiveState(state)}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                  activeState === state
                    ? "bg-brand-blue text-primary-foreground"
                    : "bg-card text-gray-700 hover:bg-card border border-border"
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
            {stateLocations[activeState].map((loc) => (
              <a
                key={loc}
                href="#"
                className="flex items-center gap-2 py-2 font-body text-sm text-gray-700 hover:text-brand-blue transition-colors group"
              >
                <MapPin size={14} className="text-brand-blue flex-shrink-0" />
                {loc}
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LocationsSection;
