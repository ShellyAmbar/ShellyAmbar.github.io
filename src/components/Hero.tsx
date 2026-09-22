import { motion, type Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero() {
  return (
    <motion.header
      className="hero-header"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="title-gradient" variants={item}>
        Shelly Ambar
      </motion.h1>
      <motion.div className="subtitle" variants={item}>
        Senior Frontend &amp; Mobile Developer | Ramat Gan, Israel
      </motion.div>
      <motion.div className="header-links" variants={item}>
        <a href="mailto:ambarshely@gmail.com" className="btn btn-primary interactive">
          <Mail /> ambarshely@gmail.com
        </a>
        <a
          href="https://github.com/ShellyAmbar"
          target="_blank"
          rel="noopener"
          className="btn interactive"
        >
          <GithubIcon /> GitHub
        </a>
      </motion.div>
    </motion.header>
  );
}
