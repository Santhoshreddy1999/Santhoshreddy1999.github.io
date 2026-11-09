import { useState } from 'react'
import { architectureNodes } from '../data/portfolio'
import { CheckIcon } from './Icons'

export function ArchitectureExplorer() {
  const [selectedId, setSelectedId] = useState('retrieval')
  const activeNode = architectureNodes.find((node) => node.id === selectedId)

  if (!activeNode) {
    return null
  }

  return (
    <div className="architecture-explorer">
      <div className="explorer-map" aria-label="Interactive architecture layers">
        <div className="explorer-path" aria-hidden="true" />
        {architectureNodes.map((node) => {
          const selected = node.id === selectedId

          return (
            <button
              key={node.id}
              type="button"
              className={`architecture-node${selected ? ' is-active' : ''}`}
              onClick={() => {
                setSelectedId(node.id)
              }}
              aria-pressed={selected}
              aria-controls="architecture-detail"
            >
              <span className="architecture-node-index">{node.index}</span>
              <span className="architecture-node-copy">
                <span>{node.layer}</span>
                <strong>{node.title}</strong>
              </span>
              <span className="architecture-node-signal" aria-hidden="true" />
            </button>
          )
        })}
      </div>

      <div id="architecture-detail" className="architecture-detail" aria-live="polite">
        <div className="architecture-detail-kicker">
          <span>{activeNode.index}</span>
          {activeNode.layer}
        </div>
        <h3>{activeNode.title}</h3>
        <p>{activeNode.summary}</p>
        <div className="architecture-tech" aria-label="Technologies and concepts">
          {activeNode.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="architecture-verification">
          <CheckIcon />
          <div>
            <span>Verification note</span>
            <p>{activeNode.verification}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
