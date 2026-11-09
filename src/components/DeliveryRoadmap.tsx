import { useState } from 'react'
import { links, projectCounts, roadmap, type ProjectStatus } from '../data/portfolio'
import { ArrowUpRightIcon } from './Icons'

type RoadmapFilter = 'all' | ProjectStatus

export function DeliveryRoadmap() {
  const [filter, setFilter] = useState<RoadmapFilter>('all')
  const visibleProjects =
    filter === 'all' ? roadmap : roadmap.filter((project) => project.status === filter)

  return (
    <div className="roadmap-shell">
      <div className="roadmap-truth">
        <div>
          <span className="truth-label">Program status</span>
          <strong>
            {projectCounts.released} released <span>/</span> {projectCounts.planned} planned
          </strong>
        </div>
        <p>
          Planned rows are roadmap intent only. They do not represent repositories,
          implementations, or delivery claims.
        </p>
      </div>

      <div className="roadmap-controls">
        <span>Filter program</span>
        <div className="filter-group" aria-label="Filter project roadmap">
          {(['all', 'released', 'planned'] as const).map((option) => (
            <button
              key={option}
              type="button"
              className={filter === option ? 'is-active' : ''}
              onClick={() => {
                setFilter(option)
              }}
              aria-pressed={filter === option}
            >
              {option === 'all' ? 'All 15' : option}
            </button>
          ))}
        </div>
      </div>

      <ol className="roadmap-list">
        {visibleProjects.map((project) => (
          <li
            key={project.sequence}
            className={`roadmap-item roadmap-item-${project.status}`}
            data-status={project.status}
          >
            <span className="roadmap-number">{String(project.sequence).padStart(2, '0')}</span>
            <div className="roadmap-project">
              <div className="roadmap-project-heading">
                <h3>{project.name}</h3>
                <span className={`status-label status-${project.status}`}>
                  <span aria-hidden="true" />
                  {project.status === 'released' ? 'Released' : 'Planned · not built'}
                </span>
              </div>
              <p>{project.intent}</p>
            </div>
            <span className="roadmap-phase">{project.phase}</span>
            {project.repositoryUrl ? (
              <a
                className="roadmap-link"
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open source for ${project.name} in a new tab`}
              >
                Source
                <ArrowUpRightIcon />
              </a>
            ) : (
              <span className="roadmap-no-link">No repository claimed</span>
            )}
          </li>
        ))}
      </ol>

      <div className="roadmap-source">
        <span>Roadmap provenance</span>
        <a href={links.reports} target="_blank" rel="noreferrer">
          Read the public planning reports
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  )
}
