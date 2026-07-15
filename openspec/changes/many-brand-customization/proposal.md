# Proposal — Many Brand Customization (Personalización de Marca de Many)

## Problema

Actualmente, la landing page de Many (`/app/many`) y sus páginas legales asociadas (`/app/privacidad/many` y `/app/terminos/many`) muestran la marca corporativa "Emprendecoders" en el navbar, el footer y los textos informativos. 
Para mejorar la identidad de producto y el posicionamiento de marca de Many, el nombre "Emprendecoders" debe reemplazarse por "Many" en estas secciones específicas, de manera que la landing page y las páginas legales actúen como un portal exclusivo e independiente para Many.
Al mismo tiempo, la página principal del sitio (`/`) debe seguir mostrando la marca "Emprendecoders" sin ningún tipo de cambio.

## Brand Analysis (Análisis de Marca)

Many tiene su propia identidad visual definida por los siguientes tokens de diseño en `src/styles/design-tokens.css`:
- **Color Primario (Primary Color)**: Púrpura Many (`#5C358C` / `--color-primary`), extraído del logo oficial `many-logo.webp`.
- **Color de Acento (Accent Color)**: Teal Many (`#2FB082` / `--color-accent`), utilizado para botones secundarios y estados de éxito.

La actualización debe:
1. Reemplazar el texto "Emprendecoders" en el Navbar de `/app/many` por "Many".
2. Apuntar el enlace de marca del Navbar de `/app/many` hacia `/app/many` en lugar del index global `/` para mantener al usuario dentro de la experiencia de Many.
3. Reemplazar el texto "Emprendecoders" y el logotipo general de la caja 3D en el Footer de `/app/many` por el texto "Many" y el ícono/logo de Many (`many-logo.webp`).
4. Actualizar el aviso de derechos de autor (copyright) a "Many. Todos los derechos reservados."
5. Adaptar los textos de las páginas legales `/app/privacidad/many` y `/app/terminos/many` para que listen a "Many" como la marca identificadora del servicio, manteniendo el contacto en `contacto@emprendecoders.com`.

## Fuera de Alcance

- La página de inicio (`/`) de Emprendecoders.
- Páginas de otros productos (e.g., Voice Notifier `/app/privacidad/voicenotifier` o `/app/terminos/voicenotifier`).
- Modificaciones estructurales profundas de los componentes de navegación globales, los cuales deben seguir soportando la marca por defecto de "Emprendecoders".
