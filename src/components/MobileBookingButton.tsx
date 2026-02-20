import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

const MobileBookingButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Bottom padding spacer on mobile */}
      <div className="h-[56px] md:hidden" />
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#book"
          className="flex items-center justify-center gap-2 h-[56px] bg-brand-blue text-primary-foreground font-body text-base font-semibold"
        >
          <CalendarCheck size={18} />
          Book an Appointment
        </a>
      </div>
    </>
  );
};

export default MobileBookingButton;
