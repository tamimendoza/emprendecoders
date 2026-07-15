## Why

La sección actual "Captura automática inteligente" (HowItWorksSection) muestra 3 pasos como cards estáticas en grid horizontal. El usuario ve todo de golpe sin posibilidad de explorar cada paso en detalle. No hay interacción ni jerarquía visual, y los screenshots son demasiado pequeños para apreciar la interfaz de Many.

Apple ha popularizado el patrón de step-through interactivo en sus páginas de producto (ej: "Pásate al iPhone"): texto a la izquierda con pasos expandibles tipo acordeón, imagen dinámica a la derecha que cambia según el paso activo. Este patrón aumenta el engagement, la comprensión del producto y el tiempo en página.

## What Changes

- Se reemplaza el grid estático de 3 cards por un componente interactivo de 2 columnas (desktop) / 1 columna (mobile)
- Se agrega lógica JS para: selección de paso, transición de imagen, auto-play opcional
- Se agrega indicador visual de "Opcional" en el header
- Se mantiene el privacy note box existente

## Capabilities

### New Capabilities
- `smart-capture-steps`: Componente interactivo paso-a-paso con acordeón vertical + mockup dinámico

### Modified Capabilities
- (none — no existing specs to modify)

## Impact

- **New files**: `src/components/sections/SmartCaptureSection.astro`, `src/components/sections/smart-capture.js`
- **Modified files**: `src/pages/app/many.astro`
- **Design tokens**: usa los existentes de Many (primary: `#5C358C`, accent: `#2FB082`)
- **Screenshots**: reutiliza los existentes (`6.webp`, `8.webp`, `9.webp`)
