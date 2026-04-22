import { useState } from 'react';
import './InteriaReferenceNavbarV2.css';

const iconLinks = [
  { label: 'Mail', symbol: '✉' },
  { label: 'Dot', symbol: '◉' },
  { label: 'Sport', symbol: '⚽' },
  { label: 'Leaf', symbol: '✶' },
  { label: 'Play', symbol: '▶' },
];

const sidebarItemsTop = ['Interia', 'Poczta', 'Pogoda', 'Na żywo', 'Program TV', 'Horoskop', 'Plotki'];
const sidebarItemsBottom = ['Wydarzenia', 'Sport', 'Biznes', 'Motoryzacja'];

function InteriaReferenceNavbarV2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="interia-v2-demo">
      <header className="interia-v2-navbar">
        <div className="interia-v2-navbar__inner">
          <a className="interia-v2-brand" href="#preview" aria-label="Homepage">
            <span className="interia-v2-brand__main">novaria</span>
            <span className="interia-v2-brand__sub">teraz</span>
          </a>

          <form className="interia-v2-search" role="search" aria-label="Search form">
            <input type="search" placeholder="SZUKAJ" />
            <button type="submit" aria-label="Search">⌕</button>
          </form>

          <nav className="interia-v2-icons" aria-label="Skróty">
            {iconLinks.map((item) => (
              <a href="#icon-link" key={item.label} aria-label={item.label}>
                <span className="interia-v2-icon">{item.symbol}</span>
              </a>
            ))}
          </nav>

          <button
            className="interia-v2-menu"
            type="button"
            aria-label="Otwórz menu"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      <div
        className={`interia-v2-overlay ${isSidebarOpen ? 'is-open' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      />

      <aside className={`interia-v2-sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
        <div className="interia-v2-sidebar__top">
          <button
            className="interia-v2-sidebar__close"
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Zamknij menu"
          >
            ✕
          </button>

          <ul>
            {sidebarItemsTop.map((item) => (
              <li key={item}><a href="#menu-item">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="interia-v2-sidebar__bottom">
          <ul>
            {sidebarItemsBottom.map((item) => (
              <li key={item}><a href="#menu-item">{item}</a></li>
            ))}
          </ul>
        </div>
      </aside>

      <main id="preview" className="interia-v2-content">
        <h1>Nowy komponent navbar</h1>
      </main>
    </div>
  );
}

export default InteriaReferenceNavbarV2;
