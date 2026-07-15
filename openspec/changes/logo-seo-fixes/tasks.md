# Tasks — Logo and SEO Fixes

## Sprint 1: Correcciones de Diseño de Logo (app/Many)

- [x] Remover el logo duplicado en la sección Hero de `src/pages/app/many.astro`. ✅
- [x] Modificar el logo de Many en el Navbar de `src/pages/app/many.astro` para quitar la clase de bordes redondeados y usar `object-contain`. ✅
- [x] Modificar el logo de Many en el Footer de `src/pages/app/many.astro` para quitar la clase de bordes redondeados y usar `object-contain`. ✅
- [x] Modificar el logo de Many en `src/layouts/LegalLayout.astro` para la marca `many` para quitar la clase de bordes redondeados y usar `object-contain`. ✅

## Sprint 2: Etiquetas SEO y Metadatos de Redes Sociales

- [x] Actualizar `src/layouts/Layout.astro` para agregar las etiquetas meta de Open Graph y Twitter Cards. ✅
- [x] Configurar la lógica de URLs canónicas y resolución absoluta de imágenes meta en `src/layouts/Layout.astro`. ✅
- [x] Adaptar los metadatos y valores por defecto del Layout según la marca (`brand === 'many'` vs `brand === 'emprendecoders'`). ✅

## Sprint 3: Control de Calidad y Validación Visual

- [x] Ejecutar el servidor de desarrollo y verificar que el logo del Hero se haya removido y los logos de Navbar/Footer se muestren completos sin recorte. ✅
- [x] Inspeccionar el HTML generado para verificar las etiquetas meta y el link canonical. ✅
- [x] Asegurarse de que el index (página de inicio `/`) no se haya visto afectado. ✅
