export interface Planet {
  name: string;
  radiusKm: number;           // radio en kilómetros
  distanceFromSunKm: number; // distancia media al Sol en km
  orbitalPeriodDays: number; // período orbital en días terrestres
  textureUrl?: string;        // ruta opcional a una textura para la visualización
}
