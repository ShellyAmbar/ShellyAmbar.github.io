import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import type { Project } from '../data/projects';
import { useTilt } from '../hooks/useTilt';
import { iconMap } from './icons';

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
  onCardClick?: () => void;
  onOpenVideo: (youtubeId: string) => void;
}

export function ProjectCard({
  project,
  index,
  className = '',
  onCardClick,
  onOpenVideo,
}: ProjectCardProps) {
  const tiltRef = useTilt<HTMLDivElement>();

  return (
    <div
      className={`tilt-wrapper project-card ${className}`.trim()}
      ref={tiltRef}
      onClick={onCardClick}
    >
      <motion.div
        className="project-card-reveal"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      >
        <div className="glass-card">
          <div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="preview-container">
              <button
                type="button"
                className="video-preview-link interactive"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenVideo(project.youtubeId);
                }}
              >
                <img
                  src={`https://img.youtube.com/vi/${project.youtubeId}/${project.thumbnailQuality}.jpg`}
                  alt={`${project.title} Video Preview`}
                  className="preview-thumbnail"
                />
                <div className="play-overlay">
                  <Play style={{ fill: '#fff', width: 18, height: 18 }} />
                </div>
              </button>
            </div>

            <div className="tech-tag-list">
              {project.techTags.map((tag) => (
                <span className="tech-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="project-actions">
            {project.actions.map((action) => {
              const Icon = iconMap[action.icon];
              const variantClass =
                action.variant === 'primary'
                  ? ' btn-primary'
                  : action.variant === 'outline'
                  ? ' btn-outline'
                  : '';
              return (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener"
                  className={`btn interactive${variantClass}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon /> {action.label}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
