# Tasks — Smart Capture Steps

## Sprint 1: Componente estático + lógica

- [ ] Crear `src/components/sections/smart-capture.js` con:
  - Array de pasos (título, descripción, screenshot)
  - Función `selectStep(index)` que actualiza el paso activo y la imagen
  - Transición de imagen con fade/scale (0.3s cubic-bezier)
  - Auto-play opcional (setTimeout, se desactiva al hacer clic)
  - Keyboard navigation (ArrowUp/ArrowDown)
- [ ] Crear `src/components/sections/SmartCaptureSection.astro` con:
  - Layout 2 columnas en desktop (lg+)
  - Layout 1 columna en mobile (< lg)
  - Phone mockup a la derecha
  - Steps verticales a la izquierda
  - Privacy note box al final
- [ ] Implementar estilos de paso activo/inactivo con transiciones max-height

## Sprint 2: Integración

- [ ] Modificar `src/pages/app/many.astro`: reemplazar `<HowItWorksSection />` por `<SmartCaptureSection />`
- [ ] Verificar que los screenshots existentes (6, 8, 9) se usen correctamente
- [ ] Agregar badge opcional "Opcional" o "Activalo en Ajustes" en el header de la sección

## Sprint 3: Responsive y pulido

- [ ] Verificar layout en mobile: mockup arriba, pasos abajo
- [ ] Transiciones suaves en max-height de descripciones
- [ ] Línea conectora vertical entre pasos en desktop (`hidden lg:block`)
- [ ] Hover state en pasos inactivos (background sutil)

## Sprint 4: QA

- [ ] `pnpm dev` — probar interacción en navegador
- [ ] Verificar: click paso → cambio de imagen, auto-play, responsive, teclado
- [ ] Verificar que la sección se vea bien en dark mode
- [ ] Verificar carga lazy de screenshots
