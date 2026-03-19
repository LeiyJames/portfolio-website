# 04 — Projects section (tabs, grid, pagination, carousel)

## TC-04.01 — Projects tabs switch categories and show correct empty-state

- **Type**: Functional
- **Viewport**: Desktop
- **Coverage**: Category tabs: `Front-End`, `QA`, `Data Analyst`

### Steps

1. Navigate to `/`, wait for `section#projects`, and scroll to it.
2. Click tab `Front-End`.
3. Assert at least one project card is visible (e.g., a `Live Demo` link/button).
4. Click tab `QA`.
5. Assert the empty-state card appears with heading `Coming Soon!`.
6. Click tab `Data Analyst`.
7. Assert the empty-state card appears with heading `Coming Soon!`.
8. Click back to `Front-End`.
9. Assert the empty-state is not visible and project cards return.

### Expected results

- Tabs change state and filter project data.
- Empty-state is shown for categories with no projects.

## TC-04.02 — Desktop “See More Projects” expands and “See Less Projects” collapses

- **Type**: Functional
- **Viewport**: Desktop
- **Coverage**: `showAllProjects` toggle

### Steps

1. Navigate to `/` and scroll to `#projects`.
2. Ensure `Front-End` is active.
3. Locate the button `See More Projects` and click it.
4. Assert the button text changes to `See Less Projects`.
5. Assert pagination controls appear if total pages > 1 (buttons `Previous`, `Next`, and numbered pages).
6. Click `See Less Projects`.
7. Assert pagination controls are no longer visible (collapsed view).

### Expected results

- Expand/collapse works and doesn’t break layout.

## TC-04.03 — Desktop pagination changes visible page

- **Type**: Functional
- **Viewport**: Desktop
- **Precondition**: `See More Projects` is enabled and total pages > 1

### Steps

1. Navigate to `/` and scroll to `#projects`.
2. Click `See More Projects`.
3. Click page `2` (or `Next`).
4. Assert the current page indicator changed (button styling) and content changed.
5. Click `Previous` and assert page returns to `1`.

### Expected results

- Pagination buttons work and keep user anchored in the projects section.

### Notes

- The component scrolls to `#projects` after pagination; assert `section#projects` remains visible after changing page.

## TC-04.04 — Mobile carousel swipe changes project card

- **Type**: Functional (touch)
- **Viewport**: Mobile

### Steps

1. Set viewport to mobile size.
2. Navigate to `/` and scroll to `#projects`.
3. Ensure `Front-End` is active.
4. Record the visible project title text.
5. Perform a swipe gesture left on the carousel card.
6. Assert the project title changed.
7. Swipe right and assert it returns (or changes again).

### Expected results

- Swipe navigation changes the displayed project.

### Notes

- If swipe is flaky in CI, click carousel indicators (dots) instead and assert the title changes.

