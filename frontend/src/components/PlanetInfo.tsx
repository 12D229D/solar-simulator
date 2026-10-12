import React from 'react';
import type { Planet } from './SolarSystem';

type Props = {
  planet: Planet | null;
  onClose: () => void;
};

const PlanetInfo: React.FC<Props> = ({ planet, onClose }) => {
  if (!planet) return null;
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <h2>{planet.name}</h2>
        <ul>
          <li>Radio: {(planet.radiusKm / 1000).toFixed(2)} Mm</li>
          <li>Distancia media al Sol: {(planet.distanceFromSunKm / 1_000_000).toFixed(2)} millones km</li>
          <li>Periodo orbital: {planet.orbitalPeriodDays} días</li>
        </ul>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    maxWidth: '90%',
    maxHeight: '80%',
    overflowY: 'auto',
  },
};

export default PlanetInfo;
