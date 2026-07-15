## ADDED Requirements

### Requirement: SmartCaptureSection — Interactive step-through section
The system SHALL provide an interactive step-through component that replaces the static HowItWorksSection cards with a 2-column layout (steps list + dynamic phone mockup).

#### Scenario: Initial load shows first step active
- **WHEN** the SmartCaptureSection loads
- **THEN** the first step must be active (circle with `bg-primary text-white`, description visible)
- **AND** the phone mockup must show the screenshot for the first step (`/screenshots/6.webp`)

#### Scenario: Click step activates it
- **WHEN** the user clicks an inactive step
- **THEN** the previously active step becomes inactive (description hides, circle goes to border style)
- **AND** the clicked step becomes active (description expands, circle fills with primary color)
- **AND** the phone mockup image transitions to the new step's screenshot

#### Scenario: Desktop layout (≥ lg)
- **WHEN** the viewport is ≥ 1024px
- **THEN** the section must use a 2-column grid (`grid lg:grid-cols-2 gap-8 lg:gap-12`)
- **AND** the left column contains the vertical list of steps
- **AND** the right column contains the phone mockup

#### Scenario: Mobile layout (< lg)
- **WHEN** the viewport is < 1024px
- **THEN** the phone mockup appears first (top, centered)
- **AND** the steps appear below as a vertical accordion
- **AND** clicking a step changes the mockup image above

#### Scenario: Phone mockup styling
- **WHEN** the phone mockup is rendered
- **THEN** it must have `aspect-[9/19]`, `max-w-[280px] sm:max-w-[320px]`, `rounded-2xl border border-primary/15`, `shadow-card`
- **AND** the image inside must fill the container (`w-full h-full object-cover`)

#### Scenario: Image transition on step change
- **WHEN** the active step changes
- **THEN** the current image fades out (`opacity-0 scale-95` over 0.25s)
- **AND** the new image fades in (`opacity-1 scale-100` over 0.3s)
- **AND** a dot indicator below the mockup updates to reflect the active step

#### Scenario: Auto-play advances steps
- **WHEN** the user does not interact for 5 seconds
- **THEN** the active step advances to the next one automatically
- **AND** after the last step, it loops back to the first

#### Scenario: User click stops auto-play
- **WHEN** the user clicks any step
- **THEN** auto-play stops
- **AND** auto-play does not resume until the page is reloaded

#### Scenario: Optional badge
- **WHEN** the section header renders
- **THEN** it must include an "Opcional" indicator (`<span>Opcional — activalo en Ajustes</span>`)
- **AND** this must be visually subtle (small text, secondary color)

#### Scenario: Step hover state (desktop)
- **WHEN** the user hovers over an inactive step on desktop
- **THEN** the step shows a subtle background (`bg-primary/[0.02]`)

#### Scenario: Keyboard navigation
- **WHEN** the user presses ArrowDown while a step is focused
- **THEN** the next step becomes active
- **WHEN** the user presses ArrowUp
- **THEN** the previous step becomes active
- **AND** steps must be focusable via Tab

#### Scenario: Privacy note box
- **WHEN** the section renders
- **THEN** it must include the privacy box at the bottom
- **AND** it must say: "Privacidad garantizada: las notificaciones se procesan 100% en tu dispositivo."
- **AND** use `max-w-xl mx-auto p-4 sm:p-5 rounded-2xl border border-primary/10 bg-primary/[0.03]`

#### Scenario: Three steps with correct data
- **WHEN** the section renders all steps
- **THEN** step 1 must be titled "Llega la notificación" with image `/screenshots/6.webp`
- **AND** step 2 must be titled "Extrae los datos" with image `/screenshots/8.webp`
- **AND** step 3 must be titled "Todo en orden" with image `/screenshots/9.webp`

## MODIFIED Requirements

### Requirement: many.astro imports SmartCaptureSection
The `/app/many` page SHALL import and render `SmartCaptureSection` instead of `HowItWorksSection`.

#### Scenario: SmartCaptureSection rendered in page
- **WHEN** `/app/many` page loads
- **THEN** it must import `SmartCaptureSection`
- **AND** `<SmartCaptureSection />` must appear in the page body, replacing `<HowItWorksSection />`
