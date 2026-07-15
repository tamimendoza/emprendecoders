# Tasks — Many Page Update

## Sprint 1: Galería y lightbox

- [ ] Crear `src/components/sections/ScreenshotGallery.astro` con grilla responsiva (4→3→2 cols)
- [ ] Crear `src/components/sections/gallery.js` con lógica de lightbox modal
- [ ] Implementar overlay, navegación (flechas + teclado), cerrar con ESC/click fuera, lock scroll

## Sprint 2: Hero y features

- [ ] Actualizar `src/pages/app/many.astro`: reemplazar screenshots del hero por 1, 2, 4
- [ ] Importar y añadir `ScreenshotGallery` en `many.astro`
- [ ] Actualizar `src/components/sections/FeaturesSection.astro` con features reales de la app

## Sprint 3: HowItWorks

- [ ] Actualizar `src/components/sections/HowItWorksSection.astro`: agregar screenshots 6, 8, 9 a cada step

## Sprint 4: QA

- [ ] Verificar lightbox: apertura, cierre, navegación, responsive
- [ ] Verificar carga de imágenes (lazy loading)
- [ ] Verificar dark/light mode consistencia
- [ ] `pnpm dev` — probar en navegador
