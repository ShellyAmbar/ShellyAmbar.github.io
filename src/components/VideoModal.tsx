import { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  youtubeId: string | null;
  onClose: () => void;
}

export function VideoModal({ youtubeId, onClose }: VideoModalProps) {
  const isActive = youtubeId !== null;

  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
  }, [isActive]);

  const embedUrl = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`
    : '';

  return (
    <div
      className={`video-modal-overlay${isActive ? ' active' : ''}`}
      onClick={onClose}
    >
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close interactive" onClick={onClose}>
          <X style={{ width: 18, height: 18 }} />
        </button>
        <div style={{ width: '100%', height: '100%' }}>
          {isActive && (
            <iframe
              className="modal-iframe"
              src={embedUrl}
              title="Project Demo Video"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}
