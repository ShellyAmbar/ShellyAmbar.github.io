import { useRef, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Pause, Play, Touchpad, X } from 'lucide-react';
import { phoneApps } from '../data/phoneApps';
import { iconMap } from './icons';

function embedUrl(youtubeId: string, startSeconds: number) {
  const start = Math.max(0, Math.floor(startSeconds));
  // mute=1 is required for autoplay to work on mobile browsers (Safari/Chrome block
  // unmuted autoplay outright); playsinline=1 keeps it embedded instead of forcing
  // fullscreen on iOS. Users can unmute via the player's own controls.
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1${start ? `&start=${start}` : ''}`;
}

const iconGridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const iconItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export function PhoneMockup() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);
  const playStartedAtRef = useRef<number | null>(null);

  function openApp(youtubeId: string) {
    setActiveVideo(youtubeId);
    setElapsedSeconds(0);
    setIsPlaying(true);
    playStartedAtRef.current = Date.now();
    setIframeKey((key) => key + 1);
  }

  function togglePlayback() {
    if (isPlaying) {
      const startedAt = playStartedAtRef.current ?? Date.now();
      setElapsedSeconds((prev) => prev + (Date.now() - startedAt) / 1000);
      playStartedAtRef.current = null;
      setIsPlaying(false);
    } else {
      playStartedAtRef.current = Date.now();
      setIsPlaying(true);
      setIframeKey((key) => key + 1);
    }
  }

  function closeVideo() {
    setActiveVideo(null);
    playStartedAtRef.current = null;
  }

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="phone-mockup">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-header-text">SHELLY'S APP HUB</div>

          <div className={`interactive-screen-content${activeVideo ? ' has-video' : ''}`}>
            <AnimatePresence mode="wait">
              {activeVideo ? (
                <motion.div
                  key={activeVideo}
                  className="phone-video-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {isPlaying ? (
                    <iframe
                      key={iframeKey}
                      className="phone-video-iframe"
                      src={embedUrl(activeVideo, elapsedSeconds)}
                      title="Project Demo Video"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="phone-video-paused">
                      <img
                        src={`https://img.youtube.com/vi/${activeVideo}/hqdefault.jpg`}
                        alt="Video paused"
                        className="phone-video-paused-thumb"
                      />
                      <div className="phone-video-play-icon">
                        <Play style={{ fill: '#fff', width: 18, height: 18 }} />
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    className="phone-video-toggle-overlay"
                    onClick={togglePlayback}
                    aria-label={isPlaying ? 'Pause video' : 'Resume video'}
                    title={isPlaying ? 'Tap to pause' : 'Tap to resume'}
                  >
                    <span className="video-toggle-hint">
                      {isPlaying ? (
                        <>
                          <Pause style={{ width: 14, height: 14 }} /> Tap to Pause
                        </>
                      ) : (
                        <>
                          <Play style={{ width: 14, height: 14 }} /> Tap to Resume
                        </>
                      )}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="phone-video-close"
                    onClick={closeVideo}
                    title="Close video"
                  >
                    <X style={{ width: 14, height: 14 }} />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Touchpad
                    style={{
                      width: 28,
                      height: 28,
                      color: 'var(--accent-purple-light)',
                      marginBottom: '0.3rem',
                    }}
                  />
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                    Tap an App Icon
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    Play demo video inside this screen.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div className="app-grid" variants={iconGridVariants} initial="hidden" animate="visible">
            {phoneApps.map((app) => {
              const Icon = iconMap[app.icon];
              return (
                <motion.button
                  key={app.key}
                  type="button"
                  className="app-icon interactive"
                  variants={iconItemVariants}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openApp(app.youtubeId)}
                >
                  <div className="app-box" style={{ background: app.gradient }}>
                    <Icon />
                  </div>
                  <span className="app-name">{app.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <button
            type="button"
            className="phone-home-bar interactive"
            onClick={closeVideo}
            title="Tap Home Bar to Reset Screen"
          />
        </div>
      </div>
    </motion.div>
  );
}
