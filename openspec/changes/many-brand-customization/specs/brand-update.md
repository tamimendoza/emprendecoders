# Spec: Many Brand Customization

## Landing Page Brand Identity

- GIVEN la página `/app/many`
- WHEN el Navbar se renderiza
- THEN el slot `brand` debe mostrar el texto "Many" junto al logo `/many-logo.webp` (24x24px)
- AND el link de marca debe redireccionar a `/app/many`
- WHEN el Footer se renderiza
- THEN el slot `brand` debe mostrar el texto "Many" junto a la imagen `/many-logo.webp` (16x16px) en lugar del logo vectorial 3D de Emprendecoders
- AND el copyright en el footer debe renderizar "© [Año] Many. Todos los derechos reservados." (en lugar de "© [Año] Emprendecoders. Todos los derechos reservados.")
- AND los elementos interactivos del Navbar/Footer deben heredar los colores definidos bajo el tema `html.many` (`--color-primary` #5C358C y `--color-accent` #2FB082)

## Legal Pages Brand Identity

- GIVEN la página `/app/privacidad/many`
- WHEN se renderiza la página
- THEN el título debe ser "Política de Privacidad — Many | Many"
- AND en el texto de la política de privacidad se debe listar al proveedor/creador del servicio como "Many" (a través de la variable `developerName`)
- GIVEN la página `/app/terminos/many`
- WHEN se renderiza la página
- THEN el título debe ser "Términos y Condiciones — Many | Many"
- AND en el cuerpo de la página se debe referenciar al proveedor como "Many" en lugar de "Emprendecoders"

## Global Homepage Isolation

- GIVEN la página de inicio `/` (index.astro)
- WHEN se renderizan los componentes comunes `Navbar` y `Footer`
- THEN deben mostrar el texto "Emprendecoders" con sus logos e iconos predeterminados sin verse afectados por los cambios de `/app/many`
- AND el copyright del footer debe ser "© [Año] Emprendecoders"
