import { User } from 'lucide-react';
import { skills, stats } from '../data/skills';
import { PhoneMockup } from './PhoneMockup';

export function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        <User /> About Me
      </h2>

      <div className="about-grid">
        <div>
          <p className="about-bio">
            Senior Frontend &amp; Mobile Developer specializing in high-performance cross-platform
            applications across iOS, Android, and Web systems. Experienced architecting fintech
            banking platforms, modular design systems, and real-time streaming architectures.
          </p>
          <p className="about-bio-secondary">
            I leverage AI-first engineering tools (Claude Code, Co-Pilot) alongside modern React
            Native monorepos to accelerate feature deployment while maintaining production-grade
            reliability.
          </p>

          <div className="stats-badge-grid">
            {stats.map((stat) => (
              <div className="stat-box" key={stat.label}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-badge interactive" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
