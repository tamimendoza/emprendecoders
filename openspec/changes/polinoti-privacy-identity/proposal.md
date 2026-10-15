# Proposal — PoliNoti Privacy Policy Identity

## Problem

Google Play rejected `https://emprendecoders.com/app/privacidad/voicenotifier` ("App or developer details don't match"). The policy body never names the app, package or developer; it only uses generic "the Application" / "the Service Provider". The Many policy, which was accepted, has an identifying header.

## Solution

In `src/components/Voicenotifier.astro`:
- Add `appName` (PoliNoti), `packageName` (com.emprendecoders.voicenotifier), `developerName` (Emprendecoders), `effectiveDate`.
- Add an `<h1>` header and an intro paragraph naming app, package and developer (mirrors `ManyComponent.astro`).
- Change contact email to `contacto@emprendecoders.com`.

## Out of Scope

- Terms page, Many pages, policy content sections.
