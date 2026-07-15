# Design — Many Brand Customization

## Token Structure

Bajo el namespace `html.many`, los tokens principales definidos en `src/styles/design-tokens.css` son:
- `--color-primary`: `#5C358C` (Púrpura)
- `--color-accent`: `#2FB082` (Teal)
- `--color-text`: `#F1F5F9` (Oscuro) o `#0E1A2E` (Claro)

Esta estructura asegura que cualquier componente que consuma variables de Tailwind como `bg-primary` o `text-primary` herede automáticamente la paleta de Many cuando la etiqueta `<html>` tenga la clase `many`.

## Archivos a Modificar

| Archivo | Ruta | Rol / Cambio Propuesto |
|---|---|---|
| `many.astro` | `src/pages/app/many.astro` | Actualizar el título de la página (metaTitle), el slot de marca en `Navbar` (logo + texto) y el slot de marca/copyright en `Footer`. |
| `ManyComponent.astro` | `src/components/ManyComponent.astro` | Reemplazar `developerName` de `"Emprendecoders"` a `"Many"` para la política de privacidad. |
| `many.astro` (Legal) | `src/pages/app/privacidad/many.astro` | Actualizar el título en `<LegalLayout>` para usar "Many" en vez de "Emprendecoders". |
| `many.astro` (Terms) | `src/pages/app/terminos/many.astro` | Actualizar el título en `<LegalLayout>` y el texto de proveedor/creador del servicio en el cuerpo de la página. |

## Modificaciones Detalladas de Componentes

### 1. Navbar en `src/pages/app/many.astro`
- **Antes**:
  ```astro
  <a slot="brand" href="/" class="flex items-center gap-2.5 text-sm sm:text-[15px] font-bold text-skin-primary">
    <img src="/many-logo.webp" alt="" width="24" height="24" class="rounded-md" />
    Emprendecoders
  </a>
  ```
- **Después**:
  ```astro
  <a slot="brand" href="/app/many" class="flex items-center gap-2.5 text-sm sm:text-[15px] font-bold text-skin-primary">
    <img src="/many-logo.webp" alt="" width="24" height="24" class="rounded-md" />
    Many
  </a>
  ```

### 2. Footer en `src/pages/app/many.astro`
- **Antes**:
  ```astro
  <Footer copyright="Emprendecoders. Todos los derechos reservados.">
    <a slot="brand" href="/" class="flex items-center gap-2 text-sm font-bold text-skin-primary">
      <svg width="16" height="16" ... />
      Emprendecoders
    </a>
  ```
- **Después**:
  ```astro
  <Footer copyright="Many. Todos los derechos reservados.">
    <a slot="brand" href="/app/many" class="flex items-center gap-2.5 text-sm font-bold text-skin-primary">
      <img src="/many-logo.webp" alt="" width="16" height="16" class="rounded-sm" />
      Many
    </a>
  ```
