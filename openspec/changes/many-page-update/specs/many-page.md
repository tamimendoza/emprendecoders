# Spec: Many Page Update (/app/many)

## Hero

- GIVEN el hero de Many
- THEN debe mostrar logo de Many con shadow púrpura
- AND badges "100% Offline", "Privacidad Total", "Sin Registro"
- AND título "Tus finanzas, **sin internet.** Sin cuentas. Sin límites."
- AND párrafo descriptivo
- AND botón CTA "Descargar Many gratis" con bg primary + glow
- AND grid de 3 screenshots con imágenes reales:
  - Screenshot 1 (app ready) centrado
  - Screenshot 2 (dashboard claro) rotado -6deg
  - Screenshot 4 o 10 (reportes) rotado +6deg
  - Laterales ocultas en mobile (sm:block)

## HowItWorksSection

- GIVEN la sección "Cómo funciona"
- THEN debe mantener 3 steps numerados
- AND step 1 debe mostrar screenshot 6 (activar notificaciones) como imagen de ejemplo
- AND step 2 debe mostrar screenshot 8 (notificación detectada)
- AND step 3 debe mostrar screenshot 9 (registrar desde notificación)
- AND flechas connector entre pasos (visible en desktop)
- AND privacy note box al final

## FeaturesSection

- GIVEN la sección "Funcionalidades"
- THEN las feature cards deben actualizarse a las reales de la app:

  | Icono | Título | Descripción | Screenshot asociado |
  |---|---|---|---|
  | layout-dashboard | Panel principal | Balance, ingresos vs gastos del mes y últimos 5 movimientos de un vistazo. | 2 |
  | list | Movimientos | Lista completa con filtros por tipo, fecha, categoría, monto y método de pago. | 3 |
  | bar-chart | Reportes mensuales | Gráficos por categoría, evolución multi-mes y desglose por tarjeta con secciones expandibles. | 4 |
  | wallet | Registro de gastos | Carga rápida con selección de categoría, método de pago y fecha. Soporte para ingreso y gasto. | 7 |
  | bell | Captura automática | Many lee notificaciones bancarias y pre-completa el formulario. Solo confirmás o corregís. | 6 |
  | settings | Personalización | Múltiples perfiles, tema claro/oscuro, moneda, formato de número e idioma. | 5 |

- AND cada card debe mostrar screenshot asociado al hover (opcional) o badge linking a galería

## ScreenshotGallery (nueva sección)

- GIVEN una nueva sección "Explorá la app"
- THEN debe mostrar grilla responsiva de screenshots:
  - Desktop: 4 columnas
  - Tablet: 3 columnas
  - Mobile: 2 columnas
- AND cada thumbnail debe tener:
  - Borde sutil `border-primary/10`
  - Hover con `hover:border-primary/30` + `hover:shadow-elevated` + escala 1.02
  - Label superpuesto con nombre de la pantalla
- AND al hacer clic en un thumbnail:
  - Abrir lightbox modal (overlay oscuro al 90%)
  - Mostrar imagen en tamaño completo (max 90vh, centrada)
  - Mostrar label/nombre de la pantalla abajo
  - Botón cerrar (X) arriba a la derecha
  - Flechas izquierda/derecha para navegar entre screenshots
  - Cerrar con ESC o click fuera de la imagen
  - Prevenir scroll del body mientras el modal está abierto

## CTASection

- GIVEN la sección "Descarga ahora"
- THEN mantener diseño actual
- AND botón Google Play con link a Play Store
- AND badges Gratis / Offline / Sin registro

## Etiquetas de screenshots para la galería

| # | Etiqueta |
|---|---|
| 1 | Many lista para usar |
| 2 | Panel principal (claro) |
| 12 | Panel principal (oscuro) |
| 3 | Movimientos (claro) |
| 11 | Movimientos (oscuro) |
| 4 | Reportes mensuales |
| 10 | Reportes — vista por tarjeta |
| 5 | Ajustes y preferencias |
| 6 | Activar notificaciones |
| 7 | Nuevo ingreso o gasto |
| 8 | Notificación detectada |
| 9 | Registrar desde notificación |
| 13 | Editar categoría |

## Tema Many

- GIVEN la página `/app/many`
- WHEN Layout recibe `brand="many"`
- THEN `<html>` debe tener `class="many"`
- AND `--color-primary` es púrpura `#5C358C`
- AND `--color-accent` es teal `#2FB082`
