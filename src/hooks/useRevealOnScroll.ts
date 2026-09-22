import { useEffect, useRef } from 'react';

/** Reveals elements with the given selector by toggling the "active" class as they enter the viewport. */
export function useRevealOnScroll<T extends HTMLElement>(selector: string) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    function reveal() {
      const windowHeight = window.innerHeight;
      const items = containerRef.current?.querySelectorAll(selector) ?? [];
      items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - 50) {
          item.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, [selector]);

  return containerRef;
}
