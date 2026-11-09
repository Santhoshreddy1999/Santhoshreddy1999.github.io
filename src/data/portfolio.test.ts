import { describe, expect, it } from 'vitest'
import { career, credential, evidence, links, projectCounts, roadmap } from './portfolio'

describe('truthful portfolio data', () => {
  it('contains exactly one released project and fourteen planned projects', () => {
    expect(roadmap).toHaveLength(15)
    expect(projectCounts).toEqual({ released: 1, planned: 14 })
    expect(roadmap.filter((project) => project.status === 'released')).toHaveLength(1)
    expect(roadmap.filter((project) => project.status === 'planned')).toHaveLength(14)
  })

  it('never assigns a repository or implementation wording to planned projects', () => {
    const plannedProjects = roadmap.filter((project) => project.status === 'planned')

    for (const project of plannedProjects) {
      expect(project.repositoryUrl).toBeNull()
      expect(project.intent).toMatch(/^Roadmap intent:/)
    }
  })

  it('links the sole released project to the verified flagship source', () => {
    const releasedProject = roadmap.find((project) => project.status === 'released')

    expect(releasedProject).toBeDefined()
    expect(releasedProject?.sequence).toBe(1)
    expect(releasedProject?.repositoryUrl).toBe(links.flagship)
  })

  it('keeps all sequence positions unique and complete', () => {
    const sequences = roadmap.map((project) => project.sequence)

    expect(new Set(sequences).size).toBe(15)
    expect(sequences).toEqual(Array.from({ length: 15 }, (_, index) => index + 1))
  })

  it('keeps quantitative quality claims linked to public evidence', () => {
    expect(evidence).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ value: '31 passing', href: links.releaseCi }),
        expect.objectContaining({ value: '87%', href: links.releaseCi }),
        expect.objectContaining({ value: '6 required checks', href: links.releaseCi }),
        expect.objectContaining({ value: 'v0.1.0', href: links.release }),
      ]),
    )
  })

  it('uses only approved public, contact, and same-origin surfaces', () => {
    const approvedHosts = new Set(['github.com', 'www.linkedin.com', 'verify.skilljar.com'])
    for (const href of Object.values(links)) {
      if (href.startsWith('/')) {
        expect(href).not.toContain('..')
        continue
      }
      if (href.startsWith('mailto:')) {
        expect(href).toBe('mailto:a.santhoshreddy1999@gmail.com')
        continue
      }
      const url = new URL(href)
      expect(url.protocol).toBe('https:')
      expect(approvedHosts.has(url.hostname)).toBe(true)
    }
  })

  it('keeps professional and credential claims bounded to supplied evidence', () => {
    expect(career).toHaveLength(2)
    expect(career[0]).toMatchObject({ organization: 'Tektronix', period: 'Sep 2022 — Present' })
    expect(credential).toMatchObject({ title: 'Introduction to Model Context Protocol', issuer: 'Anthropic', certificateNumber: '2dfxmrwax6wk' })
    expect(credential.title).not.toMatch(/Advanced Topics/i)
  })
})
