# Design — Smart Capture Steps

## New Component: SmartCaptureSection.astro

Reemplaza `HowItWorksSection.astro` en `/app/many`.

### Layout

```
Desktop (lg+):
┌──────────────────────────────────────────────────┐
│  badge: "Cómo funciona"                         │
│  title: "Captura automática **inteligente**"    │
│  subtitle (opcional)                            │
│                                                  │
│  ┌─────────────────────┐  ┌──────────────────┐  │
│  │  ● Paso 1 (activo)  │  │                  │  │
│  │  ├─ descripción     │  │   [Phone Mockup] │  │
│  │                     │  │   Screenshot      │  │
│  │  ○ Paso 2           │  │   cambia según    │  │
│  │  ○ Paso 3           │  │   paso activo     │  │
│  └─────────────────────┘  └──────────────────┘  │
│                                                  │
│  [Privacy note box]                              │
└──────────────────────────────────────────────────┘

Mobile (< lg):
┌────────────────────────────────────┐
│  badge / title / subtitle         │
├────────────────────────────────────┤
│  ┌──────────────────────────────┐ │
│  │      [Phone Mockup]          │ │
│  │      Screenshot actual       │ │
│  └──────────────────────────────┘ │
│                                    │
│  ○ Paso 1 — título                │
│    descripción expandible         │
│  ○ Paso 2 — título                │
│    descripción expandible         │
│  ○ Paso 3 — título                │
│    descripción expandible         │
│                                    │
│  [Privacy note box]               │
└────────────────────────────────────┘
```

### Phone Mockup

- Contenedor con bordes redondeados `rounded-2xl` (simula un teléfono)
- Ratio `aspect-[9/19]` aproximadamente
- Borde `border-primary/15`
- Sombra `shadow-card` o `shadow-elevated`
- La imagen interna cambia con transición `opacity + scale` (0.3s cubic-bezier)
- Indicador dinámico: dots o número de paso actual abajo del mockup

### Steps (columna izquierda)

Cada paso tiene:
- **Número** (círculo con fondo primary cuando activo, gris/borde cuando inactivo)
- **Título** en negrita
- **Descripción** oculta por defecto, se expande al activar (max-height transition)
- **Icono** pequeño decorativo (opcional)
- Línea conectora vertical entre pasos (oculta en mobile)

Step activo:
- Número con `bg-primary text-white`
- Título con `text-primary` o más peso
- Descripción visible con `max-h-40` animado
- Border-left o indicador visual

Step inactivo:
- Número con `border border-primary/20 text-skin-secondary`
- Título con peso normal
- Descripción oculta (max-h-0)

### Auto-play (opcional)

Si el usuario no interactúa en 5 segundos, los pasos avanzan automáticamente en bucle. Al hacer clic en un paso se desactiva el auto-play. Indicador de auto-play activo (opcional).

### Archivos

| Archivo | Acción |
|---|---|
| `src/components/sections/SmartCaptureSection.astro` | **Nuevo** — componente principal |
| `src/components/sections/smart-capture.js` | **Nuevo** — lógica de tabs, transición, auto-play |
| `src/pages/app/many.astro` | Modificar — importar y usar SmartCaptureSection en lugar de HowItWorksSection |
| `src/components/sections/HowItWorksSection.astro` | Mantener (sin cambios) o eliminar si no se usa en otras páginas |

### Estados del componente

| Estado | Comportamiento |
|---|---|
| **Initial load** | Primer paso activo, screenshot correspondiente visible |
| **Click paso** | Expande descripción, marca paso activo, transiciona screenshot |
| **Auto-play** | Avanza al siguiente paso cada 5s, en bucle |
| **Hover (desktop)** | Efecto sutil en paso inactivo (background) |
| **Mobile** | Mockup arriba, pasos abajo como acordeón |
| **Empty/waiting** | No aplica (datos estáticos) |
