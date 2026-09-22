import { useEffect, useRef } from 'react';

const DESKTOP_BREAKPOINT = 768;

/** 3D tilt-on-hover effect for a .glass-card nested inside a .tilt-wrapper (desktop only). */
export function useTilt<T extends HTMLElement>() {
  const wrapperRef = useRef<T>(null);

  useEffect(() => {
    if (window.innerWidth < DESKTOP_BREAKPOINT) return;
    const wrapper = wrapperRef.current;
    const card = wrapper?.querySelector<HTMLElement>('.glass-card');
    if (!wrapper || !card) return;

    function onMouseMove(e: MouseEvent) {
      const rect = wrapper!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 18;
      const rotateY = (centerX - x) / 18;
      card!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
    }

    function onMouseLeave() {
      card!.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseleave', onMouseLeave);
    return () => {
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return wrapperRef;
}
