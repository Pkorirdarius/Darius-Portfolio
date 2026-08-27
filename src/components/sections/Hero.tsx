import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/content'
import { ArrowDownIcon, ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from '../ui/icons'

function Sparkline() {
  return (
    <svg
      viewBox="0 0 320 90"
      className="h-auto w-full max-w-[420px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0" />
          <stop offset="30%" stopColor="var(--color-signal)" />
          <stop offset="70%" stopColor="var(--color-amber)" />
          <stop offset="100%" stopColor="var(--color-coral)" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M0 70 L30 62 L55 66 L80 44 L105 52 L130 30 L155 40 L180 22 L205 34 L230 18 L255 26 L280 12 L320 20"
          stroke="url(#hero-line)"
        />
      </g>
      <g fill="var(--color-signal)">
        <circle cx="230" cy="18" r="3.5" />
      </g>
      <g fill="var(--color-fog-dim)" className="opacity-40">
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((x) => (
          <circle key={x} cx={x} cy={90} r={2} />
        ))}
      </g>
    </svg>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full opacity-[0.06] blur-3xl dark:opacity-[0.14]"
        style={{ background: 'radial-gradient(circle, var(--color-signal), transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.5] dark:block"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-graphite-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-graphite-line) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at 20% 8%, black, transparent 55%)',
          WebkitMaskImage: 'radial-gradient(circle at 20% 8%, black, transparent 55%)',
        }}
        id="hero-grid"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <motion.div {...fade(0)}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-3.5 py-1.5 font-mono text-xs font-medium text-signal-deep dark:text-signal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Open to work · {profile.location}
          </p>
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl dark:text-paper"
        >
          {profile.name}
          <span className="block text-ink-soft dark:text-fog-dim">or just{' '}
            <span className="text-signal-deep dark:text-signal">&quot;{profile.firstName}&quot;</span>
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-5 max-w-2xl font-display text-lg font-medium text-ink-soft sm:text-xl dark:text-fog"
        >
          {profile.role}
          <span className="text-signal-deep dark:text-signal"> + {profile.roleTail}</span>
        </motion.p>

        <motion.p {...fade(0.24)} className="mt-4 max-w-2xl text-base text-ink-soft sm:text-lg dark:text-fog">
          {profile.tagline}
        </motion.p>

        <motion.div {...fade(0.32)} className="mt-2 hidden sm:block">
          <Sparkline />
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-signal-deep px-5 py-3 text-sm font-semibold text-graphite transition-colors hover:bg-signal hover:text-graphite dark:bg-signal dark:text-graphite dark:hover:bg-signal-bright"
          >
            View Projects
            <ArrowUpRightIcon className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal dark:border-graphite-line dark:text-fog dark:hover:border-signal dark:hover:text-signal"
          >
            Get in touch
          </a>
          <span
            className="hidden text-ink-soft sm:flex sm:items-center sm:gap-1.5 sm:pl-2 dark:text-fog-dim"
            aria-hidden="true"
          >
            <MapPinIcon className="text-base" /> Nairobi, Kenya
          </span>
        </motion.div>

        <motion.div
          {...fade(0.48)}
          className="mt-8 flex items-center gap-4 text-ink-soft dark:text-fog"
        >
          <span className="font-mono text-xs uppercase tracking-wide text-fog-dim">Find me:</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-ink dark:hover:text-paper"
          >
            <GitHubIcon className="text-lg" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-ink dark:hover:text-paper"
          >
            <LinkedInIcon className="text-lg" /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-ink dark:hover:text-paper"
          >
            <MailIcon className="text-lg" /> Email
          </a>
        </motion.div>

        <motion.a
          {...fade(0.56)}
          href="#about"
          aria-label="Scroll to About"
          className="mt-12 inline-flex flex-col items-center gap-1 text-xs text-fog-dim transition-colors hover:text-signal"
        >
          <span className="font-mono uppercase tracking-widest">scroll</span>
          <ArrowDownIcon className="text-lg animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
