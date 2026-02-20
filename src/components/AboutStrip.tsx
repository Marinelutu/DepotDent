import ScrollReveal from "./ScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const AboutStrip = () => {
  const years = useCountUp({ end: 47, duration: 2000 });
  const locations = useCountUp({ end: 25, duration: 1800 });
  const team = useCountUp({ end: 545, duration: 2200 });
  const smiles = useCountUp({ end: 127, duration: 2500, suffix: ",000+" });

  const stats = [
    { ref: years.ref, value: years.value, label: "Years of Service" },
    { ref: locations.ref, value: locations.value, label: "Oklahoma Locations" },
    { ref: team.ref, value: team.value, label: "Team Members" },
    { ref: smiles.ref, value: smiles.value, label: "Smiles and Counting" },
  ];

  return (
    <section className="bg-near-black py-large md:py-xlarge overflow-hidden">
      <div className="mx-auto max-w-content px-6 md:px-[80px]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <p className="font-display italic font-bold text-primary-foreground text-[40px] md:text-[64px] leading-[1.1]">
              "A different kind
              <span className="block pl-2">of dental company."</span>
            </p>
            <p className="mt-6 font-body text-primary-foreground/70 text-base leading-relaxed max-w-md">
              Founded by Dr. Glenn Ashmore in 1977, Dental Depot has grown from a single Oklahoma practice into the state's
              largest doctor-owned dental group — but the mission hasn't changed.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 text-brand-blue font-body text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Read Our Story →
            </a>
          </ScrollReveal>

          <ScrollReveal staggerChildren staggerDelay={120}>
            <div className="flex flex-col gap-8">
              {stats.map((s) => (
                <div key={s.label} className="reveal-child">
                  <span ref={s.ref} className="font-display font-bold text-brand-blue text-[72px] md:text-[96px] leading-none">
                    {s.value}
                  </span>
                  <span className="block font-body text-primary-foreground text-base mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;
