# 03 — Theme toggle & basic accessibility checks

## TC-03.01 — Theme toggle adds/removes `html.dark`

- **Type**: Functional
- **Viewport**: Desktop
- **Coverage**: `ThemeToggle` (checkbox) + `document.documentElement.classList.toggle('dark')`

### Steps

1. Navigate to `/` and wait for `section#hero`.
2. Locate the theme toggle checkbox (in header).
3. Assert `html` does **not** have class `dark` on initial load.
4. Click the theme toggle.
5. Assert `html` **has** class `dark`.
6. Click the theme toggle again.
7. Assert `html` does **not** have class `dark`.

### Expected results

- Theme toggles reliably without errors.

### Suggested selectors

- `page.locator('html')`
- `page.locator('header input[type="checkbox"]')`

## TC-03.02 — Back-to-top button has accessible label

- **Type**: Accessibility (basic)
- **Viewport**: Desktop
- **Coverage**: `BackToTop` uses `aria-label="Back to top"`

### Steps

1. Navigate to `/` and wait for `section#hero`.
2. Scroll down past 300px.
3. Locate the back-to-top button by accessible name `Back to top`.
4. Assert it is visible.

### Expected results

- Back-to-top is discoverable by screen readers (has an aria-label).

## TC-03.03 — Certificate modal has accessible close button label

- **Type**: Accessibility (basic)
- **Viewport**: Desktop

### Steps

1. Navigate to `/` and scroll to `#certificates`.
2. Click any certificate card (e.g., the first visible `View Certificate` card).
3. Assert a modal appears.
4. Locate the close control by aria-label `Close modal`.
5. Assert it is visible and clickable.

### Expected results

- The modal can be closed via an explicitly-labeled control.

