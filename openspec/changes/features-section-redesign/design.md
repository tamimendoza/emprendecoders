## Context

La sección "Funcionalidades" (`FeaturesSection.astro`) actualmente usa un grid 3-col con cards de ícono SVG + título + descripción. No hay imágenes. Existen 13 screenshots reales de la app Many en `public/screenshots/` que no se aprovechan aquí. El objetivo es rediseñar la sección completa con un layout alternado imagen-texto que muestre cada feature con su screenshot real de la app.

**Stack:** Astro 5 + Tailwind CSS 3 + pnpm  
**Path alias:** `@src/*` → `src/*`  
**Componentes de secciones:** `src/components/sections/`  
**Assets:** `public/screenshots/*.webp`

## Goals / Non-Goals

**Goals:**
- Rediseñar `FeaturesSection.astro` con un layout visual alternado (imagen-texto)
- Asignar screenshot real a cada una de las 6 features
- Mantener responsive: 1 columna mobile, 2 columnas tablet/desktop con alternancia
- Preservar animación `ScrollReveal` y transiciones hover existentes
- Usar Tailwind utilities existentes del design system (`rounded-2xl`, `shadow-card`, etc.)

**Non-Goals:**
- No crear nuevos screenshots o assets gráficos
- No modificar otras secciones de la página
- No cambiar el comportamiento del lightbox o galería existente
- No afectar Voice Notifier u otras páginas

## Decisions

### Layout: Alternado 2-columnas vs grid homogéneo
**Decisión:** Layout vertical de filas alternadas (imagen-izquierda / imagen-derecha)  
**Alternativa considerada:** Grid 2x3 homogéneo  
**Por qué:** El alternado genera ritmo visual, es más narrativo y permite mostrar screenshots en tamaño más grande que en un grid compacto. Es el patrón usado por landing pages modernas (Apple, Linear, Stripe).

### Mockup de screenshot: Borde redondeado + sombra vs mockup de teléfono
**Decisión:** Imagen con `rounded-2xl` + `shadow-card` + borde sutil, sin mockup de teléfono  
**Alternativa considerada:** Mockup de teléfono (como en SmartCaptureSection)  
**Por qué:** El mockup de teléfono es más complejo y resta espacio al contenido. Para features queremos que se vea la interfaz claramente. El `rounded-2xl` + sombra da suficiente contexto de "app screen".

### Icono SVG: Reducido vs eliminado
**Decisión:** Mantener icono SVG reducido (`w-8 h-8`) como decoración junto al título  
**Alternativa considerada:** Eliminar completamente  
**Por qué:** El icono ayuda a identificar rápidamente la feature y mantiene consistencia visual con el diseño actual. Reducido evita competir con la imagen.

### Componentización: ¿Nuevo componente FeatureRow?
**Decisión:** Crear lógica de alternancia dentro del mismo `FeaturesSection.astro` usando la posición del índice  
**Alternativa considerada:** Componente `FeatureRow.astro` separado  
**Por qué:** Suficientemente simple como para mantenerlo inline. Si se reutiliza en otra página, se extrae después.

## Risks / Trade-offs

- [Rendimiento] 6 imágenes lazy-load pueden afectar LCP → Mitigación: `loading="lazy"` + `decoding="async"`
- [Consistencia] Las screenshots fueron tomadas en modo claro; en dark mode pueden verse diferentes → Mitigación: Aceptado trade-off, las screenshots representan la app real
- [Overhead] Las imágenes .webp ya existen y están optimizadas → Sin riesgo
- [Mobile] En mobile la alternancia no aplica (todas imagen-arriba) → El diseño se siente natural igual
