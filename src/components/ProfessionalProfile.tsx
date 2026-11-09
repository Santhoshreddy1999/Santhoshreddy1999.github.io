import { career, links, resumeImpact } from '../data/portfolio'
import { ArrowUpRightIcon, CheckIcon } from './Icons'

export function ProfessionalProfile() {
  return (
    <section className="professional-section section-shell" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <div className="section-eyebrow"><span aria-hidden="true" />01 / Professional profile</div>
        <div className="section-heading-copy">
          <h2 id="experience-title">Enterprise delivery.<span> AI-forward direction.</span></h2>
          <p>Resume-sourced professional history adds context to the public engineering proof. Metrics below are explicitly labeled as resume-reported rather than repository-verified.</p>
        </div>
      </div>

      <div className="professional-overview">
        <figure className="profile-portrait">
          <img src="/assets/santhosh-reddy.jpg" alt="Santhosh Reddy wearing a black shirt" width="450" height="992" loading="lazy" />
          <figcaption><span>Santhosh Reddy Aramadaka</span><small>Bangalore, India</small></figcaption>
        </figure>
        <div className="profile-narrative">
          <span className="status-label status-existing"><span aria-hidden="true" />4+ years · resume profile</span>
          <h3>Full-stack foundations built in enterprise product teams.</h3>
          <p>Since September 2022, Santhosh has worked across Angular architecture, Java and Spring Boot services, Python SDK utilities, testing, API integration, and operational delivery. The next layer is deliberate: combining that full-stack depth with grounded AI systems, tool protocols, evaluation, and secure delivery.</p>
          <div className="profile-actions">
            <a className="button button-primary" href={links.resume}>View public resume<ArrowUpRightIcon /></a>
            <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn profile<ArrowUpRightIcon /></a>
          </div>
          <div className="resume-impact" aria-label="Resume-reported professional impact">
            {resumeImpact.map((impact) => (
              <article key={impact.label}><strong>{impact.value}</strong><span>{impact.label}</span><small>{impact.context}</small></article>
            ))}
          </div>
        </div>
      </div>

      <div className="career-timeline">
        {career.map((entry, index) => (
          <article key={`${entry.organization}-${entry.role}`} className="career-entry">
            <div className="career-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
            <div className="career-meta"><span>{entry.period}</span><small>{entry.location}</small></div>
            <div className="career-content">
              <p>{entry.organization}</p><h3>{entry.role}</h3><div>{entry.summary}</div>
              <ul>{entry.highlights.map((highlight) => <li key={highlight}><CheckIcon /><span>{highlight}</span></li>)}</ul>
              <div className="career-tech" aria-label={`${entry.role} technologies`}>
                {entry.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="education-line"><span>Education</span><strong>B.Tech · Computer Science Engineering</strong><p>Lovely Professional University · 2018–2022</p></div>
    </section>
  )
}
