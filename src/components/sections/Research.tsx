import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { research } from '../../data/content'

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Research & Writing"
          title="Work that matters, on paper too."
        />

        <Reveal>
          <blockquote className="relative overflow-hidden rounded-xl border border-signal/25 bg-signal/5 p-6 sm:p-8 dark:border-signal/20 dark:bg-signal/5">
            <span
              className="pointer-events-none absolute -right-6 -top-8 font-display text-[10rem] leading-none text-signal/10 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-mono uppercase tracking-widest text-signal-deep dark:text-signal">
                  {research.publication}
                </span>
                <span className="text-fog-dim">·</span>
                <span className="font-mono text-fog-dim">African-language NLP</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl dark:text-paper">
                {research.title}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft dark:text-fog">
                {research.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {research.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-signal/30 bg-paper px-3 py-1 font-mono text-xs text-ink-soft dark:border-signal/20 dark:bg-graphite dark:text-fog"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
