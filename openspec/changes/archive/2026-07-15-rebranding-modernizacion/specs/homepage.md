# Spec: Homepage

## HeroSection (basada en logo.png)

- GIVEN el logo de Emprendecoders (`public/logo.png`) con fondo navy, acento magenta y amarillo
- THEN el hero debe usar los 3 colores del logo en sus elementos
- AND glow principal debe ser `bg-primary` (magenta, top-right)
- AND glow secundario debe ser `bg-secondary` (navy, bottom-left)
- AND glow terciario debe ser `bg-accent` (amarillo, subtle, left)
- AND Badge "Estudio de desarrollo" debe usar `variant="accent"` (amarillo) con punto pulsante
- AND título debe usar `text-gradient-brand` (magenta → amarillo)
- AND párrafo con `text-skin-secondary`
- AND slot para contenido adicional (ProductsSection)

## ProductsSection

- GIVEN la sección de productos
- THEN Many link debe mostrar logo + nombre + descripción, con colores primarios (magenta)
- AND Voice Notifier debe usar acento amarillo (variant accent) en el borde e icono
- AND "Más servicios / próximamente" debe aparecer con opacidad reducida y colores neutros
- AND cada card debe tener hover con flecha animada

## Navbar (global)

- GIVEN la navbar
- THEN debe tener slot `brand`
- AND slot `cta`
- AND slot `nav-links`
- AND en mobile: botón hamburguesa que togglea MobileMenu
- AND backdrop blur con `bg-dark/80`

## Footer (global)

- GIVEN el footer
- THEN debe tener slot `brand` con link al home
- AND slot `links` para enlaces
- AND copyright con año dinámico
