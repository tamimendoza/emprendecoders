# Design — Rebranding y Modernización

## Paleta del Logo (src de los colores)

El logo `public/logo.png` (128×128) tiene esta composición:

| Color | RGB | Hex | Cobertura |
|---|---|---|---|
| Navy | `rgb(22,36,62)` | `#16243E` | ~68% (fondo) |
| Magenta | `rgb(232,50,97)` | `#E83261` | ~10% (texto/icono) |
| Amarillo | `rgb(254,204,22)` | `#FECC16` | ~9% (detalles) |
| Blanco | `rgb(255,255,255)` | `#FFFFFF` | ~5% (luces) |

La homepage debe reflejar los 3 colores del logo:
- **Magenta** como primary (CTAs, iconos, links)
- **Navy** como secondary (fondos, glows)
- **Amarillo** como accent (badges, highlights, micro-interacciones)

## Estrategia de Skins (CSS Variables)

Dos capas de override:

1. **`html.many`** — Override `--color-primary` (→ púrpura) y `--color-accent` (→ teal) para la página de Many
2. **`html.light`** — Override de todos los colores para modo claro (fondo blanco, texto oscuro)

Los componentes usan `var(--color-*)` y Tailwind classes como `bg-primary`, `text-accent`, etc. El cambio de paleta es automático al agregar la clase al `<html>`.

## Paleta Emprendecoders (marca matriz)

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#E83261` | Botones, links, iconos, acentos principales |
| `--color-primary-dark` | `#C22850` | Hover states |
| `--color-primary-light` | `#F06085` | Gradientes, glows |
| `--color-secondary` | `#16243E` | Superficies, fondos de sección |
| `--color-accent` | `#FECC16` | Badges, highlights, warnings |
| `--color-bg` | `#0E1A2E` | Fondo principal dark |
| `--color-surface` | `#16243E` | Tarjetas |
| `--color-text` | `#F1F5F9` | Texto principal |

## Paleta Many (tema secundario)

| Token | Valor |
|---|---|
| `--color-primary` | `#5C358C` (púrpura) |
| `--color-primary-dark` | `#4A2A72` |
| `--color-primary-light` | `#7A5AA8` |
| `--color-accent` | `#2FB082` (teal) |

Activado via `brand="many"` prop en Layout → agrega `class="many"` al `<html>`.

## Arquitectura de Archivos

```
src/
├── layouts/
│   ├── Layout.astro              ← Skin system + brand prop
│   └── LegalLayout.astro         ← [Sprint 6] Layout legal
├── components/
│   ├── ui/                       ← Componentes atómicos (solo Badge en uso)
│   │   └── Badge.astro
│   ├── layout/
│   │   ├── Navbar.astro          ← Slots brand/nav-links/cta/mobile
│   │   ├── Footer.astro          ← Slot brand/links + copyright prop
│   │   ├── MobileMenu.astro
│   │   └── ScrollReveal.astro    ← Wrapper .reveal
│   └── sections/
│       ├── HeroSection.astro
│       ├── ProductsSection.astro
│       ├── FeaturesSection.astro     ← [Sprint 5]
│       ├── HowItWorksSection.astro   ← [Sprint 5]
│       ├── AudienceSection.astro     ← [Sprint 5]
│       └── CTASection.astro          ← [Sprint 5]
├── styles/
│   ├── design-tokens.css         ← Variables CSS + utilities
├── utils/
│   └── observer.js               ← IntersectionObserver singleton
```

## Tipografía

**Font stack**: `'Inter', system-ui, -apple-system, sans-serif`

Cargada via Google Fonts en Layout.astro. Escala tipográfica definida con `clamp()` para responsive fluido.

## Microinteracciones

| Elemento | Interacción | Timing |
|---|---|---|
| Navbar links | Subrayado animado desde centro | 250ms |
| Botones primary | Scale 1.02 + glow intensificado | 150ms |
| Cards | Elevación + translateY(-2px) | 250ms |
| Product cards | Arrow aparece al hover | 200ms |
| Scroll reveal | Fade in + translateY | 600ms |
