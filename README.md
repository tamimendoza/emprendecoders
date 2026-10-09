# Emprendecoders

Landing site for Emprendecoders and its apps (Many, Voicenotifier, Rutina). Built with Astro 5 and Tailwind CSS 3, dark-first.

## Stack

- [Astro 5](https://astro.build) (static output)
- [Tailwind CSS 3](https://tailwindcss.com)
- pnpm
- Path alias: `@src/*` → `src/*`

## Getting started

```sh
pnpm install
pnpm dev
```

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm dev`       | Dev server at `localhost:4321`              |
| `pnpm build`     | Production build to `./dist/`               |
| `pnpm preview`   | Preview the production build locally        |
| `pnpm astro ...` | Astro CLI (e.g. `pnpm astro check`)         |

There is no test runner or linter configured. Run `pnpm astro check` manually for type checking.

## Routes

| Route                         | Page                         |
| :---------------------------- | :--------------------------- |
| `/`                           | Homepage (hero, products)    |
| `/app/many`                   | Many landing (video showcase)|
| `/app/rutina`                 | Rutina landing               |
| `/app/privacidad/many`        | Many privacy policy          |
| `/app/privacidad/voicenotifier` | Voicenotifier privacy policy |
| `/app/terminos/many`          | Many terms                   |
| `/app/terminos/voicenotifier` | Voicenotifier terms          |

## Project structure

```text
src/
├── components/
│   ├── layout/     # Navbar, MobileMenu, Footer, ScrollReveal
│   ├── sections/   # Hero, Products, Audience, VideoShowcase, CTA
│   └── ui/         # Shared primitives (Badge)
├── layouts/        # Layout.astro (skin CSS variables, <html class="dark">)
├── pages/          # File-based routes
└── styles/         # design-tokens.css
public/             # Static assets
```

## Design system

- Skin variables (`--color-*`) are defined in `src/layouts/Layout.astro` and consumed through `text-skin-*`, `bg-skin-*` and `border-skin-*` utilities.
- Custom colors in `tailwind.config.mjs`: `primary-{50..900}`, `dark-{DEFAULT,2,3}`, `light-{DEFAULT,2}`.
- Shadows: `soft`, `card`, `elevated`, `glow`.
- Max content width: `max-w-content` (1200px).
- Radius: `rounded-xl` for containers, `rounded-2xl` for cards, `rounded-lg` for small elements.
