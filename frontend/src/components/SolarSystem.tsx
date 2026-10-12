import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import axios from 'axios';

export type Planet = {
  name: string;
  radiusKm: number;
  distanceFromSunKm: number;
  orbitalPeriodDays: number;
  textureUrl?: string;
};

// Escala de visualización (ajustable)
const DISTANCE_SCALE = 1e-7; // valores km -> unidades de escena
const RADIUS_SCALE = 5e-5;   // valores km -> tamaño esfera
const TIME_SPEED = 10; // multiplicador de velocidad de tiempo

const PlanetMesh: React.FC<{planet: Planet; elapsed: number; onSelect: (p: Planet) => void}> = ({planet, elapsed, onSelect}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  // Ángulo basado en tiempo real
  const angle = planet.orbitalPeriodDays === 0 ? 0 : ((elapsed / (planet.orbitalPeriodDays * 86400)) * 2 * Math.PI * TIME_SPEED);
  const distance = planet.distanceFromSunKm * DISTANCE_SCALE;
  const radius = Math.max(planet.radiusKm * RADIUS_SCALE, 0.1);

  useFrame(() => {
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    meshRef.current.position.set(x, 0, z);
  });

  const handleClick = () => onSelect(planet);

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={planet.name === 'Sol' ? 'yellow' : 'gray'} />
    </mesh>
  );
};

const SolarSystem: React.FC<{onPlanetSelect: (p: Planet) => void; paused: boolean}> = ({onPlanetSelect, paused}) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [startTime] = useState(() => Date.now() / 1000);
  const elapsedRef = React.useRef(0);

  useEffect(() => {
    axios.get('/api/planets').then(res => setPlanets(res.data));
  }, []);

  const rawElapsed = Date.now() / 1000 - startTime;
  const elapsed = paused ? elapsedRef.current : rawElapsed;
  if (!paused) {
    elapsedRef.current = rawElapsed;
  }

  return (
    <Canvas camera={{ position: [0, 30, 60], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars />
      <OrbitControls enableZoom={true} />
      {planets.map(p => (
        <PlanetMesh key={p.name} planet={p} elapsed={elapsed} onSelect={onPlanetSelect} />
      ))}
    </Canvas>
  );
};

export default SolarSystem;
