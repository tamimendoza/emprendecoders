# Design — Logo and SEO Fixes

## Token Structure and Visual Styling

Los tokens definidos en `src/styles/design-tokens.css` para el tema de Many (`html.many`) son:
- `--color-primary`: `#5C358C` (Púrpura Many)
- `--color-accent`: `#2FB082` (Teal Many)

### Modificación de Sombreado (Drop Shadow vs Box Shadow)

Para el logo de Many, las clases CSS originales aplican bordes redondeados (`rounded-md`, `rounded-sm`) para evitar que la sombra rectangular del `box-shadow` (`shadow-[...]`) luzca rígida alrededor de los bordes transparentes de la imagen. 

Al remover las clases `rounded-*` para evitar que el logo se recorte, usaremos `filter: drop-shadow(...)` en el Hero si deseáramos añadir un sombreado que siga la silueta exacta del logo. Sin embargo, dado que el logo del Hero se eliminará por completo (evitando duplicidad con el Navbar), esta modificación se aplica principalmente al concepto de sombras sobre logos transparentes de la marca.

Para los logos en el Navbar y Footer, eliminaremos las clases `rounded-*` y nos aseguraremos de que mantengan su aspecto cuadrado/original o su silueta transparente natural.

## Archivos Modificados

| Archivo | Ruta | Rol / Cambio Propuesto |
|---|---|---|
| `Layout.astro` | `src/layouts/Layout.astro` | Implementar etiquetas Open Graph y Twitter Cards completas, canonización de URL y adaptabilidad de metadata basada en el prop `brand`. |
| `many.astro` | `src/pages/app/many.astro` | Remover el logo del Hero (debajo del menú). Quitar los bordes redondeados del logo del Navbar y del Footer. |
| `LegalLayout.astro` | `src/layouts/LegalLayout.astro` | Quitar la clase `rounded-md` del logo de Many en la barra de navegación de las páginas legales. |

## Modificaciones Detalladas

### 1. `src/layouts/Layout.astro`
- Adición de `og:type`, `og:url`, `twitter:url`, `twitter:image`, `twitter:title`, `twitter:description` y `<link rel="canonical">`.
- Configuración de metadatos adaptativos según `brand`.

### 2. `src/pages/app/many.astro`
- Navbar Brand Logo:
  - **Antes**: `<img src="/many-logo.webp" alt="" width="24" height="24" class="rounded-md" />`
  - **Después**: `<img src="/many-logo.webp" alt="" width="24" height="24" class="object-contain" />`
- Hero Logo:
  - **Antes**: `<img src="/many-logo.webp" alt="Many" width="68" height="68" class="rounded-[18px] shadow-[0_4px_20px_rgba(92,53,140,0.3)]" />`
  - **Después**: *(Remover por completo la línea)*
- Footer Brand Logo:
  - **Antes**: `<img src="/many-logo.webp" alt="" width="16" height="16" class="rounded-sm" />`
  - **Después**: `<img src="/many-logo.webp" alt="" width="16" height="16" class="object-contain" />`

### 3. `src/layouts/LegalLayout.astro`
- Navbar Brand Logo para Many:
  - **Antes**: `<img src="/many-logo.webp" alt="" width="24" height="24" class="rounded-md" />`
  - **Después**: `<img src="/many-logo.webp" alt="" width="24" height="24" class="object-contain" />`
