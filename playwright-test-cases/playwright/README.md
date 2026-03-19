# Playwright (TypeScript) test code

This folder contains runnable Playwright tests that implement the Markdown test cases in `../`.

## How to run (from repo root)

1. Install Playwright (if not already installed):

```bash
npm i -D @playwright/test
npx playwright install
```

2. Run tests (expects your app to be running):

```bash
# Option A: run against a deployed URL
$env:BASE_URL="https://your-site-url"
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts

# Option B: run against local dev server URL (example)
$env:BASE_URL="http://localhost:5173"
npx playwright test -c playwright-test-cases/playwright/playwright.config.ts
```

## Environment variables

- `BASE_URL`: Base URL of the running site under test (optional). If not set, defaults to `http://localhost:5173`.

