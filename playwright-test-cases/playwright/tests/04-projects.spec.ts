import { test, expect } from '@playwright/test'

async function gotoProjects(page: import('@playwright/test').Page) {
  await page.goto('/')
  await expect(page.locator('section#hero')).toBeVisible()
  const projects = page.locator('section#projects')
  await projects.scrollIntoViewIfNeeded()
  await expect(projects).toBeVisible()
  return projects
}

test.describe('04 — Projects (tabs, pagination, carousel) (Markdown → code)', () => {
  test('TC-04.01 — Projects tabs switch categories and show correct empty-state', async ({ page }) => {
    const projects = await gotoProjects(page)

    const tabs = projects.locator('button', { hasText: /^(Front-End|QA|Data Analyst)$/ })

    await test.step('Front-End tab shows at least one project', async () => {
      await projects.getByRole('button', { name: 'Front-End' }).click()
      await expect(projects.getByRole('heading', { name: 'Coming Soon!' })).toHaveCount(0)
      // `getByRole` only matches accessible (non-hidden) elements, avoiding hidden mobile/desktop variants.
      await expect(projects.getByRole('link', { name: /Live Demo/i }).first()).toBeVisible()
    })

    await test.step('QA tab shows empty-state (Coming Soon!)', async () => {
      await projects.getByRole('button', { name: 'QA' }).click()
      await expect(projects.getByRole('heading', { name: 'Coming Soon!' })).toBeVisible()
    })

    await test.step('Data Analyst tab shows empty-state (Coming Soon!)', async () => {
      await projects.getByRole('button', { name: 'Data Analyst' }).click()
      await expect(projects.getByRole('heading', { name: 'Coming Soon!' })).toBeVisible()
    })

    await test.step('Back to Front-End restores project cards', async () => {
      await projects.getByRole('button', { name: 'Front-End' }).click()
      await expect(projects.getByRole('heading', { name: 'Coming Soon!' })).toHaveCount(0)
      await expect(projects.getByRole('link', { name: /Live Demo/i }).first()).toBeVisible()
      // Sanity: tabs exist (helps catch UI regression where buttons disappear)
      await expect(tabs).toHaveCount(3)
    })
  })

  test('TC-04.02 — See More/Less expands and collapses (desktop only UI)', async ({ page, isMobile }) => {
    const projects = await gotoProjects(page)
    await projects.getByRole('button', { name: 'Front-End' }).click()

    if (isMobile) {
      await test.step('Mobile: See More/Less controls are not shown', async () => {
        await expect(projects.getByRole('button', { name: /See More Projects/i })).toHaveCount(0)
        await expect(projects.getByRole('button', { name: /See Less Projects/i })).toHaveCount(0)
      })
      return
    }

    await test.step('Expand: click See More Projects', async () => {
      const seeMore = projects.getByRole('button', { name: /See More Projects/i })
      await expect(seeMore).toBeVisible()
      await seeMore.click()

      await expect(projects.getByRole('button', { name: /See Less Projects/i })).toBeVisible()
    })

    await test.step('Pagination controls appear when expanded (if multiple pages)', async () => {
      const paginationPrev = projects.getByRole('button', { name: 'Previous' })
      const paginationNext = projects.getByRole('button', { name: 'Next' })

      // If there is only 1 page, these won't exist. If they exist, they should be usable.
      const prevCount = await paginationPrev.count()
      const nextCount = await paginationNext.count()
      if (prevCount + nextCount > 0) {
        await expect(paginationPrev).toBeVisible()
        await expect(paginationNext).toBeVisible()
      }
    })

    await test.step('Collapse: click See Less Projects (pagination should disappear)', async () => {
      await projects.getByRole('button', { name: /See Less Projects/i }).click()

      await expect(projects.getByRole('button', { name: /See More Projects/i })).toBeVisible()
      await expect(projects.getByRole('button', { name: 'Previous' })).toHaveCount(0)
      await expect(projects.getByRole('button', { name: 'Next' })).toHaveCount(0)
    })
  })

  test('TC-04.03 — Desktop pagination changes visible content', async ({ page, isMobile }) => {
    const projects = await gotoProjects(page)
    await projects.getByRole('button', { name: 'Front-End' }).click()

    if (isMobile) {
      await test.step('Mobile: pagination controls are not shown', async () => {
        await expect(projects.getByRole('button', { name: 'Previous' })).toHaveCount(0)
        await expect(projects.getByRole('button', { name: 'Next' })).toHaveCount(0)
      })
      return
    }

    await test.step('Enable See More Projects', async () => {
      await projects.getByRole('button', { name: /See More Projects/i }).click()
      await expect(projects.getByRole('button', { name: /See Less Projects/i })).toBeVisible()
    })

    const next = projects.getByRole('button', { name: 'Next' })
    const prev = projects.getByRole('button', { name: 'Previous' })

    await test.step('If pagination exists, clicking Next changes the visible projects', async () => {
      // If only one page exists, this is still a valid (non-bug) state — assert Next/Prev are absent.
      if ((await next.count()) === 0) {
        await expect(prev).toHaveCount(0)
        return
      }

      // Capture visible project titles (desktop grid cards) before.
      const cardTitles = projects.locator('.card h3')
      const before = (await cardTitles.allTextContents()).map((t) => t.trim()).filter(Boolean)
      expect(before.length).toBeGreaterThan(0)

      await next.click()
      await expect(projects).toBeVisible()

      const after = (await cardTitles.allTextContents()).map((t) => t.trim()).filter(Boolean)
      expect(after).not.toEqual(before)

      // Go back and ensure it changes again (ideally to the original).
      await prev.click()
      const back = (await cardTitles.allTextContents()).map((t) => t.trim()).filter(Boolean)
      expect(back).not.toEqual(after)
    })
  })

  test('TC-04.04 — Mobile carousel changes project card (indicator click)', async ({ page, isMobile }) => {
    const projects = await gotoProjects(page)
    await projects.getByRole('button', { name: 'Front-End' }).click()
    await expect(projects.getByRole('heading', { name: 'Coming Soon!' })).toHaveCount(0)

    if (!isMobile) {
      await test.step('Desktop: mobile carousel is not shown', async () => {
        await expect(projects.getByTestId('projects-mobile-carousel')).toBeHidden()
      })
      return
    }

    await test.step('Record current project title', async () => {
      await expect(projects.getByTestId('projects-mobile-carousel')).toBeVisible()
    })

    await test.step('Click a different carousel indicator dot → title should change', async () => {
      const carousel = projects.getByTestId('projects-mobile-carousel')
      const title = carousel.locator('h3').first()
      const before = ((await title.textContent()) ?? '').trim()

      const indicators = projects.getByTestId('projects-carousel-indicators')
      await expect(indicators).toBeVisible()
      const second = projects.getByTestId('projects-carousel-indicator-1')
      await expect(second).toBeVisible()
      await second.click()

      await expect
        .poll(async () => ((await title.textContent()) ?? '').trim(), { timeout: 10_000 })
        .not.toBe(before)
    })
  })
})

