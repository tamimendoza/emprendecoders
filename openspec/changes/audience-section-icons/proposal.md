## Why

Las tarjetas de "Para quién es" en `/app/many` usan iconos SVG genéricos demasiado simples (escudo, candado, usuarios) que restan personalidad a la sección. Siendo Many una app de finanzas offline con identidad visual cercana al usuario, los iconos actuales se sienten genéricos y no transmiten el carácter del producto. Mejorar los iconos con ilustraciones más elaboradas refuerza el branding y la conexión emocional.

## What Changes

- Reemplazar los 3 SVG iconos actuales (`shield`, `lock`, `users`) por versiones ilustrativas más detalladas y con personalidad
- Agregar un subtle decorative glow / gradiente de fondo detrás del icono dentro del cuadrado
- Mantener el layout, contenedor cuadrado, colores y sistema de skin existente

## Capabilities

### New Capabilities

- `audience-icons`: Conjunto de 3 iconos SVG ilustrativos con estilo consistente y decoración de fondo para la sección de audiencia

### Modified Capabilities

*(none)*

## Impact

- **Archivo modificado**: `src/components/sections/AudienceSection.astro` — solo cambian las rutas SVG en `iconPaths` y se agrega un gradiente de fondo en el contenedor del icono
- **Sin cambios** en layout, estructura, Tailwind, diseño responsive o sistema de skin
