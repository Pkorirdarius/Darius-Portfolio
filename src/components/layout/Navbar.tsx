import { useEffect, useState } from 'react'
import { navLinks, profile } from '../../data/content'
import { useTheme } from '../../hooks/useTheme'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from '../ui/icons'

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-9 w-9 place-items-center rounded-md border border-ink/10 bg-transparent text-ink-soft transition-colors hover:border-signal hover:text-signal dark:border-graphite-line dark:text-fog dark:hover:text-signal"
    >
      {theme === 'dark' ? <SunIcon className="text-lg" /> : <MoonIcon className="text-lg" />}
    </button>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(`#${visible[0].target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/5 bg-paper/85 backdrop-blur-md dark:border-graphite-line dark:bg-graphite/85'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-ink dark:text-paper"
        >
          {profile.firstName}
          <span className="text-signal-deep dark:text-signal">.</span>
          <span className="font-mono text-xs text-ink-soft dark:text-fog-dim">dev()</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-signal-deep dark:text-signal'
                      : 'text-ink-soft hover:text-ink dark:text-fog dark:hover:text-paper'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md border border-ink/10 text-ink dark:border-graphite-line dark:text-fog md:hidden"
          >
            {open ? <CloseIcon className="text-lg" /> : <MenuIcon className="text-lg" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-ink/5 bg-paper/98 backdrop-blur-md dark:border-graphite-line dark:bg-graphite/98 md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                    active === link.href
                      ? 'text-signal-deep dark:text-signal'
                      : 'text-ink-soft dark:text-fog'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
