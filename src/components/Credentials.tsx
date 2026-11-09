import { credential } from '../data/portfolio'
import { ArrowUpRightIcon, CheckIcon, ShieldIcon } from './Icons'

export function Credentials() {
  return (
    <section className="credentials-section section-shell" id="credentials" aria-labelledby="credentials-title">
      <div className="section-heading">
        <div className="section-eyebrow"><span aria-hidden="true" />07 / Verified credential</div>
        <div className="section-heading-copy">
          <h2 id="credentials-title">Protocol knowledge.<span> Verifiable source.</span></h2>
          <p>Certification claims follow the same evidence rule as project claims: correct title, issuing organization, date, certificate number, and a public verification path.</p>
        </div>
      </div>
      <div className="credential-layout">
        <a className="certificate-preview" href={credential.verificationUrl} target="_blank" rel="noreferrer" aria-label={`Verify ${credential.title} certificate`}>
          <img src={credential.image} alt={`Anthropic certificate of completion for ${credential.title}`} width="1024" height="795" loading="lazy" />
          <span>Open independent verification<ArrowUpRightIcon /></span>
        </a>
        <article className="credential-detail">
          <span className="status-label status-released"><span aria-hidden="true" />Independently verifiable</span>
          <div className="credential-issuer"><ShieldIcon /><span>{credential.issuer}</span></div>
          <h3>{credential.title}</h3>
          <dl>
            <div><dt>Issued</dt><dd>{credential.issued}</dd></div>
            <div><dt>Certificate</dt><dd>{credential.certificateNumber}</dd></div>
            <div><dt>Focus</dt><dd>MCP concepts, client/server boundaries, tools, resources, and prompts</dd></div>
          </dl>
          <div className="credential-actions">
            <a className="button button-primary" href={credential.verificationUrl} target="_blank" rel="noreferrer">Verify credential<ArrowUpRightIcon /></a>
            <a className="button button-secondary" href={credential.pdf}>Open certificate PDF<ArrowUpRightIcon /></a>
          </div>
          <div className="credential-integrity"><CheckIcon /><p>The supplied certificate verifies <strong>Introduction to Model Context Protocol</strong>. The portfolio does not repeat the unsupported “Advanced Topics” label found in some resume drafts.</p></div>
        </article>
      </div>
    </section>
  )
}
