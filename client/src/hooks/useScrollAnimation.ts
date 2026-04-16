import { useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "up";

interface UseScrollAnimationOptions {
  direction?: Direction;
  threshold?: number;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  direction = "up",
  threshold = 0.15,
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getStyle = (): React.CSSProperties => {
    const translateMap: Record<Direction, string> = {
      left: "translateX(-60px)",
      right: "translateX(60px)",
      up: "translateY(40px)",
    };

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translate(0)" : translateMap[direction],
      transition: "opacity 0.7s ease, transform 0.7s ease",
    };
  };

  return { ref, isVisible, style: getStyle() };
}
