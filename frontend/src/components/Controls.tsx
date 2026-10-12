import React from 'react';

type Props = {
  paused: boolean;
  onPauseToggle: () => void;
};

const Controls: React.FC<Props> = ({ paused, onPauseToggle }) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    top: 10,
    left: 10,
    background: 'rgba(255,255,255,0.8)',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    zIndex: 10,
  };

  return (
    <div style={style}>
      <button onClick={onPauseToggle}>{paused ? 'Reanudar' : 'Pausar'}</button>
    </div>
  );
};

export default Controls;
