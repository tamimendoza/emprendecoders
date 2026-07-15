# Tasks — Rebranding y Modernización

## Sprint 1: Fundamentos ✅

- [x] Analizar paletas de logos Emprendecoders y Many
- [x] Definir nueva paleta en `tailwind.config.mjs`
- [x] Crear `src/styles/design-tokens.css` con variables CSS
- [x] Agregar tipografía Inter (Google Fonts)
- [x] Refactorizar `src/layouts/Layout.astro` con skin system
- [x] Implementar modo claro/oscuro con toggle manual
- [x] Actualizar favicon (`favicon.svg` + `logo.png`)

## Sprint 2: UI Library ✅

- [x] Crear `Badge.astro` (7 variantes de color)
- [ ] ~~Button, Card, Skeleton, Alert, Modal~~ — No se usan en las páginas actuales, se eliminan de la propuesta

## Sprint 3: Layout + Navegación ✅

- [x] Crear `Navbar.astro` con slots (brand, nav-links, cta, mobile)
- [x] Crear `Footer.astro` con slots + copyright prop
- [x] Crear `MobileMenu.astro` con slide-in animation
- [x] Crear `ScrollReveal.astro` wrapper
- [x] Crear `src/utils/observer.js` (IntersectionObserver singleton)
- [x] Refactorizar `index.astro` y `many.astro` para usar Navbar + Footer

## Sprint 4: Homepage Sections ✅

- [x] Crear `HeroSection.astro` con paleta magenta + navy
- [x] Crear `ProductsSection.astro` con product cards interactivos
- [x] Implementar animaciones de entrada (scroll reveal)
- [x] Actualizar HeroSection: glows navy + amarillo, badge accent, `text-gradient-brand`
- [x] Actualizar ProductsSection: Voice Notifier con acento amarillo
- [x] Copiar screenshots de Many desde Descargas a `public/screenshots/` (13 ES)

## Sprint 5: Many Page Sections ✅

- [x] Crear `HowItWorksSection.astro` con step connectors
- [x] Crear `FeaturesSection.astro` con feature cards + iconos teal
- [x] Crear `AudienceSection.astro` con audience cards
- [x] Crear `CTASection.astro` con Google Play button estilizado
- [x] Agregar prop `brand` a Layout.astro para activar tema Many
- [x] Refactorizar `many.astro`: usar componentes + `brand="many"`

## Sprint 6: Páginas Legales ✅

- [x] Crear `LegalLayout.astro` con tipografía optimizada para lectura
- [x] Actualizar `privacidad/many.astro` con LegalLayout + ManyComponent simplificado
- [x] Actualizar `privacidad/voicenotifier.astro` con LegalLayout
- [x] Actualizar `terminos/many.astro` con LegalLayout
- [x] Actualizar `terminos/voicenotifier.astro` con LegalLayout
- [x] Simplificar `ManyComponent.astro` y `Voicenotifier.astro` (wrappers redundantes)
- [x] Verificar build exitoso

## Sprint 7: Pulido + QA ✅

- [x] Revisar todos los breakpoints responsive
- [x] Verificar contraste WCAG AA
- [x] Focus visible en elementos interactivos
- [x] aria-labels faltantes
- [x] Reducir JavaScript al mínimo
- [x] Verificar scroll horizontal en todos los breakpoints
- [x] Probar navegación por teclado
- [x] Optimizar imágenes (WebP, lazy loading)
- [x] Revisar rendimiento Lighthouse (>90)
