import { useState } from 'react';
import { Touchpad } from 'lucide-react';
import { phoneApps } from '../data/phoneApps';
import { iconMap } from './icons';

const siteOrigin =
  window.location.origin && window.location.origin !== 'null'
    ? window.location.origin
    : 'https://www.youtube.com';

function embedUrl(youtubeId: string) {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&enablejsapi=1&origin=${encodeURIComponent(
    siteOrigin
  )}`;
}

export function PhoneMockup() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  function playVideo(youtubeId: string) {
    setIsVisible(false);
    setTimeout(() => {
      setActiveVideo(youtubeId);
      setIsVisible(true);
    }, 150);
  }

  function reset() {
    setIsVisible(false);
    setTimeout(() => {
      setActiveVideo(null);
      setIsVisible(true);
    }, 150);
  }

  return (
    <div className="phone-mockup">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-header-text">SHELLY'S APP HUB</div>

        <div
          className={`interactive-screen-content${activeVideo ? ' has-video' : ''}`}
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {activeVideo ? (
            <button
              type="button"
              className="phone-video-container"
              onClick={reset}
              title="Tap video to pause/close"
            >
              <iframe
                className="phone-video-iframe"
                src={embedUrl(activeVideo)}
                title="Project Demo Video"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="phone-video-overlay-pause">
                <span className="pause-hint">Tap to Pause / Close</span>
              </div>
            </button>
          ) : (
            <>
              <Touchpad
                style={{ width: 28, height: 28, color: 'var(--accent-purple-light)', marginBottom: '0.3rem' }}
              />
              <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                Tap an App Icon
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                Play demo video inside this screen.
              </div>
            </>
          )}
        </div>

        <div className="app-grid">
          {phoneApps.map((app) => {
            const Icon = iconMap[app.icon];
            return (
              <button
                key={app.key}
                type="button"
                className="app-icon interactive"
                onClick={() => playVideo(app.youtubeId)}
              >
                <div className="app-box" style={{ background: app.gradient }}>
                  <Icon />
                </div>
                <span className="app-name">{app.name}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="phone-home-bar interactive"
          onClick={reset}
          title="Tap Home Bar to Reset Screen"
        />
      </div>
    </div>
  );
}
