# How to run the Playwright tests (TypeScript)

This guide runs the **Playwright test code** located in `playwright-test-cases/playwright/`.

## One-time setup (repo root)

```powershell
npm i -D @playwright/test
npx playwright install
```

## Choose what URL to test

### Default (no env var) — Runs against Netlify

If you don’t set `BASE_URL`, the Playwright config defaults to:

- `https://leighjames.netlify.app`

### Option A — Explicitly run against your deployed site (Netlify)

```powershell
$env:BASE_URL="https://leighjames.netlify.app"
```

### Option B — Run against local dev/preview

Start your app (example):

```powershell
npm run dev
```

Then in another terminal:

```powershell
$env:BASE_URL="http://localhost:5173"
```

## Run all tests

From repo root:

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts
```

## Run a single test file (spec)

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts
```

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts playwright-test-cases/playwright/tests/01-smoke.spec.ts
```

## Run only one project (desktop or mobile)

Desktop only:

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts --project=desktop-chromium
```

Mobile only:

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts --project=mobile-chromium
```

## Run a single test by name (grep)

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts -g "TC-01.01"
```

## Headed mode (see the browser)

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts --headed
```

## Debug mode (Playwright Inspector)

```powershell
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts --debug
```

## View the HTML report

After running tests:

```powershell
npx playwright show-report
```

## CI/CD notes (quick)

- In CI, set `BASE_URL` to your deployed preview URL (or start the app inside CI and use `http://localhost:5173`).
- If you run against a real deployed site, avoid tests that depend on external services being reachable (e.g., submitting Formspree) unless you mock/route them.

