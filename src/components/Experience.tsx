import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export function Experience() {
  const containerRef = useRevealOnScroll<HTMLDivElement>('.timeline-item');

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        <Briefcase /> Work Experience
      </h2>

      <div className="timeline-container" ref={containerRef}>
        {experience.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
            key={item.company}
          >
            <div className="role-title">{item.role}</div>
            <div className="role-meta">
              {item.company} | {item.period}
            </div>
            <p className="role-summary">
              <em>{item.summary}</em>
            </p>
            <ul className="role-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
