# Tasks — Hero Card Interaction

## Sprint 1: OpenSpec

- [x] Crear proposal.md
- [x] Crear design.md
- [x] Crear specs/hero-cards.md
- [x] Crear tasks.md

## Sprint 2: Implementación

- [x] Modificar `src/pages/app/many.astro`:
  - [x] Reemplazar divs estáticos del hero con `.hero-card`
  - [x] Agregar `perspective-[800px]` al contenedor
  - [x] Mover rotaciones base a `style="transform: ..."` inline
  - [x] Agregar `data-index` a cada tarjeta
  - [x] Agregar `<script>` con lógica de tilt 3D
  - [x] Agregar `<script>` con lógica de lightbox

## Sprint 3: QA

- [x] `pnpm dev` — verificar tilt en hover
- [x] Verificar lightbox: apertura, cierre, navegación, ESC, click fuera
- [x] Verificar mobile: sin tilt, clic abre lightbox
- [x] Verificar que las laterales siguen ocultas en mobile
