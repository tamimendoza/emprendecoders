## Why

La sección "Funcionalidades" de Many actualmente usa solo íconos SVG + texto en un grid de cards. Tenemos 13 screenshots reales de la app que no se aprovechan en esta sección. Un rediseño visual con screenshots hará que las funcionalidades sean más tangibles y persuasivas, mejorando conversión al mostrar exactamente cómo se ve cada feature en la app.

## What Changes

- Rediseñar `FeaturesSection.astro` de un grid de texto+ícono a un layout visual con screenshot real de la app por cada feature
- Asignar screenshots existentes a cada feature (ver spec para mapeo)
- Eliminar o reducir el ícono SVG en favor de la imagen como elemento visual principal
- Mantener el diseño responsive y la animación scroll-reveal existente
- NO breaking — la sección reemplaza a la anterior, no hay dependencias externas

## Capabilities

### New Capabilities
- `features-with-screenshots`: Sección de funcionalidades con layout visual que combina screenshot real + título + descripción para cada feature de Many

### Modified Capabilities
- *(none — no existing specs change behaviorally)*

## Impact

- `src/components/sections/FeaturesSection.astro` — rediseño completo del layout y template
- Potencialmente nuevo componente para el patrón feature+imagen
- Screenshots en `public/screenshots/` — uso existente, no se añaden nuevos assets
