import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { aboutBio, education } from '../../data/content'

const highlights = [
  { k: 'Based in', v: 'Nairobi, Kenya' },
  { k: 'Graduating', v: education.note },
  { k: 'Focus', v: 'ML · NLP · Full-stack' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading index="01" label="About" title="Data scientist with a builder's mindset." />

        <div className="grid gap-8 md:grid-cols-5">
          <Reveal delay={0.05} className="md:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg dark:text-fog">
              {aboutBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-ink/5 pt-6 dark:border-graphite-line">
              {highlights.map((h) => (
                <div key={h.k}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-fog-dim">{h.k}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink dark:text-fog">{h.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-2">
            <aside className="rounded-xl border border-ink/8 bg-paper-soft p-6 dark:border-graphite-line dark:bg-graphite-soft">
              <h3 className="font-mono text-xs uppercase tracking-widest text-fog-dim">
                What I bring
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft dark:text-fog">
                {[
                  'End-to-end ML & NLP project delivery',
                  'Full-stack web & mobile development',
                  'FinTech automation & mobile health tech',
                  'African language tech & digital equity',
                  'Academic/research rigor + shippable code',
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 font-mono text-signal-deep dark:text-signal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-deep hover:text-signal dark:text-signal"
              >
                Work with me →
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
