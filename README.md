# Solar‑Simulator – Full‑Stack Solar System Simulator

## Descripción
Simulador interactivo en 3‑D del Sistema Solar que muestra el Sol y los ocho planetas con sus órbitas reales (escaladas). El proyecto está dividido en:

| Capa | Tecnologías |
|------|--------------|
| **Backend** | Node + Express (TypeScript) – API `GET /api/planets` que devuelve los datos estáticos de los cuerpos celestes. |
| **Frontend** | React + TypeScript + Three.js (a través de `@react-three/fiber` y `@react-three/drei`). UI con controles de pausa y un modal de información por planeta. |
| **Contenedores** | Docker + `docker‑compose` para levantar backend y frontend de forma independiente. |
| **Tests** | Jest + Supertest (backend) – pruebas de la ruta `/api/planets`. |

## Requisitos
- **Node >= 20** (para desarrollo local)  
- **Docker** (para ejecución en contenedores)  
- **Git** (para control de versiones)

## Instalación y desarrollo local
```bash
# Backend
cd backend
npm ci           # instalar dependencias
npm run dev      # arrancar servidor en http://localhost:4000
npm test         # ejecutar pruebas

# Frontend
cd ../frontend
npm ci
npm run dev      # arranca Vite en http://localhost:5173
```
> El frontend está configurado con un proxy a `/api` que redirige al backend en el puerto 4000.

## Construcción y despliegue con Docker
```bash
cd ..               # volver al raíz del proyecto
docker-compose up --build
```
- **Backend** escuchará en el puerto `4000`.  
- **Frontend** servirá el contenido estático en el puerto `5173` (Nginx interno).

## Uso de la aplicación
- **OrbitControls** permite rotar y hacer zoom alrededor del sistema.  
- Botón **Pausar / Reanudar** detiene o continúa la animación orbital.  
- Al hacer clic sobre cualquier planeta se abre un modal con datos básicos (radio, distancia al Sol, período orbital).

## Estructura del proyecto
```
solar-simulator/
├─ backend/
│   ├─ src/
│   │   ├─ models/planet.ts          # interfaz Planet
│   │   ├─ routes/planets.ts         # endpoint GET /planets
│   │   └─ index.ts                  # configuración del servidor
│   ├─ jest.config.js
│   ├─ package.json
│   └─ Dockerfile
├─ frontend/
│   ├─ src/
│   │   ├─ components/
│   │   │   ├─ SolarSystem.tsx      # escena Three.js
│   │   │   ├─ PlanetInfo.tsx       # modal de información
│   │   │   └─ Controls.tsx         # botones de pausa
│   │   ├─ App.tsx                  # orquesta de estado
│   │   └─ main.tsx                 # entry point React
│   ├─ public/
│   ├─ vite.config.ts
│   ├─ package.json
│   └─ Dockerfile
├─ data/
│   └─ planets.json                  # datos de los ocho planetas + Sol
├─ docker-compose.yml
└─ README.md (este archivo)
```

## Testeo
```bash
# Backend
cd backend
npm test
```
Se verifica que la respuesta de `/api/planets` es un arreglo con al menos 9 objetos.

## Extensiones futuras
- **Persistencia de cuerpos personalizados** (SQLite + rutas POST/PUT).  
- **Texturas reales** para cada planeta (añadir imágenes en `public/textures`).  
- **Modo oscuro** y **responsive design** para móviles.  
- **E2E** con Cypress para validar interacción completa (pausa, clicks, modal).

---

*Este README está listo para copiarse dentro de `solar-simulator/README.md`.*