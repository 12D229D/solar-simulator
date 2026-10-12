import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SolarSystem from './components/SolarSystem';
import PlanetInfo from './components/PlanetInfo';
import Controls from './components/Controls';

type Planet = {
  name: string;
  radiusKm: number;
  distanceFromSunKm: number;
  orbitalPeriodDays: number;
  textureUrl?: string;
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<Planet | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <SolarSystem onPlanetSelect={setSelected} paused={paused} />
      <Controls paused={paused} onPauseToggle={() => setPaused(p => !p)} />
      <PlanetInfo planet={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default App;
