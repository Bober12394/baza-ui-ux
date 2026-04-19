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

  const showNotFound = path !== '/' && (!routeMatch || !SelectedComponent);
  const showHome = path === '/';
  const showRouteComponent = path !== '/' && routeMatch && SelectedComponent;

  return (
    <div className="page-shell">
      <Navbar currentPath={path} onNavigate={navigate} />

      <main className={`page-content ${showHome || showNotFound ? 'page-content--center' : ''}`}>
        {showHome && <h1>Strona główna</h1>}

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
