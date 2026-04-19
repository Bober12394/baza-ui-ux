import { useEffect, useMemo, useState } from 'react';
import './Navbar.css';
import { buildThirdLevelPath, findRouteMatch, getThirdLevelItems, navigationTree } from './navigationData';

const levelZeroCategories = Object.keys(navigationTree);

function Navbar({ currentPath, onNavigate }) {
  const routeMatch = useMemo(() => findRouteMatch(currentPath), [currentPath]);
  const [expandedCategory, setExpandedCategory] = useState('');
  const [activeSubsection, setActiveSubsection] = useState('');

  useEffect(() => {
    if (routeMatch?.category) {
      setExpandedCategory(routeMatch.category);
      setActiveSubsection(routeMatch.subsection);
    }
  }, [routeMatch]);

  const activeCategory = routeMatch?.category ?? '';
  const activeThirdLevel = routeMatch?.thirdLevel ?? '';

  const subsections = expandedCategory ? navigationTree[expandedCategory] : [];
  const thirdLevelItems = activeSubsection ? getThirdLevelItems(activeSubsection) : [];

  const handleCategoryClick = (category) => {
    setExpandedCategory(category);
    setActiveSubsection(navigationTree[category][0] || '');
  };

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
                onClick={() => handleCategoryClick(category)}
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
              {subsections.map((item) => (
                <li className={activeSubsection === item ? 'is-active' : ''} key={item} onClick={() => setActiveSubsection(item)}>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="third-level-title">Linki poziomu 3</h3>
            <ul className="third-level-list">
              {thirdLevelItems.map((item) => {
                const targetPath = buildThirdLevelPath(expandedCategory, activeSubsection, item);
                const isActive = activeCategory === expandedCategory && activeSubsection && activeThirdLevel === item;

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
              <p className="subsection-detail__value">{activeThirdLevel || 'Wybierz link poziomu 3'}</p>
              <p className="subsection-detail__hint">URL obsługuje teraz kategorię, podsekcję i trzeci poziom.</p>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default Navbar;
