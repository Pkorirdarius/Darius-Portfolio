import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { education } from '../../data/content'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading index="08" label="Education" title="Where I'm training." />

        <Reveal>
          <div className="rounded-xl border border-ink/8 bg-paper-soft p-6 sm:p-8 dark:border-graphite-line dark:bg-graphite-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-ink dark:text-paper">
                  {education.degree}
                </h3>
                <p className="mt-1 text-base font-medium text-signal-deep dark:text-signal">
                  {education.school}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full border border-signal/25 bg-signal/5 px-3 py-1 font-mono text-xs text-ink-soft dark:text-fog">
                {education.period}
              </span>
            </div>
            <p className="mt-4 border-t border-ink/5 pt-4 text-sm text-fog-dim dark:border-graphite-line">
              {education.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
