import { useLayoutEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { ArchitectureExplorer } from './components/ArchitectureExplorer'
import { Credentials } from './components/Credentials'
import { DeliveryRoadmap } from './components/DeliveryRoadmap'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  DocumentIcon,
  GitHubIcon,
  LayersIcon,
  LinkedInIcon,
  MailIcon,
  ShieldIcon,
} from './components/Icons'
import { Navigation } from './components/Navigation'
import { ProfessionalProfile } from './components/ProfessionalProfile'
import { SystemGraph } from './components/SystemGraph'
import {
  capabilities,
  evidence,
  links,
  operatingPrinciples,
  projectCounts,
  type EvidenceStatus,
} from './data/portfolio'

type Theme = 'dark' | 'light'

const THEME_STORAGE_KEY = 'santhosh-portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme
    }
  } catch {
    // The system preference remains a safe fallback when storage is unavailable.
  }

  return typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

interface SectionHeadingProps {
  readonly id: string
  readonly eyebrow: string
  readonly title: ReactNode
  readonly description: string
}

function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </div>
      <div className="section-heading-copy">
        <h2 id={id}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

const evidenceStatusLabels: Record<Exclude<EvidenceStatus, 'planned'>, string> = {
  released: 'Released',
  verified: 'Verified',
  existing: 'Existing asset',
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Theme still applies for the current visit if storage is disabled.
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-atmosphere" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-kicker reveal">
              <span className="kicker-signal" aria-hidden="true" />
              Evidence-first engineering portfolio
            </div>
            <h1 id="hero-title" className="reveal reveal-delay-1">
              AI products,
              <span>engineered as systems.</span>
            </h1>
            <p className="hero-intro reveal reveal-delay-2">
              Santhosh brings 4+ years of enterprise full-stack experience across Angular,
              Java, Spring Boot, Python, testing, and platform integration. The public proof
              starts with one released RAG system—not a list of unsupported claims.
            </p>
            <p className="role-line reveal reveal-delay-2">
              AI Full-Stack Engineer <span>·</span> AI Application Engineer <span>·</span>{' '}
              Backend &amp; Cloud Engineer
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <a
                className="button button-primary"
                href={links.release}
                target="_blank"
                rel="noreferrer"
              >
                Inspect verified release
                <ArrowUpRightIcon />
              </a>
              <a className="button button-secondary" href="#architecture">
                Explore the architecture
                <ArrowRightIcon />
              </a>
            </div>
            <div className="hero-disclosure reveal reveal-delay-3">
              <ShieldIcon />
              <p>
                Public engineering claims remain source-linked. Professional history and
                impact metrics are clearly identified as resume-sourced context.
              </p>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <SystemGraph />
          </div>

          <div className="hero-index" aria-hidden="true">
            <span>PORTFOLIO / 2026</span>
            <span>SCROLL TO INSPECT</span>
          </div>
        </section>

        <aside className="evidence-strip" id="proof" aria-label="Verified delivery evidence">
          <div className="evidence-strip-label">
            <span className="live-indicator" aria-hidden="true" />
            Evidence status
          </div>
          <div className="evidence-strip-items">
            {evidence.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <span className={`evidence-state state-${item.status}`}>
                  {evidenceStatusLabels[item.status]}
                </span>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        </aside>

        <ProfessionalProfile />

        <section className="case-study section-shell" aria-labelledby="case-study-title">
          <SectionHeading
            id="case-study-title"
            eyebrow="02 / Flagship case study"
            title={
              <>
                One released vertical slice.
                <span> End to end.</span>
              </>
            }
            description="The Enterprise AI Knowledge Assistant connects product behavior to data, security, retrieval quality, and release engineering."
          />

          <div className="case-study-layout">
            <article className="case-narrative">
              <div className="case-status-line">
                <span className="status-label status-released">
                  <span aria-hidden="true" />
                  Released
                </span>
                <span>v0.1.0 · public source</span>
              </div>
              <h3>Enterprise RAG Assistant</h3>
              <p className="case-lede">
                An authenticated knowledge workflow that ingests common document formats,
                retrieves evidence through two complementary search modes, and returns grounded
                answers with citations.
              </p>

              <div className="flow-sequence" aria-label="Flagship request flow">
                {['Authenticate', 'Ingest', 'Retrieve', 'Ground', 'Cite'].map((step, index) => (
                  <div key={step} className="flow-step">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step}</strong>
                    {index < 4 ? <ArrowRightIcon aria-hidden="true" /> : null}
                  </div>
                ))}
              </div>

              <div className="case-foundation">
                <div>
                  <span>Application</span>
                  <strong>FastAPI + React + TypeScript</strong>
                </div>
                <div>
                  <span>Data</span>
                  <strong>PostgreSQL + pgvector</strong>
                </div>
                <div>
                  <span>Retrieval</span>
                  <strong>Vector + full text + RRF</strong>
                </div>
                <div>
                  <span>Operation</span>
                  <strong>Compose + metrics + logs</strong>
                </div>
              </div>

              <div className="case-links">
                <a href={links.flagship} target="_blank" rel="noreferrer">
                  Browse source
                  <ArrowUpRightIcon />
                </a>
                <a href={links.release} target="_blank" rel="noreferrer">
                  Read release notes
                  <ArrowUpRightIcon />
                </a>
              </div>
            </article>

            <aside className="quality-ledger" aria-label="Release quality evidence">
              <div className="ledger-header">
                <div>
                  <span>Release quality ledger</span>
                  <strong>CI / PASSING</strong>
                </div>
                <span className="ledger-score">06</span>
              </div>
              <dl>
                <div>
                  <dt>Test suites</dt>
                  <dd>
                    <strong>31 passing</strong>
                    <span>22 backend · 9 frontend</span>
                  </dd>
                </div>
                <div>
                  <dt>Measured coverage</dt>
                  <dd>
                    <strong>87% backend</strong>
                    <span>Release workflow result</span>
                  </dd>
                </div>
                <div>
                  <dt>Container proof</dt>
                  <dd>
                    <strong>2 image builds</strong>
                    <span>Backend and frontend</span>
                  </dd>
                </div>
                <div>
                  <dt>Integration proof</dt>
                  <dd>
                    <strong>PostgreSQL smoke</strong>
                    <span>End-to-end database path</span>
                  </dd>
                </div>
                <div>
                  <dt>Security gate</dt>
                  <dd>
                    <strong>Secret scan</strong>
                    <span>Included in release CI</span>
                  </dd>
                </div>
                <div>
                  <dt>Merge policy</dt>
                  <dd>
                    <strong>Protected main</strong>
                    <span>Six required checks</span>
                  </dd>
                </div>
              </dl>
              <a href={links.releaseCi} target="_blank" rel="noreferrer">
                Open passing workflow
                <ArrowUpRightIcon />
              </a>
            </aside>
          </div>
        </section>

        <section
          className="architecture-section section-shell"
          id="architecture"
          aria-labelledby="architecture-title"
        >
          <SectionHeading
            id="architecture-title"
            eyebrow="03 / Interactive architecture"
            title={
              <>
                Trace the system.
                <span> Inspect the proof.</span>
              </>
            }
            description="Select a layer to see its responsibility, implementation choices, and the public evidence that supports it."
          />
          <ArchitectureExplorer />
        </section>

        <section
          className="capabilities-section section-shell"
          id="capabilities"
          aria-labelledby="capabilities-title"
        >
          <SectionHeading
            id="capabilities-title"
            eyebrow="04 / Engineering capability map"
            title={
              <>
                Four disciplines.
                <span> One delivered path.</span>
              </>
            }
            description="Capabilities shown here are grounded in the released flagship. Planned roadmap technologies are not counted as current evidence."
          />

          <div className="capability-map">
            <div className="capability-axis" aria-hidden="true">
              <span>PRODUCT</span>
              <span>PLATFORM</span>
            </div>
            {capabilities.map((capability) => (
              <article key={capability.id} className={`capability-row capability-${capability.id}`}>
                <div className="capability-number">{capability.number}</div>
                <div className="capability-title">
                  <span className="capability-signal" aria-hidden="true" />
                  <h3>{capability.title}</h3>
                  <p>{capability.thesis}</p>
                </div>
                <ul>
                  {capability.evidence.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="roadmap-section section-shell"
          id="roadmap"
          aria-labelledby="roadmap-title"
        >
          <SectionHeading
            id="roadmap-title"
            eyebrow="05 / 15-project delivery program"
            title={
              <>
                Shipped is shipped.
                <span> Planned is planned.</span>
              </>
            }
            description={`The public program contains exactly ${projectCounts.released} released MVP and ${projectCounts.planned} planned projects. Status is intentionally impossible to miss.`}
          />
          <DeliveryRoadmap />
        </section>

        <section className="vault-section section-shell" aria-labelledby="vault-title">
          <div className="vault-layout">
            <div className="vault-copy">
              <div className="section-eyebrow">
                <span aria-hidden="true" />
                06 / Existing knowledge asset
              </div>
              <span className="status-label status-existing">
                <span aria-hidden="true" />
                Existing knowledge asset
              </span>
              <h2 id="vault-title">
                A working knowledge vault,
                <span> not a project count.</span>
              </h2>
              <p>
                <strong>287 notes</strong> and interactive learning tools cover Java, Spring,
                system design, data structures and algorithms, and frontend engineering. The
                repository demonstrates structured learning breadth; it is not presented as 287
                runnable applications.
              </p>
              <a className="text-link" href={links.knowledgeVault} target="_blank" rel="noreferrer">
                Inspect the knowledge vault
                <ArrowUpRightIcon />
              </a>
            </div>

            <div className="vault-map" aria-label="Knowledge vault subject areas">
              <div className="vault-core">
                <LayersIcon />
                <strong>287</strong>
                <span>notes</span>
              </div>
              {['Java', 'Spring', 'System design', 'DSA', 'Frontend'].map((subject, index) => (
                <div
                  key={subject}
                  className={`vault-orbit vault-orbit-${index + 1}`}
                  style={{ '--orbit-index': index } as CSSProperties}
                >
                  <span>{subject}</span>
                </div>
              ))}
            </div>

            <aside className="vault-hardening">
              <span className="status-label status-planned">
                <span aria-hidden="true" />
                Hardening planned
              </span>
              <h3>Before promotion as a polished product</h3>
              <ul>
                <li>Sanitize rendered content and tighten browser security controls.</li>
                <li>Correct routing, links, and persistence behavior.</li>
                <li>Add repeatable accessibility, test, and deployment checks.</li>
              </ul>
              <p>These are planned improvements—not completed claims.</p>
            </aside>
          </div>
        </section>

        <Credentials />

        <section
          className="principles-section section-shell"
          id="principles"
          aria-labelledby="principles-title"
        >
          <SectionHeading
            id="principles-title"
            eyebrow="08 / Operating principles & security"
            title={
              <>
                Trust is part of
                <span> the architecture.</span>
              </>
            }
            description="The portfolio emphasizes inspectable delivery, explicit boundaries, and honest operational status."
          />

          <div className="principles-list">
            {operatingPrinciples.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </article>
            ))}
          </div>

          <div className="security-note">
            <ShieldIcon />
            <div>
              <span>Portfolio security posture</span>
              <p>
                This site is static, calls no GitHub API, stores no credentials, and persists only
                the visitor’s theme preference. The released application keeps secrets outside
                source and includes a CI secret scan.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-copy">
            <div className="section-eyebrow">
              <span />
              09 / Contact & public links
            </div>
            <h2 id="contact-title">
              Review the work.
              <span> Follow the evidence.</span>
            </h2>
            <p>
              Review the source, inspect the evidence, or connect through the public
              professional channels supplied in the current resume.
            </p>
          </div>

          <div className="contact-links">
            <a href={links.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
              <span>
                <small>Profile</small>
                GitHub / Santhoshreddy1999
              </span>
              <ArrowUpRightIcon />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <span><small>Professional network</small>LinkedIn / Santhosh Reddy</span>
              <ArrowUpRightIcon />
            </a>
            <a href={links.email}>
              <MailIcon />
              <span><small>Email</small>a.santhoshreddy1999@gmail.com</span>
              <ArrowUpRightIcon />
            </a>
            <a href={links.resume}>
              <DocumentIcon />
              <span><small>Recruiter view</small>Public resume</span>
              <ArrowUpRightIcon />
            </a>
            <a href={links.flagship} target="_blank" rel="noreferrer">
              <LayersIcon />
              <span>
                <small>Released source</small>
                Enterprise RAG Assistant
              </span>
              <ArrowUpRightIcon />
            </a>
            <a href={links.releaseCi} target="_blank" rel="noreferrer">
              <CheckIcon />
              <span>
                <small>Verification</small>
                Passing release workflow
              </span>
              <ArrowUpRightIcon />
            </a>
            <a href={links.reports} target="_blank" rel="noreferrer">
              <ShieldIcon />
              <span>
                <small>Governance</small>
                Roadmap and profile reports
              </span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">
              S
            </span>
            <span className="brand-name">Santhosh</span>
          </a>
          <p>AI application · full-stack · backend · cloud engineering</p>
        </div>
        <div className="footer-meta">
          <span>Built as a static, evidence-first portfolio.</span>
          <span>© 2026 Santhoshreddy1999 · MIT</span>
        </div>
      </footer>
    </>
  )
}
