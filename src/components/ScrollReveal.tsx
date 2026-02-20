import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const ScrollReveal = ({ children, className = "", staggerChildren = false, staggerDelay = 80 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          if (staggerChildren) {
            const children = el.querySelectorAll(".reveal-child");
            children.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * staggerDelay}ms`;
            });
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerChildren, staggerDelay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
