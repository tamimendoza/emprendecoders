# Spec: Design System

## Colors

### Emprendecoders theme (default)

- GIVEN el logo de Emprendecoders con navy `#16243E`, magenta `#E83261` y amarillo `#FECC16`
- WHEN se define `--color-primary`
- THEN debe ser `#E83261` (magenta)
- AND `--color-secondary` debe ser `#16243E` (navy)
- AND `--color-accent` debe ser `#FECC16` (amarillo)

### Many theme (`.many` class)

- GIVEN el logo de Many con púrpura `#5C358C` y teal `#2FB082`
- WHEN se agrega `class="many"` al `<html>`
- THEN `--color-primary` debe ser `#5C358C` (púrpura)
- AND `--color-accent` debe ser `#2FB082` (teal)

### Light mode (`.light` class)

- GIVEN el toggle de tema activado
- WHEN se agrega `class="light"` al `<html>`
- THEN el fondo debe ser claro (`#F8FAFC`)
- AND el texto debe ser oscuro (`#0E1A2E`)
- AND los bordes deben ser semitransparentes claros

## Typography

- GIVEN la página carga
- THEN la font-family debe ser `'Inter', system-ui, -apple-system, sans-serif`
- AND H1 debe usar `clamp(2rem, 5vw, 3.5rem)` con weight 800
- AND H2 debe usar `clamp(1.5rem, 3.5vw, 2.25rem)` con weight 800

## Spacing & Radius

- GIVEN el design system
- THEN espaciados deben usar escala de 4px: `--space-1` (4px) a `--space-24` (96px)
- AND radios: `rounded-lg` (0.5rem), `rounded-xl` (0.75rem), `rounded-2xl` (1rem)

## Shadows

- GIVEN un elemento primario (botón, badge, card)
- THEN `shadow-glow` debe usar color magenta (`rgba(232, 50, 97, 0.35)`)
- WHEN en tema Many
- THEN el glow debe usar el color púrpura correspondiente
