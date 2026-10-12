# Plan: solar-simulator

## Resumen
Simulador 3D full-stack del Sistema Solar. Incluye un backend (Node+Express+TypeScript), un frontend (React+TypeScript+Three.js), y configuración Docker Compose para un despliegue completo. Utiliza Jest para tests en el backend.

## Objetivos
- [x] Renderizar una simulación 3D interactiva del sistema solar con datos reales (escalados).
- [x] Proveer una API REST para obtener datos de planetas (backend).
- [x] Permitir controles de cámara (rotación, zoom) y pausa/reanudación.
- [x] Mostrar información detallada de cada planeta al hacer clic.
- [x] Despliegue en contenedores con Docker Compose.
- [x] Tests unitarios con Jest para la API de planetas (`backend/src/__tests__/planets.test.ts`).

## 🏗️ Arquitectura

- **Patrón**: Cliente-Servidor full-stack (React + Express) con despliegue Docker.
- **Flujo de datos**: El frontend React/Three.js solicita datos planetarios al backend Express (`GET /api/planets`) → el backend responde con JSON de `data/planets.json` → el frontend renderiza la escena 3D interactiva.

```text
solar-simulator/
├── backend/
│   ├── src/
│   │   ├── __tests__/planets.test.ts  # Tests Jest
│   │   ├── routes/planets.ts          # Endpoint GET /api/planets
│   │   └── index.ts
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SolarSystem.tsx        # Escena Three.js / Canvas 3D
│   │   │   ├── PlanetInfo.tsx         # Modal de información del planeta
│   │   │   └── Controls.tsx           # Controles de velocidad y órbita
│   │   └── App.tsx
│   ├── Dockerfile
│   └── package.json
├── data/planets.json                  # Datos astronómicos
├── docker-compose.yml                 # Orquestación
└── plan.md
```

## 🧠 Paradigma de Programación

- **Híbrido: Declarativo + OOP + Event-Driven**
- El frontend React usa un estilo **declarativo** (JSX + hooks) para la UI y controles.
- Three.js / `@react-three/fiber` opera con **OOP** (Scene, Camera, Mesh) envuelta en componentes declarativos.
- El backend Express es **imperativo/procedimental** con middleware **event-driven**.

---

## 🌐 Propósito de Visibilidad y Destino Remoto

- **Visibilidad**: `Público (Open Source / Portafolio)`.
- **Plataforma Remota Asignada**: `GitHub`.
- **Plataforma de Despliegue CI/CD**: `GitHub Actions` / `GitHub Pages` / `Vercel` / `Cloudflare Pages`.
- **Justificación**: Simulador 3D del Sistema Solar con React, Three.js y Node.js/TypeScript. Proyecto pedagógico abierto idóneo para vitrina pública en GitHub.

---

> ⚠️ **Auditoría de UI / DESIGN.md:** La interfaz actual no cumple con las directrices visuales de [DESIGN.md](../DESIGN.md) (requiere paleta HSL, Google Fonts modernas y profundidad/glassmorphism). Pendiente refactor visual.
## Estado actual
- Estado: ✅ **Completado**
- Backend Express con TypeScript y suite de pruebas en Jest (`backend/src/__tests__/planets.test.ts`).
- Frontend React Three.js completamente empaquetado en `frontend/dist/`.
- Configuración de orquestación `docker-compose.yml`.

## Tareas realizadas
- [x] Completar los componentes `SolarSystem.tsx`, `PlanetInfo.tsx`, `Controls.tsx` en el frontend.
- [x] Implementar la lógica 3D en Three.js para renderizar planetas y órbitas.
- [x] Asegurar la comunicación entre frontend y backend para obtener datos de planetas.
- [x] Implementar la interactividad: clics en planetas, modal de información, controles de pausa.
- [x] Escribir tests Jest para el backend (`backend/src/__tests__/planets.test.ts`).

## Stack / Tecnologías
- Backend: Node.js, Express, TypeScript, Jest
- Frontend: React, TypeScript, Three.js, Vite
- Docker, Docker Compose
