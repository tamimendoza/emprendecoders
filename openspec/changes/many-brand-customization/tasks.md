# Tasks — Many Brand Customization

## Sprint 1: Landing Page Update

- [x] ✅ Actualizar el título de la página `metaTitle` en `src/pages/app/many.astro`
- [x] ✅ Reemplazar el slot de Navbar `brand` en `src/pages/app/many.astro` para cambiar "Emprendecoders" por "Many" e `href` por `/app/many`
- [x] ✅ Reemplazar el slot de Footer `brand` en `src/pages/app/many.astro` para usar el logo de Many y el nombre "Many"
- [x] ✅ Actualizar el copyright en el Footer en `src/pages/app/many.astro` a "Many. Todos los derechos reservados."

## Sprint 2: Legal Pages Update

- [x] ✅ Modificar `src/pages/app/privacidad/many.astro` para cambiar el título de `LegalLayout`
- [x] ✅ Modificar `src/components/ManyComponent.astro` para cambiar `developerName` a `"Many"`
- [x] ✅ Modificar `src/pages/app/terminos/many.astro` para cambiar el título de `LegalLayout` y el texto que menciona al creador/proveedor de la aplicación

## Sprint 3: QA & Verification

- [ ] Iniciar el servidor de desarrollo local mediante `pnpm dev`
- [ ] Verificar que en `/app/many` se muestre la marca "Many" en Navbar y Footer
- [ ] Verificar que en `/app/privacidad/many` y `/app/terminos/many` se muestre la marca "Many"
- [ ] Verificar que la página principal `/` (index.astro) mantenga el nombre de marca "Emprendecoders" sin cambios
- [ ] Ejecutar comprobaciones estáticas de Astro (`pnpm astro check`) si corresponde
