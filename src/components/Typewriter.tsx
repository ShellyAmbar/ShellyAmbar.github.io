import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

export function Typewriter({ phrases, className = '' }: TypewriterProps) {
  const text = useTypewriter(phrases);
  return (
    <div className={`typewriter-line ${className}`.trim()}>
      <span>{text}</span>
      <span className="typewriter-caret" aria-hidden="true">
        |
      </span>
    </div>
  );
}
