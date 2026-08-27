import { Reveal } from '../ui/Reveal'
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from '../ui/icons'
import { profile } from '../../data/content'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    hint: 'Best for direct questions & opportunities',
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: LinkedInIcon,
    hint: 'Connect & follow my work',
  },
  {
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
    icon: GitHubIcon,
    hint: 'Reusable repos & experiments',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-ink/8 bg-paper-soft px-6 py-12 sm:px-12 sm:py-16 dark:border-graphite-line dark:bg-graphite-soft">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.07] blur-3xl dark:opacity-[0.12]"
              style={{ background: 'radial-gradient(circle, var(--color-signal), transparent 65%)' }}
              aria-hidden="true"
            />

            <div className="relative max-w-2xl">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal-deep dark:text-signal">
                09 / contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-paper">
                Let&apos;s build something together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft dark:text-fog">
                I&apos;m based in {profile.location} and open to internships, collaboration, and
                meaningful ML / full-stack work. Whether it&apos;s a project, a research idea, or a
                role — my inbox is open.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-signal-deep px-5 py-3 text-sm font-semibold text-graphite transition-colors hover:bg-signal hover:text-graphite dark:bg-signal dark:text-graphite dark:hover:bg-signal-bright"
              >
                <MailIcon className="text-base" />
                {profile.email}
              </a>
            </div>

            <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group rounded-xl border border-ink/8 bg-paper p-5 transition-colors hover:border-signal/50 dark:border-graphite-line dark:bg-graphite"
                >
                  <c.icon className="text-2xl text-signal-deep transition-colors group-hover:text-signal dark:text-signal" />
                  <h3 className="mt-3 text-sm font-semibold text-ink dark:text-paper">{c.label}</h3>
                  <p className="mt-1 break-all text-xs text-ink-soft dark:text-fog">{c.value}</p>
                  <p className="mt-2 text-xs text-fog-dim">{c.hint}</p>
                </a>
              ))}
            </div>

            <p className="relative mt-6 inline-flex items-center gap-1.5 text-sm text-fog-dim">
              <MapPinIcon className="text-base" />
              {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
