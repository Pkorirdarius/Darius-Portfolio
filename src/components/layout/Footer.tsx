import { profile } from '../../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../ui/icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/5 bg-paper-soft dark:border-graphite-line dark:bg-graphite-soft">
      <div className="container-page flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-ink-soft dark:text-fog-dim">
          © {year} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-fog-dim">pkorir</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-ink/10 text-ink-soft transition-colors hover:border-signal hover:text-signal dark:border-graphite-line dark:text-fog dark:hover:text-signal"
          >
            <GitHubIcon className="text-lg" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md border border-ink/10 text-ink-soft transition-colors hover:border-signal hover:text-signal dark:border-graphite-line dark:text-fog dark:hover:text-signal"
          >
            <LinkedInIcon className="text-lg" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-md border border-ink/10 text-ink-soft transition-colors hover:border-signal hover:text-signal dark:border-graphite-line dark:text-fog dark:hover:text-signal"
          >
            <MailIcon className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  )
}
