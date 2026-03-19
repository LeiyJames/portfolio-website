import { test, expect } from '@playwright/test'

test.describe('00 — Test data & conventions', () => {
  test('Ready condition: hero visible and header shows Leigh.dev', async ({ page }) => {
    await page.goto('/')

    // Wait for "ready" state rather than hard sleeps (loader lasts ~2s).
    const hero = page.locator('section#hero')
    await expect(hero).toBeVisible()

    await expect(page.getByText('Leigh.dev', { exact: true })).toBeVisible()
  })

  test('Primary sections exist (anchors for smooth scroll)', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('section#hero')).toBeVisible()

    const sectionIds = [
      'hero',
      'about',
      'projects',
      'testimonials',
      'experience',
      'certificates',
      'contact',
    ]

    for (const id of sectionIds) {
      await expect(page.locator(`section#${id}`), `Expected section#${id} to exist`).toHaveCount(1)
    }
  })
})

