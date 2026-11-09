export type ProjectStatus = 'released' | 'planned'
export type EvidenceStatus = 'released' | 'verified' | 'existing' | 'planned'

export interface ExternalLink {
  readonly label: string
  readonly href: string
}

export interface EvidenceItem {
  readonly status: Exclude<EvidenceStatus, 'planned'>
  readonly label: string
  readonly value: string
  readonly detail: string
  readonly href: string
}

export interface Capability {
  readonly id: 'ai' | 'backend' | 'frontend' | 'platform'
  readonly number: string
  readonly title: string
  readonly thesis: string
  readonly evidence: readonly string[]
}

export interface CareerEntry {
  readonly role: string
  readonly organization: string
  readonly period: string
  readonly location: string
  readonly summary: string
  readonly highlights: readonly string[]
  readonly technologies: readonly string[]
}

export interface ResumeImpact {
  readonly value: string
  readonly label: string
  readonly context: string
}

export interface Credential {
  readonly title: string
  readonly issuer: string
  readonly issued: string
  readonly certificateNumber: string
  readonly image: string
  readonly pdf: string
  readonly verificationUrl: string
}

export interface ArchitectureNode {
  readonly id: string
  readonly index: string
  readonly layer: string
  readonly title: string
  readonly summary: string
  readonly technologies: readonly string[]
  readonly verification: string
}

export interface RoadmapProject {
  readonly sequence: number
  readonly name: string
  readonly phase: string
  readonly status: ProjectStatus
  readonly intent: string
  readonly repositoryUrl: string | null
}

export const links = {
  github: 'https://github.com/Santhoshreddy1999',
  linkedin: 'https://www.linkedin.com/in/santhosh-reddy-24a450188',
  email: 'mailto:a.santhoshreddy1999@gmail.com',
  resume: '/resume.html',
  flagship: 'https://github.com/Santhoshreddy1999/enterprise-rag-assistant',
  release:
    'https://github.com/Santhoshreddy1999/enterprise-rag-assistant/releases/tag/v0.1.0',
  releaseCi:
    'https://github.com/Santhoshreddy1999/enterprise-rag-assistant/actions/runs/42590199024',
  knowledgeVault: 'https://github.com/Santhoshreddy1999/Santhosh-projects',
  reports: 'https://github.com/Santhoshreddy1999/Santhoshreddy1999',
  certificateVerify: 'https://verify.skilljar.com/c/2dfxmrwax6wk',
  certificatePdf: '/assets/anthropic-mcp-certificate.pdf',
} as const

export const navigation = [
  { label: 'Proof', href: '#proof' },
  { label: 'Experience', href: '#experience' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Credentials', href: '#credentials' },
] as const

export const career: readonly CareerEntry[] = [
  {
    role: 'Full Stack Software Engineer',
    organization: 'Tektronix',
    period: 'Sep 2022 — Present',
    location: 'Bangalore, India',
    summary:
      'Four-plus years delivering enterprise web platforms across frontend architecture, Java services, Python SDKs, testing, and operational integration.',
    highlights: [
      'Architected Angular application foundations and a shared component system used across product modules.',
      'Built and integrated Java/Spring Boot REST services, microservice boundaries, and database-backed workflows.',
      'Developed Python SDK utilities with authentication, retry, logging, and versioned packaging concerns.',
      'Worked across testing, CI/CD, API gateway, monitoring, design collaboration, and production issue analysis.',
    ],
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Python', 'React', 'REST APIs', 'Docker'],
  },
  {
    role: 'Testing Engineer Intern',
    organization: 'DXC Technology',
    period: '2021 — 2022',
    location: 'Bangalore, India',
    summary:
      'Built a practical software-quality foundation across functional, regression, smoke, sanity, and browser automation workflows.',
    highlights: [
      'Worked through SDLC/STLC activities from requirement analysis and test planning to execution and reporting.',
      'Created Selenium automation scripts and executed structured manual test suites.',
    ],
    technologies: ['Selenium', 'Functional testing', 'Regression testing', 'SDLC', 'STLC'],
  },
] as const

export const resumeImpact: readonly ResumeImpact[] = [
  { value: '20+', label: 'shared UI components', context: 'Resume-reported platform ownership' },
  { value: '~25%', label: 'frontend performance improvement', context: 'Resume-reported delivery impact' },
  { value: '~30%', label: 'faster feature delivery', context: 'Resume-reported component reuse impact' },
  { value: '80%+', label: 'application test coverage', context: 'Resume-reported professional quality target' },
] as const

export const credential: Credential = {
  title: 'Introduction to Model Context Protocol',
  issuer: 'Anthropic',
  issued: 'March 23, 2026',
  certificateNumber: '2dfxmrwax6wk',
  image: '/assets/anthropic-mcp-certificate.jpg',
  pdf: links.certificatePdf,
  verificationUrl: links.certificateVerify,
}

export const evidence: readonly EvidenceItem[] = [
  {
    status: 'released',
    label: 'Release',
    value: 'v0.1.0',
    detail: 'Public MVP release with source and release notes',
    href: links.release,
  },
  {
    status: 'verified',
    label: 'Automated tests',
    value: '31 passing',
    detail: '22 backend tests and 9 frontend tests',
    href: links.releaseCi,
  },
  {
    status: 'verified',
    label: 'Backend coverage',
    value: '87%',
    detail: 'Measured in the passing release workflow',
    href: links.releaseCi,
  },
  {
    status: 'verified',
    label: 'Release CI',
    value: '6 required checks',
    detail: 'Protected main with builds, smoke test, and secret scan',
    href: links.releaseCi,
  },
] as const

export const capabilities: readonly Capability[] = [
  {
    id: 'ai',
    number: '01',
    title: 'AI application engineering',
    thesis: 'Grounded retrieval systems with evaluation built into the delivery path.',
    evidence: [
      'Hybrid vector + full-text retrieval with reciprocal-rank fusion',
      'Source citations, conversation history, and retrieval evaluation',
      'Optional OpenAI and Anthropic provider adapters',
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend systems',
    thesis: 'Typed service boundaries, durable data, and ownership-aware access control.',
    evidence: [
      'FastAPI service with PostgreSQL and pgvector',
      'HttpOnly cookie authentication and per-user isolation',
      'Alembic migrations and TXT, MD, PDF, DOCX ingestion',
    ],
  },
  {
    id: 'frontend',
    number: '03',
    title: 'Full-stack product delivery',
    thesis: 'A React surface connected to real authentication, ingestion, and retrieval flows.',
    evidence: [
      'React and TypeScript application',
      'Citation and conversation-history product flows',
      '9 passing frontend tests in release CI',
    ],
  },
  {
    id: 'platform',
    number: '04',
    title: 'Platform & operations',
    thesis: 'Repeatable local delivery with observable runtime and enforced quality gates.',
    evidence: [
      'Docker Compose and backend/frontend image builds',
      'PostgreSQL end-to-end smoke test and secret scan',
      'Prometheus metrics, structured logs, and protected main',
    ],
  },
] as const

export const architectureNodes: readonly ArchitectureNode[] = [
  {
    id: 'experience',
    index: '01',
    layer: 'Experience',
    title: 'React client',
    summary:
      'A TypeScript interface carries authenticated document, conversation, and citation workflows.',
    technologies: ['React', 'TypeScript'],
    verification: '9 frontend tests pass in release CI.',
  },
  {
    id: 'boundary',
    index: '02',
    layer: 'Service boundary',
    title: 'FastAPI application',
    summary:
      'The API coordinates identity, ingestion, retrieval, conversations, and provider adapters.',
    technologies: ['FastAPI', 'Python'],
    verification: '22 backend tests pass with 87% measured coverage.',
  },
  {
    id: 'identity',
    index: '03',
    layer: 'Identity',
    title: 'Ownership isolation',
    summary:
      'HttpOnly cookie authentication and per-user ownership boundaries protect stored content.',
    technologies: ['HttpOnly cookies', 'Per-user isolation'],
    verification: 'Authentication and isolation are part of the released source.',
  },
  {
    id: 'ingestion',
    index: '04',
    layer: 'Knowledge pipeline',
    title: 'Document ingestion',
    summary:
      'Text is extracted from four documented formats before entering the retrieval pipeline.',
    technologies: ['TXT', 'Markdown', 'PDF', 'DOCX'],
    verification: 'All four formats are supported by the v0.1.0 release.',
  },
  {
    id: 'storage',
    index: '05',
    layer: 'Persistence',
    title: 'PostgreSQL + pgvector',
    summary:
      'Relational records and vector-ready content share a migration-managed PostgreSQL system.',
    technologies: ['PostgreSQL', 'pgvector', 'Alembic'],
    verification: 'A PostgreSQL end-to-end smoke test passes in CI.',
  },
  {
    id: 'retrieval',
    index: '06',
    layer: 'Retrieval',
    title: 'Hybrid evidence search',
    summary:
      'Vector and full-text result sets are combined with reciprocal-rank fusion for grounding.',
    technologies: ['Vector search', 'Full-text search', 'RRF'],
    verification: 'Retrieval evaluation is included in the released repository.',
  },
  {
    id: 'generation',
    index: '07',
    layer: 'Answer path',
    title: 'Grounded response',
    summary:
      'Answers retain citations and can use optional OpenAI or Anthropic provider adapters.',
    technologies: ['Citations', 'OpenAI adapter', 'Anthropic adapter'],
    verification: 'Provider integrations are optional; no cloud demo is claimed.',
  },
  {
    id: 'operations',
    index: '08',
    layer: 'Operations',
    title: 'Observable delivery',
    summary:
      'Containerized services expose Prometheus metrics and structured logs for local operation.',
    technologies: ['Docker Compose', 'Prometheus', 'Structured logs'],
    verification: 'Both application images build in the release workflow.',
  },
] as const

export const roadmap: readonly RoadmapProject[] = [
  {
    sequence: 1,
    name: 'Enterprise AI Knowledge Assistant',
    phase: 'Released foundation',
    status: 'released',
    intent: 'Released MVP: authenticated ingestion, hybrid retrieval, citations, and evaluation.',
    repositoryUrl: links.flagship,
  },
  {
    sequence: 2,
    name: 'AI Observability & Evaluation Platform',
    phase: 'AI application foundation',
    status: 'planned',
    intent: 'Roadmap intent: model comparison, traces, evaluation, and cost visibility.',
    repositoryUrl: null,
  },
  {
    sequence: 3,
    name: 'Multi-Agent AI Orchestration Platform',
    phase: 'Agents, MCP & developer intelligence',
    status: 'planned',
    intent: 'Roadmap intent: explicit orchestration, approvals, checkpointing, and recovery.',
    repositoryUrl: null,
  },
  {
    sequence: 4,
    name: 'MCP Server & AI Tool Ecosystem',
    phase: 'Agents, MCP & developer intelligence',
    status: 'planned',
    intent: 'Roadmap intent: authorized tools, resources, prompts, and client integration.',
    repositoryUrl: null,
  },
  {
    sequence: 5,
    name: 'AI-Powered Developer Copilot',
    phase: 'Agents, MCP & developer intelligence',
    status: 'planned',
    intent: 'Roadmap intent: traceable repository analysis and review workflows.',
    repositoryUrl: null,
  },
  {
    sequence: 6,
    name: 'Enterprise Java Microservices Platform',
    phase: 'Java & event-driven systems',
    status: 'planned',
    intent: 'Roadmap intent: Java, Spring, secure service boundaries, and resilient messaging.',
    repositoryUrl: null,
  },
  {
    sequence: 7,
    name: 'AI-Powered Customer Support Platform',
    phase: 'Java & event-driven systems',
    status: 'planned',
    intent: 'Roadmap intent: an AI-assisted support workflow on enterprise service foundations.',
    repositoryUrl: null,
  },
  {
    sequence: 8,
    name: 'Real-Time Analytics Intelligence Platform',
    phase: 'Java & event-driven systems',
    status: 'planned',
    intent: 'Roadmap intent: event contracts, streaming analytics, and operational visibility.',
    repositoryUrl: null,
  },
  {
    sequence: 9,
    name: 'Kubernetes-Based Application Deployment Platform',
    phase: 'Platform & product depth',
    status: 'planned',
    intent: 'Roadmap intent: infrastructure, deployment, health, scaling, and rollback evidence.',
    repositoryUrl: null,
  },
  {
    sequence: 10,
    name: 'Intelligent E-Commerce Microservices Platform',
    phase: 'Platform & product depth',
    status: 'planned',
    intent: 'Roadmap intent: event-driven order and inventory workflows with sandbox payments.',
    repositoryUrl: null,
  },
  {
    sequence: 11,
    name: 'Enterprise API Management Platform',
    phase: 'Platform & product depth',
    status: 'planned',
    intent: 'Roadmap intent: API lifecycle, quotas, analytics, and developer onboarding.',
    repositoryUrl: null,
  },
  {
    sequence: 12,
    name: 'AI-Powered Enterprise Document Automation',
    phase: 'Platform & product depth',
    status: 'planned',
    intent: 'Roadmap intent: document classification, extraction, approval, and search.',
    repositoryUrl: null,
  },
  {
    sequence: 13,
    name: 'AI Resume & Interview Intelligence Platform',
    phase: 'Domain products & integration',
    status: 'planned',
    intent: 'Roadmap intent: privacy-aware career workflows with explicit data controls.',
    repositoryUrl: null,
  },
  {
    sequence: 14,
    name: 'AI-Powered Financial Intelligence Dashboard',
    phase: 'Domain products & integration',
    status: 'planned',
    intent: 'Roadmap intent: synthetic finance data, forecasting, and stated model limits.',
    repositoryUrl: null,
  },
  {
    sequence: 15,
    name: 'AI Full-Stack Engineering Command Center',
    phase: 'Domain products & integration',
    status: 'planned',
    intent: 'Roadmap intent: integrate only stable, authenticated APIs from earlier work.',
    repositoryUrl: null,
  },
] as const

export const operatingPrinciples = [
  {
    number: '01',
    title: 'Evidence before adjectives',
    detail:
      'Release tags, source, CI runs, and measured checks carry the claim. Plans are never presented as shipped systems.',
  },
  {
    number: '02',
    title: 'Own the trust boundary',
    detail:
      'Identity, per-user isolation, HttpOnly cookies, secret scanning, and safe configuration are part of the engineering surface.',
  },
  {
    number: '03',
    title: 'Test the assembled path',
    detail:
      'Unit checks are paired with image builds and a PostgreSQL end-to-end smoke test to exercise integration boundaries.',
  },
  {
    number: '04',
    title: 'Operate what is built',
    detail:
      'Migrations, metrics, and structured logs are designed alongside product behavior—not added as portfolio decoration.',
  },
] as const

export const projectCounts = roadmap.reduce(
  (counts, project) => {
    counts[project.status] += 1
    return counts
  },
  { released: 0, planned: 0 },
)
