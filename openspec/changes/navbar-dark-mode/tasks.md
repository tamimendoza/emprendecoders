## 1. Layout.astro — Renderizar dark class en SSR (✓ listo)

- [x] `<html class="dark">` con SSR
- [x] Script inline remueve clase opuesta antes de agregar la nueva

## 2. MobileMenu.astro — Fondo explícito (✓ listo)

- [x] `bg-skin-base` + `border-skin`

## 3. Navbar.astro — Fondo sólido, sin blur, sin gradient

- [ ] Cambiar `dark:bg-skin-base/80 bg-white/80 backdrop-blur-xl` → `bg-skin-base`
- [ ] Cambiar `text-gradient-brand` → `text-skin-primary` en brand default
- [ ] Verificar que `{className}` usa backticks (✓ listo)

## 4. LegalLayout.astro — Fondo sólido

- [ ] Cambiar `bg-skin-base/80 backdrop-blur-xl` → `bg-skin-base`
- [ ] Mantener logo + texto (✓ listo de antes)

## 5. Verificar

- [ ] `pnpm build` sin errores
- [ ] Revisar navbar en index (dark y light)
- [ ] Revisar navbar en many (dark y light)
- [ ] Revisar legal pages
