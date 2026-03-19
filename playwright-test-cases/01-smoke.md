# 01 — Smoke / critical rendering

## TC-01.01 — Landing page renders after loader

- **Type**: Smoke
- **Viewport**: Desktop
- **Precondition**: App deployed and reachable at `BASE_URL`

### Steps

1. Navigate to `/`.
2. Wait until the loader is gone by waiting for `section#hero` to be visible.
3. Assert the page title contains `Leigh`.
4. Assert the fixed header contains the brand text `Leigh.dev`.
5. Assert the `Hero` heading contains `Hi, I'm Leigh James`.

### Expected results

- The user sees the hero section and main content (not the loader).
- The primary identity text is visible and readable.

### Suggested selectors

- `page.locator('section#hero')`
- `page.getByText('Leigh.dev', { exact: true })`
- `page.getByRole('heading', { name: "Hi, I'm Leigh James" })`

## TC-01.02 — Core sections exist in the DOM

- **Type**: Smoke
- **Viewport**: Desktop

### Steps

1. Navigate to `/` and wait for `section#hero`.
2. Assert the following section anchors exist (in DOM):
   - `section#hero`
   - `section#about`
   - `section#projects`
   - `section#testimonials`
   - `section#experience`
   - `section#certificates`
   - `section#contact`

### Expected results

- All main sections exist so smooth-scroll navigation has valid targets.

## TC-01.03 — No “Coming Soon” for Front-End projects (current data)

- **Type**: Smoke
- **Viewport**: Desktop
- **Notes**: The `Projects` component currently has several `Front-End` items, so it should not render the empty-state card for that tab.

### Steps

1. Navigate to `/` and wait for `section#projects`.
2. Scroll to `#projects` (or click header `Projects`).
3. Ensure the `Front-End` tab is active (default).
4. Assert at least one project card is visible (e.g., a card containing `Live Demo`).
5. Assert the `Coming Soon!` empty-state is **not** visible.

### Expected results

- Project cards render for the default category.

