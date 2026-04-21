import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { getComponentForRoute } from './components/componentRegistry';
import { findRouteMatch } from './components/navigationData';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (targetPath) => {
    if (targetPath === path) {
      return;
    }

    window.history.pushState({}, '', targetPath);
    setPath(targetPath);
  };

  const routeMatch = useMemo(() => findRouteMatch(path), [path]);
  const SelectedComponent = useMemo(() => getComponentForRoute(path, routeMatch), [path, routeMatch]);

  const isUiBuilderPage = path === '/ui-builder';
  const showNotFound = path !== '/' && !isUiBuilderPage && (!routeMatch || !SelectedComponent);
  const showHome = path === '/';
  const showRouteComponent = path !== '/' && routeMatch && SelectedComponent;

  return (
    <div className={`page-shell ${isUiBuilderPage ? 'page-shell--ui-builder' : ''}`}>
      {!isUiBuilderPage && <Navbar currentPath={path} onNavigate={navigate} />}

      {isUiBuilderPage && (
        <nav className="ui-builder-nav">
          <button className="ui-builder-nav__library-button" onClick={() => navigate('/')} type="button">
            Biblioteka
          </button>
        </nav>
      )}

      <main className={`page-content ${showHome || showNotFound || isUiBuilderPage ? 'page-content--center' : ''}`}>
        {showHome && <h1>Strona główna</h1>}

        {isUiBuilderPage && <h1>UI Builder</h1>}

        {showRouteComponent && (
          <section className="route-view">
            <header className="route-view__header">
              <h2>{routeMatch.thirdLevel || routeMatch.subsection}</h2>
              <p>Komponent dla ścieżki: {path}</p>
            </header>

            <div className="component-render-area">
              <SelectedComponent />
            </div>
          </section>
        )}

        {showNotFound && <h1>brak wyników</h1>}
      </main>
    </div>
  );
}

export default App;
