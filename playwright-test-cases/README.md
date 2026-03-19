# Playwright (TypeScript) — Markdown Test Cases

This folder contains **human-readable test cases** (in Markdown) for this portfolio website. These are intended to be used as a **CI/CD practice artifact** (e.g., translate each test case into Playwright `.spec.ts` later, or use them as acceptance criteria).

## App features covered (from code)

- Loader splash screen (2s simulated load)
- Smooth-scroll navigation (desktop header + mobile bottom nav)
- Dark/light theme toggle (adds/removes `html.dark`)
- Sections: `#hero`, `#about`, `#projects`, `#testimonials`, `#experience`, `#certificates`, `#contact`
- Projects: category tabs, “Coming Soon” empty states, mobile carousel, desktop “See More/Less” + pagination
- Certificates: category tabs, modal open/close, “View Original”, “Download”
- Contact: resume modal, contact links (mailto/tel/external), Formspree form fields + client validation
- Back-to-top button (desktop only, appears after scroll)
- Footer external links

## Conventions used in these test cases

- **Selectors**: Prefer stable attributes (like `id="projects"`) and visible text (like `Get In Touch`). If you later add `data-testid`, update tests to use those.
- **External links**: When automating, validate `href` and `target`/`rel` without actually depending on external sites being up.
- **Loader**: The app shows a loader for ~2 seconds on first render. Tests should wait for the loader to disappear before asserting.
- **Viewports**: Some UI differs by breakpoint:
  - **Desktop**: header nav links are visible; back-to-top button exists; project grid/pagination exists.
  - **Mobile**: bottom nav exists; project carousel exists.

## Suggested CI variables (optional)

- `BASE_URL`: URL where the app is hosted in CI (preview deploy, Vite preview, etc.)
- `CI=true`: standard CI flag for Playwright reporters/timeouts

## Test case index

- `00-test-data-and-conventions.md`
- `01-smoke.md`
- `02-navigation-and-scroll.md`
- `03-theme-and-accessibility.md`
- `04-projects.md`
- `05-certificates.md`
- `06-contact.md`
- `07-back-to-top-and-footer.md`

