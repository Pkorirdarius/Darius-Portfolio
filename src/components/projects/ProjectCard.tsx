import type { Project } from '../../data/content'
import { ArrowUpRightIcon, ForkIcon, PinIcon, StarIcon } from '../ui/icons'

function Stars({ stars, forks }: { stars?: number; forks?: number }) {
  if (typeof stars !== 'number') return null
  return (
    <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-soft dark:text-fog-dim">
      <StarIcon className="text-sm text-amber" />
      {stars}
      {typeof forks === 'number' ? (
        <span className="ml-2 inline-flex items-center gap-1">
          <ForkIcon className="text-sm" />
          {forks}
        </span>
      ) : null}
    </span>
  )
}

function SourceLink({ project, label = 'Source' }: { project: Project; label?: string }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-semibold text-signal-deep hover:text-signal dark:text-signal dark:hover:text-signal-bright"
    >
      {label}
      <ArrowUpRightIcon className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <li
          key={s}
          className="rounded-md border border-ink/8 bg-paper px-2.5 py-1 font-mono text-xs text-ink-soft dark:border-graphite-line dark:bg-graphite dark:text-fog"
        >
          {s}
        </li>
      ))}
    </ul>
  )
}

function ScreenshotPlaceholder({ title }: { title: string }) {
  return (
    <div
      role="img"
      aria-label={`Screenshot placeholder for ${title}`}
      className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-dashed border-ink/15 bg-paper-soft dark:border-graphite-line dark:bg-graphite"
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-fog-dim">
        Screenshot placeholder
      </span>
    </div>
  )
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-paper-soft p-5 transition-colors hover:border-signal/40 sm:p-7 dark:border-graphite-line dark:bg-graphite-soft dark:hover:border-signal/40">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-semibold text-ink dark:text-paper">{project.title}</h3>
          {project.pinned ? (
            <span
              className="inline-flex items-center gap-1 rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[11px] font-medium text-amber-deep dark:text-amber"
              title="Pinned repository"
            >
              <PinIcon className="text-sm" /> pinned
            </span>
          ) : null}
        </div>
        <SourceLink project={project} label="Code" />
      </div>

      <ScreenshotPlaceholder title={project.title} />

      <div className="mt-5 flex flex-1 flex-col">
        <p className="font-display text-lg font-semibold text-signal-deep dark:text-signal">
          {project.tagline}
        </p>
        <p className="mt-2 text-base leading-relaxed text-ink-soft dark:text-fog">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2.5">
          {project.features?.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft dark:text-fog">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink/5 pt-5 dark:border-graphite-line">
          <StackChips stack={project.stack} />
          <Stars stars={project.stars} forks={project.forks} />
        </div>
      </div>
    </article>
  )
}

export function OtherProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-ink/8 bg-paper-soft p-5 transition-all hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5 dark:border-graphite-line dark:bg-graphite-soft dark:hover:border-signal/40 dark:hover:shadow-black/40">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug text-ink dark:text-paper">
          {project.title}
        </h3>
        <SourceLink project={project} label="Code" />
      </div>

      <p className="mb-2 text-sm font-medium text-signal-deep dark:text-signal">
        {project.tagline}
      </p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-soft dark:text-fog">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <StackChips stack={project.stack} />
        <Stars stars={project.stars} forks={project.forks} />
      </div>
    </article>
  )
}
