import { Mail, Package } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import { GithubIcon } from './BrandIcons';
import { Reveal } from './Reveal';

export function Contact() {
  const tiltRef = useTilt<HTMLDivElement>();

  return (
    <section id="contact" className="tilt-wrapper contact-section" ref={tiltRef}>
      <Reveal>
        <div className="glass-card">
          <h2 className="section-title">
            <Mail /> Contact &amp; Links
          </h2>
          <p className="contact-intro">
            Get in touch for software engineering opportunities, mobile architecture, or consulting.
          </p>

          <div className="contact-grid">
            <a href="mailto:ambarshely@gmail.com" className="contact-card interactive">
              <Mail />
              <div>
                <div className="contact-card-title">Email</div>
                <div className="contact-card-value">ambarshely@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/ShellyAmbar"
              target="_blank"
              rel="noopener"
              className="contact-card interactive"
            >
              <GithubIcon />
              <div>
                <div className="contact-card-title">GitHub</div>
                <div className="contact-card-value">@ShellyAmbar</div>
              </div>
            </a>

            <a
              href="https://www.npmjs.com/~shellyambar"
              target="_blank"
              rel="noopener"
              className="contact-card interactive"
            >
              <Package />
              <div>
                <div className="contact-card-title">NPM Profile</div>
                <div className="contact-card-value">@shellyambar</div>
              </div>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
