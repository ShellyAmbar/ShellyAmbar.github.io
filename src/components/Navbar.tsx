import { useState } from 'react';
import { Briefcase, Layers, Mail, Menu, User, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { GithubIcon } from './BrandIcons';

const NAV_LINKS = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Work', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.id));

  function closeMobileMenu() {
    setIsMobileOpen(false);
  }

  function scrollToTop(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  }

  return (
    <header className="top-navbar">
      <a href="#about" className="nav-brand interactive" onClick={scrollToTop}>
        Shelly Ambar
      </a>

      <button
        className="hamburger-btn interactive"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-label="Toggle Navigation"
      >
        {isMobileOpen ? <X /> : <Menu />}
      </button>

      <nav className={`nav-tabs${isMobileOpen ? ' mobile-open' : ''}`}>
        {NAV_LINKS.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-tab-btn interactive${activeId === id ? ' active' : ''}`}
            onClick={id === 'about' ? scrollToTop : closeMobileMenu}
          >
            <Icon /> {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a
          href="https://github.com/ShellyAmbar"
          target="_blank"
          rel="noopener"
          className="btn btn-sm interactive"
        >
          <GithubIcon /> GitHub
        </a>
      </div>
    </header>
  );
}
