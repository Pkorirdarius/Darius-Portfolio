import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { certifications } from '../../data/content'

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          index="07"
          label="Certifications"
          title="Continuous learning, credentialed."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.issuer + cert.name} delay={(i % 3) * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-ink/8 bg-paper-soft p-5 transition-colors hover:border-signal/40 dark:border-graphite-line dark:bg-graphite-soft">
                <div
                  aria-hidden="true"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ink font-display text-sm font-bold text-paper dark:bg-signal dark:text-graphite"
                >
                  {cert.monogram}
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-ink dark:text-paper">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-signal-deep dark:text-signal">
                    {cert.issuer}
                  </p>
                  <p className="mt-1 font-mono text-xs text-fog-dim">{cert.date}</p>
                  {cert.note ? (
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink-soft dark:text-fog">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                      {cert.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
