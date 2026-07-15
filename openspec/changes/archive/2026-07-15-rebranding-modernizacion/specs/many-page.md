# Spec: Many Page (/app/many)

## Theme

- GIVEN la página `/app/many`
- WHEN Layout recibe `brand="many"`
- THEN el `<html>` debe tener `class="many"`
- AND `--color-primary` debe ser púrpura `#5C358C`
- AND `--color-accent` debe ser teal `#2FB082`

## Hero

- GIVEN el hero de Many
- THEN debe mostrar logo de Many con shadow púrpura
- AND badges "100% Offline", "Privacidad Total", "Sin Registro" con color primary (púrpura)
- AND título con `text-gradient`
- AND párrafo descriptivo
- AND botón CTA "Descargar Many gratis" con bg primary + glow
- AND grid de 3 screenshots responsivos (2 laterales ocultos en mobile)

## HowItWorksSection

- GIVEN la sección "Cómo funciona"
- THEN debe tener 3 steps numerados con iconos
- AND flechas connector entre pasos (visible en desktop)
- AND privacy note box al final
- AND color primary (púrpura) en iconos y números

## FeaturesSection

- GIVEN la sección "Funcionalidades"
- THEN debe tener grid de 6 feature cards
- AND cada card debe tener icono en `text-accent` (teal) con fondo `bg-primary/10`
- AND hover con `hover:border-accent/20`
- AND fondo de sección `bg-secondary text-light`

## AudienceSection

- GIVEN la sección "Para quién es"
- THEN debe tener 3 audience cards con iconos grandes
- AND cada card debe tener `bg-white` con `border-slate-200/60`
- AND hover con `hover:border-primary/20 hover:shadow-elevated`

## CTASection

- GIVEN la sección "Descarga ahora"
- THEN debe tener botón de Google Play estilizado con icono + badge "DISPONIBLE EN"
- AND 3 badges (Gratis, Offline, Sin registro) con iconos en `text-accent` (teal)
- AND glow background púrpura
