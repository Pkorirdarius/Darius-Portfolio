import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { experience } from '../../data/content'
import { MapPinIcon } from '../ui/icons'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've worked in the field."
        />

        <Reveal>
          <div className="relative rounded-xl border border-ink/8 bg-paper-soft p-6 sm:p-8 dark:border-graphite-line dark:bg-graphite-soft">
            <span
              className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-xl bg-signal-deep dark:bg-signal"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-ink dark:text-paper">{experience[0].role}</h3>
                <p className="mt-1 font-medium text-signal-deep dark:text-signal">
                  {experience[0].organization}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/25 bg-signal/5 px-3 py-1 font-mono text-xs text-ink-soft dark:text-fog">
                  {experience[0].period}
                </span>
              </div>
            </div>

            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-fog-dim">
              <MapPinIcon className="text-base" />
              {experience[0].location}
            </p>

            <ul className="mt-6 space-y-3">
              {experience[0].highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base text-ink-soft dark:text-fog">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
