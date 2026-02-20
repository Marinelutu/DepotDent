import { MapPin, Calendar, CreditCard, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

const items = [
  { icon: CreditCard, text: "Most Insurances Accepted" },
  { icon: ShieldCheck, text: "SoonerCare Provider" },
  { icon: Calendar, text: "Saturday Hours" },
  { icon: Stethoscope, text: "Same-Day Emergency" },
  { icon: Sparkles, text: "Sapphire Invisalign® Provider" },
  { icon: MapPin, text: "Doctor-Owned Offices" },
];

const TrustTicker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="bg-brand-blue-light overflow-hidden py-4 select-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
      <div className="ticker-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-brand-blue font-body text-sm font-semibold tracking-wide uppercase">
            <item.icon size={16} />
            {item.text}
            <span className="text-brand-blue/40 ml-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustTicker;
