import { test, expect } from '@playwright/test'

async function gotoHome(page: import('@playwright/test').Page) {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('section#hero')).toBeVisible({ timeout: 20_000 })
}

test.describe('07 — Back-to-top & footer links (Markdown → code)', () => {
  test('TC-07.01 — Back-to-top appears after scrolling and returns to hero (desktop + mobile semantics)', async ({ page, isMobile }) => {
    await gotoHome(page)

    // Scroll down past threshold
    await page.evaluate(() => window.scrollTo(0, 800))

    const backToTop = page.getByRole('button', { name: 'Back to top' })

    if (isMobile) {
      // On mobile, `hidden md:block` should keep the button effectively hidden.
      await expect(backToTop).toHaveCount(0)
      return
    }

    await expect(backToTop).toBeVisible()

    // Click and assert we return to (near) hero top.
    await backToTop.click()
    await expect(page.locator('section#hero')).toBeVisible()
    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeLessThan(50)
  })

  test('TC-07.03 — Footer contains expected external links (desktop + mobile)', async ({ page }) => {
    await gotoHome(page)

    // Scroll to footer
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    const github = footer.getByRole('link', { name: 'GitHub' })
    const linkedin = footer.getByRole('link', { name: 'LinkedIn' })
    const email = footer.getByRole('link', { name: 'Email' })

    await expect(github).toHaveAttribute('href', /github\.com\/LeiyJames/)
    await expect(linkedin).toHaveAttribute('href', /linkedin\.com/)
    await expect(email).toHaveAttribute('href', /^mailto:/)
  })

  test('TC-07.04 — Footer copyright year is current (desktop + mobile)', async ({ page }) => {
    await gotoHome(page)

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })

    const footerText = await page.locator('footer').innerText()
    const year = new Date().getFullYear().toString()

    expect(footerText).toContain('©')
    expect(footerText).toContain(year)
  })
})

