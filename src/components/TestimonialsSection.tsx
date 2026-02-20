import { Star, ExternalLink } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "The entire team made my family feel so welcome. My kids actually look forward to their dental visits now!",
    name: "Sarah M.",
    location: "23rd St. Location",
  },
  {
    quote: "Best dental experience I've ever had. Professional, fast, and they took the time to explain everything.",
    name: "James R.",
    location: "Moore Location",
  },
  {
    quote: "I was terrified of the dentist for years. The team here was incredibly gentle and patient. I'm a customer for life.",
    name: "Linda K.",
    location: "Tulsa Location",
  },
  {
    quote: "Affordable, high-quality care. They worked with my insurance and got me the treatment I needed right away.",
    name: "Marcus T.",
    location: "Midwest City Location",
  },
  {
    quote: "Dr. Ashmore's vision really shows in the way every office runs. It's always clean, organized, and friendly.",
    name: "Rachel P.",
    location: "Norman Location",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const nextIndex = (activeIndex + 1) % testimonials.length;
      const child = scrollRef.current.children[nextIndex] as HTMLElement;
      if (child) {
        scrollRef.current.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
        setActiveIndex(nextIndex);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const childWidth = (container.children[0] as HTMLElement)?.offsetWidth || 0;
    if (childWidth > 0) {
      setActiveIndex(Math.round(scrollLeft / (childWidth + 24)));
    }
  };

  return (
    <section className="bg-off-white py-large md:py-xlarge">
      <div className="mx-auto max-w-content px-6 md:px-[80px]">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue mb-3">
            Patient Reviews
          </p>
          <h2 className="font-display font-semibold text-near-black text-3xl md:text-[44px] leading-tight">
            What Our Patients Say
          </h2>
        </ScrollReveal>

        <div className="mt-12 -mx-6 md:mx-0">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 md:px-0 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] md:w-[360px] snap-start bg-card border border-border rounded-[20px] p-6 flex flex-col relative overflow-hidden"
              >
                <span className="absolute -top-2 left-4 font-display text-[120px] leading-none text-brand-blue/[0.06] select-none pointer-events-none">"</span>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-star-gold text-star-gold" />
                  ))}
                </div>
                <p className="font-display italic text-[17px] text-gray-700 leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center">
                    <span className="text-primary-foreground font-body text-sm font-semibold">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-near-black">{t.name}</p>
                    <p className="font-body text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === activeIndex ? "bg-brand-blue w-6" : "bg-border"
                }`}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const child = scrollRef.current.children[i] as HTMLElement;
                  if (child) {
                    scrollRef.current.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
                    setActiveIndex(i);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=dental+depot+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-blue font-body text-sm font-semibold hover:underline"
          >
            See All Reviews on Google <ExternalLink size={14} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
