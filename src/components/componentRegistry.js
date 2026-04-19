import React from 'react';
import { buildThirdLevelPath, getThirdLevelItems, navigationTree } from './navigationData';

const normalizeToken = (value, index) => {
  if (!value) return '';
  const lower = value.toLowerCase();
  if (index === 0) {
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return lower;
};

const toComponentPart = (label) =>
  label
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((token, index) => normalizeToken(token, index))
    .join('');

export const buildComponentName = (category, subsection, thirdLevel) =>
  `${toComponentPart(category)}${toComponentPart(subsection)}${toComponentPart(thirdLevel)}`;

const createIndependentComponent = (componentName, description) => {
  const component = {
    [componentName]: () => (
      <section className="generated-component" aria-label={componentName}>
        <h3>{componentName}</h3>
        <p>{description}</p>
      </section>
    ),
  }[componentName];

  return component;
};

const loadCustomComponents = () => {
  const registry = {};

  const context = require.context('./custom', false, /\.js$/);
  context.keys().forEach((filePath) => {
    const module = context(filePath);
    const fileName = filePath.replace('./', '').replace('.js', '');
    registry[fileName] = module.default;
  });

  return registry;
};

const customComponentRegistry = loadCustomComponents();

export const componentRegistry = {};

Object.entries(navigationTree).forEach(([category, subsections]) => {
  subsections.forEach((subsection) => {
    getThirdLevelItems(subsection).forEach((thirdLevel) => {
      const componentName = buildComponentName(category, subsection, thirdLevel);
      const routeKey = buildThirdLevelPath(category, subsection, thirdLevel);
      const description = `${category} / ${subsection} / ${thirdLevel}`;

      componentRegistry[routeKey] = createIndependentComponent(componentName, description);
    });
  });
});

const pageLayoutApiPath = buildThirdLevelPath('Global Layout', 'Page Layout', 'Page Layout API');
componentRegistry[pageLayoutApiPath] = function GlobalLayoutPagelayoutPagelayoutapi() {
  return <div className="red-rectangle" aria-label="GlobalLayoutPagelayoutPagelayoutapi" />;
};

export const getComponentForRoute = (path, routeMatch) => {
  if (!routeMatch?.category || !routeMatch?.subsection || !routeMatch?.thirdLevel) {
    return componentRegistry[path] || null;
  }

  const componentName = buildComponentName(routeMatch.category, routeMatch.subsection, routeMatch.thirdLevel);
  const customComponent = customComponentRegistry[componentName];

  if (customComponent) {
    return customComponent;
  }

  return componentRegistry[path] || null;
};
