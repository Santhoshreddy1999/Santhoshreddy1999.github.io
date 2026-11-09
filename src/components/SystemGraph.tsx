export function SystemGraph() {
  return (
    <figure className="system-graph">
      <div className="graph-toolbar">
        <div className="graph-title">
          <span className="status-light" />
          <span>Released system topology</span>
        </div>
        <span className="graph-version">v0.1.0</span>
      </div>

      <svg
        className="graph-canvas"
        viewBox="0 0 720 520"
        role="img"
        aria-labelledby="system-graph-title system-graph-description"
      >
        <title id="system-graph-title">Enterprise RAG assistant architecture</title>
        <desc id="system-graph-description">
          React connects to a FastAPI service with cookie authentication, document ingestion,
          PostgreSQL and pgvector storage, hybrid retrieval, optional model providers, and
          observable operations.
        </desc>
        <defs>
          <pattern id="technical-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" className="graph-grid-line" fill="none" />
          </pattern>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" className="graph-arrowhead" />
          </marker>
          <filter id="node-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect className="graph-grid" width="720" height="520" fill="url(#technical-grid)" />

        <g className="graph-edges">
          <path id="edge-client-api" d="M160 254 H250" markerEnd="url(#arrowhead)" />
          <path id="edge-auth-api" d="M310 154 V205" markerEnd="url(#arrowhead)" />
          <path id="edge-api-ingest" d="M370 235 C415 235 392 124 448 124" markerEnd="url(#arrowhead)" />
          <path id="edge-ingest-store" d="M556 124 H608" markerEnd="url(#arrowhead)" />
          <path id="edge-api-retrieve" d="M370 273 C412 273 405 326 448 326" markerEnd="url(#arrowhead)" />
          <path id="edge-store-retrieve" d="M655 164 V300 H560" markerEnd="url(#arrowhead)" />
          <path id="edge-retrieve-model" d="M556 326 H608" markerEnd="url(#arrowhead)" />
          <path id="edge-model-api" d="M608 353 C516 405 369 397 330 305" markerEnd="url(#arrowhead)" />
          <path id="edge-api-ops" d="M310 305 V424 H448" markerEnd="url(#arrowhead)" />
        </g>

        <g className="flow-packets" aria-hidden="true">
          <circle r="3.5">
            <animateMotion dur="2.8s" repeatCount="indefinite">
              <mpath href="#edge-client-api" />
            </animateMotion>
          </circle>
          <circle r="3.5">
            <animateMotion dur="3.6s" begin=".5s" repeatCount="indefinite">
              <mpath href="#edge-api-retrieve" />
            </animateMotion>
          </circle>
          <circle r="3.5">
            <animateMotion dur="3.2s" begin="1s" repeatCount="indefinite">
              <mpath href="#edge-retrieve-model" />
            </animateMotion>
          </circle>
        </g>

        <g className="graph-node graph-node-primary" transform="translate(40 214)">
          <rect width="120" height="80" rx="10" />
          <text className="node-index" x="16" y="22">
            01 / CLIENT
          </text>
          <text className="node-label" x="16" y="51">
            React
          </text>
          <text className="node-meta" x="16" y="68">
            TYPESCRIPT
          </text>
        </g>

        <g className="graph-node graph-node-primary" transform="translate(250 205)">
          <rect width="120" height="100" rx="10" />
          <circle className="node-pulse" cx="104" cy="16" r="4" />
          <text className="node-index" x="16" y="23">
            02 / API
          </text>
          <text className="node-label" x="16" y="56">
            FastAPI
          </text>
          <text className="node-meta" x="16" y="78">
            SERVICE CORE
          </text>
        </g>

        <g className="graph-node" transform="translate(250 74)">
          <rect width="120" height="80" rx="10" />
          <text className="node-index" x="16" y="22">
            TRUST
          </text>
          <text className="node-label node-label-small" x="16" y="49">
            HttpOnly auth
          </text>
          <text className="node-meta" x="16" y="67">
            USER ISOLATION
          </text>
        </g>

        <g className="graph-node" transform="translate(448 84)">
          <rect width="108" height="80" rx="10" />
          <text className="node-index" x="14" y="22">
            INGEST
          </text>
          <text className="node-label node-label-small" x="14" y="49">
            4 formats
          </text>
          <text className="node-meta" x="14" y="67">
            TXT · MD · PDF
          </text>
        </g>

        <g className="graph-node graph-node-storage" transform="translate(608 84)">
          <rect width="88" height="80" rx="10" />
          <text className="node-index" x="12" y="22">
            STORE
          </text>
          <text className="node-label node-label-small" x="12" y="49">
            Postgres
          </text>
          <text className="node-meta" x="12" y="67">
            PGVECTOR
          </text>
        </g>

        <g className="graph-node graph-node-accent" transform="translate(448 286)">
          <rect width="108" height="80" rx="10" />
          <text className="node-index" x="14" y="22">
            RETRIEVE
          </text>
          <text className="node-label node-label-small" x="14" y="49">
            Hybrid RRF
          </text>
          <text className="node-meta" x="14" y="67">
            VECTOR + FTS
          </text>
        </g>

        <g className="graph-node" transform="translate(608 286)">
          <rect width="88" height="80" rx="10" />
          <text className="node-index" x="12" y="22">
            ANSWER
          </text>
          <text className="node-label node-label-small" x="12" y="49">
            Grounded
          </text>
          <text className="node-meta" x="12" y="67">
            CITATIONS
          </text>
        </g>

        <g className="graph-node" transform="translate(448 404)">
          <rect width="248" height="70" rx="10" />
          <text className="node-index" x="14" y="21">
            OPERATE / VERIFY
          </text>
          <text className="node-label node-label-small" x="14" y="47">
            Metrics · logs · 31 tests · smoke
          </text>
        </g>

        <g className="graph-annotations" aria-hidden="true">
          <text x="185" y="243">
            HTTPS
          </text>
          <text x="381" y="190">
            DOCUMENTS
          </text>
          <text x="380" y="313">
            QUERY
          </text>
          <text x="573" y="112">
            WRITE
          </text>
          <text x="574" y="316">
            CONTEXT
          </text>
        </g>
      </svg>

      <figcaption>
        <span>Architecture derived from released source</span>
        <span>Static visualization · no live backend implied</span>
      </figcaption>
    </figure>
  )
}
