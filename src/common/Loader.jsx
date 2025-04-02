import React from 'react';

const SpinnerLoader = () => {
  const loaderStyle = {
    position: 'relative',
    width: '54px',
    height: '54px',
    borderRadius: '10px',
  };

  const barStyle = {
    width: '8%',
    height: '24%',
    background: 'rgb(128, 128, 128)',
    position: 'absolute',
    left: '50%',
    top: '30%',
    opacity: 0,
    borderRadius: '50px',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
    animation: 'fade458 1s linear infinite',
  };

  const keyframes = `
    @keyframes fade458 {
      from { opacity: 1; }
      to { opacity: 0.25; }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{keyframes}</style>
      {Array.from({ length: 12 }, (_, i) => {
        const rotation = i * 30;
        const delay = -1.1 + i * 0.1;
        return (
          <div
            key={i}
            style={{
              ...barStyle,
              transform: `rotate(${rotation}deg) translate(0, -130%)`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default SpinnerLoader;
