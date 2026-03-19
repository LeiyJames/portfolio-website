import { test, expect } from '@playwright/test'

function pathname(url: string) {
  try {
    return new URL(url).pathname
  } catch {
    return url
  }
}

test.describe('02 — Navigation & smooth scrolling (Markdown → code)', () => {
  test('TC-02.01 — Desktop header nav scrolls to section anchors', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop-header nav is not shown on mobile project')

    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    const headerNav = page.locator('header nav')

    await test.step('Click header About and verify #about in viewport', async () => {
      await headerNav.getByText('About', { exact: true }).click()
      await expect(page.locator('section#about')).toBeInViewport()
      expect(pathname(page.url())).toBe('/')
    })

    await test.step('Click header Projects and verify #projects in viewport', async () => {
      await headerNav.getByText('Projects', { exact: true }).click()
      await expect(page.locator('section#projects')).toBeInViewport()
      expect(pathname(page.url())).toBe('/')
    })

    await test.step('Click header Experience and verify #experience in viewport', async () => {
      await headerNav.getByText('Experience', { exact: true }).click()
      await expect(page.locator('section#experience')).toBeInViewport()
      expect(pathname(page.url())).toBe('/')
    })

    await test.step('Click header Contact and verify #contact in viewport', async () => {
      await headerNav.getByText('Contact', { exact: true }).click()
      await expect(page.locator('section#contact')).toBeInViewport()
      expect(pathname(page.url())).toBe('/')
    })
  })

  test('TC-02.02 — Brand link scrolls to hero', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop-header brand link test is desktop-only')

    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    const headerNav = page.locator('header nav')

    await test.step('Click Projects then click Leigh.dev brand', async () => {
      await headerNav.getByText('Projects', { exact: true }).click()
      await expect(page.locator('section#projects')).toBeInViewport()

      await headerNav.getByText('Leigh.dev', { exact: true }).click()
      await expect(page.locator('section#hero')).toBeInViewport()
      expect(pathname(page.url())).toBe('/')
    })
  })

  test('TC-02.03 — Hero CTA buttons scroll to Projects and Contact', async ({ page }) => {
    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    await test.step('Click "View My Work" → #projects', async () => {
      await page.getByRole('button', { name: 'View My Work' }).click()
      await expect(page.locator('section#projects')).toBeInViewport()
      expect(pathname(page.url())).toBe('/')
    })

    await test.step('Return to hero then click "Let\'s Connect" → #contact', async () => {
      await page.locator('header nav').getByText('Leigh.dev', { exact: true }).click()
      await expect(page.locator('section#hero')).toBeInViewport()

      await page.getByRole('button', { name: "Let's Connect" }).click()
      await expect(page.locator('section#contact')).toBeInViewport()
      expect(pathname(page.url())).toBe('/')
    })
  })

  test('TC-02.04 — Mobile bottom nav scrolls to section anchors', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-nav test runs only on the mobile project')

    await test.step('Open / and wait for hero', async () => {
      await page.goto('/')
      await expect(page.locator('section#hero')).toBeVisible()
    })

    const mobileNav = page.locator('nav').filter({
      has: page.locator('a, [role="link"]'),
    }).last()

    await test.step('Click mobile nav (About → Projects → Experience → Contact)', async () => {
      // MobileNav uses icon-only links; click by order to avoid brittle selectors.
      const links = mobileNav.locator('a')
      await expect(links).toHaveCount(4)

      await links.nth(0).click()
      await expect(page.locator('section#about')).toBeInViewport()

      await links.nth(1).click()
      await expect(page.locator('section#projects')).toBeInViewport()

      await links.nth(2).click()
      await expect(page.locator('section#experience')).toBeInViewport()

      await links.nth(3).click()
      await expect(page.locator('section#contact')).toBeInViewport()

      expect(pathname(page.url())).toBe('/')
    })
  })
})

