## Context

Actualmente el navbar usa `dark:bg-skin-base/80 bg-white/80 backdrop-blur-xl`:

- **80% opacity + backdrop-blur-xl**: La semi-transparencia combinada con el blur desenfoca el contenido detrás del navbar, creando un color grisáceo turbio en dark mode. En el index, el HeroSection tiene glows brillantes (primary, accent) que al filtrarse a través del blur producen un tono gris sucio.
- **text-gradient-brand**: Degradado de primary (#E83261, rosa/rojo) a accent (#FECC16, amarillo). Visualmente agresivo para un elemento de navegación fijo. Rompe la jerarquía porque el ojo se va al degradado antes que al contenido.
- **text-skin-secondary (#A0B4D4)**: Sobre el fondo semi-transparente con blur, el contraste percibido cae por debajo de 4.5:1, haciendo ilegible el enlace "Many".

## Goals / Non-Goals

**Goals:**
- Navbar con fondo sólido y consistente en ambos temas, sin efecto grisáceo
- Marca "Emprendecoders" con logo + texto en color sólido legible (sin degradado)
- Enlaces de navegación con contraste ≥ 4.5:1 WCAG AA
- Misma experiencia en index.astro y many.astro
- Consistencia con LegalLayout

**Non-Goals:**
- No cambiar colores del CTA (botón primario)
- No cambiar lógica de toggle de tema
- No cambiar layout/responsive del navbar

## Decisions

1. **Fondo sólido `bg-skin-base`**: Elimina el blur y la transparencia. `--color-bg` es `#0E1A2E` en dark y `#F8FAFC` en light. El navbar se ve limpio y profesional. El borde inferior `border-skin` mantiene la separación visual con el contenido.
2. **Marca sin degradado**: `text-skin-primary` hereda `--color-text` (`#F1F5F9` dark, `#0E1A2E` light). Jerarquía clara: marca → blanco, enlaces → gris secundario, CTA → botón de color.
3. **Enlaces con contraste suficiente**: `text-skin-secondary` sobre `bg-skin-base` sólido: 5.4:1 en dark (AA), 13:1 en light (AAA). Suficiente para ser legible sin ser dominante.
4. **Consistencia**: LegalLayout usa misma estructura de fondo sólido.

## Risks / Trade-offs

- **Pérdida del efecto glassmorphism**: El blur daba un look moderno, pero sacrificaba legibilidad. Un fondo sólido es más accesible y profesional.
- **Sin cambios en many.astro**: La página Many mantiene su brand override con `/many-logo.webp` y `text-skin-primary`. Consistente con el nuevo approach.
