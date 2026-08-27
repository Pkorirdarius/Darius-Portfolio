import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { otherProjects } from '../../data/content'
import { OtherProjectCard } from '../projects/ProjectCard'

export function OtherProjects() {
  return (
    <section id="more-projects" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="More Projects"
          title="Experiments, notebooks & collaborations."
          subtitle="Smaller builds that explore NLP, recommendation systems, and full-stack web — each linked to its repository."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {otherProjects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08}>
              <OtherProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
