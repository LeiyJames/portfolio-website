import { test, expect } from '@playwright/test'

async function safeClick(locator: import('@playwright/test').Locator, timeoutMs = 10_000) {
  const start = Date.now()
  let lastErr: unknown
  while (Date.now() - start < timeoutMs) {
    try {
      await locator.scrollIntoViewIfNeeded()
      await locator.page().waitForTimeout(100)
      await locator.click({ trial: true, timeout: 4_000 })
      await locator.click({ timeout: 4_000 })
      return
    } catch (e) {
      lastErr = e
      await locator.page().waitForTimeout(200)
    }
  }
  throw lastErr
}

async function gotoContact(page: import('@playwright/test').Page) {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('section#hero')).toBeVisible({ timeout: 20_000 })
  const contact = page.locator('section#contact')
  await page.evaluate(() => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ block: 'start', behavior: 'instant' as ScrollBehavior })
    window.scrollBy(0, -120)
  })
  await expect(contact).toBeVisible({ timeout: 20_000 })
  return contact
}

test.describe('06 — Contact (resume modal, links, form) (Markdown → code)', () => {
  test('TC-06.01 — Contact section renders contact info cards', async ({ page }) => {
    const contact = await gotoContact(page)

    await expect(contact.getByRole('heading', { name: 'Get In Touch' })).toBeVisible()
    await expect(contact.getByRole('heading', { name: 'Email' })).toBeVisible()
    await expect(contact.getByRole('heading', { name: 'Phone' })).toBeVisible()
    await expect(contact.getByRole('heading', { name: 'GitHub' })).toBeVisible()
    await expect(contact.getByRole('heading', { name: 'LinkedIn' })).toBeVisible()

    // Validate key href wiring (bug-finding, not just visual).
    await expect(contact.getByRole('link', { name: /Email/i })).toHaveAttribute('href', /^mailto:/)
    await expect(contact.getByRole('link', { name: /Phone/i })).toHaveAttribute('href', /^tel:/)
    await expect(contact.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', /github\.com/i)
    await expect(contact.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', /linkedin\.com/i)
  })

  test('TC-06.02 — Resume modal opens and closes', async ({ page }) => {
    const contact = await gotoContact(page)

    await safeClick(contact.getByRole('button', { name: /Download Resume/i }))
    await expect(page.getByRole('heading', { name: 'Resume Not Available' })).toBeVisible()
    // Give the Framer Motion modal a moment to settle so click isn't blocked by animation.
    await page.waitForTimeout(800)
    await page.getByRole('button', { name: 'Close' }).click({ timeout: 10_000 })
    await expect(page.getByRole('heading', { name: 'Resume Not Available' })).toBeHidden()
  })

  test('TC-06.03 — Form required fields block empty submit', async ({ page }) => {
    const contact = await gotoContact(page)

    const name = contact.locator('#name')
    const email = contact.locator('#email')
    const message = contact.locator('#message')
    const send = contact.locator('button[type="submit"]')

    await expect(name).toBeVisible()
    await expect(email).toBeVisible()
    await expect(message).toBeVisible()
    await send.click()

    // Browser-level constraint validation should mark required fields invalid.
    await expect
      .poll(() => name.evaluate((el) => (el as HTMLInputElement).validity.valueMissing))
      .toBe(true)
    await expect
      .poll(() => email.evaluate((el) => (el as HTMLInputElement).validity.valueMissing))
      .toBe(true)
    await expect
      .poll(() => message.evaluate((el) => (el as HTMLTextAreaElement).validity.valueMissing))
      .toBe(true)
  })

  test('TC-06.04 — Email field enforces format', async ({ page }) => {
    const contact = await gotoContact(page)

    const name = contact.locator('#name')
    const email = contact.locator('#email')
    const message = contact.locator('#message')
    const send = contact.locator('button[type="submit"]')

    await name.fill('Test User')
    await email.fill('not-an-email')
    await message.fill('Hello from Playwright')
    await send.click()

    await expect
      .poll(() => email.evaluate((el) => (el as HTMLInputElement).validity.typeMismatch))
      .toBe(true)
  })

  test('TC-06.05 — Send Message shows Sending... while submitting (mocked)', async ({ page }) => {
    // Mock Formspree for deterministic CI behavior.
    let sawRequest = false
    await page.route('**formspree.io/**', async (route) => {
      sawRequest = true
      // Keep request in-flight briefly so "Sending..." state can be observed.
      await new Promise((resolve) => setTimeout(resolve, 600))
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({}),
      })
    })

    const contact = await gotoContact(page)
    await contact.locator('#name').fill('Test User')
    await contact.locator('#email').fill('test@example.com')
    await contact.locator('#message').fill('Testing submit state')

    const send = contact.locator('button[type="submit"]')
    await safeClick(send)

    // Submit-state signal
    await expect(send).toContainText(/Sending/i)

    // Bug-finding: ensure we actually attempted a network submit.
    await expect.poll(() => sawRequest).toBe(true)
  })
})

