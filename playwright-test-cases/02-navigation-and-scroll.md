# 02 — Navigation & smooth scrolling

## TC-02.01 — Desktop header nav scrolls to section anchors

- **Type**: Functional
- **Viewport**: Desktop
- **Coverage**: `react-scroll` header links

### Steps

1. Navigate to `/` and wait for `section#hero`.
2. Click header link `About`.
3. Assert `section#about` is in viewport (or becomes visible).
4. Click header link `Projects`.
5. Assert `section#projects` is in viewport / visible.
6. Click header link `Experience`.
7. Assert `section#experience` is visible.
8. Click header link `Contact`.
9. Assert `section#contact` is visible.

### Expected results

- Clicking nav links smoothly scrolls to the expected sections.
- The app does not navigate away (URL path remains `/`).

### Suggested selectors

- `page.getByRole('link', { name: 'About' })`
- `page.locator('section#about')`

## TC-02.02 — Brand link scrolls to hero

- **Type**: Functional
- **Viewport**: Desktop

### Steps

1. Navigate to `/` and wait for `section#hero`.
2. Click header `Projects`, then verify `#projects` visible.
3. Click `Leigh.dev` in the header.
4. Assert `section#hero` is visible.

### Expected results

- The brand link scrolls back to the top hero section.

## TC-02.03 — Hero CTA buttons scroll to Projects and Contact

- **Type**: Functional
- **Viewport**: Desktop

### Steps

1. Navigate to `/` and wait for `section#hero`.
2. Click `View My Work`.
3. Assert `section#projects` visible.
4. Scroll back to hero (or reload and wait for hero).
5. Click `Let's Connect`.
6. Assert `section#contact` visible.

### Expected results

- CTAs scroll to the correct sections.

## TC-02.04 — Mobile bottom nav scrolls to section anchors

- **Type**: Functional
- **Viewport**: Mobile
- **Coverage**: `MobileNav` bottom nav

### Steps

1. Set viewport to a mobile size (e.g., 390×844).
2. Navigate to `/` and wait for `section#hero`.
3. In the bottom nav, click icons (or their accessible targets) for:
   - About → assert `section#about` visible
   - Projects → assert `section#projects` visible
   - Experience → assert `section#experience` visible
   - Contact → assert `section#contact` visible

### Expected results

- The bottom nav is present and functional on mobile breakpoints.

### Notes

- The mobile nav uses icon-only links and tooltips. If role/name selection is difficult, use `section` visibility assertions after clicking each `Link` in order.

