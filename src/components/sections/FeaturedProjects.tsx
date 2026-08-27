import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { flagshipProjects } from '../../data/content'
import { FeaturedProjectCard } from '../projects/ProjectCard'

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          index="03"
          label="Featured Projects"
          title="Flagship builds, end to end."
          subtitle="Two projects I'm most proud of — both pushed through production realities, from toolchain debugging to hardening for real-world use."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {flagshipProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <FeaturedProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
