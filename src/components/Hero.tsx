import { Mail } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export function Hero() {
  return (
    <header className="hero-header">
      <h1 className="title-gradient">Shelly Ambar</h1>
      <div className="subtitle">Senior Frontend &amp; Mobile Developer | Ramat Gan, Israel</div>
      <div className="header-links">
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
      </div>
    </header>
  );
}
