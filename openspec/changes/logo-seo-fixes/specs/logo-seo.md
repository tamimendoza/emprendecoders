# Spec: Logo and SEO Optimizations

## Logo Rendering without Crop (app/Many)

- GIVEN la página `/app/many`
- WHEN el Navbar se renderiza
- THEN el logo de Many `/many-logo.webp` no debe tener la clase `rounded-md` ni ninguna clase de redondeado
- AND debe mostrarse usando la clase `object-contain`
- WHEN el Footer se renderiza
- THEN el logo de Many `/many-logo.webp` no debe tener la clase `rounded-sm`
- AND debe mostrarse usando la clase `object-contain`

## Legal Pages Navbar Logo

- GIVEN la página de privacidad `/app/privacidad/many` o de términos `/app/terminos/many`
- WHEN se renderiza el Navbar común para la marca `many`
- THEN el logo `/many-logo.webp` no debe tener la clase `rounded-md`
- AND debe mostrarse usando la clase `object-contain`

## Hero Logo Duplication Removal

- GIVEN la página `/app/many`
- WHEN la página de inicio de Many se carga
- THEN la sección Hero principal (debajo del Navbar) no debe renderizar el logotipo `/many-logo.webp`
- AND el título `<h1>` y los badges deben ser los primeros elementos visuales en el flujo de contenido del Hero

## Social Media SEO tags configuration

- GIVEN cualquier página que utilice `<Layout>`
- WHEN se compila o renderiza la página
- THEN el `<head>` debe contener las siguientes metaetiquetas Open Graph y Twitter:
  - `og:type` con valor `"website"`
  - `og:url` apuntando a la URL canónica absoluta
  - `og:title` con el título de la página
  - `og:description` con la descripción de la página
  - `og:image` con la URL absoluta de la imagen de Open Graph
  - `twitter:card` con valor `"summary_large_image"`
  - `twitter:url` apuntando a la URL canónica absoluta
  - `twitter:title` con el título
  - `twitter:description` con la descripción
  - `twitter:image` con la URL absoluta de la imagen
  - `<link rel="canonical">` apuntando a la URL canónica absoluta
- AND cuando el prop `brand` sea `"many"`
  - el título por defecto debe ser `"Many — Control de Gastos y Finanzas Personales"`
  - la descripción por defecto debe ser la descripción oficial de Many (`--color-primary` Púrpura Many `#5C358C` como base de estilo)
  - la imagen de OG por defecto debe ser `/many-icon.png`
- AND cuando el prop `brand` sea `"emprendecoders"`
  - el título por defecto debe ser `"Emprendecoders — Servicios digitales para emprendedores"`
  - la descripción por defecto debe ser la descripción oficial de Emprendecoders
  - la imagen de OG por defecto debe ser `/logo.png`
