import { useEffect, useId, useState } from 'react';
import './InteriaStyleNavbar.css';

const primaryLinks = [
  { label: 'Mail', icon: '✉' },
  { label: 'Buzz', icon: '◉' },
  { label: 'Play', icon: '▶' },
  { label: 'Eco', icon: '❃' },
  { label: 'Podcasts', icon: '▣' },
];

const dropdownSections = [
  {
    title: 'Sections',
    items: ['Top stories', 'Local', 'Business', 'Tech'],
  },
  {
    title: 'Tools',
    items: ['Weather', 'TV guide', 'Crossword', 'Newsletter'],
  },
];

function InteriaStyleNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const dropdownId = useId();

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') {
        return;
      }

      setIsDesktopDropdownOpen(false);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="interia-navbar-demo" aria-label="Interia-style navbar playground">
      <header className={`interia-navbar ${isCompact ? 'is-compact' : ''}`}>
        <div className="interia-navbar__inner">
          <a className="interia-navbar__brand" href="#navbar-home" aria-label="Homepage">
            <span className="interia-navbar__brand-main">Novaria</span>
            <span className="interia-navbar__brand-sub">now</span>
          </a>

          <section className="interia-navbar__weather" aria-label="Weather summary">
            <p className="interia-navbar__weather-top">NOW 14°C · Warsaw</p>
            <p className="interia-navbar__weather-bottom">Air quality: very good · 120h / 45d</p>
          </section>

          <form className="interia-navbar__search" role="search" aria-label="Site search">
            <label htmlFor="interia-like-query" className="interia-navbar__search-label">Search</label>
            <input id="interia-like-query" className="interia-navbar__search-input" type="search" placeholder="Search" />
          </form>

          <nav className="interia-navbar__quick-links" aria-label="Quick links">
            {primaryLinks.map((item) => (
              <a href="#navbar-link" className="interia-navbar__quick-link" key={item.label}>
                <span className="interia-navbar__quick-icon" aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <button
            className="interia-navbar__menu-trigger"
            type="button"
            aria-haspopup="menu"
            aria-expanded={isDesktopDropdownOpen}
            aria-controls={dropdownId}
            onClick={() => setIsDesktopDropdownOpen((current) => !current)}
          >
            <span aria-hidden="true">☰</span>
            <span>Menu</span>
          </button>

          <button
            className="interia-navbar__mobile-trigger"
            type="button"
            aria-haspopup="menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls={`${dropdownId}-mobile`}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <span aria-hidden="true">☰</span>
            <span>Menu</span>
          </button>
        </div>

        {isDesktopDropdownOpen && (
          <div className="interia-navbar__dropdown" id={dropdownId} role="menu" aria-label="Desktop menu">
            {dropdownSections.map((section) => (
              <section key={section.title} className="interia-navbar__dropdown-section">
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#desktop-menu-item" role="menuitem">{item}</a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        <div
          className={`interia-navbar__mobile-panel ${isMobileMenuOpen ? 'is-open' : ''}`}
          id={`${dropdownId}-mobile`}
          role="menu"
          aria-label="Mobile navigation"
        >
          <form className="interia-navbar__mobile-search" role="search" aria-label="Mobile search">
            <label htmlFor="interia-like-query-mobile">Search</label>
            <input id="interia-like-query-mobile" type="search" placeholder="Search" />
          </form>

          <ul className="interia-navbar__mobile-list">
            {primaryLinks.map((item) => (
              <li key={item.label}>
                <a href="#mobile-link" role="menuitem" onClick={() => setIsMobileMenuOpen(false)}>
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="interia-navbar-demo__content" id="navbar-home">
        <h1>Navbar preview</h1>
        <p>
          Scroll the page to trigger compact sticky behavior. On desktop use the Menu button for a dropdown,
          and on mobile open the slide-down panel.
        </p>
      </main>
    </div>
  );
}

export default InteriaStyleNavbar;
