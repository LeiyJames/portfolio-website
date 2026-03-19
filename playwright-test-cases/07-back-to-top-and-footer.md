# 07 — Back-to-top & footer links

## TC-07.01 — Back-to-top appears after scrolling and returns to hero

- **Type**: Functional
- **Viewport**: Desktop
- **Coverage**: `BackToTop` button (desktop only)

### Steps

1. Navigate to `/` and wait for `section#hero`.
2. Scroll down \(> 300px\) or scroll to `#projects`.
3. Locate the button by accessible name `Back to top`.
4. Assert it is visible.
5. Click `Back to top`.
6. Assert the page returns near the top and `section#hero` is visible again.

### Expected results

- Back-to-top visibility threshold works and click scrolls to top.

## TC-07.02 — Back-to-top is not shown on mobile breakpoint

- **Type**: Responsive behavior
- **Viewport**: Mobile
- **Notes**: Button uses `hidden md:block`

### Steps

1. Set mobile viewport.
2. Navigate to `/` and scroll down.
3. Assert no element with aria-label `Back to top` is visible.

### Expected results

- Back-to-top does not display on mobile.

## TC-07.03 — Footer contains expected external links

- **Type**: Functional (content)
- **Viewport**: Desktop

### Steps

1. Navigate to `/` and scroll to footer.
2. Assert footer contains links:
   - `GitHub` with `href` containing `github.com/LeiyJames`
   - `LinkedIn` with `href` containing `linkedin.com`
   - `Email` with `href` starting with `mailto:`

### Expected results

- Footer links are present and correctly wired.

## TC-07.04 — Footer copyright year is current

- **Type**: Functional (content)
- **Viewport**: Desktop
- **Notes**: Footer uses `new Date().getFullYear()`

### Steps

1. Navigate to `/` and scroll to footer.
2. Assert footer text includes `©` and the current year.

### Expected results

- Year auto-updates.

