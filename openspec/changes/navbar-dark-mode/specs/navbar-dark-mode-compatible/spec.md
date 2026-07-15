## ADDED Requirements

### Requirement: Navbar MUST render with dark background on first paint
The navbar SHALL display dark background (`bg-skin-base`) with light legible text when `<html>` does not have class `light`.

#### Scenario: Initial page load without light preference
- **WHEN** the page loads and the user has no `light` preference in localStorage
- **THEN** `<html class="dark">` is rendered server-side and the navbar background is `--color-bg` (#0E1A2E)

#### Scenario: Initial page load with light preference
- **WHEN** the page loads and the user has `theme=light` in localStorage
- **THEN** the inline script removes `dark` and adds `light` class before paint, and the navbar background becomes `--color-bg` (#F8FAFC)

### Requirement: Navbar MUST use solid background (no backdrop-blur)
The navbar background MUST be solid (`bg-skin-base`) without transparency, backdrop blur, or opacity modifiers to ensure consistent color rendering across themes.

#### Scenario: Navbar in dark mode
- **WHEN** the page is in dark mode
- **THEN** the navbar MUST have background `--color-bg` (#0E1A2E) with no backdrop blur

#### Scenario: Navbar in light mode
- **WHEN** the page is in light mode
- **THEN** the navbar MUST have background `--color-bg` (#F8FAFC) with no backdrop blur

### Requirement: Brand text MUST use solid color, not gradient
The "Emprendecoders" text in the brand slot SHALL use `text-skin-primary` (solid color that adapts to theme) instead of `text-gradient-brand` (gradient).

#### Scenario: Default brand slot in dark mode
- **WHEN** no brand slot override is provided and the page is in dark mode
- **THEN** the brand text "Emprendecoders" MUST be `--color-text` (#F1F5F9)

#### Scenario: Default brand slot in light mode
- **WHEN** no brand slot override is provided and the page is in light mode
- **THEN** the brand text "Emprendecoders" MUST be `--color-text` (#0E1A2E)

### Requirement: Nav links MUST have sufficient contrast
Nav link text SHALL be `text-skin-secondary` on `bg-skin-base` solid background, achieving WCAG AA contrast ratio (≥ 4.5:1).

#### Scenario: Nav link in dark mode
- **WHEN** a nav link renders in dark mode
- **THEN** the link text color MUST be `--color-text-2` (#A0B4D4) on `--color-bg` (#0E1A2E), contrast ratio ≥ 4.5:1

#### Scenario: Nav link hover in dark mode
- **WHEN** a user hovers over a nav link in dark mode
- **THEN** the link text color MUST change to `--color-text` (#F1F5F9)

### Requirement: LegalLayout nav MUST use solid background
The navigation bar in LegalLayout.astro SHALL use `bg-skin-base` (solid) instead of `bg-skin-base/80` with backdrop blur.

#### Scenario: Legal page renders
- **WHEN** a legal page renders
- **THEN** the nav bar MUST have solid `--color-bg` background with no backdrop blur
