import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { getComponentForPath } from './components/componentRegistry';
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
  const SelectedComponent = useMemo(() => getComponentForPath(path), [path]);

  return (
    <div className="page-shell">
      <Navbar currentPath={path} onNavigate={navigate} />

      <main className="page-content">
        {path === '/' && <h1>Strona główna</h1>}

        {path !== '/' && routeMatch && SelectedComponent && (
          <section className="component-preview">
            <h2>{routeMatch.thirdLevel || routeMatch.subsection}</h2>
            <p>Komponent dla ścieżki: {path}</p>
            <SelectedComponent />
          </section>
        )}

        {path !== '/' && (!routeMatch || !SelectedComponent) && <h1>brak wyników</h1>}
      </main>
    </div>
  );
}

export default App;
