import './App.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Design Systems',
  'UX Strategy',
  'API Design',
  'Testing',
  'Performance',
]

const roles = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Northstar Studio',
    period: '2022 — Present',
    description:
      'Led product architecture for client-facing platforms, shipped accessible design systems, and partnered with product teams to turn research into high-converting experiences.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Signal Forge',
    period: '2019 — 2022',
    description:
      'Built internal tools, dashboards, and marketing sites that improved delivery speed while scaling analytics and customer onboarding workflows.',
  },
  {
    title: 'Product Designer / Developer',
    company: 'Freelance',
    period: '2016 — 2019',
    description:
      'Worked with founders to design and ship MVPs across SaaS, e-commerce, and service businesses with a focus on clarity, performance, and conversion.',
  },
]

const projects = [
  {
    name: 'Atlas Commerce',
    type: 'B2B commerce platform',
    summary:
      'A modular storefront with personalized buyer journeys, order management, and analytics-driven merchandising.',
    stack: ['React', 'Node', 'Postgres'],
  },
  {
    name: 'Pulse Board',
    type: 'Operations dashboard',
    summary:
      'A KPI dashboard used by cross-functional teams to align roadmap progress, customer health, and delivery signals.',
    stack: ['TypeScript', 'Charting', 'REST APIs'],
  },
  {
    name: 'Northwind Labs',
    type: 'Brand + product experience',
    summary:
      'A research-driven marketing site that blended editorial storytelling with product storytelling for a new AI platform.',
    stack: ['Next.js', 'Motion', 'CMS'],
  },
]

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
            <p className="eyebrow">Developer • Designer • Problem Solver</p>
            <h1>Building thoughtful digital products with clarity and momentum.</h1>
            <p className="lede">
              I’m Alex, a product-minded frontend engineer helping teams turn ambitious ideas into intuitive, high-performing experiences.
            </p>

            <div className="cta-row">
              <a href="#work" className="primary-button">
                View projects
              </a>
              <a href="#about" className="secondary-button">
                About me
              </a>
            </div>

            <ul className="meta-list" aria-label="Quick facts">
              <li>8+ years building products</li>
              <li>Available for select projects</li>
              <li>Based in Seattle, WA</li>
            </ul>
          </div>

          <div className="profile-panel" aria-label="Profile summary panel">
            <div className="profile-avatar">AS</div>
            <div className="panel-card">
              <span className="panel-label">Currently</span>
              <strong>Senior Frontend Engineer</strong>
              <small>Leading product experiences for B2B and SaaS teams.</small>
            </div>
            <div className="stats-grid">
              <div>
                <strong>40+</strong>
                <span>launches</span>
              </div>
              <div>
                <strong>12</strong>
                <span>industries</span>
              </div>
              <div>
                <strong>99%</strong>
                <span>client retention</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <p className="section-kicker">01 / About</p>
            <h2>Designing software that feels human.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I work at the intersection of engineering, design, and strategy. My approach is grounded in product thinking: understanding the user problem first, then crafting interfaces that are beautiful, accessible, and reliable.
              </p>
              <p>
                From early-stage MVPs to scalable platform work, I help teams move from ideas to polished products with a focus on measurable outcomes and a smooth user experience.
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
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-header">
            <p className="section-kicker">03 / Selected work</p>
            <h2>Recent product work and experiments.</h2>
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
              <a href="mailto:alex@portfolio.dev">alex@portfolio.dev</a>
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
