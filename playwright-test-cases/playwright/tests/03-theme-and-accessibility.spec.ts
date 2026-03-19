import { test, expect } from '@playwright/test'

test.describe('03 — Theme toggle & basic accessibility (Markdown → code)', () => {
  test('TC-03.01 — Theme toggle adds/removes html.dark', async ({ page }) => {
    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    const html = page.locator('html')
    // The checkbox input is visually hidden by the custom switch CSS.
    // Click the visible switch label instead.
    const toggle = page.locator('header label.switch')

    await test.step('Assert initial state: html does not have class "dark"', async () => {
      await expect(html).not.toHaveClass(/(^|\s)dark(\s|$)/)
    })

    await test.step('Toggle on: click theme toggle → html has class "dark"', async () => {
      await expect(toggle).toBeVisible()
      await toggle.click()
      await expect(html).toHaveClass(/(^|\s)dark(\s|$)/)
    })

    await test.step('Toggle off: click theme toggle → html no longer has class "dark"', async () => {
      await toggle.click()
      await expect(html).not.toHaveClass(/(^|\s)dark(\s|$)/)
    })
  })

  test('TC-03.02 — Back-to-top button has accessible label', async ({ page, isMobile }) => {
    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    await test.step('Scroll down past 300px', async () => {
      await page.evaluate(() => window.scrollTo(0, 600))
    })

    const backToTop = page.getByRole('button', { name: 'Back to top' })

    await test.step('Assert Back to top behavior matches viewport', async () => {
      // Component uses `hidden md:block`, so it should be present/visible on desktop and absent/hidden on mobile.
      if (isMobile) {
        await expect(backToTop).toHaveCount(0)
      } else {
        await expect(backToTop).toBeVisible()
      }
    })
  })

  test('TC-03.03 — Certificate modal has accessible close button label', async ({ page }) => {
    await test.step('Open / and scroll to #certificates', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
      await page.locator('section#certificates').scrollIntoViewIfNeeded()
      await expect(page.locator('section#certificates')).toBeVisible()
    })

    await test.step('Click a certificate card (should be clickable without force)', async () => {
      const certSection = page.locator('section#certificates')
      const firstCertTitle = certSection.getByRole('heading', { level: 3 }).first()
      await firstCertTitle.scrollIntoViewIfNeeded()
      await expect(firstCertTitle).toBeVisible()

      // The header is fixed; make sure the target isn't positioned under it.
      await page.evaluate(() => window.scrollBy(0, -120))

      // Trial click first: if this fails due to overlays intercepting pointer events,
      // that indicates a real usability/accessibility issue worth fixing.
      await firstCertTitle.click({ trial: true })
      await firstCertTitle.click()
    })

    await test.step('Assert modal appears and close control is visible/clickable', async () => {
      const close = page.getByRole('button', { name: 'Close modal' })
      await expect(close).toBeVisible()
      await close.click()
      await expect(close).toBeHidden()
    })
  })
})

