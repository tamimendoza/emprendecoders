## ADDED Requirements

### Requirement: Icono "Privacidad ante todo" — escudo ilustrativo

- MUST replace the current simple shield SVG with a more detailed illustration of a shield with an internal checkmark and protective glow
- MUST maintain viewBox 0 0 24 24
- MUST use stroke-width 1.5, stroke-linecap round, stroke-linejoin round

#### Scenario: Visualización en tarjeta
- **WHEN** la tarjeta "Privacidad ante todo" se renderiza
- **THEN** el icono debe mostrar un escudo con detalles decorativos (check, líneas de protección) en lugar del escudo simple actual

### Requirement: Icono "Odias registrarte" — sin registro visual

- MUST replace the current simple lock SVG with an illustration of an open door or phone screen conveying "no registration required"

#### Scenario: Visualización en tarjeta
- **WHEN** la tarjeta "Odias registrarte" se renderiza
- **THEN** el icono debe comunicar visualmente "sin registro / sin cuenta" con un diseño más elaborado

### Requirement: Icono "Finanzas múltiples" — perfiles apilados

- MUST replace the current simple users SVG with an illustration of multiple stacked profiles or cards showing visual separation

#### Scenario: Visualización en tarjeta
- **WHEN** la tarjeta "Finanzas múltiples" se renderiza
- **THEN** el icono debe mostrar perfiles/cuentas separadas visualmente con un diseño más detallado

### Requirement: Decoración de fondo en contenedor de icono

- The icon container MUST include a subtle radial glow or gradient decorativo as background

#### Scenario: Fondo decorativo visible
- **WHEN** la tarjeta se renderiza
- **THEN** el contenedor del icono debe mostrar un glow/gradiente sutil que lo haga visualmente más rico sin distraer
