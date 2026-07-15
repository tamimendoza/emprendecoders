# Design — Many Page Update

## Lightbox Component

```
src/components/ui/
├── ScreenshotGallery.astro    # Grid + modal lightbox
└── gallery.js                # Vanilla JS: open, close, navigate, keyboard
```

### Lightbox UX

- Overlay fixed con `bg-black/90` + `backdrop-blur-sm`
- Imagen dentro con `max-h-[90vh] w-auto`, centrada con `object-contain`
- Navegación touch/swipe opcional (futuro)
- Flechas: `<` `>` en los laterales, semi-transparentes, visibles solo en hover
- Transiciones: overlay fade 200ms, imagen scale 250ms cubic-bezier
- Labels: fuente pequeña, semi-transparente, abajo centrado
- Cerrar: botón X arriba a la derecha + ESC + click fuera de la imagen

### Gallery Grid

- CSS Grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3`
- Cada thumbnail: `aspect-[9/16]` (ratio de phone), `rounded-2xl`, `overflow-hidden`
- Label superpuesto con gradient oscuro bottom-to-top y texto blanco

## Screenshot data

Se definirá un array de objetos con id, src, alt, label para la galería. Estas 12 imágenes:

```js
const screenshots = [
  { id: 1,  src: '/screenshots/1.webp',  alt: 'App lista para usar',               label: 'Many lista para usar' },
  { id: 2,  src: '/screenshots/2.webp',  alt: 'Panel principal modo claro',        label: 'Panel principal (claro)' },
  { id: 12, src: '/screenshots/12.webp', alt: 'Panel principal modo oscuro',       label: 'Panel principal (oscuro)' },
  { id: 3,  src: '/screenshots/3.webp',  alt: 'Lista de movimientos modo claro',   label: 'Movimientos (claro)' },
  { id: 11, src: '/screenshots/11.webp', alt: 'Lista de movimientos modo oscuro',  label: 'Movimientos (oscuro)' },
  { id: 4,  src: '/screenshots/4.webp',  alt: 'Reporte mensual con gráficos',      label: 'Reportes mensuales' },
  { id: 10, src: '/screenshots/10.webp', alt: 'Reportes por tarjeta',              label: 'Reportes — vista por tarjeta' },
  { id: 5,  src: '/screenshots/5.webp',  alt: 'Pantalla de ajustes',               label: 'Ajustes y preferencias' },
  { id: 6,  src: '/screenshots/6.webp',  alt: 'Activación de notificaciones',      label: 'Activar notificaciones' },
  { id: 7,  src: '/screenshots/7.webp',  alt: 'Formulario nuevo ingreso/gasto',    label: 'Nuevo ingreso o gasto' },
  { id: 8,  src: '/screenshots/8.webp',  alt: 'Notificación bancaria detectada',   label: 'Notificación detectada' },
  { id: 9,  src: '/screenshots/9.webp',  alt: 'Registro desde notificación',       label: 'Registrar desde notificación' },
  { id: 13, src: '/screenshots/13.webp', alt: 'Editar categoría',                   label: 'Editar categoría' },
];
```

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/pages/app/many.astro` | Actualizar src de screenshots en hero, agregar imports de nuevas secciones |
| `src/components/sections/FeaturesSection.astro` | Actualizar features array con datos reales de la app |
| `src/components/sections/HowItWorksSection.astro` | Agregar imágenes de ejemplo (6, 8, 9) a cada step |
| `src/components/sections/ScreenshotGallery.astro` | **Nuevo** — grilla + lightbox |
| `src/components/sections/gallery.js` | **Nuevo** — lógica del modal |
