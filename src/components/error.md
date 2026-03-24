Run Playwright tests: playwright-test-cases/playwright/tests/01-smoke.spec.ts#L29
  4) [desktop-chromium] › playwright-test-cases/playwright/tests/01-smoke.spec.ts:26:3 › 01 — Smoke / critical rendering (Markdown → code) › TC-01.02 — Core sections exist in the DOM › Open / and wait for hero 
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


      27 |     await test.step('Open / and wait for hero', async () => {
      28 |       await page.goto('/')
    > 29 |       await expect(page.locator('section#hero')).toBeVisible()
         |                                                  ^
      30 |     })
      31 |
      32 |     const sectionIds = [
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:29:50
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:27:5


Run Playwright tests: playwright-test-cases/playwright/tests/01-smoke.spec.ts#L10
  3) [desktop-chromium] › playwright-test-cases/playwright/tests/01-smoke.spec.ts:4:3 › 01 — Smoke / critical rendering (Markdown → code) › TC-01.01 — Landing page renders after loader › Wait for loader to be gone (hero visible) 

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


       8 |
       9 |     await test.step('Wait for loader to be gone (hero visible)', async () => {
    > 10 |       await expect(page.locator('section#hero')).toBeVisible()
         |                                                  ^
      11 |     })
      12 |
      13 |     await test.step('Assert page title contains "Leigh"', async () => {
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:10:50
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:9:16


Run Playwright tests: playwright-test-cases/playwright/tests/01-smoke.spec.ts#L10
  3) [desktop-chromium] › playwright-test-cases/playwright/tests/01-smoke.spec.ts:4:3 › 01 — Smoke / critical rendering (Markdown → code) › TC-01.01 — Landing page renders after loader › Wait for loader to be gone (hero visible) 

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


       8 |
       9 |     await test.step('Wait for loader to be gone (hero visible)', async () => {
    > 10 |       await expect(page.locator('section#hero')).toBeVisible()
         |                                                  ^
      11 |     })
      12 |
      13 |     await test.step('Assert page title contains "Leigh"', async () => {
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:10:50
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:9:16

Run Playwright tests: playwright-test-cases/playwright/tests/01-smoke.spec.ts#L10
  3) [desktop-chromium] › playwright-test-cases/playwright/tests/01-smoke.spec.ts:4:3 › 01 — Smoke / critical rendering (Markdown → code) › TC-01.01 — Landing page renders after loader › Wait for loader to be gone (hero visible) 
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


       8 |
       9 |     await test.step('Wait for loader to be gone (hero visible)', async () => {
    > 10 |       await expect(page.locator('section#hero')).toBeVisible()
         |                                                  ^
      11 |     })
      12 |
      13 |     await test.step('Assert page title contains "Leigh"', async () => {
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:10:50
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/01-smoke.spec.ts:9:16

Run Playwright tests: playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts#L16
  2) [desktop-chromium] › playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:14:3 › 00 — Test data & conventions › Primary sections exist (anchors for smooth scroll) 

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


      14 |   test('Primary sections exist (anchors for smooth scroll)', async ({ page }) => {
      15 |     await page.goto('/')
    > 16 |     await expect(page.locator('section#hero')).toBeVisible()
         |                                                ^
      17 |
      18 |     const sectionIds = [
      19 |       'hero',
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:16:48


Run Playwright tests: playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts#L16
  2) [desktop-chromium] › playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:14:3 › 00 — Test data & conventions › Primary sections exist (anchors for smooth scroll) 

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


      14 |   test('Primary sections exist (anchors for smooth scroll)', async ({ page }) => {
      15 |     await page.goto('/')
    > 16 |     await expect(page.locator('section#hero')).toBeVisible()
         |                                                ^
      17 |
      18 |     const sectionIds = [
      19 |       'hero',


Run Playwright tests: playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts#L16
  2) [desktop-chromium] › playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:14:3 › 00 — Test data & conventions › Primary sections exist (anchors for smooth scroll) 
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


      14 |   test('Primary sections exist (anchors for smooth scroll)', async ({ page }) => {
      15 |     await page.goto('/')
    > 16 |     await expect(page.locator('section#hero')).toBeVisible()
         |                                                ^
      17 |
      18 |     const sectionIds = [
      19 |       'hero',
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:16:48


Run Playwright tests: playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts#L9
  1) [desktop-chromium] › playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:4:3 › 00 — Test data & conventions › Ready condition: hero visible and header shows Leigh.dev 

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


       7 |     // Wait for "ready" state rather than hard sleeps (loader lasts ~2s).
       8 |     const hero = page.locator('section#hero')
    >  9 |     await expect(hero).toBeVisible()
         |                        ^
      10 |
      11 |     await expect(page.getByText('Leigh.dev', { exact: true })).toBeVisible()
      12 |   })
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:9:24


Run Playwright tests: playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts#L9
  1) [desktop-chromium] › playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:4:3 › 00 — Test data & conventions › Ready condition: hero visible and header shows Leigh.dev 

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


       7 |     // Wait for "ready" state rather than hard sleeps (loader lasts ~2s).
       8 |     const hero = page.locator('section#hero')
    >  9 |     await expect(hero).toBeVisible()
         |                        ^
      10 |
      11 |     await expect(page.getByText('Leigh.dev', { exact: true })).toBeVisible()
      12 |   })
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:9:24

Run Playwright tests: playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts#L9
  1) [desktop-chromium] › playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:4:3 › 00 — Test data & conventions › Ready condition: hero visible and header shows Leigh.dev 
    Error: expect(locator).toBeVisible() failed

    Locator: locator('section#hero')
    Expected: visible
    Timeout: 10000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 10000ms
      - waiting for locator('section#hero')


       7 |     // Wait for "ready" state rather than hard sleeps (loader lasts ~2s).
       8 |     const hero = page.locator('section#hero')
    >  9 |     await expect(hero).toBeVisible()
         |                        ^
      10 |
      11 |     await expect(page.getByText('Leigh.dev', { exact: true })).toBeVisible()
      12 |   })
        at /home/runner/work/portfolio-website/portfolio-website/playwright-test-cases/playwright/tests/00-test-data-and-conventions.spec.ts:9:24