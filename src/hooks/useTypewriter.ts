import { useEffect, useState } from 'react';

const TYPE_SPEED_MS = 55;
const DELETE_SPEED_MS = 30;
const PAUSE_AFTER_TYPE_MS = 1800;
const PAUSE_AFTER_DELETE_MS = 300;

/** Cycles through phrases with a typewriter effect: type forward, pause, delete, move to next. */
export function useTypewriter(phrases: string[]): string {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (!isDeleting && text === currentPhrase) {
      const timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE_MS);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && text === '') {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, PAUSE_AFTER_DELETE_MS);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? currentPhrase.slice(0, prev.length - 1) : currentPhrase.slice(0, prev.length + 1)
        );
      },
      isDeleting ? DELETE_SPEED_MS : TYPE_SPEED_MS
    );
    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return text;
}
