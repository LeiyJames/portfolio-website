import { test, expect } from '@playwright/test'

async function safeClick(locator: import('@playwright/test').Locator, timeoutMs = 10_000) {
  const start = Date.now()
  let lastErr: unknown
  while (Date.now() - start < timeoutMs) {
    try {
      await locator.scrollIntoViewIfNeeded()
      await locator.page().waitForTimeout(100)
      await locator.click({ timeout: Math.min(5_000, timeoutMs) })
      return
    } catch (e) {
      lastErr = e
      await locator.page().waitForTimeout(200)
    }
  }
  throw lastErr
}

async function gotoCertificates(page: import('@playwright/test').Page) {
  // Reduce motion to avoid animation-related click flakiness.
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('section#hero')).toBeVisible({ timeout: 20_000 })
  const certs = page.locator('section#certificates')
  // Avoid scrollIntoViewIfNeeded stability issues with animated layouts.
  await page.evaluate(() => {
    const el = document.getElementById('certificates')
    el?.scrollIntoView({ block: 'start', behavior: 'instant' as ScrollBehavior })
    window.scrollBy(0, -120)
  })
  await expect(certs).toBeVisible({ timeout: 20_000 })
  return certs
}

function parseCount(text: string) {
  const m = text.match(/Showing\s+(\d+)\s+certificate/i)
  return m ? Number(m[1]) : NaN
}

test.describe('05 — Certificates (filtering + modal) (Markdown → code)', () => {
  test('TC-05.01 — Category tabs filter results and update count text', async ({ page, isMobile }) => {
    const certs = await gotoCertificates(page)
    await expect(certs.getByRole('heading', { name: 'Certificates' })).toBeVisible()

    await test.step('Click All Certificates and assert count > 0', async () => {
      await safeClick(certs.getByTestId('certificates-category-all'))
      const countText = await certs.getByTestId('certificates-count').innerText()
      const count = parseCount(countText)
      expect(count).toBeGreaterThan(0)
    })

    await test.step('Click Software QA and assert empty-state', async () => {
      await safeClick(certs.getByTestId('certificates-category-software-qa'))
      await expect(certs.getByRole('heading', { name: 'No certificates yet' })).toBeVisible()
    })

    await test.step('Click AI Essentials and assert at least one certificate visible', async () => {
      const ai = certs.getByTestId('certificates-category-ai-essentials')
      await safeClick(ai)
      await expect(certs.getByRole('heading', { name: 'No certificates yet' })).toHaveCount(0)

      if (isMobile) {
        await expect(certs.getByTestId('certificates-mobile-carousel')).toBeVisible()
        await expect(certs.getByTestId('certificates-mobile-card')).toBeVisible()
      } else {
        await expect(certs.getByTestId('certificates-desktop-grid')).toBeVisible()
        await expect(certs.getByTestId('certificates-desktop-card-0')).toBeVisible()
      }
    })
  })

  test('TC-05.02 — Open certificate modal from a card', async ({ page, isMobile }) => {
    const certs = await gotoCertificates(page)
    await safeClick(certs.getByTestId('certificates-category-all'))
    await expect(page.getByTestId('certificate-modal')).toHaveCount(0)

    await test.step('Open modal from first visible card', async () => {
      if (isMobile) {
        await expect(certs.getByTestId('certificates-mobile-card')).toBeVisible()
        await safeClick(certs.getByTestId('certificates-mobile-card'))
      } else {
        await expect(certs.getByTestId('certificates-desktop-card-0')).toBeVisible()
        await safeClick(certs.getByTestId('certificates-desktop-card-0'))
      }

      await expect(page.getByTestId('certificate-modal')).toBeVisible()
    })

    await test.step('Modal shows name + platform/date line', async () => {
      // Basic sanity: heading exists and platform/date line includes separator dot.
      await expect(page.getByTestId('certificate-modal').getByRole('heading', { level: 3 })).toBeVisible()
      await expect(page.getByTestId('certificate-modal').locator('p').first()).toContainText('•')
    })

    await test.step('Modal actions exist: View Original and (if present) Download', async () => {
      await expect(page.getByTestId('certificate-modal-view-original')).toBeVisible()
      // Download is conditional: exists only when an image is available.
      // If it exists, it must be visible.
      if (await page.getByTestId('certificate-modal-download').count()) {
        await expect(page.getByTestId('certificate-modal-download')).toBeVisible()
      }
    })

    await test.step('Close modal', async () => {
      await page.getByRole('button', { name: 'Close modal' }).click()
      await expect(page.getByTestId('certificate-modal')).toBeHidden()
    })
  })

  test('TC-05.03 — Close certificate modal (button + backdrop)', async ({ page, isMobile }) => {
    const certs = await gotoCertificates(page)
    await safeClick(certs.getByTestId('certificates-category-all'))

    await test.step('Open modal', async () => {
      if (!isMobile) {
        await safeClick(certs.getByTestId('certificates-desktop-card-0'))
      } else {
        await safeClick(certs.getByTestId('certificates-mobile-card'))
      }

      await expect(page.getByTestId('certificate-modal')).toBeVisible()
    })

    await test.step('Close via close button', async () => {
      await page.getByRole('button', { name: 'Close modal' }).click()
      await expect(page.getByTestId('certificate-modal')).toBeHidden()
    })

    await test.step('Open again and close via backdrop click', async () => {
      if (!isMobile) {
        await safeClick(certs.getByTestId('certificates-desktop-card-0'))
      } else {
        await safeClick(certs.getByTestId('certificates-mobile-card'))
      }
      await expect(page.getByTestId('certificate-modal')).toBeVisible()

      await page.getByTestId('certificate-modal-backdrop').click({ position: { x: 5, y: 5 } })
      await expect(page.getByTestId('certificate-modal')).toBeHidden()
    })
  })

  test('TC-05.04 — View Original has external href', async ({ page, isMobile }) => {
    const certs = await gotoCertificates(page)
    await safeClick(certs.getByTestId('certificates-category-all'))
    await expect(page.getByTestId('certificate-modal')).toHaveCount(0)

    await test.step('Open modal', async () => {
      if (isMobile) {
        await safeClick(certs.getByTestId('certificates-mobile-card'))
      } else {
        await safeClick(certs.getByTestId('certificates-desktop-card-0'))
      }
      await expect(page.getByTestId('certificate-modal')).toBeVisible()
    })

    await test.step('Assert View Original href starts with http', async () => {
      const viewOriginal = page.getByTestId('certificate-modal-view-original')
      await expect(viewOriginal).toHaveAttribute('href', /^https?:\/\//)
    })

    await test.step('Close modal', async () => {
      await page.getByRole('button', { name: 'Close modal' }).click()
      await expect(page.getByTestId('certificate-modal')).toBeHidden()
    })
  })
})

