import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { skillGroups } from '../../data/content'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          index="06"
          label="Skills"
          title="Tools I reach for, by category."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={(i % 2) * 0.06}
              className={i === skillGroups.length - 1 ? 'sm:col-span-2' : ''}
            >
              <div className="h-full rounded-xl border border-ink/8 bg-paper-soft p-6 dark:border-graphite-line dark:bg-graphite-soft">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink dark:text-paper">
                  <span className="font-mono text-sm text-signal-deep dark:text-signal">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {group.category}
                </h3>
                {group.description ? (
                  <p className="mt-1 text-sm text-fog-dim">{group.description}</p>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-ink/8 bg-paper px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-signal/50 hover:text-signal-deep dark:border-graphite-line dark:bg-graphite dark:text-fog dark:hover:text-signal"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
