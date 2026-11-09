import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import { navigation } from './data/portfolio'

describe('portfolio application', () => {
  it('renders the evidence-first hero and release proof', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /AI products,\s*engineered as systems/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Inspect verified release/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/releases/tag/v0.1.0'),
    )
    expect(screen.getAllByText('31 passing').length).toBeGreaterThan(0)
    expect(
      screen.getByText(
        (_content, element) =>
          element?.tagName === 'STRONG' &&
          element.textContent?.replace(/\s+/g, ' ').trim() === '1 released / 14 planned',
      ),
    ).toBeInTheDocument()
  })

  it('connects primary navigation links to rendered landmarks', () => {
    const { container } = render(<App />)

    for (const item of navigation) {
      const navigationLink = screen.getByRole('link', { name: item.label })
      expect(navigationLink).toHaveAttribute('href', item.href)
      expect(container.querySelector(item.href)).toBeInTheDocument()
    }
  })

  it('renders resume-sourced experience and the verified MCP credential', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Enterprise delivery/i })).toBeInTheDocument()
    expect(screen.getByText('Full Stack Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Testing Engineer Intern')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Introduction to Model Context Protocol' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Verify credential/i })).toHaveAttribute('href', 'https://verify.skilljar.com/c/2dfxmrwax6wk')
  })

  it('toggles and persists the color theme', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')

    await user.click(screen.getByRole('button', { name: 'Switch to light theme' }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(window.localStorage.getItem('santhosh-portfolio-theme')).toBe('light')
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument()
  })

  it('opens and closes the accessible mobile navigation control', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveFocus()
  })

  it('updates architecture evidence when a layer is selected', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /PostgreSQL \+ pgvector/i }))

    expect(
      screen.getByRole('heading', { level: 3, name: 'PostgreSQL + pgvector' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('A PostgreSQL end-to-end smoke test passes in CI.'),
    ).toBeInTheDocument()
  })

  it('opens every external link safely in a new tab', () => {
    const { container } = render(<App />)
    const externalLinks = [
      ...container.querySelectorAll<HTMLAnchorElement>('a[href^="https://"]'),
    ]

    expect(externalLinks.length).toBeGreaterThan(10)
    const approvedHosts = new Set(['github.com', 'www.linkedin.com', 'verify.skilljar.com'])
    for (const link of externalLinks) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link.relList.contains('noreferrer')).toBe(true)
      expect(approvedHosts.has(link.hostname)).toBe(true)
    }
  })

  it('publishes email and a privacy-sanitized public resume', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /a\.santhoshreddy1999@gmail\.com/i })).toHaveAttribute('href', 'mailto:a.santhoshreddy1999@gmail.com')
    const resumeLinks = screen.getAllByRole('link', { name: /public resume/i })
    expect(resumeLinks.length).toBeGreaterThan(0)
    for (const link of resumeLinks) expect(link).toHaveAttribute('href', '/resume.html')
  })
})
