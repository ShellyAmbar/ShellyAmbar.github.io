import { Info, Layers, PlayCircle } from 'lucide-react';
import { projects } from '../data/projects';
import { useProjectSpinner } from '../hooks/useProjectSpinner';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

interface ProjectsProps {
  onOpenVideo: (youtubeId: string) => void;
}

export function Projects({ onOpenVideo }: ProjectsProps) {
  const { currentIndex, exitingIndex, isPaused, togglePause } = useProjectSpinner(projects.length);

  return (
    <section id="projects">
      <Reveal>
        <h2 className="section-title">
          <Layers /> Projects Showcase
        </h2>

        <div className="pause-indicator">
          {isPaused ? (
            <>
              <PlayCircle style={{ width: 14, height: 14 }} /> Swiping PAUSED. Tap again to resume.
            </>
          ) : (
            <>
              <Info style={{ width: 14, height: 14 }} /> Tap any project card to pause/resume
              auto-swiping
            </>
          )}
        </div>
      </Reveal>

      <div id="projects-container">
        {projects.map((project, index) => {
          let spinnerClass = '';
          if (index === currentIndex) spinnerClass = 'spinner-active';
          else if (index === exitingIndex) spinnerClass = 'spinner-exit';

          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              className={spinnerClass}
              onCardClick={togglePause}
              onOpenVideo={onOpenVideo}
            />
          );
        })}
      </div>
    </section>
  );
}
