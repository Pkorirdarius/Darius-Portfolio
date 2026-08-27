import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, label, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="heading-slab">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-sm text-signal-deep dark:text-signal">
          {index} /&nbsp;
        </span>
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-ink-soft dark:text-fog-dim">
          {label}
        </span>
        <span className="h-px flex-1 bg-graphite-line/40 dark:bg-graphite-line" aria-hidden="true" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-ink dark:text-paper">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink-soft dark:text-fog">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
