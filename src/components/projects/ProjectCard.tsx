import type { Project } from '../../data/content'
import { StarIcon } from '../../components/ui/StarIcon'
import { ArrowUpRightIcon, ForkIcon, PinIcon } from '../ui/icons'

export interface ProjectCardProps {
  project: Project
}

function GitHubLink({ project }: ProjectCardProps) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-semibold text-signal-deep hover:text-signal dark:text-signal dark:hover:text-signal-bright"
    >
      Source
      <ArrowUpRightIcon className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

function Stars({ project }: ProjectCardProps) {
  if (typeof project.stars !== 'number') return null
  return (
    <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-soft dark:text-fog-dim">
      <StarIcon className="text-sm text-amber" />
      {project.stars}
      {typeof project.forks === 'number' ? (
        <span className="ml-2 inline-flex items-center gap-1">
          <ForkIcon className="text-sm" />
          {project.forks}
        </span>
      ) : null}
    </span>
  )
}
