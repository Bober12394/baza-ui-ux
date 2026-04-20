import React, { useState } from 'react';

const baseButtonStyle = {
  backgroundColor: '#1976d2',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '12px 20px',
  fontSize: '24px',
  fontWeight: 600,
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease',
};

function ActionsbuttonsPrimarybuttonEx1() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    if (!isDisabled) {
      setClicks((prev) => prev + 1);
    }
  };

  return (
    <section className="generated-component" aria-label="ActionsbuttonsPrimarybuttonEx1">
      <h3>Primary Button — Ex1</h3>

      <button
        type="button"
        aria-label="Contained button"
        disabled={isDisabled}
        onClick={handleClick}
        style={{
          ...baseButtonStyle,
          opacity: isDisabled ? 0.5 : 1,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        Contained
      </button>

      <p style={{ marginTop: '12px' }}>Kliknięcia: {clicks}</p>

      <label style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
        <input type="checkbox" checked={isDisabled} onChange={(event) => setIsDisabled(event.target.checked)} />
        Disabled
      </label>
    </section>
  );
}

export default ActionsbuttonsPrimarybuttonEx1;
