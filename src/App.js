import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { findRouteMatch } from './components/navigationData';

function renderDemoElement(subsection) {
  if (subsection.toLowerCase().includes('footer')) {
    return <footer className="component-preview__footer">Footer komponent preview</footer>;
  }

  if (subsection.toLowerCase().includes('button')) {
    return <button className="component-preview__button">Button preview</button>;
  }

  if (subsection.toLowerCase().includes('navbar')) {
    return <nav className="component-preview__nav">Navbar preview</nav>;
  }

  return <div className="component-preview__demo">Przykładowy element: {subsection}</div>;
}

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

  return (
    <div className="page-shell">
      <Navbar currentPath={path} onNavigate={navigate} />

      <main className="page-content">
        {path === '/' && <h1>Strona główna</h1>}

        {path !== '/' && routeMatch && (
          <section className="component-preview">
            <h2>{routeMatch.subsection}</h2>
            <p>Komponent dla ścieżki: {path}</p>
            {renderDemoElement(routeMatch.subsection)}
          </section>
        )}

        {path !== '/' && !routeMatch && <h1>brak wyników</h1>}
      </main>
    </div>
  );
}

export default App;
