import { useEffect, useRef } from 'react';

const DESKTOP_BREAKPOINT = 768;

/** Drives the custom cursor dot/outline on desktop and toggles hover state on interactive elements. */
export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < DESKTOP_BREAKPOINT) return;

    document.body.classList.add('has-custom-cursor');

    function onMouseMove(e: MouseEvent) {
      const dot = dotRef.current;
      const outline = outlineRef.current;
      if (!dot || !outline) return;

      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      outline.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 250, fill: 'forwards' }
      );
    }

    function onEnter() {
      document.body.classList.add('cursor-hover');
    }
    function onLeave() {
      document.body.classList.remove('cursor-hover');
    }

    window.addEventListener('mousemove', onMouseMove);

    const interactiveEls = document.querySelectorAll(
      '.interactive, a, button, .glass-card, .skill-badge'
    );
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return { dotRef, outlineRef };
}
