import React from 'react';
import './ActionsbuttonsPrimarybuttonEx1.css';

const sizeMap = {
  s: { fontSize: '0.8125rem', padding: '4px 12px', minWidth: '56px' },
  m: { fontSize: '0.875rem', padding: '6px 16px', minWidth: '64px' },
  l: { fontSize: '0.9375rem', padding: '8px 20px', minWidth: '72px' },
};

function UIButton({
  label,
  variant = 'contained',
  size = 'm',
  color = 'rgb(25, 118, 210)',
  borderRadius = '4px',
  textColor,
}) {
  const resolvedSize = sizeMap[size] || sizeMap.m;
  const isContained = variant === 'contained';

  const style = {
    '--btn-color': color,
    '--btn-border-radius': borderRadius,
    '--btn-text-color': textColor || (isContained ? '#fff' : color),
    fontSize: resolvedSize.fontSize,
    padding: resolvedSize.padding,
    minWidth: resolvedSize.minWidth,
  };

  return (
    <button
      type="button"
      className={`ui-button ui-button--${variant}`}
      style={style}
      aria-label={`${label} button`}
    >
      {label}
    </button>
  );
}

function ActionsbuttonsPrimarybuttonEx1Demo() {
  return (
    <div className="ui-buttons-stack" role="group" aria-label="Primary button examples">
      <UIButton label="Contained" variant="contained" size="m" color="rgb(25, 118, 210)" borderRadius="4px" />
      <UIButton label="Outlined" variant="outlined" size="m" color="rgb(255, 114, 0)" borderRadius="999px" />
    </div>
  );
}

function ActionsbuttonsPrimarybuttonEx1() {
  return (
    <section className="generated-component actionsbuttons-primarybutton-ex1" aria-label="ActionsbuttonsPrimarybuttonEx1">
      <div className="component-section component-section--main">
        <ActionsbuttonsPrimarybuttonEx1Demo />
      </div>

      <div className="component-section component-section--references" aria-label="Component references">
        <h4 className="component-section-title">Referencje komponentów</h4>
        <div className="reference-card">
          <p className="reference-card-name">ActionsbuttonsPrimarybuttonEx1</p>
          <ActionsbuttonsPrimarybuttonEx1Demo />
        </div>
      </div>
    </section>
  );
}

export default ActionsbuttonsPrimarybuttonEx1;
