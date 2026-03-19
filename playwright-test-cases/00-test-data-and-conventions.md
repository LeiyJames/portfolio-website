# 00 — Test data & conventions

## Target under test

- **App type**: Single-page portfolio (smooth scroll to section anchors)
- **Primary sections (IDs)**: `hero`, `about`, `projects`, `testimonials`, `experience`, `certificates`, `contact`

## Important runtime behavior

- **Loader**: First render shows a loader for ~2 seconds, then the page becomes interactive.
  - **Automation note**: Wait for something on the main page (e.g., `section#hero`) rather than using a fixed timeout.

## Suggested selector strategy (for Playwright TS)

- **Prefer**:
  - `page.locator('section#projects')`
  - `page.getByRole('heading', { name: 'Featured Projects' })`
  - `page.getByRole('button', { name: 'Send Message' })`
- **Avoid** brittle Tailwind class selectors.
- **If you want maximum stability** later: add `data-testid` to key controls (theme toggle, tabs, modal close buttons, carousel controls).

## External dependencies (how to test without flakiness)

- **External links** (GitHub, LinkedIn, Coursera, live demos):
  - Validate `href` is present and correctly formed.
  - Optionally validate `target="_blank"` and `rel` contains `noopener`/`noreferrer` when used.
  - Avoid relying on external sites’ availability in CI unless you intentionally want an end-to-end “internet” check.

## Viewport coverage

- **Desktop tests** (e.g., 1280×720):
  - Header nav links visible (About / Projects / Experience / Contact)
  - Back-to-top button exists and becomes visible after scroll
  - Projects desktop grid and (when expanded) pagination
  - Certificates desktop grid
- **Mobile tests** (e.g., 390×844):
  - Mobile bottom nav exists
  - Projects mobile carousel and indicators
  - Certificates mobile carousel and indicators

## Basic “ready” condition

- **Ready when**:
  - `section#hero` is visible
  - Header shows `Leigh.dev`

