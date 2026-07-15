## Context

Actualmente `AudienceSection.astro` (`src/components/sections/AudienceSection.astro:28-32`) define 3 iconos SVG inline muy simples:

```
shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
lock:   <rect .../><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
users:  <path d="M17 21v-2..."/><circle cx="9" cy="7" r="4"/>...
```

El contenedor (`w-12 h-12 rounded-xl bg-primary/[0.08]`) es un cuadrado plano sin decoración de fondo.

## Goals / Non-Goals

**Goals:**
- Reemplazar los 3 SVG paths por versiones ilustrativas más detalladas (2-4 paths cada uno, con mayor riqueza visual)
- Agregar un gradiente radial sutil como fondo del contenedor cuadrado
- Mantener compatibilidad con dark/light mode (usa `currentColor`)
- Mantener el mismo tamaño, forma y estructura responsive

**Non-Goals:**
- No cambiar el layout, grid, colores ni tipografía
- No agregar dependencias externas
- No modificar otros componentes o páginas

## Decisions

- **SVGs inline**: Se mantienen inline (no archivos .svg separados) para evitar peticiones extra y mantener la simplicidad de Astro
- **currentColor + stroke**: Se mantiene `currentColor` y stroke-width 1.5 para heredar el color primary y funcionar en ambos modos
- **Fondo decorativo**: Se usa `bg-gradient-to-br from-primary/[0.12] to-primary/[0.04]` sobre el contenedor existente para agregar profundidad sin afectar el layout
- **Estilo de iconos**: Se opta por un estilo "line art con detalles" — más paths que los actuales pero manteniendo coherencia visual con el diseño general

## Risks / Trade-offs

- SVG paths más complejos aumentan ligeramente el HTML inline (tamaño marginal)
- El gradiente de fondo puede no verse en navegadores muy antiguos (graceful degradation aceptable)
- Se requiere revisión visual en ambos temas (dark/light) y en el tema "many" (púrpura)
