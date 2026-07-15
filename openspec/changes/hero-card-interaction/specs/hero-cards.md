# Spec: Hero Card Interaction

## 3D Tilt

- GIVEN el hero de `/app/many`
- AND 3 screenshots en un contenedor con `perspective(800px)`
- WHEN el usuario mueve el mouse sobre una `.hero-card`
- THEN la tarjeta se inclina con rotateX/rotateY siguiendo el cursor
- AND la inclinación máxima es ±8 grados en cada eje
- WHEN el mouse sale de la tarjeta
- THEN la tarjeta vuelve a su posición original con transición suave (250ms)
- WHEN la ventana se redimensiona a <640px (mobile)
- THEN las tarjetas laterales están ocultas
- AND la tarjeta central no tiene efecto tilt (porque es táctil, no hover)

## Lightbox

- GIVEN una tarjeta del hero visible
- WHEN el usuario hace clic en ella
- THEN se abre un lightbox modal con la imagen a tamaño completo
- AND el lightbox tiene:
  - Overlay `bg-black/90 backdrop-blur-sm`
  - Imagen centrada con `max-h-[85vh]`
  - Botón cerrar (X) arriba a la derecha
  - Flechas izquierda/derecha para navegar entre las 3 imágenes
  - Label con el nombre de la captura abajo centrado
- WHEN el usuario hace clic en X, presiona ESC, o hace clic fuera de la imagen
- THEN el lightbox se cierra
- AND el scroll del body se restaura
- WHEN el lightbox está abierto
- THEN `body.style.overflow = 'hidden'` (lock scroll)

## Responsive

- GIVEN un viewport < 640px (mobile)
- THEN solo la tarjeta central es visible
- AND el efecto tilt está deshabilitado (no aplica en táctil)
- AND el clic sigue abriendo el lightbox
