## Why

En dark mode, el navbar del index principal tiene tres problemas de legibilidad y jerarquía visual:

1. **Fondo grisáceo**: `bg-white/80` + `backdrop-blur-xl` sobre el contenido oscuro de la página crea un efecto gris turbio. El navbar debería tener un fondo sólido y consistente con el tema oscuro.
2. **Texto degradado rojo/amarillo**: La marca "Emprendecoders" usa `text-gradient-brand` (pink `#E83261` → yellow `#FECC16`). En un navbar fijo, un degradado tan llamativo compite con el contenido y reduce la jerarquía visual. La marca debe ser limpia y legible.
3. **Enlace "Many" invisible**: `text-skin-secondary` (`#A0B4D4`) sobre el fondo semi-transparente con blur tiene contraste insuficiente. El usuario no distingue el enlace del fondo.

## What Changes

1. **Fondo sólido**: Reemplazar `dark:bg-skin-base/80 bg-white/80 backdrop-blur-xl` por `bg-skin-base` (sólido, se adapta al tema vía CSS vars). Sin blur, sin transparencia.
2. **Sin degradado en la marca**: El texto "Emprendecoders" usa `text-skin-primary` (blanco en dark, oscuro en light) en vez de `text-gradient-brand`.
3. **Consistencia en LegalLayout**: Mismo tratamiento de fondo sólido en páginas legales.
4. **Se mantiene todo lo anterior**: `dark` class en SSR, script que remueve clase opuesta, MobileMenu con fondo explícito, logo siempre presente.

## Capabilities

### New Capabilities
- `navbar-dark-mode-compatible`: La barra de navegación es legible en ambos temas desde el primer renderizado.

### Modified Capabilities
- `brand-consistency`: El slot `brand` del navbar siempre incluye logo + texto "Emprendecoders" en todas las páginas.
- `navbar-visual-hierarchy`: Fondo sólido, marca sin degradado, enlaces con contraste suficiente.

## Impact

- `src/components/layout/Navbar.astro`: Cambiar fondo a sólido, remover blur y gradient
- `src/layouts/LegalLayout.astro`: Cambiar fondo a sólido
