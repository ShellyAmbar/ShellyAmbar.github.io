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

  // mute=1 is required for autoplay to work on mobile browsers (Safari/Chrome block
  // unmuted autoplay outright); playsinline=1 keeps it embedded instead of forcing
  // fullscreen on iOS. Users can unmute via the player's own controls.
  const embedUrl = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1`
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
