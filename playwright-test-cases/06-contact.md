# 06 — Contact section (resume modal, links, form)

## TC-06.01 — Contact section renders contact info cards

- **Type**: Functional
- **Viewport**: Desktop

### Steps

1. Navigate to `/` and scroll to `#contact`.
2. Assert heading `Get In Touch` is visible.
3. Assert contact info cards exist for:
   - `Email`
   - `Phone`
   - `GitHub`
   - `LinkedIn`

### Expected results

- Contact information is visible and discoverable.

## TC-06.02 — Resume modal opens and closes

- **Type**: Functional
- **Viewport**: Desktop
- **Coverage**: “Download Resume” opens a modal with “Resume Not Available”

### Steps

1. Navigate to `/` and scroll to `#contact`.
2. Click `Download Resume`.
3. Assert modal text includes `Resume Not Available`.
4. Click `Close`.
5. Assert the modal is no longer visible.

### Expected results

- Resume modal lifecycle works.

## TC-06.03 — Form has required fields and blocks empty submit (browser validation)

- **Type**: Functional
- **Viewport**: Desktop
- **Notes**: Inputs use HTML `required`. Behavior depends on browser validation UI; in Playwright you can assert `:invalid` state instead of relying on native popups.

### Steps

1. Navigate to `/` and scroll to `#contact`.
2. Locate fields:
   - `input#name`
   - `input#email`
   - `textarea#message`
3. Click `Send Message` without filling any fields.
4. Assert at least one field is invalid (e.g., `input#name:invalid`).

### Expected results

- Form prevents empty submission.

## TC-06.04 — Email field enforces email format (browser validation)

- **Type**: Functional
- **Viewport**: Desktop

### Steps

1. Scroll to `#contact`.
2. Fill:
   - Name: any text
   - Email: `not-an-email`
   - Message: any text
3. Click `Send Message`.
4. Assert `input#email` is invalid (`:invalid`).

### Expected results

- Email field rejects invalid email format.

## TC-06.05 — “Send Message” shows “Sending...” while submitting (optional / potentially flaky)

- **Type**: Functional
- **Viewport**: Desktop
- **Risk**: Depends on Formspree network behavior; may be flaky in CI if external calls are blocked.

### Steps

1. Fill the form with valid values.
2. Click `Send Message`.
3. Assert the button temporarily shows `Sending...`.

### Expected results

- Submitting state is visible.

### Stabilization option for CI

- Mock Formspree requests (route/intercept) and return a deterministic response.

