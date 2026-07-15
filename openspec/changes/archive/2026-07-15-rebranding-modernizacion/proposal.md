# Rebranding y Modernización — Propuesta

## Problema Detectado

La web actual usa `#10B981` (verde esmeralda) como color primario. **Este color no pertenece a ninguna de las dos marcas** (Emprendecoders ni Many). Es un verde genérico que crea una desconexión entre el logo y la interfaz.

## Análisis de Identidad Visual

### Logotipo de Emprendecoders (`public/logo.png`)

| Elemento | Color | Percepción |
|---|---|---|
| Fondo | `#16243E` (Navy profundo) | Seriedad, confianza, tecnología |
| Acento principal | `#E83261` (Magenta) | Energía, pasión, creatividad |
| Acento secundario | `#FECC16` (Amarillo dorado) | Optimismo, claridad, valor |
| Neutro | `#FFFFFF` (Blanco) | Pureza, minimalismo |

**Personalidad**: Moderna, vibrante, tecnológica, emprendedora.

### Logotipo de Many

| Elemento | Color | Percepción |
|---|---|---|
| Dominante | `#5C358C` (Púrpura) | Creatividad, finanzas, realeza digital |
| Secundario | `#2FB082` (Teal) | Crecimiento, finanzas saludables, calma |
| Acento | `#ED693F` (Naranja) | Acción, alertas, energía |

**Personalidad**: Fintech moderna, confiable, vibrante.

## Estrategia

Usar la paleta del logo de Emprendecoders como sistema principal del sitio corporativo (marca matriz). Los 3 colores del logo (navy `#16243E`, magenta `#E83261`, amarillo `#FECC16`) deben estar visibles en la homepage: magenta como primary (CTAs, iconos), navy como secondary (glows, fondos), amarillo como accent (badges, highlights).

La página de Many usará su propia paleta (púrpura + teal) como tema secundario vía `html.many` class + CSS variable override.

## Alcance

- **Design system**: Paletas, tipografía Inter, espaciados, radios, sombras, transiciones
- **Componentes UI**: Badge (único componente atómico en uso)
- **Layout**: Navbar, Footer, MobileMenu, ScrollReveal
- **Homepage**: HeroSection, ProductsSection
- **Página Many**: Hero, HowItWorks, Features, Audience, CTA sections + tema Many
- **Páginas legales**: LegalLayout con tipografía optimizada para lectura

## Fuera de Alcance

- Voice Notifier landing page (futuro sprint)
- Tests automatizados (no hay runner configurado)
- Migración a modo claro automático (toggle manual decidido)
