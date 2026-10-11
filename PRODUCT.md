# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (no framework), deployed to Vercel from `web/` (`cleanUrls: true`). Chosen before this init; recorded as the existing codebase's answer, not an init-time decision.

## Users

New patients researching whether to book, returning patients checking info, and patients referred in by another provider or patient. No single dominant segment — design and copy should work across all three without assuming first-visit unfamiliarity.

## Product Purpose

Rest & Reset is Dr. Jared Wilson's upper cervical chiropractic practice in Oregon City, OR. The site's job is to build enough trust and clarity that a visitor schedules a call or visit.

## Positioning

Family-focused gentle care: a non-invasive, gentle technique explicitly welcoming to pregnant/postpartum patients and children, not just a general claim of being "gentle." This is the differentiator over the upper-cervical-specificity angle, which other practices in the category also claim.

## Operating Context

Single practice location (1107 7th St, Oregon City, OR 97045), appointment-only. Primary workflow on the site is researching the practice and then scheduling a call or visit — there is no online booking/payment flow in the current mockup, just a call-to-action.

## Capabilities and Constraints

- Site is a static mockup/prototype handed off from a Claude Design session (see `README.md` and `chats/chat1.md`); `project/` holds the original design-tool HTML, `web/` is the implementation.
- Two site views exist in `web/`: `web/index.html` (brand kit reference: logo directions, palette, typography, usage rules) and `web/site/index.html` (homepage mockup applying the brand).
- Logo system: a fermata-over-whole-rest mark forming a spine, in four concept directions (Classic Serif/Lora, Modern Serif/Piazzolla, Clean Sans/Archivo, Bold Signage/Archivo bold+uppercase), plus a V2 set of eight marks and a Mix & Match builder.
- Single-color version of the mark is a hard requirement (must work in solid teal or black).

## Brand Commitments

- Name: "Rest & Reset" (with Dr. Jared Wilson named as a subline/tagline, not part of the wordmark).
- Primary color: deep teal (`#1F4A48`), warm neutral accent `#E8DCC8` (cream), clay accent `#B5764A`, ink `#152E2D`.
- Fonts: Lora (classic serif), Piazzolla (modern serif), Archivo (clean sans) — see `chats/chat1.md` for the full decision history.
- Mark must work as a standalone icon (no text) and in lockups with text; must hold up at small sizes (favicon/social avatar).

## Evidence on Hand

- The testimonial, phone number, email, and specific service descriptions currently in `web/site/index.html` are **placeholder/illustrative**, not confirmed facts — future work must not treat them as real patient quotes or final copy, and should flag them for Dr. Wilson's input rather than inventing replacements.
- Real asset: `web/assets/dr-wilson.webp` (a real photo used in the hero).
- Real contact anchor: practice address (1107 7th St, Oregon City, OR 97045) — treat as real pending explicit confirmation, since it recurs unchanged across the mockup.

## Product Principles

1. Gentle and family-inclusive, not generic-wellness: every surface should read as welcoming to children and pregnant/postpartum patients specifically, not just "calm."
2. Precision over volume: copy and structure should reflect "fewer, more intentional visits" rather than a high-throughput clinic feel.
3. Single clear action: every page should make scheduling a call or visit the obvious next step, without competing CTAs.
4. The mark carries the brand: typography and color choices support the fermata/spine mark rather than competing with it.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established beyond general best practice (not yet confirmed with the client).
