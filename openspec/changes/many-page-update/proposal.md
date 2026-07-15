# Many Page Update — Actualización landing page de Many

## Problema

La página `/app/many` actual usa 3 screenshots placeholder (`1.webp`, `2.webp`, `3.webp`) que no representan fielmente la app real de Many. El proyecto Android en `/home/tmendoza/AndroidStudioProjects/Many` tiene muchas más funcionalidades que no se muestran. La landing page no comunica la riqueza del producto.

## Objetivo

Actualizar la landing page de Many para que refleje exactamente lo que ofrece la app Many real, usando las capturas reales del proyecto con etiquetas descriptivas y un sistema de galería interactiva que permita ampliar cada screenshot al hacer clic (lightbox). También agregar una sección de "funcionalidades clave" que describa cada pantalla.

## Screenshots disponibles (públicas)

| # | Archivo | Descripción | Sección propuesta |
|---|---|---|---|
| 1 | `1.webp` | App lista para abrir (icono + nombre) | Hero / apertura |
| 2 | `2.webp` | Dashboard: saldo, ingresos/gastos del mes, últimos movimientos (claro) | Hero / dashboard |
| 12 | `12.webp` | Dashboard en modo oscuro | Galería / demo tema |
| 3 | `3.webp` | Lista de movimientos con edición (claro) | Funcionalidad: movimientos |
| 11 | `11.webp` | Lista de movimientos con edición (oscuro) | Galería / demo tema |
| 4 | `4.webp` | Reporte del mes con gráficos | Funcionalidad: reportes |
| 10 | `10.webp` | Reportes del mes (vista alternativa) | Funcionalidad: reportes |
| 5 | `5.webp` | Ajustes: perfiles, notificaciones, preferencias | Funcionalidad: configuración |
| 6 | `6.webp` | Activación de notificaciones | Funcionalidad: captura automática |
| 7 | `7.webp` | Nuevo ingreso/gasto | Funcionalidad: registro |
| 8 | `8.webp` | Movimiento pendiente desde notificación visible al registrar | Funcionalidad: captura automática |
| 9 | `9.webp` | Registrar movimiento desde la notificación | Funcionalidad: captura automática |
| 13 | `13.webp` | Editar categoría (icono, color, nombre) | Funcionalidad: personalización |

## Estrategia

1. **Hero**: Mantener estructura actual pero usar screenshots reales: 1, 2, y 4 (o 10) en el grid de 3. Mostrar dark/light toggle visual con screenshots 2 y 12.
2. **Galería interactiva**: Nueva sección con todas las capturas en grilla responsiva (3-4 columnas). Click para abrir lightbox (modal con overlay oscuro, imagen ampliada, flechas de navegación, cerrar con ESC/click fuera).
3. **Sección features**: Mantener FeaturesSection pero actualizar descripciones para alinear con cada screenshot.
4. **HowItWorks**: Actualizar screenshots de ejemplo para que usen las reales (6, 8, 9 para el flujo de notificaciones).
5. **CTAs**: Sin cambios significativos.

## Alcance

- Modificar `src/pages/app/many.astro` (hero screenshots)
- Modificar `src/components/sections/FeaturesSection.astro` (contenido feature cards)
- Modificar `src/components/sections/HowItWorksSection.astro` (imágenes de ejemplo)
- Crear `src/components/sections/ScreenshotGallery.astro` (galería con lightbox)
- Crear script JS para lightbox (modal con navegación entre screenshots)

## Fuera de Alcance

- Voice Notifier landing page
- Tests automatizados
- Homepage / otras páginas
