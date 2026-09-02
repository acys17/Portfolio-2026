import './App.css'
import { navItems, skills, roles, projects } from './data'

// TODO: Reusable components
// TODO: Add CV download link

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Go to home section">
          AS
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="contact-button" href="#contact">
          Let&apos;s talk
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Developer • Problem Solver</p>
            <h1>Building responsive, accessible digital products and data-driven user experiences.</h1>
            <p className="lede">
              I’m Alice, a product-minded software engineer specialising in React, TypeScript, JavaScript (ES6+), and modern AWS cloud architecture.
            </p>

            <div className="cta-row">
              <a href="#projects" className="primary-button">
                View projects
              </a>
              <a href="#about" className="secondary-button">
                About me
              </a>
            </div>

            <ul className="meta-list" aria-label="Quick facts">
              <li>4+ years building products</li>
              <li>Based in London</li>
            </ul>
          </div>

          <div className="profile-panel" aria-label="Profile summary panel">
            <div className="profile-avatar">AS</div>
            <div className="panel-card">
              <span className="panel-label">Currently</span>
              <strong>Software Developer</strong>
              <small>Leading product experiences for B2B and SaaS teams.</small>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <p className="section-kicker">01 / About</p>
            <h2>A bit about me</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am an analytical, outcome-driven Software Engineer with over 4 years of commercial experience creating fast, reliable web applications. My background combines modern frontend delivery using React, TypeScript, and Redux with full-stack capability in Node.js, PHP, and AWS cloud services.
              </p>
              <p>
                Prior to software engineering, I earned a degree in Zoology (where I first fell in love with logic and statistical data analysis using R) and served as a Police Constable in London, developing high-pressure problem-solving and communication skills. Today, I apply that same discipline to clean code, TDD, and full-cycle feature delivery.                
              </p>
            </div>

            <div className="skills-card">
              <h3>Toolkit</h3>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <p className="section-kicker">03 / Selected work</p>
            <h2>Recent projects.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-visual" aria-hidden="true" />
                <div className="project-copy">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="stack-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header">
            <p className="section-kicker">02 / Experience</p>
            <h2>Building products across teams and stages.</h2>
          </div>

          <div className="timeline">
            {roles.map((role) => (
              <article key={role.title} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-heading">
                    <h3>{role.title}</h3>
                    <span>{role.period}</span>
                  </div>
                  <p className="company-name">{role.company}</p>
                  {Array.isArray(role.description) ? (
                    <ul className="role-bullets">
                      {role.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{role.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <p className="section-kicker">04 / Contact</p>
            <h2>Let&apos;s build something useful.</h2>
          </div>

          <div className="contact-card">
            <p>
              I&apos;m open to consulting, product partnerships, and full-time opportunities where thoughtful execution matters.
            </p>
            <div className="contact-links">
              <a href="mailto:alice.cy.scott@gmail.com">alice.cy.scott@gmail.com</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
