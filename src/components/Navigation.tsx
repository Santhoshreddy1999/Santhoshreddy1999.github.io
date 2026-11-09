import { useEffect, useRef, useState } from 'react'
import { links, navigation } from '../data/portfolio'
import {
  ArrowUpRightIcon,
  CloseIcon,
  GitHubIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from './Icons'

interface NavigationProps {
  readonly theme: 'dark' | 'light'
  readonly onToggleTheme: () => void
}

export function Navigation({ theme, onToggleTheme }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="Santhosh portfolio, home">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span className="brand-name">Santhosh</span>
          <span className="brand-signal" aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-github"
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Santhosh's GitHub profile in a new tab"
          >
            <GitHubIcon />
            <span>GitHub</span>
            <ArrowUpRightIcon width={15} height={15} />
          </a>
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            ref={menuButtonRef}
            className="icon-button menu-toggle"
            type="button"
            onClick={() => {
              setMenuOpen((current) => !current)
            }}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
          <a
            className="mobile-release-link"
            href={links.release}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>↗</span>
            Inspect v0.1.0 release
          </a>
        </nav>
      </div>
    </header>
  )
}
