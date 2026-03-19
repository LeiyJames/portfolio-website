# 05 — Certificates section (filtering + modal)

## TC-05.01 — Certificate category tabs filter results and update count text

- **Type**: Functional
- **Viewport**: Desktop
- **Coverage**: Category tabs in `Certificates`

### Steps

1. Navigate to `/` and scroll to `#certificates`.
2. Assert the heading `Certificates` is visible.
3. Click `All Certificates`.
4. Read the “Showing X certificates” text; assert \(X > 0\).
5. Click `Software QA`.
6. Assert the “No certificates yet” empty-state is visible.
7. Click `AI Essentials`.
8. Assert at least one certificate card is visible (has `View Certificate`).

### Expected results

- Category selection filters the certificate list and shows correct empty-state when applicable.

## TC-05.02 — Open certificate modal from a card (desktop)

- **Type**: Functional
- **Viewport**: Desktop

### Steps

1. Navigate to `/` and scroll to `#certificates`.
2. Ensure there is at least one certificate card visible.
3. Click a certificate card.
4. Assert the modal header shows the certificate name and platform/date line.
5. Assert buttons/links exist:
   - `View Original`
   - `Download` (present when `certificate.image` exists)

### Expected results

- Modal opens with correct content and actions.

## TC-05.03 — Close certificate modal (button + backdrop)

- **Type**: Functional
- **Viewport**: Desktop

### Steps

1. Open a certificate modal (from TC-05.02).
2. Click the close button (aria-label `Close modal`).
3. Assert modal is closed.
4. Open the modal again.
5. Click on the backdrop (outside modal content).
6. Assert modal is closed.

### Expected results

- Both close mechanisms work.

## TC-05.04 — “View Original” opens an external URL (non-flaky check)

- **Type**: Functional (link validation)
- **Viewport**: Desktop

### Steps

1. Open a certificate modal.
2. Locate `View Original`.
3. Assert it has a non-empty `href` starting with `http`.
4. Optionally intercept the click and assert a new tab/window opens (do not rely on the external site content).

### Expected results

- The link is correctly wired to the certificate source.

