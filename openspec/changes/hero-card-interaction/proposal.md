# Hero Card Interaction — Efecto 3D tilt + lightbox

## Problema

El hero de `/app/many` muestra 3 screenshots como imágenes estáticas. No hay
feedback interactivo al pasar el mouse ni forma de ver las imágenes a tamaño
completo sin salir de la página. La presentación se siente plana y no aprovecha
que son capturas reales de la app.

## Objetivo

Agregar dos interacciones a las 3 tarjetas del hero:

1. **3D tilt al hover** — cuando el usuario mueve el mouse sobre una tarjeta,
   ésta se inclina en 3D siguiendo la posición del cursor (como una carta
   inclinándose hacia la luz).
2. **Click para ampliar (lightbox)** — al hacer clic en cualquier tarjeta, se abre
   un modal overlay mostrando la imagen a tamaño completo, con navegación entre
   las 3 del hero y cierre por ESC / click fuera / botón X.

## Efecto esperado

- Las tarjetas se sienten físicas, como si estuvieran sostenidas en el espacio
  con una ligera inclinación que responde al mouse.
- Al hacer clic el usuario ve la captura en detalle sin salir de la página.
- La implementación debe ser vanilla JS (sin librerías externas) y respetar
  el diseño oscuro-first del proyecto.
