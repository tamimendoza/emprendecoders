# Emprendecoders — landing site

## Stack

- **Astro 5** + **Tailwind CSS 3** (pnpm)
- Path alias: `@src/*` → `src/*`
- Dark-first: `<html class="dark">` in Layout.astro

## Commands

| Command | Action |
|---|---|
| `pnpm dev` | Dev server at localhost:4321 |
| `pnpm build` | Build to `dist/` |
| `pnpm preview` | Preview production build |
| `pnpm astro ...` | Astro CLI (e.g. `pnpm astro check`) |

## Design system (Tailwind)

Uses CSS variables in `src/layouts/Layout.astro` `<style>` block for a skin system:
- `text-skin-*`, `bg-skin-*`, `border-skin-*` consume `--color-*` CSS vars
- Always use Tailwind utility classes from `tailwind.config.mjs` — custom colors: `primary-{50..900}`, `dark-{DEFAULT,2,3}`, `light-{DEFAULT,2}`
- Shadows: `soft`, `card`, `elevated`, `glow`
- Max content width: `max-w-content` (1200px)
- Transitions default to 300ms, cubic-bezier(0.4, 0, 0.2, 1)
- Use `rounded-xl` (0.75rem) for containers, `rounded-2xl` (1rem) for cards, `rounded-lg` (0.5rem) for small elements

## No tests, lint, or typecheck scripts

No test runner, linter, or typecheck configured. The `tsconfig.json` extends `astro/tsconfigs/strict` but there is no `astro check` in scripts — run it manually via `pnpm astro check`.

## Page structure

```
src/pages/
├── index.astro              # Homepage (hero, products grid, footer)
├── app/
│   ├── many.astro           # Many product landing page
│   ├── privacidad/          # Privacy policies (many, voicenotifier)
│   └── terminos/            # Terms (many, voicenotifier)
```

Routes: `/`, `/app/many`, `/app/privacidad/many`, `/app/privacidad/voicenotifier`, `/app/terminos/many`, `/app/terminos/voicenotifier`.

## Playwright skill

A local `playwright-cli` skill exists at `.claude/skills/playwright-cli/SKILL.md` for browser automation. Use it when testing pages visually.
