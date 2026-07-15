## ADDED Requirements

### Requirement: Layout de sección
The section SHALL display features in a vertically alternating layout with screenshot + title + description per feature.
The section MUST maintain `ScrollReveal` animation and `bg-secondary text-skin-primary` background.
The section MUST use `max-w-content` for content width.

#### Scenario: Alternating layout on desktop
- **WHEN** the viewport is ≥ 1024px
- **THEN** feature rows SHALL alternate between image-left/text-right and image-right/text-left
- **AND** `gap-8 sm:gap-12` SHALL separate rows

#### Scenario: Single column on mobile
- **WHEN** the viewport is < 1024px
- **THEN** each feature row SHALL stack vertically (image above, text below)
- **AND** the section SHALL use a single column layout

### Requirement: Mapeo feature-screenshot
Each feature MUST display its corresponding app screenshot from `public/screenshots/`.
The mapping SHALL be:

| Feature | Screenshot |
|---|---|
| Panel principal | `2.webp` |
| Movimientos | `3.webp` |
| Reportes mensuales | `4.webp` |
| Registro de gastos | `7.webp` |
| Captura automática | `8.webp` |
| Personalización | `5.webp` |

#### Scenario: Screenshot loads correctly
- **WHEN** the feature section renders
- **THEN** each image MUST use `loading="lazy"` and `decoding="async"`
- **AND** each `src` MUST point to an existing file in `public/screenshots/`

### Requirement: Visual de feature card
Each feature container MUST show the screenshot with `rounded-2xl`, `border border-white/5`, and `shadow-card`.
The title MUST use `font-bold text-sm sm:text-base`.
The description MUST use `text-xs sm:text-sm text-skin-secondary`.
Each container MUST have `p-5 sm:p-6` padding.

#### Scenario: Hover state
- **WHEN** the user hovers over a feature container
- **THEN** it SHALL scale to `scale-[1.02]`
- **AND** the border SHALL become `hover:border-accent/20`
- **AND** the shadow SHALL elevate to `hover:shadow-elevated`
- **AND** the transition SHALL be 300ms cubic-bezier(0.4, 0, 0.2, 1)

### Requirement: Alternancia visual
Features SHALL alternate image position by index: even index → image on left, odd index → image on right.
On mobile (< lg) the image MUST always appear above the text.

#### Scenario: Alternancia en desktop
- **WHEN** the viewport is ≥ 1024px
- **THEN** feature at index 0 SHALL have image on left
- **AND** feature at index 1 SHALL have image on right
- **AND** this pattern SHALL repeat for all 6 features

### Requirement: Icono decorativo
Each feature MAY include a small SVG icon as decoration.
If present, the icon MUST use `text-accent` with `bg-primary/10` background.
The icon container MUST be `w-8 h-8` (reduced from current `w-12 h-12`).

#### Scenario: SVG icon present
- **WHEN** a feature includes an SVG icon
- **THEN** the icon MUST render with `stroke="currentColor"` and `text-accent` color
- **AND** it SHALL be positioned near the title
