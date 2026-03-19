import { test, expect } from '@playwright/test'

test.describe('01 — Smoke / critical rendering (Markdown → code)', () => {
  test('TC-01.01 — Landing page renders after loader', async ({ page }) => {
    await test.step('Navigate to /', async () => {
      await page.goto('/')
    })

    await test.step('Wait for loader to be gone (hero visible)', async () => {
      await expect(page.locator('section#hero')).toBeVisible()
    })

    await test.step('Assert page title contains "Leigh"', async () => {
      await expect(page).toHaveTitle(/Leigh/i)
    })

    await test.step('Assert header brand "Leigh.dev" is visible', async () => {
      await expect(page.getByText('Leigh.dev', { exact: true })).toBeVisible()
    })

    await test.step(`Assert hero heading contains "Hi, I'm Leigh James"`, async () => {
      await expect(page.getByRole('heading', { name: "Hi, I'm Leigh James" })).toBeVisible()
    })
  })

  test('TC-01.02 — Core sections exist in the DOM', async ({ page }) => {
    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    const sectionIds = [
      'hero',
      'about',
      'projects',
      'testimonials',
      'experience',
      'certificates',
      'contact',
    ]

    await test.step('Assert each main section anchor exists', async () => {
      for (const id of sectionIds) {
        await expect(page.locator(`section#${id}`), `Expected section#${id} to exist`).toHaveCount(1)
      }
    })
  })

  test('TC-01.03 — No “Coming Soon” for Front-End projects (current data)', async ({ page }) => {
    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    await test.step('Go to Projects section', async () => {
      await page.locator('section#projects').scrollIntoViewIfNeeded()
      await expect(page.locator('section#projects')).toBeVisible()
    })

    await test.step('Assert at least one project card is visible (has "Live Demo")', async () => {
      // Both desktop and mobile variants use "Live Demo" in the Projects card.
      await expect(page.getByRole('link', { name: 'Live Demo' }).first()).toBeVisible()
    })

    await test.step('Assert empty-state "Coming Soon!" is not visible for Front-End', async () => {
      await expect(page.getByRole('heading', { name: 'Coming Soon!' })).toHaveCount(0)
    })
  })
})

