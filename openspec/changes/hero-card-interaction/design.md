# Design — Hero Card Interaction

## 3D Tilt

### Mecanismo

- Contenedor padre con `perspective(800px)` para crear el espacio 3D.
- Cada `.hero-card` recibe `transform-style: preserve-3d` y una transición
  suave en `transform` (250ms ease-out) para cuando el mouse sale.
- Al hacer `mousemove` sobre una tarjeta:
  1. Se calcula la posición del mouse relativa al centro de la tarjeta.
  2. Se mapea a `rotateX` (±8 grados máx.) y `rotateY` (±8 grados máx.).
  3. Se asigna inline: `transform: perspective(800px) rotateX(Xdeg) rotateY(Ydeg)`.
- Al hacer `mouseleave` se resetea a `transform: none` con transición.

### Preservación del layout original

- Las tarjetas laterales tienen rotación base (-6deg y +6deg) y desplazamiento
  vertical (`translateY`). Esto se mantiene mediante estilos CSS en línea
  (no clases Tailwind) para que JS pueda combinarlos con el tilt o se resetee
  limpiamente.
- En mobile las laterales se ocultan (`hidden sm:block`).

## Lightbox

### Estructura DOM

- Modal fijo dentro del hero section (no compartido con ScreenshotGallery).
- Overlay: `fixed inset-0 z-50 bg-black/90 backdrop-blur-sm`.
- Contenedor de imagen centrado con flexbox.
- Imagen: `max-h-[85vh] w-auto object-contain rounded-2xl`.
- Botón cerrar (X): esquina superior derecha, `bg-white/10 hover:bg-white/20`.
- Flechas de navegación: laterales, visibles solo en hover del lightbox.
- Label: nombre de la captura abajo centrado.

### Datos

```js
const heroScreenshots = [
  { src: '/screenshots/2.webp', alt: 'Panel principal de Many modo claro' },
  { src: '/screenshots/1.webp', alt: 'Many lista para usar' },
  { src: '/screenshots/4.webp', alt: 'Reporte mensual con gráficos de Many' },
];
```

### Comportamiento

| Acción | Resultado |
|---|---|
| Clic en tarjeta | Abre lightbox con esa imagen |
| Clic en X / ESC / click fuera | Cierra lightbox |
| Flecha izquierda / tecla ← | Imagen anterior (cíclico) |
| Flecha derecha / tecla → | Imagen siguiente (cíclico) |
| Lightbox abierto | `body overflow: hidden` (lock scroll) |
| Lightbox cerrado | Restaurar scroll |

### Transiciones

- Overlay: fade 200ms
- Imagen: scale(0.95 → 1) 250ms cubic-bezier

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/pages/app/many.astro` | Reemplazar divs estáticos del hero con `.hero-card` + `<script>` para tilt y lightbox |
