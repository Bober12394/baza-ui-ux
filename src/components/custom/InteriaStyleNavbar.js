import { useEffect, useId, useState } from 'react';
import './InteriaStyleNavbar.css';

const quickLinks = [
  { label: 'Mail', icon: '✉' },
  { label: 'Buzz', icon: '◉' },
  { label: 'Sport', icon: '⚽' },
  { label: 'Eco', icon: '✶' },
  { label: 'Podcasts', icon: '▶' },
];

const sidebarPrimary = ['Interia', 'Poczta', 'Pogoda', 'Na żywo', 'Program TV', 'Horoskop', 'Plotki'];
const sidebarSecondary = ['Wydarzenia', 'Sport', 'Biznes', 'Motoryzacja'];

function InteriaStyleNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const handleScroll = () => setIsCompact(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <div className="interia-navbar-demo" aria-label="Interia style navbar">
      <header className={`interia-navbar ${isCompact ? 'is-compact' : ''}`}>
        <div className="interia-navbar__inner">
          <a className="interia-navbar__brand" href="#navbar-home" aria-label="Homepage">
            <span className="interia-navbar__brand-main">Novaria</span>
            <span className="interia-navbar__brand-sub">teraz</span>
          </a>
          <form className="interia-navbar__search" role="search" aria-label="Site search">
            <input id="interia-like-query" className="interia-navbar__search-input" type="search" placeholder="SZUKAJ" />
            <button type="submit" className="interia-navbar__search-submit" aria-label="Search">⌕</button>
          </form>

          <nav className="interia-navbar__quick-links" aria-label="Quick links">
            {quickLinks.map((item) => (
              <a href="#quick-link" className="interia-navbar__quick-link" key={item.label}>
                <span className="interia-navbar__quick-icon" aria-hidden="true">{item.icon}</span>
              </a>
            ))}
          </nav>

          <button
            className="interia-navbar__menu-trigger"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isSidebarOpen}
            aria-controls={menuId}
            onClick={() => setIsSidebarOpen(true)}
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </header>

      <div className={`interia-navbar__overlay ${isSidebarOpen ? 'is-open' : ''}`} onClick={() => setIsSidebarOpen(false)} aria-hidden="true" />

      <aside className={`interia-navbar__sidebar ${isSidebarOpen ? 'is-open' : ''}`} id={menuId} role="dialog" aria-modal="true" aria-label="Menu sidebar">
        <div className="interia-navbar__sidebar-top">
          <button type="button" className="interia-navbar__sidebar-close" onClick={() => setIsSidebarOpen(false)} aria-label="Close menu">✕</button>
          <ul>
            {sidebarPrimary.map((item) => (
              <li key={item}><a href="#sidebar-item">{item}</a></li>
            ))}
          </ul>
        </div>
        <div className="interia-navbar__sidebar-bottom">
          <ul>
            {sidebarSecondary.map((item) => (
              <li key={item}><a href="#sidebar-item">{item}</a></li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="interia-navbar-demo__content" id="navbar-home">
        <h1>Navbar preview</h1>
        <p>Scroll, aby zobaczyć kompaktową wersję. Kliknij hamburger, aby otworzyć sidebar.</p>
      </main>
    </div>
  );
}

export default InteriaStyleNavbar;
