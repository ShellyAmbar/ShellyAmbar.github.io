import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Touchpad } from 'lucide-react';
import { phoneApps } from '../data/phoneApps';
import { iconMap } from './icons';

function embedUrl(youtubeId: string) {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`;
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
                <motion.button
                  key={activeVideo}
                  type="button"
                  className="phone-video-container"
                  onClick={() => setActiveVideo(null)}
                  title="Tap video to pause/close"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
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
                </motion.button>
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
                  onClick={() => setActiveVideo(app.youtubeId)}
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
            onClick={() => setActiveVideo(null)}
            title="Tap Home Bar to Reset Screen"
          />
        </div>
      </div>
    </motion.div>
  );
}
