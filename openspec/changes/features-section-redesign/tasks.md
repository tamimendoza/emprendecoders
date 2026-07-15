# Tasks — Features Section Redesign

## 1. Preparar datos de features con screenshots

- [ ] 1.1 Actualizar array `features` en `FeaturesSection.astro` para incluir campo `image` con ruta al screenshot (`/screenshots/<n>.webp`)
- [ ] 1.2 Definir mapping de alternancia: feature index par → imagen izquierda, impar → imagen derecha

## 2. Rediseñar layout de FeaturesSection

- [ ] 2.1 Reemplazar grid de cards por layout vertical de filas alternadas
- [ ] 2.2 Implementar fila feature: columna imagen (screenshot en `rounded-2xl` + `shadow-card`) + columna texto (título + descripción + icono SVG reducido)
- [ ] 2.3 Aplicar alternancia: `lg:flex-row` vs `lg:flex-row-reverse` según índice par/impar
- [ ] 2.4 En mobile (< lg): siempre imagen arriba, texto abajo (flex-col)
- [ ] 2.5 Agregar `gap-8 sm:gap-12` entre filas
- [ ] 2.6 Mantener `ScrollReveal` por cada fila

## 3. Estilos y hover states

- [ ] 3.1 Aplicar `rounded-2xl`, `border border-white/5`, `shadow-card` a los screenshots
- [ ] 3.2 Implementar hover en contenedor: `scale-[1.02]`, `hover:border-accent/20`, `hover:shadow-elevated`, transición 300ms
- [ ] 3.3 Reducir icono SVG a `w-8 h-8` con `bg-primary/10` y `text-accent`, posicionado junto al título

## 4. QA

- [ ] 4.1 Verificar que los 6 screenshots carguen correctamente (lazy loading)
- [ ] 4.2 Verificar alternancia visual en desktop (lg+)
- [ ] 4.3 Verificar layout responsive (mobile, tablet, desktop)
- [ ] 4.4 Verificar hover states y transiciones
- [ ] 4.5 `pnpm dev` — probar en navegador
