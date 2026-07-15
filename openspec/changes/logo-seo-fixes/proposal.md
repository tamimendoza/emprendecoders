# Proposal — Logo and SEO Fixes for Many App

## Problema

Actualmente en la página de la aplicación Many (`/app/many`):
1. El logo de Many (`many-logo.webp`) se muestra con bordes redondeados (`rounded-md`, `rounded-sm`) que recortan y tapan parte de los detalles del logo. Además, en la sección Hero de la página, hay un logo grande con `rounded-[18px]` y una sombra de caja (`shadow-[0_4px_20px_rgba(92,53,140,0.3)]`).
2. Se muestra un logotipo grande al inicio del contenido del Hero, lo cual es redundante dado que el logo ya aparece en la barra de navegación (Navbar) directamente arriba.
3. El sitio web carece de etiquetas meta de SEO específicas para redes sociales populares (como Open Graph y Twitter Cards), lo que limita la calidad de los enlaces compartidos y la visibilidad de la página en plataformas como Facebook, Twitter/X, LinkedIn y WhatsApp.

## Brand Analysis

Many utiliza los siguientes colores clave en su marca:
- **Color Primario (Púrpura Many)**: `#5C358C` (definido como `--color-primary`), extraído de `many-logo.webp`.
- **Color de Acento (Teal Many)**: `#2FB082` (definido como `--color-accent`).

El logo oficial `many-logo.webp` cuenta con sus propios bordes y diseño detallado que no debe ser recortado por clases CSS intrusivas. Al quitar las clases `rounded`, el logo lucirá limpio y fiel a su diseño original.

## Solución Propuesta

1. **Optimización del Logo de Many (`many-logo.webp`)**:
   - Quitar todas las clases de bordes redondeados (`rounded-md`, `rounded-sm`) del logo de Many en `src/pages/app/many.astro` (Navbar y Footer) y en `src/layouts/LegalLayout.astro`.
   - En la sección Hero de `src/pages/app/many.astro`, remover por completo la etiqueta del logo, ya que su presencia es redundante al estar ya visible en el Navbar superior.

2. **Etiquetas SEO y Metadatos**:
   - En `src/layouts/Layout.astro`, implementar metaetiquetas Open Graph (OG) y Twitter Cards completas, utilizando URLs canónicas dinámicas construidas a partir de `Astro.url` y `Astro.site`.
   - Implementar valores predeterminados adaptativos para título, descripción e imagen OG según el `brand` configurado (`many` o `emprendecoders`).

## Fuera de Alcance

- No se debe modificar la página de inicio global (`/` o `src/pages/index.astro`).
- El logo de Many en `ProductsSection.astro` (que se muestra en la página de inicio) no se alterará para preservar el diseño original de la sección de productos del index.
