import { useEffect, useMemo, useState } from 'react';
import './Navbar.css';
import { buildSubsectionPath, findRouteMatch, navigationTree } from './navigationData';

const levelZeroCategories = Object.keys(navigationTree);

function Navbar({ currentPath, onNavigate }) {
  const routeMatch = useMemo(() => findRouteMatch(currentPath), [currentPath]);
  const [expandedCategory, setExpandedCategory] = useState('');

  useEffect(() => {
    if (routeMatch?.category) {
      setExpandedCategory(routeMatch.category);
    }
  }, [routeMatch]);

  const activeCategory = routeMatch?.category ?? '';
  const activeSubsection = routeMatch?.subsection ?? '';
  const subsections = expandedCategory ? navigationTree[expandedCategory] : [];

  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <div className="navbar__inner">
          <div className="navbar__top-row">
            <button className="home-button" onClick={() => onNavigate('/')} type="button">
              Home
            </button>
          </div>

          <ul className="navbar__links">
            {levelZeroCategories.map((category) => (
              <li
                className={activeCategory === category ? 'is-active' : ''}
                key={category}
                onClick={() => setExpandedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {expandedCategory && (
        <main className="content-wrap">
          <section aria-label={`${expandedCategory} dropdown`} className="dropdown-card">
            <h2>{expandedCategory}</h2>

            <ul className="subsection-list">
              {subsections.map((item) => {
                const targetPath = buildSubsectionPath(expandedCategory, item);
                const isActive = activeCategory === expandedCategory && activeSubsection === item;

                return (
                  <li className={isActive ? 'is-active' : ''} key={item}>
                    <a
                      href={targetPath}
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate(targetPath);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="subsection-detail">
              <p className="subsection-detail__value">{activeSubsection || 'Wybierz podsekcję'}</p>
              <p className="subsection-detail__hint">Poziom 3 będzie obsłużony w następnym kroku.</p>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default Navbar;
