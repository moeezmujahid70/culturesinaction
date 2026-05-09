# Cultures in Action Brand-Aligned Next.js Redesign Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Cultures in Action as a modern Next.js landing page that uses the Stitch screen as a mockup, follows the `ui-ux-pro-max` research workflow, and feels like a sibling brand to Culture Quest Software.

**Architecture:** Implement a static App Router page with semantic markup in `app/page.tsx`, global design tokens and responsive styling in `app/globals.css`, and font/metadata setup in `app/layout.tsx`. Use Stitch as the content and layout reference, but prioritize brand alignment and modern landing-page polish over pixel-perfect fidelity.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS, `next/font/google`.

---

## Summary

Rebuild the page using Stitch as a directional mockup, not a strict final design. Preserve all copy, IDs, and anchor links, while making the page feel sharper, more product-like, and less newsletter/editorial.

## Required Design Research Workflow

Run `ui-ux-pro-max` before implementation and use the results as structured input for the redesign.

- [ ] Confirm Python is available:
  `python3 --version`
- [ ] Generate the required base design system:
  `python3 .codex/skills/ui-ux-pro-max/scripts/search.py "cultural education nonprofit consulting landing page editorial-to-product redesign" --design-system -p "Cultures in Action" -f markdown`
- [ ] Run a Next.js-specific follow-up search:
  `python3 .codex/skills/ui-ux-pro-max/scripts/search.py "semantic sections typography images performance" --stack nextjs`
- [ ] Run a UX follow-up search for hierarchy and accessibility:
  `python3 .codex/skills/ui-ux-pro-max/scripts/search.py "landing page hierarchy conversion clarity accessibility" --domain ux`
- [ ] Synthesize the skill output against this plan's brand constraints before writing code.

### Research Interpretation Rules

- Use the skill workflow exactly, but do not copy raw recommendations blindly.
- If the skill suggests playful or child-oriented typography, bright SaaS palettes, or storytelling patterns that conflict with the Culture Quest sibling-brand direction, keep the workflow and reject the mismatched recommendation.
- Brand constraints in this plan override generic skill output.
- The end state should be a structured, credible, consulting/product landing page, not a playful education app or a high-concept editorial experiment.

## UI/UX Direction

- Use CultureQuest Software's brand red `#6B1414` as the dominant hero/nav signal.
- Keep the rest of the palette constrained to `#D4B896`, `#A8C5DA`, white, and black.
- Avoid navy, gold, cream, dark mode, decorative gradients, oversized rounded cards, and generic newsletter spacing.
- Use a structured consulting/product layout: red hero, tight sticky nav, strong section bands, thin bordered framework cards, light-blue operational panels, and restrained tan accents.
- Use `Playfair Display` for headings and `Inter` for body, labels, buttons, and nav.
- Maintain strong heading hierarchy, visible focus states, and image optimization discipline from the `ui-ux-pro-max` UX and Next.js guidance.

## Implementation Changes

- Replace starter `app/page.tsx` with a static App Router landing page.
- Update `app/layout.tsx` to load `Inter` and `Playfair_Display` with `next/font/google`, remove Geist, and set Cultures in Action metadata.
- Rewrite `app/globals.css` into a compact design system with CSS variables, responsive sections, nav, buttons, cards, and grids.
- Preserve these anchors and links: `#kickstart`, `#what`, `#arc`, `#founder`, `#action`, the CultureQuest Software external link, and mail links.
- Build sticky nav with CSS only. Do not add JavaScript, auth, dark mode, external CSS, or Tailwind CDN.
- Ensure pillar/card grids collapse to a single column below `640px`.

## Test Plan

- Run `npm run lint`.
- Run `npm run build`.
- Start `npm run dev`.
- Verify desktop and mobile:
  - Sticky nav works.
  - Anchor links resolve.
  - Copy remains verbatim.
  - Mobile grid collapse works below `640px`.
  - No old palette colors remain.
  - Visual style feels related to Culture Quest Software without copying its page wholesale.
  - Heading levels remain sequential.
  - Any above-the-fold image uses `next/image` correctly and only the LCP image is marked `priority`.

## Assumptions

- Stitch is the content and layout reference, not a strict final design.
- The existing copy source is the Stitch-generated page content, since the current repo page is still the default Next starter.
- The local `ui-ux-pro-max` skill is installed at `.codex/skills/ui-ux-pro-max/` and should be used as the first design research step.
- `ui-ux-pro-max` outputs may include recommendations that do not fit this brand; those should be filtered through the constraints above rather than adopted literally.
