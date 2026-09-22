import { useEffect, useRef, useState } from 'react';

const MOBILE_BREAKPOINT = 768;
const ROTATE_INTERVAL_MS = 1000;

/** Mobile-only auto-swiping carousel state for the project cards. */
export function useProjectSpinner(count: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (window.innerWidth >= MOBILE_BREAKPOINT || isPausedRef.current || count === 0) return;
      setCurrentIndex((prev) => {
        setExitingIndex(prev);
        return (prev + 1) % count;
      });
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [count]);

  function togglePause() {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;
    setIsPaused((prev) => !prev);
  }

  return { currentIndex, exitingIndex, isPaused, togglePause };
}
